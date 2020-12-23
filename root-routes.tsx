import "react-native-gesture-handler";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./src/screens/login";
import RegisterScreen from "./src/screens/register";
import ProtectedScreen from "./src/screens/protected-screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} /> */}
        <Stack.Screen name="MainAppHome" component={ProtectedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
