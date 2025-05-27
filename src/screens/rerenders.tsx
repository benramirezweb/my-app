import React, { useCallback, useRef, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const OptimizedComponent = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    console.log('Texto enviado:', text);
  };

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Bienvenido</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, padding: 8 }}
      />
      <SubmitButton onPress={handleSubmit} /> {/* 👈 cambia en cada render */}
    </View>
  );
};

const SubmitButton = React.memo(({ onPress }) => {
  console.log('🔁 Render SubmitButton');
  return <Button title="Enviar" onPress={onPress} />;
});


export default OptimizedComponent;