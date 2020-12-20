import "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import theme from "./src/shared/styles/theme";

import LoginScreen from "./src/screens/login";
import RegisterScreen from "./src/screens/register";
import ProtectedScreen from "./src/screens/protected-screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="MainAppHome" component={ProtectedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
