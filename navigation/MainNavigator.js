import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthChoiceScreen from "../screens/choice/AuthChoiceScreen";
import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/register/RegisterScreen";
import OnBoardingScreen from "../screens/onBoarding/OnBoardingScreen";
import HomeScreen from "../screens/home/HomeScreen"

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Onboarding" component={OnBoardingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="AuthChoice" component={AuthChoiceScreen} options={{headerLeft: null, headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator
