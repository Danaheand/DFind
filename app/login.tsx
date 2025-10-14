import FooterNavigation from '@/components/footer-navigation';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { STORAGE_KEYS } from '../constants/storageKeys';

export default function LoginScreen() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const onLogin = async () => {
    if (identifier === 'admin' && password === '123') {
      await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, 'demo-token');
      router.push('/inventory'); // Navegar a la pantalla de inventario
    } else {
      setError('Credenciales incorrectas.');
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.iconWrap}>
          <Ionicons name="log-in" size={72} color="#0a7ea4" />
        </View>
        <Text style={styles.title}>Iniciar sesión</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Usuario o Correo"
            autoCapitalize="none"
            value={identifier}
            onChangeText={setIdentifier}
            placeholderTextColor="#687076"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#687076"
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
        <Text style={styles.registerLink} onPress={() => router.push('/register')}>
          ¿No tienes cuenta? <Text style={styles.registerLinkHighlight}>Regístrate</Text>
        </Text>
        <View style={styles.bottomRow}>
          <Pressable onPress={onLogin} style={({ pressed }) => [styles.button, pressed && { opacity: 0.9 }] }>
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </View>
      </View>
      <FooterNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  container: { flex: 1, padding: 24, justifyContent: 'space-between' },
  iconWrap: {
    marginTop: 40,
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6F4FE', // azul claro para confianza
  },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginTop: 16, color: '#0a7ea4' },
  form: { marginTop: 24 },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E6F4FE',
    color: '#11181C',
  },
  error: { color: '#E53935', textAlign: 'center', marginBottom: 8 },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#FFA726', // naranja para energía
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  registerLink: {
    marginBottom: 20, // Subo el enlace para que no esté tan abajo
    textAlign: 'center',
    color: '#687076',
    fontSize: 14,
  },
  registerLinkHighlight: {
    color: '#0a7ea4',
    fontWeight: '600',
  },
});
