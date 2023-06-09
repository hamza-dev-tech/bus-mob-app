import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function BusDetails({ route, navigation }) {
  const { ID, bus, Route, driver, contact, image, email } = route.params;
  const phone = () => {
    Linking.openURL(`tel:${contact}`);
  };
  const sms = () => {
    Linking.openURL(`sms:${contact}`);
  };
  
  

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#2C2B3C" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#B76D68",
          borderRadius: 10,
          padding: 2,
          flexDirection: "row",
          marginTop: 10,
          marginLeft: 10,
          paddingLeft: 10,
          marginRight: 10,
          height: 430,
          alignItems: "center",
        }}
      >
        <View style={{ flext: 1, gap: 2, width: "100%", height: 390 }}>
          <View style={{ marginLeft: "auto", marginRight: "auto" }}>
            <Image
              source={{
                uri: `${image}`,
              }}
              style={{
                width: 170,
                height: 170,
                marginLeft: 2,
                borderRadius: 100,
              }}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "#2C2B3C",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: 3,
                width: "36%",
              }}
            >
              Name of Driver:{" "} 
            </Text>
            <Text
              style={{
                color: "#2C2B3C",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 30,
                width: "100%",
              }}
            >
              <Icon
                name="account"
                size={24}
                style={{ color: "#2C2B3C", marginLeft: 15 }}
              />
              {driver}{" "}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "#2C2B3C",
                fontSize: 15,
                fontWeight: "bold",
                width: "36%",
              }}
            >
              Driver's contact:{" "}
            </Text>
            <Text
              style={{
                color: "#2C2B3C",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 30,
                width: "100%",
              }}
            >
              <Icon
                name="book-account"
                size={24}
                style={{ color: "#2C2B3C", marginLeft: 15 }}
              />
              {contact}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "#2C2B3C",
                fontSize: 15,
                fontWeight: "bold",
                width: "36%",
              }}
            >
              Bus:{" "}
            </Text>
            <Text
              style={{
                color: "#2C2B3C",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 30,
                width: "100%",
              }}
            >
              <Icon
                name="bus"
                size={24}
                style={{ color: "#2C2B3C", marginLeft: 15 }}
              />
              {bus}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "#2C2B3C",
                fontSize: 15,
                fontWeight: "bold",
                width: "36%",
              }}
            >
              Route:{" "}
            </Text>
            <Text
              style={{
                color: "#2C2B3C",
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 30,
                width: "100%",
              }}
            >
              <Icon
                name="routes"
                size={24}
                style={{ color: "#2C2B3C", marginLeft: 15 }}
              />
              {Route}
            </Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "#2C2B3C",
                fontSize: 15,
                fontWeight: "bold",
                width: "36%",
              }}
            >
              Status:{" "}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#B76D68",
            width: "30%",
            height: 45,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
          }}
          onPress={phone}
        >
          <View
            style={{
              backgroundColor: "#B76D68",
              width: "100%",
              height: 45,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
            }}
          >
            <Text
              style={{ color: "#2C2B3C", fontSize: 17, fontWeight: "bold" }}
            >
              Call
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#B76D68",
            width: "30%",
            height: 45,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
          }}
          onPress={sms}
        >
          <View
            style={{
              backgroundColor: "#B76D68",
              width: "100%",
              height: 45,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
            }}
          >
            <Text
              style={{ color: "#2C2B3C", fontSize: 17, fontWeight: "bold" }}
            >
              Text
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
          onPress={() => navigation.navigate("Live Track", {email:ID})}
        style={{
          backgroundColor: "#B76D68",
          width: "95%",
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 40,
        }}
      >
        <View
          style={{
            backgroundColor: "#B76D68",
            width: "100%",
            height: 45,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#2C2B3C", fontSize: 17, fontWeight: "bold" }}>
            Live Track
          </Text>
        </View>
      </TouchableOpacity>
      
    </ScrollView>
  );
}
