import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import BackButton from "./BackButton";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firbase";
import { useSelector, useDispatch } from "react-redux";
import { setUserLoading } from "../redux/slices/user";
const SignIn = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //for loading
  const { userLoading } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  //end of laoding
  const HandleAddTrip = async () => {
    if (email && password) {
      //navigation.navigate("Homescreen");
      try {
        dispatch(setUserLoading(true));
        await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setUserLoading(false));
      } catch (e: any) {
        console.log("Error ", e.message);
      }
    } else {
      console.log("Please fill all credentials");
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
            <Text className="text-xl text-black font-bold mr-8">Sign Up</Text>
          </View>
        </View>
        <View className="flex-row justify-center mt-10">
          <Image
            source={require("../assets/SignUp.png")}
            className="w-64 h-60"
          />
        </View>
        <View className="mt-6">
          <Text className="font-bold text-xl text-black">Email</Text>
          <TextInput
            className="h-12 p-2 bg-white rounded-full my-2"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Text className="font-bold text-xl text-black">Password</Text>
          <TextInput
            className="h-12 p-2 bg-white rounded-full my-2"
            value={password}
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
          />
        </View>
      </View>
      <View>
        {userLoading ? (
          <LoadingScreen />
        ) : (
          <TouchableOpacity
            className="h-16 bg-green-400 mb-5 rounded-full"
            onPress={HandleAddTrip}
          >
            <Text className="mt-3 font-semibold text-2xl text-white text-center ">
              Sign Up
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SignIn;
