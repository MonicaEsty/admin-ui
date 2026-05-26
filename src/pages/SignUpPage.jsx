import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";

function SignUpPage() {
  return (
    <AuthLayout
      title="Create an account"
    >
      <FormSignUp />
    </AuthLayout>
  );
}

export default SignUpPage;