import {} from "react-native";
import LogIn from "./screens/LogIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogInAsUser from "./screens/LogInAsUser";
import LogInAsDriver from "./screens/LogInAsDriver";
import SignUp from "./screens/SignUp";
import SignUpDetails from "./screens/SignUpDetails";
import UserDashBoard from "./screens/UserDashBoard";
import BusesList from "./screens/BusesList";
import DriverDashBoard from "./screens/DriverDashBoard";
import BusDetails from "./screens/BusDetails";
import Account from "./screens/Account";
import Schedule from "./screens/Schedule";
import Complain from "./screens/Complain";
import DriverLocation from "./screens/DriverLocation";
import LiveTrack from "./LiveTrack";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            animation: "fade",
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
          style={{
            borderWidth: 0,
          }}
        />
        <Stack.Screen
          name="LogIn User"
          component={LogInAsUser}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            animation: "fade",
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="LogIn Driver"
          component={LogInAsDriver}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            animation: "fade",
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Driver Dash"
          component={DriverDashBoard}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            animation: "fade",
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            animation: "fade",
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Sign Up Details"
          component={SignUpDetails}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#6200ee" },
            animation: "slide_from_bottom",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="Dash Board"
          component={UserDashBoard}
          options={{
            headerShown: false,
            headerStyle: { backgroundColor: "#6200ee" },
            animation: "slide_from_right",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Buses List"
          component={BusesList}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
          style={{
            borderWidth: 0,
          }}
        />
        <Stack.Screen
          name="Schedule"
          component={Schedule}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
          style={{
            borderWidth: 0,
          }}
        />
         <Stack.Screen
          name="Complain"
          component={Complain}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
          style={{
            borderWidth: 0,
          }}
        />
        <Stack.Screen
          name="Bus Details"
          component={BusDetails}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            presentation: "modal",
          }}
          style={{
            borderWidth: 0,
          }}
        />
         <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
          style={{
            borderWidth: 0,
          }}
        />
         <Stack.Screen
          name="Details"
          component={DriverLocation}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
          style={{
            borderWidth: 0,
          }}
        />
         <Stack.Screen
          name="Live Track"
          component={LiveTrack}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#2C2B3C" },
            headerTintColor: "#B76D68",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
          style={{
            borderWidth: 0,
          }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
