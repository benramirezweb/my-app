import React, {useEffect, useRef, useState} from "react";
import { Button, Text, TextInput, View } from "react-native";

const Closures = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const inputNameRef = useRef(null);
  const inputLastNameRef = useRef(null);
  return (
    <View style={{padding: 20, marginTop: 50, backgroundColor: 'white', flex: 1, alignItems: 'center'}}>
      <Text onPress={()=>{
        inputNameRef.current.focus();
      }}>
        inputNameRef focus
      </Text>
      <Text onPress={()=>{
        inputNameRef.current.blur();
      }}>
        inputNameRef blur
      </Text>
      <Text onPress={()=>{
        inputLastNameRef.current.focus();
      }}>
        inputLastNameRef focus
      </Text>
      <Text onPress={()=>{
        inputLastNameRef.current.blur();
      }}>
        inputLastNameRef blur
      </Text>
      <TextInput
        ref={inputNameRef}
        value={name}
        onChangeText={setName}
        style={{width: '100%', borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10}}
      />
      <TextInput
        ref={inputLastNameRef}
        value={lastName}
        onChangeText={setLastName}
        style={{width: '100%', borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 10}}
      />
    </View>
  );
}
export default Closures;