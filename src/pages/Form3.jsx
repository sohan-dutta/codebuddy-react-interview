import Form from 'react-bootstrap/Form';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const Form3 = ({ form, setForm, validated }) => (
  <Form validated={validated}>
    <DropdownButton size="sm" variant="outline-secondary" title="Counry Code">
      <Dropdown.Item onClick={() => setForm({ ...form, countryCode: '+91' })}>+91</Dropdown.Item>
      <Dropdown.Item onClick={() => setForm({ ...form, countryCode: '+1' })}>+1</Dropdown.Item>
    </DropdownButton>
    {form.countryCode}

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control
        type="text"
        placeholder="Phone Number"
        value={form.phoneNumber}
        onChange={e => {
          if (e.target.value.match(/^[0-9]*$/)) setForm({ ...form, phoneNumber: e.target.value });
        }}
      />
    </Form.Group>
    <Form.Check
      label="I accept the terms and conditions"
      onChange={e => {
        setForm({ ...form, acceptTerms: e.target.checked });
      }}
    />
  </Form>
);
export default Form3;
