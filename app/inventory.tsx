import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface Property {
  id: string;
  name: string;
  rooms: Room[];
}

interface Room {
  id: string;
  name: string;
  items: Item[];
}

interface Item {
  id: string;
  name: string;
}

interface RootStackParamList {
  AddObject: undefined;
  RoomScreen: { propertyId: string };
}

export default function InventoryScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [properties, setProperties] = useState<Property[]>([]);
  const [newPropertyName, setNewPropertyName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const addProperty = () => {
    if (newPropertyName.trim()) {
      setProperties((prev) => [
        ...prev,
        { id: Date.now().toString(), name: newPropertyName, rooms: [] },
      ]);
      setNewPropertyName('');
      setModalVisible(false);
    }
  };

  const renderProperty = ({ item }: { item: Property }) => (
    <View style={styles.propertyCard}>
      <Text style={styles.propertyName}>{item.name}</Text>
      <Pressable
        style={styles.arrowButton}
        onPress={() => navigation.navigate('RoomScreen', { propertyId: item.id })}
      >
        <Ionicons name="arrow-forward" size={24} color="#0a7ea4" />
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Propiedades</Text>
      </View>

      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={renderProperty}
        contentContainerStyle={styles.listContainer}
      />

      <Pressable
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Añadir Propiedad</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Añadir Propiedad</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre de propiedad"
              value={newPropertyName}
              onChangeText={setNewPropertyName}
            />
            <View style={styles.modalButtons}>
              <Pressable
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={styles.saveButton}
                onPress={addProperty}
              >
                <Text style={styles.saveButtonText}>Guardar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.footer}>
        <Pressable style={styles.footerButton}>
          <Ionicons name="home" size={24} color="#FFF" />
          <Text style={styles.footerText}>Inicio</Text>
        </Pressable>
        <Pressable style={styles.footerButton}>
          <Ionicons name="list" size={24} color="#FFF" />
          <Text style={styles.footerText}>Inventario</Text>
        </Pressable>
        <Pressable
          style={styles.addButton}
          onPress={() => navigation.navigate('AddObject')}
        >
          <Ionicons name="add" size={32} color="#FFF" />
        </Pressable>
        <Pressable style={styles.footerButton}>
          <Ionicons name="notifications" size={24} color="#FFF" />
          <Text style={styles.footerText}>Alertas</Text>
        </Pressable>
        <Pressable style={styles.footerButton}>
          <Ionicons name="person" size={24} color="#FFF" />
          <Text style={styles.footerText}>Perfil</Text>
        </Pressable>
      </View>
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
  propertyCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  propertyName: { fontSize: 18, fontWeight: '600', color: '#11181C' },
  arrowButton: { padding: 8 },
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
  addButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  modalTitle: { fontSize: 18, fontWeight: '700', marginBottom: 16 },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 8,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#E6E6E6',
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  cancelButtonText: { color: '#11181C', fontSize: 16, fontWeight: '600' },
  saveButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#0A7EA4',
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  saveButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
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