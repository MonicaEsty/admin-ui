import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout.jsx";

import CardBalance from "../components/Fragments/CardBalance.jsx";
import CardGoal from "../components/Fragments/CardGoal.jsx";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill.jsx";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction.jsx";
import CardStatistics from "../components/Fragments/CardStatistics.jsx";
import CardExpensesBreakdown from "../components/Fragments/CardExpensesBreakdown.jsx";

import {
  transactions,
  bills,
  expensesBreakdowns,
  balances,
  expensesStatistics,
} from "../data.jsx";

import { goalService } from "../services/dataService.jsx";
import { AuthContext } from "../context/authContext.jsx";

function Dashboard() {
  const [goals, setGoals] = useState({});
  const { logout } = useContext(AuthContext);

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      console.error("Gagal mengambil data goals:", err);

      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  console.log(goals);

  return (
    <MainLayout>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
        <div className="sm:col-span-4 h-[170px]">
          <CardBalance data={balances} />
        </div>

        <div className="sm:col-span-4 h-[170px]">
          <CardGoal data={goals} />
        </div>

        <div className="sm:col-span-4 h-[170px]">
          <CardUpcomingBill data={bills} />
        </div>

        <div className="sm:col-span-4 h-[634px]">
          <CardRecentTransaction data={transactions} />
        </div>

        <div className="sm:col-span-8 flex flex-col gap-6">
          <div className="h-[360px]">
            <CardStatistics data={expensesStatistics} />
          </div>

          <div className="h-[250px]">
            <CardExpensesBreakdown data={expensesBreakdowns} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;