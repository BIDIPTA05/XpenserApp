import { View, Text } from "react-native";
import React from "react";
import { categoryColors } from "../theme";

const ExpenseCard = ({ items }: any) => {
  return (
    <View
      style={{ backgroundColor: categoryColors[items.category] }}
      className="flex-row justify-between  my-2 p-3 rounded-2xl"
    >
      <View>
        <Text className="text-black font-bold text-lg">{items.title}</Text>
        <Text className="text-black">{items.category}</Text>
      </View>
      <View>
        <Text className="text-black font-bold text-lg">Rs. {items.amount}</Text>
      </View>
    </View>
  );
};

export default ExpenseCard;
