import { TextInput, View, Text, Button } from 'react-native';
import { useRef, useState } from 'react';

export default function UncontrolledInput() {
  const inputRef = useRef<TextInput>(null);
  const [value, setValue] = useState('');

  const handlePress = () => {
    inputRef.current?.blur(); // Solo accedemos al ref
    inputRef.current?.measure((x, y, width, height, pageX, pageY) => {
      console.log('Input position:', { x, y, pageX, pageY });
    });
  };

  return (
    <View>
      <TextInput
        ref={inputRef}
        placeholder="No controlado"
        style={{ borderWidth: 1, marginBottom: 10 }}
        onChangeText={setValue}
      />
      <Button title="Obtener posición" onPress={handlePress} />
      <Text>Valor local (solo lectura): {value}</Text>
    </View>
  );
}
