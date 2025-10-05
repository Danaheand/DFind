import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { STORAGE_KEYS } from '../constants/storageKeys';

export default function WelcomeScreen() {
  const onNext = async () => {
    // marcamos que ya vio el onboarding
    await AsyncStorage.setItem(STORAGE_KEYS.ONBOARDED, 'true');
    // lleva a login (cambia a la ruta que uses, por ejemplo /login)
    router.replace('../');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Icono de casita / inventario */}
        <View style={styles.iconWrap}>
          <Ionicons name="home" size={96} />
        </View>

        <Text style={styles.title}>¡Bienvenido a DFind!</Text>
        <Text style={styles.subtitle}>
          Configuremos tu inventario del hogar. Lleva el control de lo que tienes en cada habitación,
          con costos y recordatorios… ¡todo en un solo lugar!
        </Text>

        {/* Botón fijo abajo */}
        <View style={styles.bottom}>
          <Pressable onPress={onNext} style={({ pressed }) => [styles.button, pressed && { opacity: 0.9 }]}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  container: { flex: 1, padding: 24, justifyContent: 'space-between' },
  iconWrap: {
    marginTop: 40,
    alignSelf: 'center',
    width: 140,
    height: 140,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: { fontSize: 28, fontWeight: '700', textAlign: 'center', marginTop: 24 },
  subtitle: { fontSize: 16, lineHeight: 22, textAlign: 'center', color: '#555', marginTop: 8 },
  bottom: { paddingBottom: 10 },
  button: {
    backgroundColor: '#2E2E2E', // cámbialo por tu color primario
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: '600' },
});
