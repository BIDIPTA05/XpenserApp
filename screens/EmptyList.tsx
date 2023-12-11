import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const EmptyList = (props: any) => {
  return (
    <View className="flex items-center mt-10">
      <Image
        source={require("../assets/empty.png")}
        className="w-80  h-60 rounded-2xl"
      />
      <Text className="text-xl mt-5 font-semibold text-black">
        {props.text} 🙁
      </Text>
    </View>
  );
};

export default EmptyList;
