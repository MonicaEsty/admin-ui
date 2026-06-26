import React, { useContext } from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Icon from "../Elements/Icon";
import { NavLink, Link } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";

function MainLayout(props) {
  const { children } = props;
  const { themes, theme, setTheme } = useContext(ThemeContext);

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    {
      id: 3,
      name: "Transaction",
      icon: <Icon.Transaction />,
      link: "/transaction",
    },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  return (
    <div className={`flex min-h-screen h-screen overflow-hidden ${theme.name}`}>
      <aside className="bg-defaultblack w-28 sm:w-64 text-white flex flex-col justify-between px-5 sm:px-7 py-10">
        <div>
          <div className="mb-10">
            <Logo variant="secondary" />
          </div>

          <nav>
            {menu.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                end={item.link === "/"}
                className={({ isActive }) =>
                  `flex items-center w-full px-4 py-3 mb-1 rounded-md text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white font-bold"
                      : "text-white hover:bg-special-bg3"
                  }`
                }
              >
                <div className="mx-auto sm:mx-0 flex items-center">
                  {item.icon}
                </div>

                <div className="ms-3 hidden sm:block">{item.name}</div>
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          <div className="text-sm mb-3 hidden sm:block">Themes</div>

          <div className="flex flex-col sm:flex-row gap-2 items-center mb-6">
            {themes.map((t) => (
              <div
                key={t.name}
                className={`${t.bgcolor} w-6 h-6 rounded-md cursor-pointer mb-2 border ${
                  theme.name === t.name ? "border-white" : "border-gray-500"
                }`}
                onClick={() => setTheme(t)}
              ></div>
            ))}
          </div>
        </div>

        <div>
          <Link
            to="/login"
            className="flex items-center bg-special-bg3 text-white px-4 py-3 rounded-md text-sm"
          >
            <div className="mx-auto sm:mx-0 flex items-center text-primary">
              <Icon.Logout />
            </div>

            <div className="ms-3 hidden sm:block">Logout</div>
          </Link>

          <div className="border-b my-8 border-white"></div>

          <div className="flex justify-between items-center text-sm text-white">
            <div>Avatar</div>

            <div className="hidden sm:block text-center">
              <div>Username</div>
              <div>View Profile</div>
            </div>

            <div className="hidden sm:block">
              <Icon.Detail size={15} />
            </div>
          </div>
        </div>
      </aside>

      <div className="bg-special-mainbg flex-1 flex flex-col overflow-hidden">
        <header className="h-[70px] shrink-0 flex justify-between items-center border-b border-gray-05 px-6">
          <div className="flex items-center">
            <div className="font-bold text-xl me-6">Username</div>

            <div className="text-gray-03 hidden sm:flex items-center gap-1 text-xs">
              <Icon.ChevronRight size={20} />
              <span>May 19, 2023</span>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <button
              type="button"
              className="flex items-center text-primary scale-110"
            >
              <NotificationsIcon sx={{ fontSize: 18 }} />
            </button>

            <Input backgroundColor="bg-white" border="border-white" />
          </div>
        </header>

        <main className="flex-1 h-full px-6 py-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;