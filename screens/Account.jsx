import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Stack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { db2 } from "../Firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function Account({ route, navigation }) {
  const { name, email, number, entry } = route.params;
  const [data, setData] = useState(null);
  const [stat, setStat] = useState("false");
  const [dep, setDep] = useState("null");
  const [imageUrl, setImageUrl] = useState(null);
  const [statusColor, setStatusColor] = useState("red");



  useEffect(() => {
    const ref = doc(db2, "students", JSON.stringify(email));
    const ref2 = doc(db2, "staff", JSON.stringify(email));
    const unsub = onSnapshot(
      ref,
      (doc) => {
        if (doc.exists()) {
          const docData = doc.data();
          setData({ id: email, ...docData });  
          if (docData) {
            setDep(docData.department);
            setStat(docData.status);
            setImageUrl(docData.image);
            setStatusColor("green"); 
          }
        }
      },
      
      (error) => {
        console.log(error);
      }
    );
    const unsub2 = onSnapshot(
      ref2,
      (doc) => {
        if (doc.exists()) {
          const docData = doc.data();
          setData({ id: email, ...docData });  
          if (docData) {
            setDep(docData.department);
            setStat(docData.status);
            setImageUrl(docData.image);
            setStatusColor("green"); 
          }
        }
      },
      
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
      unsub2();
    };
  }, []);

  return (
    <ScrollView scrollEnabled={true}>
      <Stack fill center spacing={4} style={styles.container}>
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
          <Icon style={{ fontSize: 140, color: "#B76D68" }} name="account" />
        </View>
        <View
          style={{
            flex: 1,
            width: "98%",
            height: 220,
            marginTop: 50,
            backgroundColor: "#2C2B3C",
            borderRadius: 15,
            padding: 10,
          }}
        >
          <View style={{ flexDirection: "row", height: 60 }}>
            <View
              style={{
                flex: 1,
                height: 40,
                flexWrap: "nowrap",
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "#B76D68" }}
              >
                ABBOTTABAD UNIVERSITY OF
              </Text>
              <Text style={{ fontSize: 18, color: "#B76D68" }}>
                Science & Technology
              </Text>
            </View>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
          </View>

          {/*  */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginRight: 20,
              padding: 5,
              marginTop: 10,
            }}
          >
            <View
              style={{
                height: 120,
                width: 100,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#B76D68",
                  marginTop: 3,
                }}
              >
                Name:
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#B76D68",
                  marginTop: 3,
                }}
              >
                Email:
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#B76D68",
                  marginTop: 3,
                }}
              >
                Phone#:
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#B76D68",
                  marginTop: 3,
                }}
              >
                Department:
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#B76D68",
                  marginTop: 3,
                }}
              >
                Registered:
              </Text>
            </View>
            <View
              style={{
                height: 120,
                width: 160,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#B76D68",
                  marginTop: 3,
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#B76D68",
                  marginTop: 3,
                }}
              >
                {email}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#B76D68",
                  marginTop: 3,
                }}
              >
                {number}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  color: "#B76D68",
                  marginTop: 3,
                }}
              >
                {dep}
              </Text>
              <View
                style={{
                  backgroundColor: statusColor,
                  width: 60,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 5,
                  height: 20,
                  marginTop: 5,
                }}
              >
                <Text
                  style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
                >
                  {stat}
                </Text>
              </View>
            </View>
            <View>
              <Image
                source={{
                  uri: `${imageUrl}`,
                }}
                style={{
                  width: 70,
                  height: 70,
                  marginLeft: 2,
                  borderRadius: 100,
                }}
              />
            </View>
          </View>
        </View>
        {/*  */}
        <View style={styles.btnsignup}>
          <Button
            style={{ backgroundColor: "#2C2B3C" }}
            tintColor="#B76D68"
            titleStyle="bold"
            title="Log Out"
            onPress={() => navigation.navigate("LogIn")}
          />
        </View>
      </Stack>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  btn: {
    width: 90 + "%",
    gap: 10,
    marginTop: 70,
    marginBottom: "auto",
  },
  btns: {
    width: 100 + "%",
  },
  btnsignup: {
    width: 98 + "%",
    height: 184,
    //   justifyContent: "flex-end",
    marginTop: 108,
  },
  logo: {
    width: 45,
    height: 45,
    marginTop: -5,
  },
});
