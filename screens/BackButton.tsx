import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
//import { ChevronLeftIcon } from "react-native-heroicons/outline";

const BackButton = ({ navigation }: any) => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          source={require("../assets/backButton.png")}
          className="h-8 w-8"
        />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
