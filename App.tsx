import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CharacterPortrait from './src/components/CharacterPortrait';

const portraits = [
  {
    name: 'Blanka',
    src: require('./src/images/blanka-portrait.png'),
  },
  {
    name: 'Cammy',
    src: require('./src/images/cammy-portrait.png'),
  },
  {
    name: 'Chun-Li',
    src: require('./src/images/chun-li-portrait.png'),
  },
  {
    name: 'Dee Jay',
    src: require('./src/images/deejay-portrait.png'),
  },
  {
    name: 'Dhalsim',
    src: require('./src/images/dhalsim-portrait.png'),
  },
  {
    name: 'E. Honda',
    src: require('./src/images/e.honda-portrait.png'),
  },
  {
    name: 'Guile',
    src: require('./src/images/guile-portrait.png'),
  },
  {
    name: 'Jamie',
    src: require('./src/images/jamie-portrait.png'),
  },
  {
    name: 'JP',
    src: require('./src/images/jp-portrait.png'),
  },
  {
    name: 'Juri',
    src: require('./src/images/juri-portrait.png'),
  },
  {
    name: 'Ken',
    src: require('./src/images/ken-portrait.png'),
  },
  {
    name: 'Kimberly',
    src: require('./src/images/kimberly-portrait.png'),
  },
  {
    name: 'Lily',
    src: require('./src/images/lily-portrait.png'),
  },
  {
    name: 'Luke',
    src: require('./src/images/luke-portrait.png'),
  },
  {
    name: 'Manon',
    src: require('./src/images/manon-portrait.png'),
  },
  {
    name: 'Marisa',
    src: require('./src/images/marisa-portrait.png'),
  },
  {
    name: 'Ryu',
    src: require('./src/images/ryu-portrait.png'),
  },
  {
    name: 'Zangief',
    src: require('./src/images/zangief-portrait.png'),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={portraits}
        numColumns={4}
        renderItem={({ item }) => <CharacterPortrait portrait={item} />}
        keyExtractor={(portrait) => portrait.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: 'auto',
  },
});
