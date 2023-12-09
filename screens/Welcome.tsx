import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Welcome = ({ navigation }: any) => {
  return (
    <View className="h-full flex justify-around ">
      <View className=" flex-row justify-center mt-10">
        <Image
          source={require("../assets/welcome.png")}
          className="w-96 h-96 bg-blue-100 rounded-full"
        />
      </View>

      <View className="mt-10 mx-4">
        <Text className=" text-center text-3xl font-extrabold text-black">
          Welcome to XpenseR
        </Text>
        <TouchableOpacity
          className="h-16 bg-green-400 mt-10 rounded-full"
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text className="mt-3 font-bold text-2xl text-white text-center ">
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="h-16 bg-green-400 mt-2 rounded-full"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text className="mt-3 font-bold text-2xl text-white text-center ">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
