import { useNavigation } from '@react-navigation/native';
import react from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const go = () => {
    navigation.navigate('WebSocketScreen');
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomButton screen='Users' />
        <CustomButton screen='Albums' />
        <CustomButton screen='Posts' />
        <CustomButton screen='Closures' />
        <CustomButton screen='Arrays' />
        <CustomButton screen='Reduce' />
        <CustomButton screen='ORLOGICO' />
        <CustomButton screen='UncontrolledInput' />
        <CustomButton screen='ShalloMerge' />
        <CustomButton screen='Reduce2' />
        <CustomButton screen='Arrays2' />
        <CustomButton screen='Objectentries' />
        <CustomButton screen='UserefAnimations' />
        <CustomButton screen='OptimizedComponent' />      
        <Button
          title='WebSocket'
          onPress={go}
        />
      </View>
    </ScrollView>
  );
};

const CustomButton = ({ screen }: { screen: string }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)} style={styles.card}>
      <Text>{`Go to ${screen}`}</Text>
    </TouchableOpacity>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#aaaaaa',
    padding: 20,
    marginBottom: 10,
    borderRadius: 20,
    width: '100%',
  },
});