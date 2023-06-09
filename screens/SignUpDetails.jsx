import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import {
  Stack,
  TextInput,
  IconButton,
  Button,
  Text,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../components/useTogglePasswordVisibility";
import { Modal, Pressable, View } from "react-native";
import { ScrollView, Switch } from "react-native-gesture-handler";
import useOrientation from "../components/OrientationSet";
import { firebaseAuth } from "../Firebase";

const SignUpDetails = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { portrait } = useOrientation();
  const [registered, setregistered] = useState(false);
  // dep values
  const [depOpen, setDepOpen] = useState(false);
  const [depValue, setDepValue] = useState(null);
  const [depItems, setDepItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Apple", value: "kela" },
    { label: "Banana", value: "Mela" },
  ]);
  //   sem values
  const [semOpen, setSemOpen] = useState(false);
  const [semValue, setSemValue] = useState(null);
  const [semItems, setSemItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Apple", value: "kela" },
    { label: "Banana", value: "Mela" },
  ]);
  // Navigation

  const Navigation = (screenName) => {
    navigation.navigate(screenName);
  }

  // password visibility
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();



    //Firebase



  return (
    <Stack spacing={2} style={{ flex: 1 }}>
      <Icon
        name="account-circle"
        style={{
          flex: 0.3,
          fontSize: 120,
          marginLeft: "auto",
          marginRight: "auto",
          color: "#6200ee",
        }}
      />
      <View style={{ flex: 1, gap: 20, marginTop: portrait ? 0 : 0 }}>
        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
            gap: 50,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Registered</Text>
          <Switch value={registered} onValueChange={setregistered} />
          {/* Dep And Sem view */}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent:"space-around",
          }}
        >
          <View
            style={{
              width: "45%",
            }}
          >
            <Text>Department{
                <Icon
                name="office-building"
                style={{
                    fontSize:15,
                }}
                 />
                }</Text>
            <DropDownPicker
              open={depOpen}
              value={depValue}
              items={depItems}
              setOpen={setDepOpen}
              setValue={setDepValue}
              setItems={setDepItems}
              zIndex={1000}
              autoScroll={true}
              width="50%"
              maxHeight={100}
              style={{
                borderColor: "#fff",
                borderBottomColor: "black",
              }}
            />
          </View>

          <View
            style={{
              width: "45%",
            }}
          >
            <Text>Semester{
                <Icon
                name="book"
                style={{
                    fontSize:15,
                }}
                 />
                }</Text>
            <DropDownPicker
              open={semOpen}
              value={semValue}
              items={semItems}
              setOpen={setSemOpen}
              setValue={setSemValue}
              setItems={setSemItems}
              zIndex={1000}
              autoScroll={true}
              width="50%"
              maxHeight={100}
              style={{
                borderColor: "#fff",
                borderBottomColor: "black",
              }}
            />
          </View>
        </View>
        {/* city and stop view */}
        <View style={{
            flex: 1,
            flexDirection: "row",
            justifyContent:"space-around",
        }}>
          <View
            style={{
              width: "45%",
            }}
          >
            <Text>City{
                <Icon
                name="home-map-marker"
                style={{
                    fontSize:15,
                }}
                 />
                }</Text>
            <DropDownPicker
              open={depOpen}
              value={depValue}
              items={depItems}
              setOpen={setDepOpen}
              setValue={setDepValue}
              setItems={setDepItems}
              zIndex={1000}
              autoScroll={true}
              width="50%"
              maxHeight={100}
              style={{
                borderColor: "#fff",
                borderBottomColor: 'black'
              }}
            />
          </View>

          <View
            style={{
              width: "45%",
            }}
          >
            <Text>Stop{
                <Icon
                name="bus"
                style={{
                    fontSize:15,
                }}
                 />
                }</Text>
            <DropDownPicker
              open={semOpen}
              value={semValue}
              items={semItems}
              setOpen={setSemOpen}
              setValue={setSemValue}
              setItems={setSemItems}
              zIndex={1000}
              autoScroll={true}
              width="50%"
              maxHeight={100}
              style={{
                borderColor: "#fff",
                borderBottomColor: 'black'
              }}
            />
          </View>
        </View>
        <Button title="Sign Up" style={{ marginTop: "auto" }} onPress={()=> Navigation('Dash Board')} />
      </View>
    </Stack>
  );
};

export default SignUpDetails;
