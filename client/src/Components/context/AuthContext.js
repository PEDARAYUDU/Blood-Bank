// import axios from "axios";
// import React, { createContext, useEffect, useState } from "react";

// const AuthContext = createContext();

// function AuthContextProvider(props) {
//   const [loggedIn, setLoggedIn] = useState(undefined);
//   const [user, setUser] = useState([]);

//   async function getLoggedIn() {
//     const loggedInRes = await axios.get("http://localhost:3000/auth/loggedIn", { withCredentials: true });
//     setLoggedIn(loggedInRes.data.auth);
//     setUser(loggedInRes.data.user);
//   }

//   useEffect(() => {
//     getLoggedIn();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ loggedIn, user, getLoggedIn }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthContext;
// export { AuthContextProvider };


import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getLoggedIn() {
    try {
      const loggedInRes = await axios.get(`${process.env.REACT_APP_API_URL}/auth/loggedIn`, { withCredentials: true });
      
      setLoggedIn(loggedInRes.data.auth);
      setUser(loggedInRes.data.user);
    } catch (error) {
      console.error("Error checking authentication status:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  if (loading) {
    // You can render a loading indicator while checking authentication status
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ loggedIn, user, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };

