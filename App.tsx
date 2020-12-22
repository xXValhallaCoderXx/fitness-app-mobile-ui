import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import theme from "./src/shared/styles/theme";
import store from "./src/config/store";

import LoginScreen from "./src/screens/login";
import RegisterScreen from "./src/screens/register";
import ProtectedScreen from "./src/screens/protected-screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="MainAppHome" component={ProtectedScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
