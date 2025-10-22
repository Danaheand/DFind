import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const backgroundColor = '#e7f5dc'; // Updated background color
  const buttonColor = '#a8d5a2'; // Lighter green color
  const textColor = '#4b6154';
  const borderColor = '#dcdcdc'; // Subtle border color
  const registerHighlightColor = '#2e4d3b'; // Darker green for 'Regístrate'

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const onLogin = () => {
    if (username === 'amelia' && password === '123') {
      router.push('/home'); // Navigate to the home screen
    } else {
      setError('Credenciales incorrectas.');
    }
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor }]}>
      <View style={styles.container}>
        <View style={[styles.iconWrap, { borderColor, borderWidth: 2 }]}>
          <Ionicons name="log-in" size={72} color={buttonColor} />
        </View>
        <Text style={[styles.title, { color: textColor }]}>Iniciar sesión</Text>
        <View style={styles.form}>
          <TextInput
            style={[styles.input, { backgroundColor: buttonColor, color: textColor }]}
            placeholder="Usuario o Correo"
            autoCapitalize="none"
            placeholderTextColor={textColor}
            value={username}
            onChangeText={setUsername}
          />
          <View style={[styles.input, styles.passwordContainer, { backgroundColor: buttonColor }]}>
            <TextInput
              style={{ flex: 1, color: textColor }}
              placeholder="Contraseña"
              secureTextEntry={!showPassword}
              placeholderTextColor={textColor}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconWrap}>
              <Ionicons
                name={showPassword ? 'eye-off' : 'eye'}
                size={24}
                color={textColor}
              />
            </Pressable>
          </View>
          {error ? <Text style={[styles.error, { color: '#FF5252' }]}>{error}</Text> : null}
        </View>
        <Text style={[styles.registerLink, { color: textColor }]} onPress={() => router.push('/register')}>
          ¿No tienes cuenta? <Text style={[styles.registerLinkHighlight, { color: registerHighlightColor }]}>Regístrate</Text>
        </Text>
        <View style={styles.bottomRow}>
          <Pressable
            onPress={onLogin}
            style={({ pressed }) => [styles.button, { backgroundColor: buttonColor }, pressed && { opacity: 0.9 }]}
          >
            <Text style={[styles.buttonText, { color: textColor }]}>Entrar</Text>
          </Pressable>
        </View>
      </View>
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
  form: { marginTop: 24 },
  input: {
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E6F4FE',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  eyeIconWrap: {
    marginLeft: 8,
  },
  error: { textAlign: 'center', marginBottom: 8 },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
  registerLink: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 14,
  },
  registerLinkHighlight: {
    fontWeight: '600',
  },
});
