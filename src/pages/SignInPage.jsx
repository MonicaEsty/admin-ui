import React from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";

function SignInPage() {
  const navigate = useNavigate();
  const { login } = React.useContext(AuthContext);

  const handleLogin = async (email, password) => {
    try {
      const result = await loginService(email, password);

      console.log(result);

      const token = result.refreshToken;

      localStorage.setItem("token", token);
      login(token);

      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err?.msg || "Login gagal");
    }
  };

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />
    </AuthLayout>
  );
}

export default SignInPage;