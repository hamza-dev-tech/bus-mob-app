import * as React from "react";
import { StyleSheet, View, Image, ScrollView, Dimensions } from "react-native";
import { Stack, Button, AppBar } from "@react-native-material/core";
import useOrientation from "../components/OrientationSet";
import { StatusBar } from "expo-status-bar";

export default LogIn = ({ navigation }) => {
  const { portrait } = useOrientation();
  const handleNavigation = (screeenName) => {
    navigation.navigate(screeenName);
  };

  const { width, height } = Dimensions.get("window");

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      height: height*0.921
    },
    btn: {
      width: 90 + "%",
      gap: 10,
      marginTop: portrait ? 70 : 20,
      marginBottom: "auto",
    },
    btns: {
      width: 100 + "%",
    },
    btnsignup: {
      width: portrait ? 100 + "%" : "90%",
      height: 184,
      justifyContent: portrait ? "flex-end" : "flex-start",
      marginTop: portrait ? 0 : 10,
    },
    logo: {
      width: portrait ? 180 : 100,
      height: portrait ? 180 : 100,
      // marginTop: portrait ? 100 : 40,
    },
  });

  return (
    <ScrollView scrollEnabled={portrait ? true : false}>
      <StatusBar hidden={true} />
      <Stack fill center spacing={4} style={styles.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#2C2B3C",
            width: "100%",
            alignItems: "center",
            height: 280,
            justifyContent: "center",
            borderBottomLeftRadius: 250,
            borderBottomRightRadius: 250,
          }}
        >
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
        <View style={styles.btn}>
          <View style={styles.btns}>
            <Button
              tintColor="#B76D68"
              title="Sign In As User"
              style={{ backgroundColor: "#2C2B3C" }}
              onPress={() => handleNavigation("LogIn User")}
            />
          </View>
          <View style={styles.btns}>
            <Button
              style={{ backgroundColor: "#2C2B3C" }}
              tintColor="#B76D68"
              title="Sign In As Driver"
              onPress={() => handleNavigation("LogIn Driver")}
            />
          </View>
        </View>
        <View style={styles.btnsignup}>
          <Button
            style={{ backgroundColor: "#fff" }}
            tintColor="#B76D68"
            titleStyle="bold"
            title="Register"
            onPress={() => handleNavigation("SignUp")}
          />
        </View>
      </Stack>
    </ScrollView>
  );
};
