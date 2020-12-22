import React from "react";
import { Card } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { fetchUser } from "shared/store-slice/user";

interface IProps {
  navigation: any;
  route: any;
}

const HomeScreen = ({ navigation, route }: IProps) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    console.log("FETCH");
    dispatch(fetchUser("1"));
  }, []);

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Homessss</Card.Title>
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
