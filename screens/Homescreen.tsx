import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../theme";
import randomImage from "../assets/randomImage";
import EmptyList from "./EmptyList";

const items = [
  {
    id: 1,
    place: "Guwahati",
    country: "India",
  },
  {
    id: 2,
    place: "Bengaluru",
    country: "India",
  },
  {
    id: 3,
    place: "Jorhat",
    country: "India",
  },
  {
    id: 4,
    place: "Guwahati",
    country: "India",
  },
  {
    id: 5,
    place: "Bengaluru",
    country: "India",
  },
  {
    id: 6,
    place: "Jorhat",
    country: "India",
  },
];

const Homescreen = ({ navigation }: any) => {
  return (
    <View>
      <View className="flex-row justify-between p-4">
        <Text className="font-bold text-3xl text-black">XpenseR</Text>
        <TouchableOpacity className="text-blue-300  bg-white rounded-full px-3 p-2">
          <Text className="font-semibold text-black">Logout</Text>
        </TouchableOpacity>
      </View>
      <View className=" flex-row justify-center items-center rounded-xl mx-5 mb-2 bg-blue-200">
        <Image
          source={require("../assets/img1.png")}
          className="w-60 h-60 mt-5"
        />
      </View>
      <View className="flex-row justify-between items-center p-4">
        <Text className="font-bold text-xl text-black">Recent Trips</Text>
        <TouchableOpacity
          className="bg-white rounded-full px-3 p-2"
          onPress={() => {
            navigation.navigate("AddTrips");
          }}
        >
          <Text className="font-semibold text-black">Add Trip</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 430 }} className="p-4">
        <FlatList
          data={items}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList />}
          className="mx-1"
          renderItem={({ item }) => {
            return (
              <TouchableOpacity className="bg-white mb-3 rounded-2xl p-4">
                <View>
                  <Image source={randomImage()} className="w-36 h-36 mb-2" />
                  <Text className="font-bold ">{item.place}</Text>
                  <Text className="font-xss ">{item.country}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Homescreen;
