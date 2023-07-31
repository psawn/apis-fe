import { Button, notification } from "antd";
import { FormEvent, useState } from "react";
import { loginApi } from "../../services/user.service";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  // const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await loginApi(email, password);
      localStorage.clear();
      localStorage.setItem("user-token", result.data.data.accessToken);
      navigate("/profile");
    } catch (error: any) {
      api.error({ message: "Error", description: error.response.data.message });
    }
  };

  return (
    <>
      {/* {errorMessage && (
        <Alert
          message={errorMessage}
          type="error"
          closable
          onClose={() => setErrorMessage("")}
        />
      )} */}
      <>{contextHolder}</>
      <h3>Login</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        ></input>
        <button type="submit">Login In</button>
      </form>
      <Button href="/register">Create an account</Button>
    </>
  );
}

export default Login;
