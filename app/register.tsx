import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function RegisterScreen() {
  const backgroundColor = '#e7f5dc'; // Updated background color
  const buttonColor = '#a8d5a2'; // Lighter green color
  const textColor = '#4b6154';
  const borderColor = '#dcdcdc'; // Subtle border color

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const progress = (name ? 0.25 : 0) + (email ? 0.25 : 0) + (username ? 0.25 : 0) + (password ? 0.25 : 0);

  const onRegister = () => {
    console.log('Usuario registrado:', { name, email, username, password });
    router.replace('/login');
  };

  const onBack = () => {
    router.replace('/login');
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor }]}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={[styles.iconWrap, { borderColor, borderWidth: 2 }]}> {/* Added border */}
          <Ionicons name="person-add" size={72} color={buttonColor} />
        </View>
        <Text style={[styles.title, { color: textColor }]}>Crear cuenta</Text>
        <Text style={[styles.subtitle, { color: textColor }]}>Regístrate para comenzar a usar DFind</Text>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, { backgroundColor: buttonColor, color: textColor }]} // Removed shadow
            placeholder="Nombres"
            value={name}
            onChangeText={setName}
            placeholderTextColor={textColor}
          />
          <TextInput
            style={[styles.input, { backgroundColor: buttonColor, color: textColor }]} // Removed shadow
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor={textColor}
          />
          <TextInput
            style={[styles.input, { backgroundColor: buttonColor, color: textColor }]} // Removed shadow
            placeholder="Usuario"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor={textColor}
          />
          <TextInput
            style={[styles.input, { backgroundColor: buttonColor, color: textColor }]} // Removed shadow
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor={textColor}
          />
        </View>
        <ProgressBar progress={progress} color={buttonColor} style={styles.progressBar} />
        <View style={styles.buttonRow}> {/* Updated layout for buttons */}
          <Pressable
            onPress={onBack}
            style={({ pressed }) => [styles.button, { backgroundColor: buttonColor }, pressed && { opacity: 0.9 }]}
          >
            <Text style={[styles.buttonText, { color: textColor }]}>Atrás</Text>
          </Pressable>
          <Pressable
            onPress={onRegister}
            style={({ pressed }) => [styles.button, { backgroundColor: buttonColor }, pressed && { opacity: 0.9 }]}
          >
            <Text style={[styles.buttonText, { color: textColor }]}>Registrarse</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { flex: 1, padding: 24, justifyContent: 'space-between' },
  iconWrap: {
    marginTop: 40,
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 24, fontWeight: '700', textAlign: 'center', marginTop: 16 },
  subtitle: { fontSize: 16, lineHeight: 22, textAlign: 'center', marginTop: 8 },
  form: { marginTop: 24 },
  input: {
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});