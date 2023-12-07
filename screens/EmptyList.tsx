import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const EmptyList = () => {
  return (
    <View className="flex items-center mt-10">
      <Image source={require("../assets/empty.png")} className="w-60 h-60" />
      <Text className="text-4xl mt-5 font-thin">No Trips Found</Text>
    </View>
  );
};

export default EmptyList;
