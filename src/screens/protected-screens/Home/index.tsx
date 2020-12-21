import React from "react";
import { Card } from "react-native-elements";
import { StyleSheet, View } from "react-native";

interface IProps {
  navigation: any;
  route: any;
}

const HomeScreen = ({ navigation, route }: IProps) => {
  React.useEffect(() => {
    navigation.openDrawer();
  }, []);
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>HOME</Card.Title>
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

export default HomeScreen;
