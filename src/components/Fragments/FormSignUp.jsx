import React from "react";
import { Link } from "react-router-dom";

import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";

function FormSignUp() {
  return (
    <>
      {/* form start */}
      <div className="mt-10">
        <form action="">
          <div className="mb-6">
            <LabeledInput
              label="Name"
              id="name"
              type="text"
              placeholder="Tanzir Rahman"
              name="name"
            />
          </div>

          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>

          <div className="mb-2">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="********"
              name="password"
            />
          </div>

          <p className="text-xs text-gray-400 mb-6">
            By continuing, you agree to our
            <span className="text-primary">
              {" "}terms of service.
            </span>
          </p>

          <Button type="submit">
            Sign up
          </Button>
        </form>
      </div>

      {/* teks start */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-400 relative">
        <div className="border border-gray-200 w-full"></div>

        <div className="px-2 bg-special-mainBg absolute">
          or sign up with
        </div>
      </div>

      {/* google button */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
            Continue with Google
          </span>
        </Button>
      </div>

      {/* link start */}
      <div className="flex justify-center text-sm text-gray-500">
        Already have an account?&nbsp;

        <Link
          to="/sign-in"
          className="text-primary font-bold"
        >
          Sign in here
        </Link>
      </div>
      {/* link end */}
    </>
  );
}

export default FormSignUp;