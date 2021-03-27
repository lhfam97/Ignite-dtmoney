import { useEffect, useState, useContext } from "react";
import { Container } from "./styles";

import { api } from "../../services/api";

import { useTransactions } from "../../hooks/useTransactions";
interface ITransaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: Date;
}

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL"
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-br").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
          {/* <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1100</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$120000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr> */}
        </tbody>
      </table>
    </Container>
  );
}
