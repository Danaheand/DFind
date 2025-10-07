import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

interface Item {
  id: string;
  name: string;
  quantity: number;
}

interface Room {
  id: string;
  name: string;
  items: Item[];
}

export default function InventoryScreen() {
  const router = useRouter();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [newRoomName, setNewRoomName] = useState('');

  const addRoom = () => {
    if (newRoomName.trim()) {
      setRooms((prevRooms) => [
        ...prevRooms,
        { id: Date.now().toString(), name: newRoomName, items: [] },
      ]);
      setNewRoomName('');
    }
  };

  const renderRoom = ({ item }: { item: Room }) => (
    <View style={styles.roomCard}>
      <Text style={styles.roomName}>{item.name}</Text>
      <Text style={styles.roomItems}>{item.items.length} productos</Text>
      <Pressable
        onPress={() => router.push(`/room-details?roomName=${item.name}`)}
        style={styles.arrowButton}
      >
        <Ionicons name="arrow-forward" size={24} color="#0a7ea4" />
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>Inventario del Hogar</Text>
      </View>

      <FlatList
        data={rooms}
        keyExtractor={(item) => item.id}
        renderItem={renderRoom}
        contentContainerStyle={styles.roomList}
      />

      <View style={styles.addRoomContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre del cuarto"
          value={newRoomName}
          onChangeText={setNewRoomName}
          placeholderTextColor="#687076"
        />
        <Pressable
          onPress={addRoom}
          style={({ pressed }) => [styles.addRoomButton, pressed && { opacity: 0.9 }]}
        >
          <Text style={styles.addRoomButtonText}>Agregar cuarto</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0a7ea4',
  },
  title: { fontSize: 20, fontWeight: '700', color: '#FFF' },
  roomList: { padding: 16 },
  roomCard: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  roomName: { fontSize: 18, fontWeight: '600', color: '#11181C' },
  roomItems: { fontSize: 14, color: '#687076', marginTop: 4 },
  addRoomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E6E6E6',
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E6F4FE',
    color: '#11181C',
  },
  addRoomButton: {
    backgroundColor: '#FFA726',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addRoomButtonText: { color: '#FFF', fontSize: 14, fontWeight: '600' },
  arrowButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function InventoryLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}