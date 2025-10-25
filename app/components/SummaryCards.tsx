import { TrendingUp, TrendingDown, Wallet } from "lucide-react";

interface SummaryCardsProps {
  totalIncome: number;
  totalExpense: number;
  balance: number;
  formatCurrency: (amount: number) => string;
}

export default function SummaryCards({
  totalIncome,
  totalExpense,
  balance,
  formatCurrency,
}: SummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 font-medium">총 수입</span>
          <TrendingUp className="w-5 h-5 text-green-500" />
        </div>
        <div className="text-2xl font-bold text-green-600">
          {formatCurrency(totalIncome)}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 font-medium">총 지출</span>
          <TrendingDown className="w-5 h-5 text-red-500" />
        </div>
        <div className="text-2xl font-bold text-red-600">
          {formatCurrency(totalExpense)}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-indigo-500">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 font-medium">잔액</span>
          <Wallet className="w-5 h-5 text-indigo-500" />
        </div>
        <div
          className={`text-2xl font-bold ${
            balance >= 0 ? "text-indigo-600" : "text-red-600"
          }`}
        >
          {formatCurrency(balance)}
        </div>
      </div>
    </div>
  );
}