import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LatestMovies from "../components/latestMovies";
import LatestMoviesDetails from "../components/latestMoviesDetails";
import Booking from "../components/booking";
import { NavigationContainer } from "@react-navigation/native";

const Navigator = createStackNavigator();

const ScreenNav = () => (
  <Navigator.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#ffae42", height: 60 },
      headerTintColor: "#fff",
      headerTitleStyle: { alignSelf: "center", fontWeight: "bold" },
    }}
  >
    <Navigator.Screen name="Latest Movies" component={LatestMovies} />
    <Navigator.Screen name="Movie Details" component={LatestMoviesDetails} />
    <Navigator.Screen name="Book tickets" component={Booking} />
  </Navigator.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <ScreenNav />
  </NavigationContainer>
);

export default AppNavigator;
