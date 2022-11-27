import React from "react";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import OficinasScreen from "./screens/oficinas";
import IndicacaoScreen from "./screens/indicacao";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OficinaDetailsScreen from "./screens/oficinaDetails";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#0066ff",
          },
          headerTitleStyle: {
            color: "#FFF",
          },
        }}
      >
        <Tab.Screen
          name="OficinaRoute"
          component={OficinaRoute}
          options={{ title: "Oficinas", headerShown: false }}
        />
        <Tab.Screen
          name="IndicacaoScreen"
          component={IndicacaoScreen}
          options={{ title: "Indicação" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator();

const OficinaRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0066ff",
        },
        headerTitleStyle: {
          color: "#FFF",
        },
      }}
    >
      <Stack.Screen
        name="OficinasScreen"
        component={OficinasScreen}
        options={{ title: "Oficinas" }}
      />
      <Stack.Screen
        name="OficinaDetailsScreen"
        component={OficinaDetailsScreen}
        options={{ title: "Detalhes" }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
