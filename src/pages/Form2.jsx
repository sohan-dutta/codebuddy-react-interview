import Form from 'react-bootstrap/Form';

const Form2 = ({ form, setForm, validated }) => (
  <Form validated={validated}>
    <Form.Group required className="mb-3" controlId="formBasicEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter firstname"
        value={form.firstName}
        onChange={e => {
          if (e.target.value.match(/^[a-z A-Z]*$/)) setForm({ ...form, firstName: e.target.value });
        }}
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter lastname"
        value={form.lastName}
        onChange={e => {
          if (e.target.value.match(/^[a-z A-Z]*$/)) setForm({ ...form, lastName: e.target.value });
        }}
      />
    </Form.Group>
    <Form.Group required className="mb-3" controlId="formBasicEmail">
      <Form.Label>Address</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter address"
        value={form.address}
        onChange={e => setForm({ ...form, address: e.target.value })}
      />
    </Form.Group>
  </Form>
);
export default Form2;
