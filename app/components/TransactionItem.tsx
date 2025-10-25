import { Trash2 } from "lucide-react";
import { Transaction } from "./TransactionForm";

interface TransactionItemProps {
  transaction: Transaction;
  onDelete: (id: number) => void;
  formatCurrency: (amount: number) => string;
}

export default function TransactionItem({
  transaction,
  onDelete,
  formatCurrency,
}: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              transaction.type === "income"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {transaction.category}
          </span>
          <span className="text-sm text-gray-500">{transaction.date}</span>
        </div>
        {transaction.memo && (
          <p className="text-sm text-gray-600">{transaction.memo}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`text-lg font-bold ${
            transaction.type === "income" ? "text-green-600" : "text-red-600"
          }`}
        >
          {transaction.type === "income" ? "+" : "-"}
          {formatCurrency(transaction.amount)}
        </span>
        <button
          onClick={() => onDelete(transaction.id)}
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}