import React from "react";
import { Button, Text } from "native-base";
import Style from "./StartButton.style";

const StartButton = (props) => {

  return (
    <Button rounded style={Style.button} onPress={props.onPress}>
      <Text>Commencer</Text>
    </Button>
  );
};

export default StartButton;
