"use client";

import { useState } from "react";
import { Wallet } from "lucide-react";
import SummaryCards from "./components/SummaryCards";
import TransactionForm, { Transaction, FormData } from "./components/TransactionForm";
import CategoryStats from "./components/CategoryStats";
import TransactionList from "./components/TransactionList";

export default function BudgetApp() {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: 1,
      type: "income",
      amount: 3000000,
      category: "급여",
      date: "2025-10-01",
      memo: "월급",
    },
    {
      id: 2,
      type: "expense",
      amount: 150000,
      category: "식비",
      date: "2025-10-05",
      memo: "마트 장보기",
    },
    {
      id: 3,
      type: "expense",
      amount: 50000,
      category: "교통비",
      date: "2025-10-10",
      memo: "유류비",
    },
  ]);

  const [formData, setFormData] = useState<FormData>({
    type: "expense",
    amount: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
    memo: "",
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.amount || !formData.category) {
      alert("금액과 카테고리를 입력해주세요!");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      type: formData.type,
      amount: parseInt(formData.amount),
      category: formData.category,
      date: formData.date,
      memo: formData.memo,
    };

    setTransactions([newTransaction, ...transactions]);
    setFormData({
      type: "expense",
      amount: "",
      category: "",
      date: new Date().toISOString().split("T")[0],
      memo: "",
    });
  };

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("ko-KR").format(amount) + "원";
  };

  const getCategoryStats = (): [string, number][] => {
    const stats: { [key: string]: number } = {};
    transactions
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        stats[t.category] = (stats[t.category] || 0) + t.amount;
      });
    return Object.entries(stats).sort((a, b) => b[1] - a[1]) as [string, number][];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <Wallet className="w-10 h-10 text-indigo-600" />
            나의 가계부
          </h1>
          <p className="text-gray-600">똑똑한 돈 관리의 시작</p>
        </div>

        {/* 요약 카드 */}
        <SummaryCards
          totalIncome={totalIncome}
          totalExpense={totalExpense}
          balance={balance}
          formatCurrency={formatCurrency}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 입력 폼 */}
          <div className="lg:col-span-1">
            <TransactionForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
            />

            {/* 카테고리별 통계 */}
            <CategoryStats
              categoryStats={getCategoryStats()}
              totalExpense={totalExpense}
              formatCurrency={formatCurrency}
            />
          </div>

          {/* 거래 내역 */}
          <div className="lg:col-span-2">
            <TransactionList
              transactions={transactions}
              onDeleteTransaction={deleteTransaction}
              formatCurrency={formatCurrency}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
