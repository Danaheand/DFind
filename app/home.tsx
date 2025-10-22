import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

// Define the type for navigation routes
interface RootStackParamList {
  profile: undefined;
  inventory: undefined;
  alerts: undefined;
  home: undefined; // Added 'home' route
  // Add other routes here if needed
}

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const colorScheme = useColorScheme();

  const backgroundColor = colorScheme === 'dark' ? '#4b6154' : '#c0dfc2';
  const headerColor = colorScheme === 'dark' ? '#64ac8f' : '#94d6ba';
  const textColor = colorScheme === 'dark' ? '#e7f5dc' : '#4b6154';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <View style={[styles.header, { backgroundColor: headerColor }]}>
        <Text style={[styles.greeting, { color: textColor }]}>Hola, Carlos</Text>
        <Pressable
          style={styles.profileButton}
          onPress={() => navigation.navigate('profile')}
        >
          <Ionicons name="person-circle" size={40} color={textColor} />
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.searchInput, { backgroundColor: headerColor, color: textColor }]}
          placeholder="¿Qué estás buscando?"
          placeholderTextColor={textColor}
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.alertsSection}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Alertas Próximas</Text>
          <View style={[styles.alertCard, { backgroundColor: headerColor }]}>
            <Ionicons name="alert-circle" size={24} color="#FF5252" style={styles.alertIcon} />
            <View>
              <Text style={[styles.alertTitle, { color: textColor }]}>Leche caduca mañana</Text>
              <Text style={[styles.alertSubtitle, { color: textColor }]}>Despensa, Casa Principal</Text>
            </View>
          </View>
          <View style={[styles.alertCard, { backgroundColor: headerColor }]}>
            <Ionicons name="construct" size={24} color="#FFA726" style={styles.alertIcon} />
            <View>
              <Text style={[styles.alertTitle, { color: textColor }]}>Mantenimiento aire acondicionado</Text>
              <Text style={[styles.alertSubtitle, { color: textColor }]}>En 5 días</Text>
            </View>
          </View>
        </View>

        <View style={styles.recentSection}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Añadido Recientemente</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentScroll}>
            <View style={[styles.recentCard, { backgroundColor: headerColor }]}><Text style={[styles.recentText, { color: textColor }]}>Taladro</Text></View>
            <View style={[styles.recentCard, { backgroundColor: headerColor }]}><Text style={[styles.recentText, { color: textColor }]}>Pasaporte</Text></View>
            <View style={[styles.recentCard, { backgroundColor: headerColor }]}><Text style={[styles.recentText, { color: textColor }]}>Televisión</Text></View>
          </ScrollView>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Mis Categorías</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            <View style={[styles.categoryCard, { backgroundColor: headerColor }]}><Text style={[styles.categoryText, { color: textColor }]}>Electrodomésticos</Text></View>
            <View style={[styles.categoryCard, { backgroundColor: headerColor }]}><Text style={[styles.categoryText, { color: textColor }]}>Documentos</Text></View>
            <View style={[styles.categoryCard, { backgroundColor: headerColor }]}><Text style={[styles.categoryText, { color: textColor }]}>Herramientas</Text></View>
          </ScrollView>
          <Pressable style={[styles.addCategoryButton, { backgroundColor: '#64ac8f' }]}>
            <Text style={[styles.addCategoryButtonText, { color: textColor }]}>+ Añadir Categoría</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate('home')}>
          <Ionicons name="home" size={28} color="#FFF" />
          <Text style={styles.footerText}>Inicio</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate('inventory')}>
          <Ionicons name="list" size={28} color="#FFF" />
          <Text style={styles.footerText}>Inventario</Text>
        </Pressable>
        <Pressable style={styles.footerButton} onPress={() => navigation.navigate('alerts')}>
          <Ionicons name="notifications" size={28} color="#FFF" style={styles.burntIcon} />
          <Text style={styles.footerText}>Alertas</Text>
        </Pressable>
        <Pressable
          style={styles.footerButton}
          onPress={() => navigation.navigate('profile')}
        >
          <Ionicons name="person" size={28} color="#FFF" />
          <Text style={styles.footerText}>Perfil</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  greeting: { fontSize: 20, fontWeight: '700' },
  profileButton: { padding: 8 },
  searchContainer: { padding: 16 },
  searchInput: {
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  contentContainer: { padding: 16 },
  alertsSection: { marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  alertIcon: { marginRight: 12 },
  alertTitle: { fontSize: 16, fontWeight: '600' },
  alertSubtitle: { fontSize: 14 },
  recentSection: { marginBottom: 24 },
  recentScroll: { flexDirection: 'row' },
  recentCard: {
    padding: 16,
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentText: { fontSize: 14, fontWeight: '600' },
  categoriesSection: { marginBottom: 24 },
  categoriesScroll: { flexDirection: 'row' },
  categoryCard: {
    padding: 16,
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: { fontSize: 14, fontWeight: '600' },
  addCategoryButton: {
    marginTop: 12,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addCategoryButtonText: { fontSize: 16, fontWeight: '600' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0A7EA4',
  },
  footerButton: { alignItems: 'center' },
  footerText: { fontSize: 12, color: '#FFF', marginTop: 4 },
  burntIcon: {
    opacity: 0.5,
    filter: 'grayscale(100%)',
  },
});