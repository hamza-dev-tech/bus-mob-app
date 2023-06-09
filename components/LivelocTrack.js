import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import MapView, { Marker, AnimatedRegion } from "react-native-maps";
import imagePath from "./constants/imagePath";
import MapViewDirections from "react-native-maps-directions";
import { onValue, ref } from "firebase/database";
import { database, db3 } from "../Firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function LivelocTrack({ driver_email }) {
  const [busLocation, setBusLocation] = useState(null);
  const [data, setData] = useState("null");

  useEffect(() => {
    const busRef = doc(db3, "locations", driver_email);
    const unsub = onSnapshot(
      busRef,
      (doc) => {
        if (doc.exists()) {
          setData({ id: doc.id, ...doc.data() });
        } else {
          setData("null");
        }
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, [driver_email]);


  return (
    <View style={{ height: 300, backgroundColor: "black" }}>
      <MapView
        style={{
          width: "100%",
          height: 570,
          borderRadius: 20,
          marginTop: -40,
        }}
        initialRegion={{
          // latitude: data.latitude,
          // longitude: data.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0221,
        }}
      >
        
      </MapView>
      <Text>

      </Text>
    </View>
    // <View>
    //   {busLocation ? (
    //     <Text>
    //       Bus Location: Latitude {busLocation.latitude}, Longitude {busLocation.longitude}
    //       {driver_email}
    //     </Text>
    //   ) : (
    //     <Text>driver_email</Text>
    //   )}
    // </View>
  );
}
