import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroScreen from "../screens/Intro";
import LoginScreen from "../screens/Login";
import CreateWallet from "../screens/CreateWallet";
import CreatedScreen from "../screens/Created";
import MainScreen from "../screens/Main";
import TokentScreen from "../screens/Token";
import NetworkScreen from "../screens/Network";
import SendScreen from "../screens/Send";
import ReceiveScreen from "../screens/Receive";
import BringWallet from "../screens/BringWallet";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen name="intro" component={IntroScreen} />
      <Stack.Screen name="createWallet" component={CreateWallet} />
      <Stack.Screen name="created" component={CreatedScreen} />
      <Stack.Screen name="bring" component={BringWallet} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="main" component={MainScreen} />
      <Stack.Screen name="send" component={SendScreen} />
      <Stack.Screen name="receive" component={ReceiveScreen} />
      <Stack.Screen name="network" component={NetworkScreen} />
      <Stack.Screen name="token" component={TokentScreen} />
    </Stack.Navigator>
  );
};

const MainStack = () => {
  return <Main />;
};

export default MainStack;
