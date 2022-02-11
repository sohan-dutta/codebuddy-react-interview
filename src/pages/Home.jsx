import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

const Home = () => {
  const history = useHistory();
  const [form, setForm] = useState(1);
  const [error, setError] = useState('');
  const [form1, setForm1] = useState({
    email: '',
    password: '',
    valid: false,
  });
  const [form2, setForm2] = useState({
    firstName: '',
    lastName: '',
    address: '',
    valid: false,
  });
  const [form3, setForm3] = useState({
    countryCode: '',
    phoneNumber: '',
    acceptTerms: false,
    valid: false,
  });

  const forms = {
    1: <Form1 form={form1} setForm={setForm1} validated={form1.valid} />,
    2: <Form2 form={form2} setForm={setForm2} validated={form2.valid} />,
    3: <Form3 form={form3} setForm={setForm3} validated={form3.valid} />,
  };

  const validateForm1 = () => {
    const emailRegex = new RegExp(/.+@.+\..+/);
    if (form1.email && form1.email.match(emailRegex) && form1.password) {
      setForm1({ ...form1, valid: true });
      return true;
    }

    setError('Incorrect Email or password');
    setForm1({ ...form1, valid: false });
    return false;
  };

  const validateForm2 = () => {
    if (
      form2.firstName &&
      form2.firstName.length > 2 &&
      form2.firstName.length <= 50 &&
      form2.address &&
      form2.address.length <= 10
    ) {
      setForm2({ ...form2, valid: true });
      return true;
    }

    setError('Incorrect form2 values');
    setForm2({ ...form2, valid: false });
    return false;
  };

  const validateForm3 = () => {
    if (
      form3.acceptTerms &&
      form3.phoneNumber &&
      form3.phoneNumber.length === 10 &&
      form3.countryCode
    ) {
      setForm3({ ...form3, valid: true });
      return true;
    }

    setError('Incorrect form3 values');
    setForm3({ ...form3, valid: false });
    return false;
  };

  const validateForm = {
    1: validateForm1,
    2: validateForm2,
    3: validateForm3,
  };

  async function postData() {
    try {
      const rawResponse = await fetch('https://codebuddy.review/submit', {
        method: 'POST',
        body: JSON.stringify({
          'emailId': form1.email,
          'password': form1.password,
          'firstName': form2.firstName,
          'lastName': form2.lastName,
          'address': form2.address,
          'countryCode': form3.countryCode,
          'phoneNumber': form3.phoneNumber,
        }),
      });
      await rawResponse.json();
      history.push('/posts');
    } catch (e) {
      setError(e);
    }
  }

  const handleNext = async (next = false) => {
    setError('');
    const valid = validateForm[form]();
    if (valid) {
      if (form === 3) {
        postData();
      } else if (next) setForm(form + 1);
    }
  };

  return (
    <main>
      <Jumbotron>
        <h1>Login Form</h1>
        <p>Step {form}</p>
      </Jumbotron>
      <Container>
        {forms[form]}
        {error && (
          <Row>
            <Col style={{ color: 'red' }}>{error}</Col>
          </Row>
        )}
        <Row className="justify-content-end">
          {form > 1 && (
            <Col xs="auto">
              <Button variant="outline-secondary" onClick={() => setForm(form - 1)}>
                Previous
              </Button>
            </Col>
          )}
          <Col xs="auto">
            <Button variant="outline-primary" onClick={handleNext}>
              Save
            </Button>
          </Col>
          {form < 3 && (
            <Col xs="auto">
              <Button variant="outline-primary" onClick={() => handleNext(true)}>
                Save & Next{' '}
              </Button>
            </Col>
          )}
          {form === 3 && (
            <Col xs="auto">
              <Button variant="primary" onClick={handleNext}>
                Submit
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </main>
  );
};

export default Home;
