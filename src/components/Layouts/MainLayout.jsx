import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";

function MainLayout(props) {
  const { children } = props;

  return (
    <div className="flex min-h-screen">
      <aside className="bg-defaultblack w-28 sm:w-64 text-special-bg2 flex flex-col justify-between px-5 sm:px-7 py-10">
        <div>
          <div className="mb-10">
            <Logo variant="secondary" />
          </div>

          <nav>
            <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md text-sm">
              <div className="mx-auto sm:mx-0">O</div>
              <div className="ms-3 hidden sm:block">Overview</div>
            </div>

            <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md text-sm">
              <div className="mx-auto sm:mx-0">B</div>
              <div className="ms-3 hidden sm:block">Balances</div>
            </div>

            <div className="flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md text-sm">
              <div className="mx-auto sm:mx-0">T</div>
              <div className="ms-3 hidden sm:block">Transactions</div>
            </div>
          </nav>
        </div>

        <div>
          <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md text-sm">
            <div className="mx-auto sm:mx-0">X</div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </div>

          <div className="border-b my-8 border-special-bg2"></div>

          <div className="flex justify-between items-center text-sm">
            <div>Avatar</div>

            <div className="hidden sm:block text-center">
              <div>Username</div>
              <div>View Profile</div>
            </div>

            <div className="hidden sm:block">icon</div>
          </div>
        </div>
      </aside>

      <div className="bg-special-mainbg flex-1 flex flex-col">
        <header className="flex justify-between items-center border-b border-gray-05 px-6 py-5">
          <div className="flex items-center">
            <div className="font-bold text-xl me-6">
              Username
            </div>

            <div className="text-gray-03 hidden">
              May 19, 2023
            </div>
          </div>

          <div className="flex items-center">
            <div className="me-10">icon</div>
            <Input backgroundColor="bg-white" border="border-white" />
          </div>
        </header>

        <main className="flex-1 px-6 py-4">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;