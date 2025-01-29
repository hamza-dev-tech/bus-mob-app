import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import * as Location from "expo-location";
import MapView, { Marker, Polyline } from "react-native-maps";
import { database, db3 } from "../Firebase";
import { push, ref } from "firebase/database";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { PROVIDER_GOOGLE } from "react-native-maps";

export default function DriverDashBoard({ navigation , route}) {
  const { driver_email } = route.params;
  const [location, setLocation] = useState(null);
  const [path, setPath] = useState([]);

  const startLocationUpdates = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    else{
    }

    const locationSubscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 2000, // 2 seconds
        distanceInterval: 0, // only refresh on distance changes
      },
      (location) => {
        setLocation(location);
        setPath((prevPath) => [...prevPath, location.coords]);
        storeLocationData(location);
      }
    );
    return () => {
      locationSubscription.remove(); // Clean up the subscription when component unmounts
    };
  };

  const storeLocationData = async (location) => {
    try {
      const locationRef = doc(db3, "locations", driver_email); // Change "bus1" to your desired document ID
      await setDoc(locationRef, {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        timestamp: location.timestamp,
      });
      console.log("Location data stored successfully");
    } catch (error) {
      console.log("Error storing location data:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "auto",
          marginBottom: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon
          name="map-marker"
          style={{
            fontSize: 130,
            marginLeft: "auto",
            marginRight: "auto",
            color: "black",
            color: "#B76D68",
          }}
        />

        <Text
          style={{
            fontSize: 30,
            color: "#2C2B3C",
          }}
        >
          Enable Your
        </Text>
        <Text
          style={{
            fontSize: 25,
            color: "rgba(43, 42, 60, 0.53)",
          }}
        >
          Location
        </Text>

        <TouchableOpacity style={{ zIndex: 1 }} onPress={startLocationUpdates}>
          <View
            style={{
              backgroundColor: "rgba(188, 185, 185, 0.17)",
              height: 60,
              width: 200,
              justifyContent: "center",
              alignItems: "center",

              marginTop: 10,
              borderRadius: 30,
            }}
          >
            <Text style={{ fontSize: 25, color: "#B76D68" }}>Enable</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop:10}}
          onPress={()=>navigation.navigate("Details", {email:driver_email})}
        >
          <View>
          <Text
            style={{
              fontSize: 15,
              color: "rgba(43, 42, 60, 0.53)",
            }}
          >
            See Details
          </Text>
          </View>
        </TouchableOpacity>

        

        {location && (
          
          <MapView
          provider={PROVIDER_GOOGLE}
          showsMyLocationButton={true}
          showsUserLocation={true}
            style={styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0622,
              longitudeDelta: 0.0221,
            }}
          >
            <Polyline
              coordinates={path}
              strokeColor="#0000FF" // blue color
              strokeWidth={3}
            />
            <Marker
            
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            />
          </MapView>
        )}

        <Text
          style={{
            fontSize: 15,
            color: "rgba(43, 42, 60, 0.53)",
          }}
        >
          Latitude: {location ? location.coords.latitude : "N/A"}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "rgba(43, 42, 60, 0.53)",
          }}
        >
          Longitude: {location ? location.coords.longitude : "N/A"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "98%",
    height: 250,
    marginTop: 10,
  },
  locationText: {
    marginTop: 100,
  },
});
