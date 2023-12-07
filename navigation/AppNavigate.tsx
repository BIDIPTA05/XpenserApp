import React from "react";
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Homescreen from "../screens/Homescreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTrips from "../screens/AddTrips";
import AddExpense from "../screens/AddExpense";

const Stack = createNativeStackNavigator();

const AppNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Homescreen"
          component={Homescreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTrips"
          component={AddTrips}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddExpense"
          component={AddExpense}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigate;
