import { View, Text, TouchableOpacity } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db2 } from "../Firebase";
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

// each value represents a goal ring in Progress chart
const data = [
  {
    name: "Haripur",
    population: 10,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Abbottabad",
    population: 6,
    color: "green",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Havelian",
    population: 2,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Mansehra",
    population: 8,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];
export default function BusesList({ navigation }) {
  const handleNavigation = (screeenName) => {
    navigation.navigate(screeenName);
  };

  const { width, height } = Dimensions.get("window");

  const [busdata, setData] = useState([]);
  const [selectedBusId, setSelectedBusId] = useState(null);
  const dynamicFontSize = (size) => {
    const scaleFactor = width < 400 ? 0.8 : 1;
    return size * scaleFactor;
  };

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db2, "buses"),
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

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#2C2B3C" }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginBottom: 10,
            flex: 1,
            height: 40,
            alignItems: "center",
            flexDirection: "row",
            borderBottomColor: "white",
            borderBottomWidth: 1,
          }}
        >
          <View style={{ marginLeft: 50 }}>
            <Text
              style={{ color: "#B76D68", fontSize: 16, fontWeight: "bold" }}
            >
              Bus
            </Text>
          </View>
          <View style={{ marginLeft: 72 }}>
            <Text
              style={{ color: "#B76D68", fontSize: 16, fontWeight: "bold" }}
            >
              Route
            </Text>
          </View>
        </View>
        {busdata.map((item) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Bus Details", {
                  ID: item.id,
                  Route: item.routes,
                  bus: item.buses,
                  driver: item.drivers,
                  contact:item.contacts,
                  image:item.image,
                  email:item.emails
                })
              }
              key={item.id}
            >
              <View
                style={{
                  backgroundColor: "rgba(188, 185, 185, 0.17)",
                  height: height * 0.08,
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomColor: "gray",
                  borderBottomWidth: 0.6,
                  marginTop: 10,
                }}
              >
                <Icon
                  name="bus"
                  size={dynamicFontSize(30)}
                  style={{ color: "#B76D68", marginLeft: 15 }}
                />
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    marginLeft: 14,
                  }}
                >
                  <Text style={{ fontSize: dynamicFontSize(15), color: "#B76D68", width: 90 }}>
                    {item.buses}
                  </Text>
                  <Text
                    style={{
                      fontSize: dynamicFontSize(15),
                      color: "#B76D68",
                      marginLeft: width * 0.02,
                      width: 130,
                    }}
                  >
                    {item.routes}
                  </Text>
                </View>
                <Text
                  style={{ fontSize: dynamicFontSize(15), color: "rgba(192, 173, 173, 0.33)" }}
                >
                  Details
                </Text>
                <Icon
                  name="chevron-right"
                  size={24}
                  style={{ color: "#B76D68", marginRight: 15 }}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          width: "95%",
          backgroundColor: "rgba(188, 185, 185, 0.17)",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
          marginBottom: 20,
          borderRadius: 30,
        }}
      >
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          center={[10, 0]}
          absolute
        />
      </View>
    </ScrollView>
  );
}
