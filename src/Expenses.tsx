import { Button, TextInput, Text, Flex } from "@mantine/core";
import { useEffect, useState } from "react";

export const Expenses = ({ setValue }: { setValue: number }) => {
  interface IExpenseData {
    label: string;
    amount: number;
    id: number;
  }
  const [label, setLabel] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [expenseData, setExpenseData] = useState<IExpenseData[]>([]);

  useEffect(() => {
    const totalAmount = expenseData.reduce((accumulator, currentItem) => {
      const current = currentItem.amount | 0;
      return accumulator + current;
    }, 0);
    setValue(totalAmount);
  });

  const addExpense = () => {
    setExpenseData([...expenseData, { label, amount, id: Date.now() }]);
  };
  return (
    <Flex direction="column" style={{backgroundColor: "#eee", padding: '80px'}}>
      <Text size="xl">Add an Expense</Text>
      <TextInput
        label="Label"
        onChange={(e) => setLabel(e.currentTarget.value)}
      />
      <TextInput
        label="Amount"
        onChange={(e) => setAmount(Number.parseFloat(e.currentTarget.value))}
      />
      <Button onClick={() => addExpense()} style={{marginTop: '10px'}}>Add Expense</Button>
      {expenseData.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Label</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expenseData.map((item) => {
              if (item.amount) {
                return (
                  <tr key={item.id}>
                    <td>{item.label}</td>
                    <td>{item.amount}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      )}
    </Flex>
  );
};
