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
    View,
} from 'react-native';

// Define the type for navigation routes
interface RootStackParamList {
  profile: undefined;
  // Add other routes here if needed
}

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hola, Carlos</Text>
        <Pressable
          style={styles.profileButton}
          onPress={() => navigation.navigate('profile')}
        >
          <Ionicons name="person-circle" size={40} color="#FFF" />
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="¿Qué estás buscando?"
          placeholderTextColor="#687076"
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.alertsSection}>
          <Text style={styles.sectionTitle}>Alertas Próximas</Text>
          <View style={styles.alertCard}>
            <Ionicons name="alert-circle" size={24} color="#FF5252" style={styles.alertIcon} />
            <View>
              <Text style={styles.alertTitle}>Leche caduca mañana</Text>
              <Text style={styles.alertSubtitle}>Despensa, Casa Principal</Text>
            </View>
          </View>
          <View style={styles.alertCard}>
            <Ionicons name="construct" size={24} color="#FFA726" style={styles.alertIcon} />
            <View>
              <Text style={styles.alertTitle}>Mantenimiento aire acondicionado</Text>
              <Text style={styles.alertSubtitle}>En 5 días</Text>
            </View>
          </View>
        </View>

        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Añadido Recientemente</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentScroll}>
            <View style={styles.recentCard}><Text style={styles.recentText}>Taladro</Text></View>
            <View style={styles.recentCard}><Text style={styles.recentText}>Pasaporte</Text></View>
            <View style={styles.recentCard}><Text style={styles.recentText}>Televisión</Text></View>
          </ScrollView>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Mis Categorías</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
            <View style={styles.categoryCard}><Text style={styles.categoryText}>Electrodomésticos</Text></View>
            <View style={styles.categoryCard}><Text style={styles.categoryText}>Documentos</Text></View>
            <View style={styles.categoryCard}><Text style={styles.categoryText}>Herramientas</Text></View>
          </ScrollView>
          <Pressable style={styles.addCategoryButton}>
            <Text style={styles.addCategoryButtonText}>+ Añadir Categoría</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.footerButton}>
          <Ionicons name="home" size={24} color="#FFF" />
          <Text style={styles.footerText}>Inicio</Text>
        </Pressable>
        <Pressable style={styles.footerButton}>
          <Ionicons name="list" size={24} color="#FFF" />
          <Text style={styles.footerText}>Inventario</Text>
        </Pressable>
        <Pressable style={styles.footerButton}>
          <Ionicons name="notifications" size={24} color="#FFF" style={styles.burntIcon} />
          <Text style={styles.footerText}>Alertas</Text>
        </Pressable>
        <Pressable
          style={styles.footerButton}
          onPress={() => navigation.navigate('profile')}
        >
          <Ionicons name="person" size={40} color="#FFF" />
          <Text style={styles.footerText}>Perfil</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#1E1E1E' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0A7EA4',
  },
  greeting: { fontSize: 20, fontWeight: '700', color: '#FFF' },
  profileButton: { padding: 8 },
  searchContainer: { padding: 16 },
  searchInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#11181C',
  },
  contentContainer: { padding: 16 },
  alertsSection: { marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#FFF', marginBottom: 12 },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E2E2E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  alertIcon: { marginRight: 12 },
  alertTitle: { fontSize: 16, fontWeight: '600', color: '#FFF' },
  alertSubtitle: { fontSize: 14, color: '#687076' },
  recentSection: { marginBottom: 24 },
  recentScroll: { flexDirection: 'row' },
  recentCard: {
    backgroundColor: '#2E2E2E',
    padding: 16,
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentText: { fontSize: 14, fontWeight: '600', color: '#FFF' },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#0A7EA4',
  },
  footerButton: { alignItems: 'center' },
  footerText: { fontSize: 12, color: '#FFF', marginTop: 4 },
  categoriesSection: { marginBottom: 24 },
  categoriesScroll: { flexDirection: 'row' },
  categoryCard: {
    backgroundColor: '#2E2E2E',
    padding: 16,
    borderRadius: 8,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: { fontSize: 14, fontWeight: '600', color: '#FFF' },
  addCategoryButton: {
    marginTop: 12,
    backgroundColor: '#FFA726',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addCategoryButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
  burntIcon: {
    opacity: 0.5,
    filter: 'grayscale(100%)',
  },
});