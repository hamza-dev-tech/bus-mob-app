import React, { useState } from "react";
import { Stack, TextInput, Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../components/useTogglePasswordVisibility";
import { Pressable, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { db, firebaseAuth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [errorMes, setErrorMes] = useState(false);
  const [disabled, setDisiabled] = useState(false);
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState(false);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const handlePress = async () => {
    setDisiabled(true);
    setErrorMes(false);
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        // Signed in
        setTimeout(() => {
          navigation.navigate("LogIn User");
        }, 1000);
        setSuccess("Successfully Signed Up");

        // ...
      })
      .catch((error) => {
        setDisiabled(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        if (email == "" || password == "" || name == "" || number == "") {
          setErrorMes("Please Fill Up The Required Fields");
        } else {
          setErrorMes("Invalid Inputs");
        }
        // ..
      });

    try {
      await setDoc(doc(db, "user", JSON.stringify(email)), {
        user_email: email,
        user_name: name,
        user_number: number,
        entrydate: serverTimestamp(),
      });
      setDisiabled(true);
      createUserWithEmailAndPassword(firebaseAuth, email, password)
        .then((userCredential) => {
          setUser(false);
          // Signed in
          setTimeout(() => {
            navigation.navigate("LogIn User");
          }, 2000);
          setSuccess("Successfully Signed Up");

          // ...
        })
        .catch((error) => {
          setUser(false);
          setDisiabled(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          if (email == "" || password == "" || name == "" || number == "") {
            setErrorMes("Please Fill Up The Required Fields");
          } else {
            setErrorMes("Invalid Inputs");
          }
          // ..
        });
    } catch (err) {
      setDisiabled(false);
      console.log(err);
    }
  };

  return (
    <ScrollView>
      <Stack spacing={1} style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#2C2B3C",
            width: "100%",
            alignItems: "center",
            height: 200,
            justifyContent: "center",
            borderBottomLeftRadius: 250,
            borderBottomRightRadius: 250,
          }}
        >
          <Icon
            name="account-circle"
            style={{
              flex: 1,
              fontSize: 150,
              marginLeft: "auto",
              marginRight: "auto",
              color: "#B76D68",
              marginTop: 10,
            }}
          />
        </View>
        <View
          behavior="padding"
          style={{ flex: 1, gap: 20, margin: 20, marginBottom: 0 }}
        >
          <TextInput
            label="Email"
            leading={(props) => (
              <Icon name="account" style={{ color: "#B76D68" }} {...props} />
            )}
            placeholder="Enter Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            keyboardType="email-address"
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
          <TextInput
            label="Name"
            leading={(props) => (
              <Icon
                name="account-circle-outline"
                style={{ color: "#B76D68" }}
                {...props}
              />
            )}
            placeholder="Enter Name"
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            enablesReturnKeyAutomatically
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            label="Phone #"
            leading={(props) => (
              <Icon
                name="phone-classic"
                style={{ color: "#B76D68" }}
                {...props}
              />
            )}
            placeholder="Enter Cell #"
            autoCapitalize="none"
            autoCorrect={false}
            value={number}
            keyboardType="phone-pad"
            enablesReturnKeyAutomatically
            onChangeText={(text) => setNumber(text)}
          />
          <Button
            style={{ backgroundColor: "#2C2B3C" }}
            tintColor="#B76D68"
            title="Sign Up"
            disabled={disabled}
            onPress={() => handlePress()}
          />
          <View style={{ alignItems: "center", marginTop: -10 }}>
            <Text style={{ color: "red" }}>{errorMes}</Text>
            <Text style={{ color: "green", marginTop: -10 }}>{success}</Text>
          </View>
        </View>
      </Stack>
    </ScrollView>
  );
};

export default SignUp;
