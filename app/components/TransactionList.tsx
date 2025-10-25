import { Calendar, Wallet } from "lucide-react";
import { Transaction } from "./TransactionForm";
import TransactionItem from "./TransactionItem";

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: number) => void;
  formatCurrency: (amount: number) => string;
}

export default function TransactionList({
  transactions,
  onDeleteTransaction,
  formatCurrency,
}: TransactionListProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Calendar className="w-5 h-5" />
        거래 내역
      </h2>

      <div className="space-y-3 max-h-[600px] overflow-y-auto">
        {transactions.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Wallet className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            <p>아직 거래 내역이 없습니다</p>
            <p className="text-sm">새로운 수입이나 지출을 추가해보세요!</p>
          </div>
        ) : (
          transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={onDeleteTransaction}
              formatCurrency={formatCurrency}
            />
          ))
        )}
      </div>
    </div>
  );
}