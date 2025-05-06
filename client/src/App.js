import React, { useState } from "react";
import AuthPage from "./Pages/Auth";
import Layout from "./Pages/Layout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // This function would be called upon successful login
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="app">
      {isAuthenticated ? (
        <Layout />
      ) : (
        <AuthPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;