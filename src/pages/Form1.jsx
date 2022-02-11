import Form from 'react-bootstrap/Form';

const Form1 = ({ form, setForm, validated }) => (
  <Form validated={validated}>
    <Form.Group required className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
    </Form.Group>

    <Form.Group required className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
      />
    </Form.Group>
  </Form>
);
export default Form1;
