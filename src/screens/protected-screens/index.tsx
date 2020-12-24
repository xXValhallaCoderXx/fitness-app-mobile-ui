import "react-native-gesture-handler";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./Home";
import ProfileScreen from "./Profile";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
      <Drawer.Screen
        options={{ headerShown: true }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

export default App;
