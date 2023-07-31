import { Button, notification } from "antd";
import { FormEvent, useState } from "react";
import { registerApi } from "../../services/user.service";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [api, contextHolder] = notification.useNotification();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await registerApi(email, password);
    } catch (error: any) {
      api.error({ message: "Error", description: error.response.data.message });
    }
  };

  return (
    <>
      <>{contextHolder}</>
      <h3>Register</h3>
      <form className="register-form" onSubmit={handleSubmit}>
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
        <button type="submit">Sign Up</button>
      </form>
      <Button href="/">Login</Button>
    </>
  );
}

export default Register;
