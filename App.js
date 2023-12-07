import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dice from './src/components/Dice';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  const [diceValue, setDiceValue] = useState(1);
  const [secondDiceValue, setSecondDiceValue] = useState(1);
  const [winner, setWinner] = useState('');

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  const secondRollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setSecondDiceValue(newValue);
  };

  useEffect(() => {
    determinarVencedor(diceValue, secondDiceValue);
  }, [diceValue, secondDiceValue]);

  const determinarVencedor = (dado1, dado2) => {
    if (dado1 > dado2) {
      setWinner('Dado 1 venceu!');
    } else if (dado1 < dado2) {
      setWinner('Dado 2 venceu!');
    } else {
      setWinner('Empate!');
    }
  };

  const rollBothDices = () => {
    rollDice();
    secondRollDice();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice Game</Text>
      <Dice value={diceValue} onPress={rollDice} />
      <Dice value={secondDiceValue} onPress={secondRollDice} />
      <Icon name="refresh" size={30} color="black" onPress={rollBothDices} />
      <Text style={styles.winnerText}>{winner}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  winnerText: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default App;
