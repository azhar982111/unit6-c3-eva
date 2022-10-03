import { createContext, useState } from "react";

// CPC
export const AuthContext = createContext();

// Provide - 1

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (emailRef, passwordRef) => {
    let data = {

      "email": emailRef,
      "password": passwordRef
    }
    setIsLoading(true)
    const res = fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => res.json())
      .then((res) => {
        setToken(res.token)
        setIsAuth(true)
        console.log(res)
      })
      .catch((err) => {setIsError(true)
      setIsAuth(false)})
      .finally(() => setIsLoading(false));
  };

  return (
    <AuthContext.Provider value={{ isAuth, handleLogin, token, isError, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
