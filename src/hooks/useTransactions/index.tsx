import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext
} from "react";
import { api } from "../../services/api";

const TransactionsContext = createContext<ITransactionContextData>(
  {} as ITransactionContextData
);

interface ITransaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: Date;
}

// Maneiras de

// interface ITransactionInput {
//   title: string;
//   type: string;
//   category: string;
//   amount: number;
// }

// type TransactionInput = Omit<ITransaction, "id" | "createdAt">;

type TransactionInput = Pick<
  ITransaction,
  "title" | "amount" | "type" | "category"
>;

interface ITransactionsProviderProps {
  children: ReactNode;
}

interface ITransactionContextData {
  transactions: ITransaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export function TransactionsProvider({ children }: ITransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date()
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }
  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}
