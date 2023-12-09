import React from "react";
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import Homescreen from "../screens/Homescreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTrips from "../screens/AddTrips";
import AddExpense from "../screens/AddExpense";
import TripExpenses from "../screens/TripExpenses";
import Welcome from "../screens/Welcome";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/slices/user";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firbase";
const Stack = createNativeStackNavigator();

const AppNavigate = () => {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  //trrigger when user is logged in or logged out
  onAuthStateChanged(auth, (u) => {
    console.log("signup user", u);
    dispatch(setUser(u));
  });

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
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
          <Stack.Screen
            name="TripExpenses"
            component={TripExpenses}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default AppNavigate;
