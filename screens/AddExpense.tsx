import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BackButton from "./BackButton";
import { categories } from "../constants/index";
import { expensesRef } from "../config/firbase";
import { addDoc } from "firebase/firestore";
const AddExpense = ({ navigation, route }: any) => {
  const place = route.params.place;
  const country = route.params.country;
  const id = route.params.id;

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const HandleAddTrip = async () => {
    if (title && amount && category) {
      setLoading(true);
      //adding document ot the firebase database
      let doc = await addDoc(expensesRef, {
        title,
        amount,
        category,
        tripId: id,
      });
      //stop loading
      setLoading(false);
      //go back to the previous screen
      if (doc && doc.id) {
        navigation.goBack();
      }
    } else {
      console.log("Please fill all the fields");
    }
  };

  return (
    <View className="flex justify-between h-full mx-4 ">
      <View>
        <View className="flex-row mt-3">
          <View>
            <BackButton navigation={navigation} />
          </View>
          <View className="mx-auto ">
            <Text className="text-xl text-black font-bold mr-8">
              Add Expense
            </Text>
          </View>
        </View>
        <View className="flex-row justify-center mt-3">
          <Image
            source={require("../assets/addExp.png")}
            className="w-44 h-56"
          />
        </View>
        <View className="mt-6">
          <Text className="font-bold text-xl text-black">Where you spend?</Text>
          <TextInput
            className="h-12 p-2 bg-white rounded-lg my-2"
            value={title}
            onChangeText={(value) => setTitle(value)}
          />
          <Text className="font-bold text-xl text-black">Amount spend?</Text>
          <TextInput
            className="h-12 p-2 bg-white rounded-lg my-2"
            value={amount}
            onChangeText={(value) => setAmount(value)}
          />
          <Text className="font-bold text-xl text-black">Category</Text>
          <View className="flex-row flex-wrap gap-2 mt-1">
            {categories.map((item) => {
              let BgColor = "bg-white";
              if (item.value === category) {
                BgColor = "bg-green-200";
              }
              return (
                <TouchableOpacity
                  key={item.value}
                  className={`flex justify-center ${BgColor} my-2 px-4 h-12 rounded-full`}
                  onPress={() => setCategory(item.value)}
                >
                  <Text className="text-black font-semibold">{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          className="h-16 bg-green-400 mb-5 rounded-full"
          onPress={HandleAddTrip}
        >
          <Text className="mt-3 font-bold text-2xl text-white text-center ">
            Add Expense 🚀
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddExpense;
