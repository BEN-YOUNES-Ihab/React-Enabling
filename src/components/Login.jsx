import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color:#f0f2f5;
`;

const Card = styled.div`
  width: 400px;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 16px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: aquamarine;
  color: #333;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background-color: #6ADDB7;
  }
`;
const Error = styled.div`
  color: red;
  margin-top:5px;
`;
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [err, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    if(username === "Admin" && password === "Admin"){
        localStorage.setItem("role", "Admin");
        navigate('/Home');
    }else if (username === "User" && password === "User"){
        localStorage.setItem("role", "User");
        navigate('/Home');
    }else{
        setError("impossible!")
    }
    
  };

  return (
    <LoginWrapper>
      <Card>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <Button type="submit">Login</Button>
          <Error>{err}</Error>
        </Form>
      </Card>
    </LoginWrapper>
  );
};

export default Login;
