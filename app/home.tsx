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
  'add-object': undefined; // Added 'add-object' route
  // Add other routes here if needed
}

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const colorScheme = useColorScheme();

  const backgroundColor = '#f5f5dc'; // Off-white background
  const buttonColor = '#a8d5a2'; // Lighter green for buttons
  const dialogColor = '#94d6ba'; // Slightly darker green for dialog boxes
  const alertColor = '#d4f1e0'; // Lighter green for alerts
  const footerColor = '#64ac8f'; // Green-blue for footer
  const textColor = '#4b6154';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <View style={[styles.header, { backgroundColor: dialogColor }]}>
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
          style={[styles.searchInput, { backgroundColor: buttonColor, color: textColor }]}
          placeholder="¿Qué estás buscando?"
          placeholderTextColor={textColor}
        />
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.alertsSection}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Alertas Próximas</Text>
          <View style={[styles.alertCard, { backgroundColor: alertColor }]}>
            <Ionicons name="alert-circle" size={24} color="#FF5252" style={styles.alertIcon} />
            <View>
              <Text style={[styles.alertTitle, { color: textColor }]}>Leche caduca mañana</Text>
              <Text style={[styles.alertSubtitle, { color: textColor }]}>Despensa, Casa Principal</Text>
            </View>
          </View>
          <View style={[styles.alertCard, { backgroundColor: alertColor }]}>
            <Ionicons name="construct" size={24} color="#FFA726" style={styles.alertIcon} />
            <View>
              <Text style={[styles.alertTitle, { color: textColor }]}>Mantenimiento aire acondicionado</Text>
              <Text style={[styles.alertSubtitle, { color: textColor }]}>En 5 días</Text>
            </View>
          </View>
        </View>

        <View style={styles.recentSection}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Añadido Recientemente</Text>
          <View style={styles.recentContainer}>
            <View style={[styles.recentCard, { backgroundColor: alertColor }]}><Text style={[styles.recentText, { color: textColor }]}>Pasaporte</Text></View>
            <View style={[styles.recentCard, { backgroundColor: alertColor }]}><Text style={[styles.recentText, { color: textColor }]}>Televisión Salón</Text></View>
            <View style={[styles.recentCard, { backgroundColor: alertColor }]}><Text style={[styles.recentText, { color: textColor }]}>Libro 'El Hobbit'</Text></View>
          </View>
        </View>

        <View style={styles.categoriesSection}>
          <Text style={[styles.sectionTitle, { color: textColor }]}>Mis Categorías</Text>
          <View style={styles.categoriesContainer}>
            <View style={[styles.categoryCard, { backgroundColor: alertColor }]}><Text style={[styles.categoryText, { color: textColor }]}>Electrodomésticos</Text></View>
            <View style={[styles.categoryCard, { backgroundColor: alertColor }]}><Text style={[styles.categoryText, { color: textColor }]}>Documentos</Text></View>
            <View style={[styles.categoryCard, { backgroundColor: alertColor }]}><Text style={[styles.categoryText, { color: textColor }]}>Herramientas</Text></View>
          </View>
          <Pressable style={[styles.addCategoryButton, { backgroundColor: buttonColor }]}>
            <Text style={[styles.addCategoryButtonText, { color: textColor }]}>+ Añadir Categoría</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={[styles.footer, { backgroundColor: footerColor }]}>
        <Pressable
          style={styles.footerButton}
          onPress={() => navigation.navigate('home')}
        >
          <Ionicons name="home" size={24} color="#FFF" />
          <Text style={styles.footerText}>Inicio</Text>
        </Pressable>
        <Pressable
          style={styles.footerButton}
          onPress={() => navigation.navigate('inventory')}
        >
          <Ionicons name="list" size={24} color="#FFF" />
          <Text style={styles.footerText}>Inventario</Text>
        </Pressable>
        <Pressable
          style={styles.footerButton}
          onPress={() => navigation.navigate('alerts')}
        >
          <Ionicons name="notifications" size={24} color="#FFF" />
          <Text style={styles.footerText}>Alertas</Text>
        </Pressable>
        <Pressable
          style={[styles.footerButton, styles.centerButton]}
          onPress={() => navigation.navigate('add-object')}
        >
          <Ionicons name="add-circle" size={48} color="#FFF" />
        </Pressable>
        <Pressable
          style={styles.footerButton}
          onPress={() => navigation.navigate('profile')}
        >
          <Ionicons name="person" size={24} color="#FFF" />
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
    fontSize: 18, // Increased font size
  },
  contentContainer: { padding: 16 },
  alertsSection: { marginBottom: 24 },
  sectionTitle: { fontSize: 20, fontWeight: '600', marginBottom: 12 }, // Increased font size
  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  alertIcon: { marginRight: 12 },
  alertTitle: { fontSize: 18, fontWeight: '600' }, // Increased font size
  alertSubtitle: { fontSize: 16 }, // Increased font size
  recentSection: { marginBottom: 24 },
  recentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Allow wrapping for better fit
  },
  recentCard: {
    flexBasis: '30%', // Adjusted size for better fit
    padding: 16,
    borderRadius: 8,
    margin: 8, // Added margin for spacing
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentText: { fontSize: 16, fontWeight: '600' }, // Increased font size
  categoriesSection: { marginBottom: 24 },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Allow wrapping for better fit
  },
  categoryCard: {
    flexBasis: '30%', // Adjusted size for better fit
    padding: 16,
    borderRadius: 8,
    margin: 8, // Added margin for spacing
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: { fontSize: 16, fontWeight: '600' }, // Increased font size
  addCategoryButton: {
    marginTop: 12,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  addCategoryButtonText: { fontSize: 18, fontWeight: '600' }, // Increased font size
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 12, // Reduced padding
  },
  footerButton: {
    alignItems: 'center',
    borderRadius: 8,
    padding: 8,
  },
  centerButton: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
  footerText: { fontSize: 14, color: '#FFF', marginTop: 4 }, // Increased font size
});