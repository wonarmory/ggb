interface CategoryStatsProps {
  categoryStats: [string, number][];
  totalExpense: number;
  formatCurrency: (amount: number) => string;
}

export default function CategoryStats({
  categoryStats,
  totalExpense,
  formatCurrency,
}: CategoryStatsProps) {
  if (categoryStats.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        카테고리별 지출
      </h3>
      <div className="space-y-3">
        {categoryStats.map(([category, amount]) => (
          <div key={category}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700 font-medium">{category}</span>
              <span className="text-gray-900 font-semibold">
                {formatCurrency(amount)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-500 h-2 rounded-full transition-all"
                style={{ width: `${(amount / totalExpense) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}