import React, { useState } from "react";
import { Stack, TextInput, Button, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../components/useTogglePasswordVisibility";
import { Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import useOrientation from "../components/OrientationSet";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../Firebase";

const LogInAsDriver = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { portrait } = useOrientation();
  const [errorMes, setErrorMes] = useState(false);
  const [disabled, setDisiabled] = useState(false);
  const [success, setSuccess] = useState(false);

  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisiabled(true);
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setTimeout(() => {
          navigation.navigate("Dash Board", {ID:email});
          setDisiabled(false);
        }, 3000);
        // ...
        setErrorMes(false);
        setSuccess("Logged In");
      })
      .catch((error) => {
        setDisiabled(false);
        setSuccess(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        if (email == "" || password == "") {
          setErrorMes("Please Fill The Fields First");
        } else {
          setErrorMes("Invalid Email Or Password");
        }
      });
  };

  return (
    <ScrollView>
      <Stack spacing={2} style={{ flex: 1,  }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#2C2B3C",
            width: "100%",
            alignItems: "center",
            height: 280,
            justifyContent: "center",
            borderBottomLeftRadius: 250 ,
            borderBottomRightRadius: 250 ,
          }}
        >
          <Icon
            name="account-circle"
            style={{
              flex: 1.3,
              fontSize: portrait ? 230 : 120,
              marginLeft: "auto",
              marginRight: "auto",
              color: "#B76D68",
              marginTop:20
            }}
          />
        </View>
        <View style={{ flex: 1, gap: 20,margin:20 ,marginTop: portrait ? 40 : 0 }}>
          <TextInput
            label="Email"
            leading={(props) => (
              <Icon name="account" style={{ color: "#B76D68" }} {...props} />
            )}
            placeholder="Enter Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            value={email}
            enablesReturnKeyAutomatically
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Password"
            trailing={(props) => (
              <Pressable onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons
                  name={rightIcon}
                  size={22}
                  style={{ color: "#B76D68" }}
                />
              </Pressable>
            )}
            leading={(props) => (
              <Icon style={{ color: "#B76D68" }} name="lock" {...props} />
            )}
            //   style={styles.inputField}
            name="password"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={passwordVisibility}
            value={password}
            enablesReturnKeyAutomatically
            onChangeText={(text) => setPassword(text)}
          />
          <Button style={{margin:40,marginTop:20,marginBottom:0, backgroundColor:'#2C2B3C'}} disabled={disabled} onPress={handleSubmit}  tintColor="#B76D68" title="Log In" />
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "red" }}>{errorMes}</Text>
            <Text style={{ color: "green", marginTop:-10}}>{success}</Text>
          </View>
        </View>
      </Stack>
    </ScrollView>
  );
};

export default LogInAsDriver;
