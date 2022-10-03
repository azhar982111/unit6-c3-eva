import { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

function Login() {
  const { isAuth, handleLogin, isError, isLoading  } = useContext(AuthContext);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <>
    <Input placeholder='Email' type="email" ref={emailRef}/>
    <br/>
    <Input placeholder='Password' type="password" ref={passwordRef}/>
    <br/>
    <Button colorScheme='blue' onClick={()=>
      handleLogin(emailRef.current.value,passwordRef.current.value)
    }>LOGIN</Button>
    <br/>
    <p>
      {isLoading?"Loading...":isError?"Something went wrong. Please refresh.":""}
    </p>
    </>
  );
}

export default Login;
