import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'; // Importar Image para mostrar el logo

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Logo de la aplicación */}
        <View style={styles.iconWrap}>
          <Image source={require('../assets/images/DFind.png')} style={styles.logo} />
        </View>

        <Text style={styles.title}>¡Bienvenido a DFind!</Text>
        <Text style={styles.subtitle}>
          Configuremos tu inventario del hogar. Lleva el control de lo que tienes en cada habitación,
          con costos y recordatorios… ¡todo en un solo lugar!
        </Text>
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
  logo: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
  },
  title: { fontSize: 28, fontWeight: '700', textAlign: 'center', marginTop: 24 },
  subtitle: { fontSize: 16, lineHeight: 22, textAlign: 'center', color: '#555', marginTop: 8 },
});
