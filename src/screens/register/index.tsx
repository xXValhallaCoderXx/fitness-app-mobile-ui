import React, { useContext } from "react";
import { ThemeContext } from "react-native-elements";
import { Button, Card, Input, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";

interface IProps {
  navigation: any;
  route: any;
}

const HomeScreen = ({ navigation, route }: IProps) => {
  const { theme } = useContext(ThemeContext);
  const handleRegister = () => {
    console.log("LOGIN");
  };
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Registration</Card.Title>

        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button
          style={styles.registerBtn}
          title="Register"
          onPress={handleRegister}
        />
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
  registerBtn: {
    marginTop: "1rem",
  },
});

export default HomeScreen;
