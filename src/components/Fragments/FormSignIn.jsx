import React, { useState } from "react";
import { Link } from "react-router-dom";

import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";

function FormSignIn({ onSubmit }) {
  const [email, setEmail] = useState("hello@example.com");
  const [password, setPassword] = useState("123456");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <>
      {/* form start */}
      <div className="mt-16">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="********"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <CheckBox label="Keep me signed in" id="remember" name="remember" />
          </div>

          <Button type="submit">Login</Button>
        </form>
      </div>
      {/* form end */}

      {/* teks start */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-400 relative">
        <div className="border border-gray-200 w-full"></div>

        <div className="px-2 bg-special-mainbg absolute">
          or sign in with
        </div>
      </div>
      {/* teks end */}

      {/* google button start */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
            Continue with Google
          </span>
        </Button>
      </div>
      {/* google button end */}

      {/* link start */}
      <div className="flex justify-center">
        <Link to="/sign-up" className="text-primary text-sm font-bold">
          Create an account
        </Link>
      </div>
      {/* link end */}
    </>
  );
}

export default FormSignIn;