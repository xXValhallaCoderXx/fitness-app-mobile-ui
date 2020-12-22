import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "shared/store-slice/user";
import { Card, Avatar, Text } from "react-native-elements";
import { StyleSheet, View } from "react-native";

interface IProps {
  navigation: any;
  route: any;
}

const ProfileScreen = ({ navigation, route }: IProps) => {
  const user = useSelector(selectUser);
  console.log("USER: ", user);
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded
        containerStyle={{ backgroundColor: "gray", marginTop: 50 }}
        title="CR"
        onPress={() => console.log("Works!")}
      />
      <Text>{user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});

export default ProfileScreen;
