import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [randombackground, setRandomBackground] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randombackground} />
      <View style={[styles.Contanier, {backgroundColor: randombackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={[styles.ActionButton]}>
            <Text style={[styles.ActionText]}>Press</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Contanier: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ActionButton: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  ActionText: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default App;

//style={[styles.palceyourcssclassname]}
//simplereactnativeappthatChangethierBGcolorWhilePressingButton
