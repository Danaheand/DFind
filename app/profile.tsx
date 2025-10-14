import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Pressable,
    SafeAreaView,
    StyleSheet,
    Switch,
    Text,
    View,
} from 'react-native';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkThemeEnabled, setDarkThemeEnabled] = React.useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Ionicons name="person-circle" size={80} color="#FFF" />
        <Text style={styles.name}>Carlos Rodríguez</Text>
        <Text style={styles.email}>carlos.r@email.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gestión</Text>
        <Pressable style={styles.optionButton}>
          <Text style={styles.optionText}>Mis Propiedades</Text>
          <Ionicons name="chevron-forward" size={24} color="#687076" />
        </Pressable>
        <Pressable style={styles.optionButton}>
          <Text style={styles.optionText}>Mis Categorías</Text>
          <Ionicons name="chevron-forward" size={24} color="#687076" />
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Configuración</Text>
        <View style={styles.switchRow}>
          <Text style={styles.optionText}>Notificaciones</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>
        <View style={styles.switchRow}>
          <Text style={styles.optionText}>Tema Oscuro</Text>
          <Switch
            value={darkThemeEnabled}
            onValueChange={setDarkThemeEnabled}
          />
        </View>
      </View>

      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1E1E1E' },
  header: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0A7EA4',
  },
  name: { fontSize: 20, fontWeight: '700', color: '#FFF', marginTop: 8 },
  email: { fontSize: 14, color: '#FFF', marginTop: 4 },
  section: { marginTop: 24, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#FFF', marginBottom: 12 },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2E2E2E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionText: { fontSize: 16, fontWeight: '600', color: '#FFF' },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2E2E2E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  logoutButton: {
    marginTop: 24,
    marginHorizontal: 16,
    backgroundColor: '#E53935',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
});