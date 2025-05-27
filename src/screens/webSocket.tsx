import React, { useEffect, useState, useRef } from 'react';
import { Button, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';

const WebSocketScreen = () => {
  const [message, setMessage] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const ws = useRef<WebSocket | null>(null)

  useEffect(() => {
    ws.current = new WebSocket('wss://ws.postman-echo.com/raw');

    ws.current.onopen = () => {
      setLogs((prev) => [...prev, '✅ Conectado al WebSocket']);
    };

    ws.current.onmessage = (event) => {
      setLogs((prev) => [...prev, `📥 Mensaje recibido: ${event.data}`]);
    };

    ws.current.onerror = (error) => {
      setLogs((prev) => [...prev, '❌ Error en WebSocket']);
    };

    ws.current.onclose = () => {
      setLogs((prev) => [...prev, '🔌 Conexión cerrada']);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws.current && message) {
      ws.current.send(message);
      setLogs((prev) => [...prev, `📤 Enviado: ${message}`]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌐 WebSocket Demo</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Escribe un mensaje"
      />
      <TouchableOpacity onPress={sendMessage} style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <View style={styles.logContainer}>
        {logs.map((log, i) => (
          <Text key={i} style={styles.log}>{log}</Text>
        ))}
      </View>
    </View>
  );
}


export default WebSocketScreen;

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 24, marginBottom: 20, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: '#2f95dc', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  logContainer: { marginTop: 20 },
  log: { fontSize: 14, marginBottom: 5 },
});