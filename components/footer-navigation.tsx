import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Define the type for navigation routes
interface RootStackParamList {
  home: undefined;
  inventory: undefined;
  alerts: undefined;
  profile: undefined;
}

export default function FooterNavigation() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.footer}>
      <Pressable style={styles.footerButton} onPress={() => navigation.navigate('home')}>
        <Ionicons name="home" size={24} color="#FFF" />
        <Text style={styles.footerText}>Inicio</Text>
      </Pressable>
      <Pressable style={styles.footerButton} onPress={() => navigation.navigate('inventory')}>
        <Ionicons name="list" size={24} color="#FFF" />
        <Text style={styles.footerText}>Inventario</Text>
      </Pressable>
      <Pressable style={styles.footerButton} onPress={() => navigation.navigate('alerts')}>
        <Ionicons name="notifications" size={24} color="#FFF" />
        <Text style={styles.footerText}>Alertas</Text>
      </Pressable>
      <Pressable style={styles.footerButton} onPress={() => navigation.navigate('profile')}>
        <Ionicons name="person" size={24} color="#FFF" />
        <Text style={styles.footerText}>Perfil</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0A7EA4',
  },
  footerButton: { alignItems: 'center' },
  footerText: { fontSize: 12, color: '#FFF', marginTop: 4 },
});