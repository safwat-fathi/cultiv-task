import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-flow: column;
  width: 50%;
  margin: 2rem auto;

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Login = () => {
  return (
    <Form>
      <input type="email" placeholder="Enter your email" />
      <input type="password" placeholder="Enter your password" />
      <input onClick={(e) => e.preventDefault()} type="submit" value="Login" />
    </Form>
  );
};

export default Login;
