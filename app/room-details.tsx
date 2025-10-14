import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function RoomDetailsScreen() {
  const navigation = useNavigation();
  const roomName = new URLSearchParams(window.location.search).get('roomName') || 'Detalles del Cuarto';

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </Pressable>
        <Text style={styles.title}>{roomName}</Text>
      </View>

      <View style={styles.content}>
        <Ionicons name="cube" size={64} color="#0a7ea4" style={styles.icon} />
        <Text style={styles.placeholder}>Aquí puedes añadir y gestionar objetos.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0a7ea4',
  },
  backButton: {
    marginRight: 16,
  },
  title: { fontSize: 20, fontWeight: '700', color: '#FFF' },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    marginBottom: 16,
  },
  placeholder: {
    fontSize: 16,
    color: '#687076',
    textAlign: 'center',
  },
});