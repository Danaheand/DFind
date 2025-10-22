import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, useColorScheme, View } from 'react-native';

// Define the type for navigation routes
interface RootStackParamList {
  home: undefined;
  inventory: undefined;
  alerts: undefined;
  profile: undefined;
  AddObject: undefined; // Added route for AddObject
}

export default function FooterNavigation() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute();
  const colorScheme = useColorScheme();

  const isActive = (screen: keyof RootStackParamList) => route.name === screen;

  const activeColor = colorScheme === 'dark' ? '#64ac8f' : '#4b6154';
  const inactiveColor = colorScheme === 'dark' ? '#94d6ba' : '#c0dfc2';

  return (
    <View style={styles.footer}>
      <Pressable
        style={[styles.footerButton, isActive('home') && styles.activeButton]}
        onPress={() => navigation.navigate('home')}
      >
        <Ionicons name="home" size={24} color={isActive('home') ? activeColor : inactiveColor} />
        <Text style={[styles.footerText, isActive('home') && styles.activeText]}>Inicio</Text>
      </Pressable>
      <Pressable
        style={[styles.footerButton, isActive('inventory') && styles.activeButton]}
        onPress={() => navigation.navigate('inventory')}
      >
        <Ionicons name="list" size={24} color={isActive('inventory') ? activeColor : inactiveColor} />
        <Text style={[styles.footerText, isActive('inventory') && styles.activeText]}>Inventario</Text>
      </Pressable>
      <Pressable
        style={styles.addButton}
        onPress={() => navigation.navigate('AddObject')}
      >
        <Ionicons name="add" size={32} color="#FFF" />
      </Pressable>
      <Pressable
        style={[styles.footerButton, isActive('alerts') && styles.activeButton]}
        onPress={() => navigation.navigate('alerts')}
      >
        <Ionicons name="notifications" size={24} color={isActive('alerts') ? activeColor : inactiveColor} />
        <Text style={[styles.footerText, isActive('alerts') && styles.activeText]}>Alertas</Text>
      </Pressable>
      <Pressable
        style={[styles.footerButton, isActive('profile') && styles.activeButton]}
        onPress={() => navigation.navigate('profile')}
      >
        <Ionicons name="person" size={24} color={isActive('profile') ? activeColor : inactiveColor} />
        <Text style={[styles.footerText, isActive('profile') && styles.activeText]}>Perfil</Text>
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
  addButton: {
    backgroundColor: '#64ac8f',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
  activeButton: {
    opacity: 1,
  },
  activeText: {
    color: '#64ac8f',
    fontWeight: 'bold',
  },
});