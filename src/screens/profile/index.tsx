import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>PROFILE SCREEN</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { data: "Jane" })}
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

export default ProfileScreen;
