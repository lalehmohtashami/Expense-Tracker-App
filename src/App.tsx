import { MantineProvider, Flex } from "@mantine/core";
import { Text } from "@mantine/core";
import { useState } from "react";

import "./App.css";
import { Budget } from "./Budget";
import { Expenses } from "./Expenses";

function App() {
  const [expense, setExpense] = useState<number>(0);
  const [budget, setBudget] = useState<number>(0);

  const handleExpensesData = (childData: number) => {
    setExpense(childData);
  };
  const handleBudgetData = (childData: number) => {
    setBudget(childData);
  };

  return (
    <MantineProvider>
      <Flex align='center' direction='column' style={{display: 'flex'}}>
        <h2>Expense Tracker App</h2>
        <Text>YOUR BALANCE IS:{budget - expense}</Text>
        <Text>Budget:{budget}</Text>
        <Text>Expenses:{expense}</Text>
      </Flex>
      <Flex
        style={{ display: "flex" }}
        justify="space-between"
        align="center"
      >
        <Expenses setValue={handleExpensesData} />
        <Budget setValue={handleBudgetData} />
      </Flex>
    </MantineProvider>
  );
}

export default App;
