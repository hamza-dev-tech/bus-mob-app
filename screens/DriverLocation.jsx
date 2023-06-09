import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { db2 } from "../Firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function DriverLocation({ route }) {
  const { email } = route.params;
  const [driverData, setDriverData] = useState(null);

  useEffect(() => {
    const fetchDriverData = async () => {
      try {
        const busRef = doc(db2, "buses", email);
        const unsubscribe = onSnapshot(busRef, (docSnapshot) => {
          if (docSnapshot.exists()) {
            setDriverData({ id: docSnapshot.id, ...docSnapshot.data() });
          } else {
            setDriverData(null);
          }
        });
        return () => unsubscribe();
      } catch (error) {
        console.log("Error fetching driver data:", error);
      }
    };

    fetchDriverData();
  }, [email]);

  const renderDriverInfo = () => {
    if (driverData) {
      return (
        <View style={styles.container}>
          <Image source={{ uri: driverData.image }} style={styles.profileImage} />
          <Text style={styles.name}>{driverData.drivers}</Text>
          <Text style={styles.contact}>{driverData.contacts}</Text>
          <Text style={styles.email}>{driverData.emails}</Text>
          <Text style={styles.bus}>{driverData.buses}</Text>
          <Text style={styles.route}>{driverData.routes}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.emptyContainer}>
          <Icon name="account-off" size={80} color="#bbb" />
          <Text style={styles.noDataText}>No driver data available</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      {renderDriverInfo()}
      <Button
        title="Log Out"
        buttonStyle={styles.logoutButton}
        onPress={() => console.log("Log Out button pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  contact: {
    fontSize: 18,
    marginBottom: 8,
  },
  email: {
    fontSize: 18,
    marginBottom: 8,
  },
  bus: {
    fontSize: 18,
    marginBottom: 8,
  },
  route: {
    fontSize: 18,
    marginBottom: 8,
  },
  noDataText: {
    fontSize: 20,
    color: "#bbb",
    marginTop: 16,
  },
  logoutButton: {
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "red",
  },
});
