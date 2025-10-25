import { Plus } from "lucide-react";

export interface Transaction {
  id: number;
  type: "income" | "expense";
  amount: number;
  category: string;
  date: string;
  memo: string;
}

export interface FormData {
  type: "income" | "expense";
  amount: string;
  category: string;
  date: string;
  memo: string;
}

interface TransactionFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function TransactionForm({
  formData,
  setFormData,
  onSubmit,
}: TransactionFormProps) {
  const expenseCategories = [
    "식비",
    "교통비",
    "생활비",
    "의료비",
    "교육비",
    "문화생활",
    "기타",
  ];
  const incomeCategories = ["급여", "부수입", "용돈", "기타"];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Plus className="w-5 h-5" />새 내역 추가
      </h2>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            유형
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  type: "expense",
                  category: "",
                })
              }
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                formData.type === "expense"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              지출
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  type: "income",
                  category: "",
                })
              }
              className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                formData.type === "income"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              수입
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            금액
          </label>
          <input
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            placeholder="금액을 입력하세요"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            카테고리
          </label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">선택하세요</option>
            {(formData.type === "expense"
              ? expenseCategories
              : incomeCategories
            ).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            날짜
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            메모
          </label>
          <input
            type="text"
            value={formData.memo}
            onChange={(e) =>
              setFormData({ ...formData, memo: e.target.value })
            }
            placeholder="메모 (선택사항)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          추가하기
        </button>
      </form>
    </div>
  );
}