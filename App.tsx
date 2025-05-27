import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './src/screens/home';
import Users from './src/screens/users';
import Albums from './src/screens/albums';
import Posts from './src/screens/posts';
import UsersDetails from './src/screens/usersDetails';
import WebSocketScreen from './src/screens/webSocket';
import Closures from './src/screens/closures';
import Arrays from './src/screens/arrays';
import Reduce from './src/screens/reduce';
import ORLOGICO from './src/screens/orlogico';
import UncontrolledInput from './src/screens/uncontrolledInput';
import ShalloMerge from './src/screens/shalloMerge';
import Reduce2 from './src/screens/reduce2';
import Arrays2 from './src/screens/arrays2';
import Objectentries from './src/screens/objectentries';
import UserefAnimations from './src/screens/userefAnimations';
import OptimizedComponent from './src/screens/rerenders';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Users' component={Users} />
        <Stack.Screen name='UserDetails' component={UsersDetails} />
        <Stack.Screen name='Albums' component={Albums} />
        <Stack.Screen name='Posts' component={Posts} />
        <Stack.Screen name='WebSocketScreen' component={WebSocketScreen} />
        <Stack.Screen name='Closures' component={Closures} />
        <Stack.Screen name='Arrays' component={Arrays} />
        <Stack.Screen name='Reduce' component={Reduce} />
        <Stack.Screen name='Reduce2' component={Reduce2} />
        <Stack.Screen name='ORLOGICO' component={ORLOGICO} />
        <Stack.Screen name='UncontrolledInput' component={UncontrolledInput} />
        <Stack.Screen name='ShalloMerge' component={ShalloMerge} />
        <Stack.Screen name='Arrays2' component={Arrays2} />
        <Stack.Screen name='Objectentries' component={Objectentries} />
        <Stack.Screen name='UserefAnimations' component={UserefAnimations} />
        <Stack.Screen name='OptimizedComponent' component={OptimizedComponent} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}



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
