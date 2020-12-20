import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>HOME SCREEN</Text>
      <Text>This is profile</Text>
      <Text>PROFILE SCREEN</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { data: "Jane" })}
      />
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
});

export default HomeScreen;
