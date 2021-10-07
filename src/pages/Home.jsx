import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const onSubmit = () => history.push('/posts');

  return (
    <main>
      <Jumbotron>
        <h1>React + Bootstrap v4</h1>
        <p>React template with Bootstrap version v4</p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Container>
        <Form>
          <Button onClick={onSubmit}>Goto Posts</Button>
        </Form>
      </Container>
    </main>
  );
};

export default Home;
