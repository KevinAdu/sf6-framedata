import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';

const styles = {
  portrait: {
    flex: 1,
    maxWidth: '25%', // 100% devided by the number of rows you want
    alignItems: 'center',

    // my visual styles; not important for the grid
    padding: 10,
    backgroundColor: 'rgba(249, 180, 45, 0.25)',
    borderWidth: 1.5,
    borderColor: '#fff',
  },
};

type PropsType = {
  portrait: CharacterPortraitType;
};

type CharacterPortraitType = {
  name: string;
  src: any;
};

// RN Code
const CharacterPortrait = ({ portrait }: PropsType) => {
  const imgSize = Dimensions.get('window').width / 4;
  return (
    <View key={portrait.name} styles={styles.portrait}>
      <Image style={{ width: imgSize, height: imgSize }} source={portrait.src} />
      <Text>{portrait.name}</Text>
    </View>
  );
};

export default CharacterPortrait;
