import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker, AnimatedRegion, Polyline } from "react-native-maps";
import { doc, onSnapshot } from 'firebase/firestore';
import { db3 } from './Firebase';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function LiveTrack({ route }) {
  const { email } = route.params;
  const [busLocation, setBusLocation] = useState(null);
  const [data, setData] = useState("null");
  const [initialRegion, setInitialRegion] = useState(null);
  const [polylineCoordinates, setPolylineCoordinates] = useState([]);

  useEffect(() => {
    const busRef = doc(db3, "locations", email);
    const unsub = onSnapshot(
      busRef,
      (doc) => {
        if (doc.exists()) {
          setData({ id: doc.id, ...doc.data() });
          setInitialRegion({
            latitude: doc.data().latitude,
            longitude: doc.data().longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0221,
          });

          // Update polyline coordinates
          setPolylineCoordinates(prevCoordinates => [
            ...prevCoordinates,
            {
              latitude: doc.data().latitude,
              longitude: doc.data().longitude,
            }
          ]);
        } else {
          setData("null");
        }
      },
      (error) => {
        console.log(error);
      }
    );

    setTimeout(() => {
      setInitialRegion({
        latitude: 34.1974,
        longitude: 73.2425,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0221,
      });
    }, 2000);

    return () => {
      unsub();
    };
  }, [email]);

  const handleClearPolyline = () => {
    setPolylineCoordinates([]);
  };

  return (
    <View style={styles.container}>
      {initialRegion && (
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
        >
          {/* Render the polyline */}
          {polylineCoordinates.length > 1 && (
            <Polyline
              coordinates={polylineCoordinates}
              strokeColor="#B76D68"
              strokeWidth={2}
            />
          )}

          {/* Add markers or other map components as needed */}
          {data && (
            <Marker
              coordinate={{
                latitude: data.latitude,
                longitude: data.longitude,
              }}
            >
              <Icon name='bus' style={styles.busIcon}></Icon>
            </Marker>
          )}
        </MapView>
      )}

      {/* Clear Polyline Button */}
      <TouchableOpacity
        style={styles.clearButton}
        onPress={handleClearPolyline}
      >
        <Text style={styles.clearButtonText}>Clear route</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: "100%",
  },
  busIcon: {
    fontSize: 30,
    color: 'blue',
  },
  clearButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
