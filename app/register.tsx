import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import FooterNavigation from '@/components/footer-navigation';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = () => {
    // Aquí puedes agregar la lógica para registrar al usuario
    console.log('Usuario registrado:', { name, email, username, password });
    router.replace('/login'); // Regresar a la pantalla de inicio de sesión después del registro
  };

  const onBack = () => {
    router.replace('/login'); // Navegar de regreso a la pantalla de inicio de sesión
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.iconWrap}>
          <Ionicons name="person-add" size={72} color="#0a7ea4" />
        </View>
        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.subtitle}>Regístrate para comenzar a usar DFind</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nombres"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#687076"
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#687076"
          />
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
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
        </View>
        <View style={styles.bottomRow}>
          <Pressable onPress={onBack} style={({ pressed }) => [styles.button, pressed && { opacity: 0.9 }] }>
            <Text style={styles.buttonText}>Atrás</Text>
          </Pressable>
          <Pressable onPress={onRegister} style={({ pressed }) => [styles.button, pressed && { opacity: 0.9 }] }>
            <Text style={styles.buttonText}>Registrarse</Text>
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
  subtitle: { fontSize: 16, lineHeight: 22, textAlign: 'center', color: '#555', marginTop: 8 },
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
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#FFA726', // naranja para energía
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});