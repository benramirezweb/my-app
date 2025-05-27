import { View, Text, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'

export default function UserefAnimations() {
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnimation, {
        toValue: 1,
        // friction: 5,
        duration: 3000,
        delay: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
  }, [])
  const a = [0,1,2,3,4,5];

  const b = a;

  b[3] = 600000;

  console.log('a');
  console.log(a);
  console.log('a');
  
  return (
    <View>
      <Text onPress={()=>{
        Animated.timing(fadeAnimation, {
          toValue: 0,
          // friction: 5,
          duration: 3000,
          delay: 1000,
          // easing: Easing.bounce,
          useNativeDriver: true,
        }).start();
      }}>userefAnimations</Text>
      <Text onPress={()=>{
        Animated.timing(fadeAnimation).stop();
      }}>
        STOP
      </Text>
      <Animated.View style={{opacity: fadeAnimation}}>
        <Text style={{fontSize: 30}}>
          Hola mundo!
        </Text>
      </Animated.View>
    </View>
  )
}