import FooterNavigation from '@/components/footer-navigation';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

const palette = {
  background: '#f5f5dc',
  button: '#a8d5a2',
  dialog: '#94d6ba',
  alert: '#d4f1e0',
  footer: '#64ac8f',
  text: '#4b6154',
  logoutButton: '#e5383563',
  logoutText: '#FFFFFF',
};

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkThemeEnabled, setDarkThemeEnabled] = React.useState(false);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>
      <View style={[styles.header, { backgroundColor: palette.dialog }]}>
        <Ionicons name="person-circle" size={80} color={palette.text} />
        <Text style={[styles.name, { color: palette.text }]}>Carlos Rodríguez</Text>
        <Text style={[styles.email, { color: palette.text }]}>carlos.r@email.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: palette.text }]}>Gestión</Text>
        <Pressable style={[styles.optionButton, { backgroundColor: palette.alert }]} onPress={() => router.push('/inventory')}>
          <Text style={[styles.optionText, { color: palette.text }]}>Mis Propiedades</Text>
          <Ionicons name="chevron-forward" size={24} color={palette.text} />
        </Pressable>
        <Pressable style={[styles.optionButton, { backgroundColor: palette.alert }]}>
          <Text style={[styles.optionText, { color: palette.text }]}>Mis Categorías</Text>
          <Ionicons name="chevron-forward" size={24} color={palette.text} />
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: palette.text }]}>Configuración</Text>
        <View style={[styles.switchRow, { backgroundColor: palette.alert }]}>
          <Text style={[styles.optionText, { color: palette.text }]}>Notificaciones</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: palette.dialog, true: palette.footer }}
            thumbColor={notificationsEnabled ? palette.text : palette.background}
          />
        </View>
        <View style={[styles.switchRow, { backgroundColor: palette.alert }]}>
          <Text style={[styles.optionText, { color: palette.text }]}>Tema Oscuro</Text>
          <Switch
            value={darkThemeEnabled}
            onValueChange={setDarkThemeEnabled}
            trackColor={{ false: palette.dialog, true: palette.footer }}
            thumbColor={darkThemeEnabled ? palette.text : palette.background}
          />
        </View>
      </View>

      <Pressable style={[styles.logoutButton, { backgroundColor: palette.logoutButton }]} onPress={() => router.push('/login')}>
        <Text style={[styles.logoutText, { color: palette.logoutText }]}>Cerrar Sesión</Text>
      </Pressable>

      <View style={[styles.footer, { backgroundColor: palette.footer }]}>
        <Pressable style={styles.footerButton} onPress={() => router.push('/home')}>
          <Ionicons name="home" size={24} color="#FFF" />
          <Text style={styles.footerText}>Inicio</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => router.push('/inventory')}>
          <Ionicons name="list" size={24} color="#FFF" />
          <Text style={styles.footerText}>Inventario</Text>
        </Pressable>
        <Pressable
          style={[styles.addButton, { backgroundColor: palette.button }]}
          onPress={() => router.push('/add-object')}
        >
          <Ionicons name="add" size={32} color="#FFF" />
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => router.push('/alerts')}>
          <Ionicons name="notifications" size={24} color="#FFF" />
          <Text style={styles.footerText}>Alertas</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => router.push('/profile')}>
          <Ionicons name="person" size={24} color="#FFF" />
          <Text style={styles.footerText}>Perfil</Text>
        </Pressable>
      </View>

      <FooterNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: {
    alignItems: 'center',
    padding: 16,
  },
  name: { fontSize: 20, fontWeight: '700', marginTop: 8 },
  email: { fontSize: 14, marginTop: 4 },
  section: { marginTop: 24, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionText: { fontSize: 16, fontWeight: '600' },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  logoutButton: {
    marginTop: 24,
    marginHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: { fontSize: 16, fontWeight: '600' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
  },
  footerButton: { alignItems: 'center' },
  footerText: { fontSize: 12, color: '#FFF', marginTop: 4 },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
});