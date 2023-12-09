import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import EmptyList from "./EmptyList";
import BackButton from "./BackButton";
import ExpenseCard from "./ExpenseCard";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { query, where, collection, getDocs } from "firebase/firestore";
import { expensesRef } from "../config/firbase";

const items = [
  {
    id: 1,
    title: "Ate at a restaurant",
    amount: 750,
    category: "Other",
  },
  {
    id: 2,
    title: "Bus Fare",
    amount: 500,
    category: "Travel",
  },
  {
    id: 3,
    title: "Bought a shirt",
    amount: 950,
    category: "Shopping",
  },
  {
    id: 4,
    title: "Movie Tickets",
    amount: 50,
    category: "Entertainment",
  },
  {
    id: 5,
    title: "Eating out",
    amount: 95,
    category: "Food",
  },
];

const Homescreen = ({ navigation, route }: any) => {
  const place = route.params.place;
  const country = route.params.country;
  const id = route.params.id;

  const [expense, setExpense] = useState([]);
  const isFocused = useIsFocused();

  const fetchExpense = async () => {
    const q = query(expensesRef, where("tripId", "==", id));
    const querySnapshot = await getDocs(q);
    let data: any = [];
    querySnapshot.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data());
      data.push({ ...doc.data(), id: doc.id });
    });
    setExpense(data);
  };

  useEffect(() => {
    fetchExpense();
  }, [isFocused]);

  return (
    <View className="px-4">
      <View className="flex-row mt-3">
        <View>
          <BackButton navigation={navigation} />
        </View>
        <View className="flex mx-auto ">
          <Text className="text-xl text-black font-bold mr-4">
            {route.params.place}
          </Text>
          <Text className="text-sm text-black font-bold text-center mr-4">
            {route.params.country}
          </Text>
        </View>
      </View>
      <View className="flex-row justify-center mt-3">
        <Image
          source={require("../assets/expense.png")}
          className="w-60 h-56"
        />
      </View>
      <View className="flex-row justify-between items-center mt-4">
        <Text className="font-bold text-xl text-black">Expenses</Text>
        <TouchableOpacity
          className="bg-white rounded-full px-3 p-2"
          onPress={() => {
            navigation.navigate("AddExpense", { place, country, id });
          }}
        >
          <Text className="font-semibold text-black">Add Expenses</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 430 }} className="mt-4">
        <FlatList
          data={expense}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList text="No Expenses Found" />}
          className="mx-1"
          renderItem={({ item }) => {
            return <ExpenseCard items={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default Homescreen;
