import FooterNavigation from '@/components/footer-navigation';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface Room {
  id: string;
  name: string;
  items: Item[];
}

interface Item {
  id: string;
  name: string;
}

export default function RoomScreen() {
  const route = useRoute();
  const { propertyId } = route.params as { propertyId: string };

  const rooms: Room[] = [
    { id: '1', name: 'Cocina', items: [] },
    { id: '2', name: 'Dormitorio', items: [] },
    { id: '3', name: 'Garaje', items: [] },
  ];

  const renderRoom = ({ item }: { item: Room }) => (
    <View style={styles.roomCard}>
      <Text style={styles.roomName}>{item.name}</Text>
      <Pressable style={styles.arrowButton}>
        <Ionicons name="arrow-forward" size={24} color="#0a7ea4" />
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Habitaciones</Text>
      </View>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        renderItem={renderRoom}
        contentContainerStyle={styles.listContainer}
      />

      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Añadir Habitación</Text>
      </Pressable>
      <FooterNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1E1E1E' },
  header: {
    padding: 16,
    backgroundColor: '#0A7EA4',
  },
  title: { fontSize: 20, fontWeight: '700', color: '#FFF' },
  listContainer: { padding: 16 },
  roomCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  roomName: { fontSize: 18, fontWeight: '600', color: '#11181C' },
  arrowButton: { padding: 8 },
  addButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFA726',
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});