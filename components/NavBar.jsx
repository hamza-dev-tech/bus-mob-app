import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaView, View } from "react-native";

const NavBar = () => (
  <SafeAreaView>
    <AppBar
      title="AUST"
      // subtitle="Lorem ipsum"
      centerTitle={true}
      leading={(props) => (
        <IconButton
          onPress={() => alert("button tapped")}
          icon={(props) => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
      trailing={(props) => (
        <IconButton
          icon={(props) => <Icon name="dots-vertical" {...props} />}
          {...props}
        />
      )}
    />
  </SafeAreaView>
);

export default NavBar;
