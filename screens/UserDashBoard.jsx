import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { useEffect, useState } from "react";
import TypingAnimation from "../components/TypingAnimation";

let locationOfInterest = [
  {
    title: "AUST",
    location: {
      latitude: 34.072884544559955,
      latitudeDelta: 0.06364069109846326,
      longitude: 73.15918240696192,
      longitudeDelta: 0.0766146183013916,
    },
  },
];

const UserDashBoard = ({ navigation, route }) => {
  const { ID } = route.params;
  const [data, setData] = useState(null);
  let [greetingCompleted, setGreetingCompleted] = useState(false);
  let [nextPressed, setNextPressed] = useState(false);
  const regionChange = (region) => {};
  const showLocationOfInterest = () => {
    locationOfInterest.map((item, index) => {
      return (
        <Marker key={index} coordinate={item.location} title={item.title} />
      );
    });
  };

  useEffect(() => {
    const ref = doc(db, "user", JSON.stringify(ID));
    const unsub = onSnapshot(
      ref,
      (doc) => {
        if (doc.exists()) {
          setData({ id: ID, ...doc.data() });
        }
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  const handleNavigation = (screeenName) => {
    navigation.navigate(screeenName);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#2C2B3C" }}>
      {data && (
        <View
          style={{
            flex: 0.1,
            backgroundColor: "#2C2B3C",
            height: 20,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <TypingAnimation
            text={["Hi! Welcome " + data.user_name]}
            onComplete={() => setGreetingCompleted(true)}
          />
        </View>
      )}
      <View
        style={{
          flex: 0.4,
          gap: 10,
          width: "93%",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Account", {
              name: data.user_name,
              email: data.user_email,
              entry: data.entrydate,
              number: data.user_number,
            })
          }
          style={{ zIndex: 1 }}
        >
          <View
            style={{
              backgroundColor: "rgba(188, 185, 185, 0.17)",
              height: 60,
              flexDirection: "row",
              alignItems: "center",

              marginTop: 10,
              borderRadius: 30,
            }}
          >
            <Icon
              name="account"
              size={24}
              style={{ color: "#B76D68", marginLeft: 15 }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 13,
              }}
            >
              <Text style={{ fontSize: 15, color: "#B76D68" }}>Account</Text>
            </View>
            <Icon
              name="chevron-right"
              size={24}
              style={{ color: "#B76D68", marginRight: 15 }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Buses List")}
          style={{ zIndex: 1 }}
        >
          <View
            style={{
              backgroundColor: "rgba(188, 185, 185, 0.17)",
              height: 60,
              flexDirection: "row",
              alignItems: "center",

              marginTop: 10,
              borderRadius: 30,
            }}
          >
            <Icon
              name="bus"
              size={24}
              style={{ color: "#B76D68", marginLeft: 15 }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 13,
              }}
            >
              <Text style={{ fontSize: 15, color: "#B76D68" }}>Buses List</Text>
            </View>
            <Icon
              name="chevron-right"
              size={24}
              style={{ color: "#B76D68", marginRight: 15 }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Schedule")}
          style={{ zIndex: 1 }}
        >
          <View
            style={{
              backgroundColor: "rgba(188, 185, 185, 0.17)",
              height: 60,
              flexDirection: "row",
              alignItems: "center",

              marginTop: 10,
              borderRadius: 30,
            }}
          >
            <Icon
              name="calendar-alert"
              size={24}
              style={{ color: "#B76D68", marginLeft: 15 }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 13,
              }}
            >
              <Text style={{ fontSize: 15, color: "#B76D68" }}>Schedule</Text>
            </View>
            <Icon
              name="chevron-right"
              size={24}
              style={{ color: "#B76D68", marginRight: 15 }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Complain", {
              name: data.user_name,
              email: data.user_email,
              number: data.user_number,
            })
          }
          style={{ zIndex: 1 }}
        >
          <View
            style={{
              backgroundColor: "rgba(188, 185, 185, 0.17)",
              height: 60,
              flexDirection: "row",
              alignItems: "center",

              marginTop: 10,
              borderRadius: 30,
            }}
          >
            <Icon
              name="alert-circle"
              size={24}
              style={{ color: "#B76D68", marginLeft: 15 }}
            />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 13,
              }}
            >
              <Text style={{ fontSize: 15, color: "#B76D68" }}>Complain</Text>
            </View>
            <Icon
              name="chevron-right"
              size={24}
              style={{ color: "#B76D68", marginRight: 15 }}
            />
          </View>
        </TouchableOpacity>

        {/*  */}
      </View>

      {/*  */}
      <View
        style={{
          flex: 0.5,
          gap: 10,
          margin: 15,
          backgroundColor: "#fff",
          borderRadius: 30,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 6.78,

          elevation: 10,
          marginTop: 30,
        }}
      >
        <MapView
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 30,
          }}
          provider="google"
          onRegionChange={regionChange}
          customMapStyle={generatedMapStyle}
          region={{
            latitude: 34.072884544559955,
            latitudeDelta: 0.02364069109846326,
            longitude: 73.15918240696192,
            longitudeDelta: 0.0766146183013916,
          }}
        ></MapView>
      </View>
    </View>
  );
};

const generatedMapStyle = [
  ...[
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#242f3e",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#263c3f",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#6b9a76",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#38414e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#212a37",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9ca5b3",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#746855",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#1f2835",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#f3d19c",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#2f3948",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#d59563",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#515c6d",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#17263c",
        },
      ],
    },
  ],
];
export default UserDashBoard;
