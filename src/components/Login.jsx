import { useFormik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
import { validateSchema } from "../validation/loginFormValidation";
import { loginData } from "../utils/logindata";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      role: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      const user = loginData.find(
        (el) =>
          el.email === values.email &&
          el.password === values.password ||
          el.role === values.role
      );
      if (user) {
        localStorage.setItem("token", "ikdinlk2299@343er");
        localStorage.setItem("role",user.role)
        navigate(user.navigate);
      }
    },
  });
  return (
    <Container>
      <div className="login-form">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-field mb-3">
            <Form.Control
              id="username"
              name="email"
              type="text"
              placeholder="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? formik.errors.email : ""}
          </div>
          <div className="form-field mb-3">
            <Form.Control
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? formik.errors.password : ""}
          </div>
          <div className="form-field mb-3">
            <Button type="submit">login</Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
