import React from "react";
import { Card } from "react-native-elements";
import { StyleSheet, View } from "react-native";

interface IProps {
  navigation: any;
  route: any;
}

const ProfileScreen = ({ navigation, route }: IProps) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>PROFILE</Card.Title>
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
});

export default ProfileScreen;
