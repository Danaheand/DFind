import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

interface AddObjectScreenProps {
  navigation: any;
}

export default function AddObjectScreen({ navigation }: AddObjectScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Botón de cierre */}
      <Pressable style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Ionicons name="close" size={24} color="#FFF" />
      </Pressable>

      <View style={styles.container}>
        <Text style={styles.title}>Añadir Nuevo Objeto</Text>

        {/* Sección: ¿Qué es? */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. ¿Qué es?</Text>
          <Pressable style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>Tocar para añadir foto</Text>
          </Pressable>
          <TextInput style={styles.input} placeholder="* Nombre del Objeto" />
          <TextInput style={styles.input} placeholder="Descripción (opcional)" />
          <TextInput style={styles.input} placeholder="Seleccionar Categoría" />
        </View>

        {/* Sección: Cantidad */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Cantidad</Text>
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.smallInput]} placeholder="1" />
            <TextInput style={[styles.input, styles.smallInput]} placeholder="Unidades" />
          </View>
        </View>

        {/* Sección: ¿Dónde está? */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. ¿Dónde está?</Text>
          <TextInput style={styles.input} placeholder="Casa Principal > Cocina > Despensa" />
        </View>

        {/* Sección: Detalles y Alertas */}
        <View style={styles.section}>
          <Text style={styles.detailsLink}>Detalles y Alertas (Opcional)</Text>
        </View>

        {/* Botón: Guardar Objeto */}
        <Pressable style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Guardar Objeto</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1E1E1E' },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
  container: { flex: 1, padding: 16 },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 16,
  },
  section: { marginBottom: 16 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 8,
  },
  imagePlaceholder: {
    height: 100,
    backgroundColor: '#2E2E2E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  imagePlaceholderText: { color: '#FFF', fontSize: 14 },
  input: {
    backgroundColor: '#2E2E2E',
    borderRadius: 8,
    padding: 12,
    color: '#FFF',
    marginBottom: 8,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  smallInput: { flex: 1, marginHorizontal: 4 },
  detailsLink: {
    color: '#4A90E2',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  saveButton: {
    backgroundColor: '#4A90E2',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});