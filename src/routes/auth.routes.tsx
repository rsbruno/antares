import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AppointmentsDetails } from "../screens/AppointmentsDetails";
import { AppointmentsCreate } from "../screens/AppointmentsCreate";
import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentsDetails" component={AppointmentsDetails} />
      <Screen name="AppointmentsCreate" component={AppointmentsCreate} />
    </Navigator>
  );
}
