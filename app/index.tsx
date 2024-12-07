import { useState } from "react";
import { View, Text, H1, YStack, Input, Button } from "tamagui";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = () => {
    if (!inputValue) return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <View margin={10}>
      <YStack gap={"$-1"}>
        <H1 fontSize={"$8"}>TODO作成</H1>
        <Input value={inputValue} onChangeText={setInputValue} />
        <Button onPress={handleSubmit}>追加</Button>
        <YStack gap={"$-1"}>
          {todos.map((todo, index) => (
            <Text key={index}>{todo}</Text>
          ))}
        </YStack>
      </YStack>
    </View>
  );
}
