import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { loginService } from "../services/authService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function SignInPage() {
  const navigate = useNavigate();
  const { login } = React.useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleLogin = async (email, password) => {
    try {
      const result = await loginService(email, password);

      console.log(result);

      const token = result.refreshToken || result.token;

      localStorage.setItem("token", token);
      login(token);

      navigate("/");
    } catch (err) {
      setSnackbar({
        open: true,
        message: err?.msg || err?.message || "Login gagal",
        severity: "error",
      });
    }
  };

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}

export default SignInPage;