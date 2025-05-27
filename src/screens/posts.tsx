import react from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Posts = () => {
  return (
    <View style={styles.container}>
      <Text>
      Posts
      </Text>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
});