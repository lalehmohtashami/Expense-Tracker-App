import { Button, TextInput, Text, Flex } from "@mantine/core";
import { useState } from "react";

export const Budget = ({ setValue }: { setValue: React.Dispatch<React.SetStateAction<number>> }) => {
  const [amount, setAmount] = useState<number>(0);

  const setBudget = () => {
    setValue(amount | 0);
  };

  return (
    <Flex direction='column' style={{backgroundColor: "#eee", padding: '80px'}}>
      <Text size="xl">Add a Budget</Text>
      <TextInput
        label="Amount"
        onChange={(e) => setAmount(Number.parseFloat(e.currentTarget.value))}
      />
      <Button onClick={() => setBudget()} style={{marginTop: '10px'}}>Set Budget</Button>
    </Flex>
  );
};
