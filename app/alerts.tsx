import FooterNavigation from '@/components/footer-navigation';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    FlatList,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

interface Alert {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: 'alert-circle' | 'construct' | 'checkmark-circle';
  color: string;
}

export default function AlertsScreen() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const upcomingAlerts: Alert[] = [
    {
      id: '1',
      title: 'Leche caduca mañana',
      description: 'Ubicación: Despensa, Casa Principal',
      time: 'Mañana',
      icon: 'alert-circle',
      color: '#FF5252',
    },
    {
      id: '2',
      title: 'Mantenimiento aire acondicionado',
      description: 'En 5 días',
      time: '5 días',
      icon: 'construct',
      color: '#FFA726',
    },
    {
      id: '3',
      title: 'Garantía del portátil vence',
      description: 'Objeto: MacBook Pro 14"',
      time: 'En 2 meses',
      icon: 'checkmark-circle',
      color: '#4CAF50',
    },
  ];

  const pastAlerts: Alert[] = [
    {
      id: '4',
      title: 'Factura de luz pagada',
      description: 'Objeto: Servicios',
      time: 'Hace 1 semana',
      icon: 'checkmark-circle',
      color: '#4CAF50',
    },
  ];

  const renderAlert = ({ item }: { item: Alert }) => (
    <View style={styles.alertCard}>
      <Ionicons name={item.icon} size={24} color={item.color} style={styles.alertIcon} />
      <View>
        <Text style={styles.alertTitle}>{item.title}</Text>
        <Text style={styles.alertSubtitle}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Alertas</Text>
        <View style={styles.tabs}>
          <Pressable
            style={[styles.tab, activeTab === 'upcoming' && styles.activeTab]}
            onPress={() => setActiveTab('upcoming')}
          >
            <Text style={styles.tabText}>Próximas</Text>
          </Pressable>
          <Pressable
            style={[styles.tab, activeTab === 'past' && styles.activeTab]}
            onPress={() => setActiveTab('past')}
          >
            <Text style={styles.tabText}>Pasadas</Text>
          </Pressable>
        </View>
      </View>

      <FlatList
        data={activeTab === 'upcoming' ? upcomingAlerts : pastAlerts}
        keyExtractor={(item) => item.id}
        renderItem={renderAlert}
        contentContainerStyle={styles.listContainer}
      />
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
  title: { fontSize: 20, fontWeight: '700', color: '#FFF', marginBottom: 16 },
  tabs: { flexDirection: 'row', justifyContent: 'space-around' },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#2E2E2E',
  },
  activeTab: { backgroundColor: '#FFA726' },
  tabText: { color: '#FFF', fontSize: 16, fontWeight: '600' },
  listContainer: { padding: 16 },
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
});