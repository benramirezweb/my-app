import react from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Albums = () => {
  return (
    <View style={styles.container}>
      <Text>
      Albums
      </Text>
    </View>
  );
};

export default Albums;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
});