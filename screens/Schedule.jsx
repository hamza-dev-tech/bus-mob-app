import { collection, onSnapshot } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { db2 } from "../Firebase";

const Schedule = () => {
  const [busdata, setData] = useState([]);



  useEffect(() => {
    const unsub = onSnapshot(
      collection(db2, "schedule"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);




  const handleBusPress = (id) => {
    // Logic to handle bus press, e.g., navigate to bus details screen
    console.log("Bus pressed: ", id);
  };

  return (
    <ScrollView style={styles.container}>
      {busdata.map((bus) => (
        <TouchableOpacity key={bus.bus_num} onPress={() => handleBusPress(bus.id)}>
          <View style={styles.busItem}>
            <Text style={styles.busNumber}>{bus.bus_num} | name</Text>
            <Text style={styles.busRoute}>{bus.bus_route}</Text>
            <Text style={styles.busTime}>
              Arrival: {bus.bus_arrival} | Departure: {bus.bus_departure}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:10
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  busItem: {
    backgroundColor: "#2C2B3C",
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  busNumber: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#B76D68",
  },
  busRoute: {
    fontSize: 16,
    marginBottom: 8,
    color: "#B76D68",
  },
  busTime: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#B76D68",
  },
});

export default Schedule;
