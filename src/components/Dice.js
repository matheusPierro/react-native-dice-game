import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Face1 from "../../assets/face1.png";
import Face2 from "../../assets/face2.png";
import Face3 from "../../assets/face3.png";
import Face4 from "../../assets/face4.png";
import Face5 from "../../assets/face5.png";
import Face6 from "../../assets/face6.png";

const Dice = ({ value, onPress }) => {
  const imgDice = (value) => {
    switch (value) {
      case 1:
        return <Image source={Face1} style={{ width: 50, height: 50 }} />;
      case 2:
        return <Image source={Face2} style={{ width: 50, height: 50 }} />;
      case 3:
        return <Image source={Face3} style={{ width: 50, height: 50 }} />;
      case 4:
        return <Image source={Face4} style={{ width: 50, height: 50 }} />;
      case 5:
        return <Image source={Face5} style={{ width: 50, height: 50 }} />;
      case 6:
        return <Image source={Face6} style={{ width: 50, height: 50 }} />;
      default:
        return <Image source={Face1} style={{ width: 50, height: 50 }} />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ alignItems: "center", margin: 10 }}>
        {imgDice(value)}
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Dice;
