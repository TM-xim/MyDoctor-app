import Onboarding from "react-native-onboarding-swiper";
import React from "react";
import { Image } from "react-native";
import StartButton from "./startButton/StartButton";

const OnBoardingScreen = (props) => {
  const goToAuthChoice = () => {
    props.navigation.navigate("AuthChoice");
  };

  return (
    <Onboarding
      showDone={false}
      showSkip={false}
      showNext={false}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: "#24cfe3",
          image: (
            <Image
              source={require("./images/doctor.png")}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Gardez le lien avec votre docteur",
          subtitle: <StartButton onPress={goToAuthChoice} />,
        },
        {
          backgroundColor: "#dbe324",
          image: (
            <Image
              source={require("./images/Appointment.png")}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Prenez facilement rendez-vous",
          subtitle: <StartButton onPress={goToAuthChoice} />,
        },
        {
          backgroundColor: "#24cfe3",
          image: (
            <Image
              source={require("./images/glass.png")}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: "Trouvez les docteurs à proximité",
          subtitle: <StartButton onPress={goToAuthChoice} />,
        },
      ]}
    />
  );
};

export default OnBoardingScreen;
