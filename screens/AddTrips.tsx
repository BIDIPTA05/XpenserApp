import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BackButton from "./BackButton";
import LoadingScreen from "./LoadingScreen";
import { tripsRef } from "../config/firbase";
import { useSelector } from "react-redux";
import { addDoc } from "firebase/firestore";
const AddTrips = ({ navigation }: any) => {
  const [place, setPlace] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state: any) => state.user);

  const HandleAddTrip = async () => {
    if (place && country) {
      setLoading(true);
      //adding document ot the firebase database
      let doc = await addDoc(tripsRef, {
        place,
        country,
        userId: user.uid,
      });
      //stop loadin
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
            <Text className="text-xl text-black font-bold mr-8">Add Trips</Text>
          </View>
        </View>
        <View className="flex-row justify-center mt-3">
          <Image
            source={require("../assets/addtrip.png")}
            className="w-40 h-48"
          />
        </View>
        <View className="mt-6">
          <Text className="font-bold text-xl text-black">Where to go?</Text>
          <TextInput
            className="h-12 p-2 bg-white rounded-lg my-2"
            value={place}
            onChangeText={(value) => setPlace(value)}
          />
          <Text className="font-bold text-xl text-black">Which Country?</Text>
          <TextInput
            className="h-12 p-2 bg-white rounded-lg my-2"
            value={country}
            onChangeText={(value) => setCountry(value)}
          />
        </View>
      </View>
      <View>
        {loading ? (
          <LoadingScreen />
        ) : (
          <TouchableOpacity
            className="h-16 bg-green-400 mb-5 rounded-full"
            onPress={HandleAddTrip}
          >
            <Text className="mt-3 font-bold text-2xl text-white text-center ">
              Add Trip
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AddTrips;
