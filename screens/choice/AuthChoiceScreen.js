import React from "react";
import { Button, Text } from "native-base";
import { View, Image } from "react-native";
import Style from "./AuthChoiceScreen.style";

const AuthChoiceScreen = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <View style={Style.container}>
      <Image
        source={require("./images/mydoctor.png")}
        style={{ width: 300, height: 150, resizeMode: 'stretch' }}
      />
      <Button
        rounded
        style={Style.registerButton}
        onPress={goToRegister}
        warning
      >
        <Text>Créer un compte</Text>
      </Button>
      <View style={Style.lineContainer}>
        <View style={Style.longLine}></View>
        <Text bold style={Style.textLine}>
          OU
        </Text>
        <View style={Style.longLine}></View>
      </View>
      <Button rounded style={Style.loginButton} onPress={goToLogin}>
        <Text>Se connecter</Text>
      </Button>
    </View>
  );
};

export default AuthChoiceScreen;
