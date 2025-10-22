import FooterNavigation from '@/components/footer-navigation';
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  useColorScheme,
  View,
} from 'react-native';

interface RootStackParamList {
  AddObject: undefined;
  Home: undefined;
  Inventory: undefined;
  Alerts: undefined;
  Profile: undefined;
}

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const colorScheme = useColorScheme();

  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkThemeEnabled, setDarkThemeEnabled] = React.useState(false);

  const backgroundColor = colorScheme === 'dark' ? '#4b6154' : '#c0dfc2';
  const headerColor = colorScheme === 'dark' ? '#64ac8f' : '#94d6ba';
  const textColor = colorScheme === 'dark' ? '#e7f5dc' : '#4b6154';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <View style={[styles.header, { backgroundColor: headerColor }]}>
        <Ionicons name="person-circle" size={80} color={textColor} />
        <Text style={[styles.name, { color: textColor }]}>Carlos Rodríguez</Text>
        <Text style={[styles.email, { color: textColor }]}>carlos.r@email.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Gestión</Text>
        <Pressable style={styles.optionButton}>
          <Text style={[styles.optionText, { color: textColor }]}>Mis Propiedades</Text>
          <Ionicons name="chevron-forward" size={24} color={textColor} />
        </Pressable>
        <Pressable style={styles.optionButton}>
          <Text style={[styles.optionText, { color: textColor }]}>Mis Categorías</Text>
          <Ionicons name="chevron-forward" size={24} color={textColor} />
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: textColor }]}>Configuración</Text>
        <View style={styles.switchRow}>
          <Text style={[styles.optionText, { color: textColor }]}>Notificaciones</Text>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: '#94d6ba', true: '#64ac8f' }}
            thumbColor={notificationsEnabled ? '#4b6154' : '#c0dfc2'}
          />
        </View>
        <View style={styles.switchRow}>
          <Text style={[styles.optionText, { color: textColor }]}>Tema Oscuro</Text>
          <Switch
            value={darkThemeEnabled}
            onValueChange={setDarkThemeEnabled}
            trackColor={{ false: '#94d6ba', true: '#64ac8f' }}
            thumbColor={darkThemeEnabled ? '#4b6154' : '#c0dfc2'}
          />
        </View>
      </View>

      <Pressable style={styles.logoutButton}>
        <Text style={[styles.logoutText, { color: textColor }]}>Cerrar Sesión</Text>
      </Pressable>

      <View style={styles.footer}>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={24} color="#FFF" />
          <Text style={styles.footerText}>Inicio</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate('Inventory')}>
          <Ionicons name="list" size={24} color="#FFF" />
          <Text style={styles.footerText}>Inventario</Text>
        </Pressable>
        <Pressable
          style={styles.addButton}
          onPress={() => navigation.navigate('AddObject')}
        >
          <Ionicons name="add" size={32} color="#FFF" />
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate('Alerts')}>
          <Ionicons name="notifications" size={24} color="#FFF" />
          <Text style={styles.footerText}>Alertas</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate('Profile')}>
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
    backgroundColor: '#2E2E2E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  optionText: { fontSize: 16, fontWeight: '600' },
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
  logoutText: { fontSize: 16, fontWeight: '600' },
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
});