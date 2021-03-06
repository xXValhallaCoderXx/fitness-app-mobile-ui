import React, { useContext, useState } from "react";
import { CommonActions } from "@react-navigation/native";
import { ThemeContext } from "react-native-elements";
import { Button, Card, Input, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";

import useFetch from "../../shared/hooks/use-fetch";

interface IProps {
  navigation: any;
  route: any;
}

const HomeScreen = ({ navigation, route }: IProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, data, loading, callApi } = useFetch();
  const { theme } = useContext(ThemeContext);

  // const handleLogin = () => {
  //   callApi({
  //     url: "http://localhost:8000/api/users/",
  //     method: "POST",
  //     body: { username, password },
  //   });
  // };

  const handleRoute = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "MainAppHome" }],
      })
    );
  };

  const onChangeUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>LOGIN</Card.Title>

        <Input placeholder="Username" onChange={onChangeUsername} />
        <Input placeholder="Password" onChange={onChangePassword} />
        <Button title="Login" onPress={handleRoute} />
        <Text style={styles.registerText}>
          Don't have an account? Click{" "}
          <Text
            style={{ color: theme.colors?.primary }}
            onPress={() => navigation.navigate("Register")}
          >
            Here
          </Text>
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  registerText: {
    marginTop: 16,
    textAlign: "center",
  },
  registerTextLink: {},
});

export default HomeScreen;
