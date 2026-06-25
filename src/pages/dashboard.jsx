import React from "react";
import MainLayout from "../components/Layouts/MainLayout";

import CardBalance from "../components/Fragments/CardBalance.jsx";
import CardGoal from "../components/Fragments/CardGoal.jsx";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill.jsx";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction.jsx";
import CardStatistics from "../components/Fragments/CardStatistics.jsx";
import CardExpensesBreakdown from "../components/Fragments/CardExpensesBreakdown.jsx";

import { transactions, bills, expensesBreakdowns } from "../data";

function Dashboard() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
        <div className="sm:col-span-4 h-[170px]">
          <CardBalance />
        </div>

        <div className="sm:col-span-4 h-[170px]">
          <CardGoal />
        </div>

        <div className="sm:col-span-4 h-[170px]">
          <CardUpcomingBill data={bills} />
        </div>

        <div className="sm:col-span-4 h-[494px]">
          <CardRecentTransaction data={transactions} />
        </div>

        <div className="sm:col-span-8 flex flex-col gap-6">
          <div className="h-[220px]">
            <CardStatistics />
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