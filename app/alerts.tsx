import FooterNavigation from '@/components/footer-navigation';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
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
};

interface AlertItem {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: 'alert-circle' | 'construct' | 'checkmark-circle';
  color: string;
}

export default function AlertsScreen() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [alerts, setAlerts] = useState<Record<'upcoming' | 'past', AlertItem[]>>({
    upcoming: [
      {
        id: '1',
        title: 'Leche caduca mañana',
        description: 'Ubicación: Despensa, Casa Principal',
        time: 'Mañana',
        icon: 'alert-circle',
        color: palette.dialog,
      },
      {
        id: '2',
        title: 'Mantenimiento aire acondicionado',
        description: 'En 5 días',
        time: '5 días',
        icon: 'construct',
        color: palette.dialog,
      },
    ],
    past: [
      {
        id: '3',
        title: 'Factura de luz pagada',
        description: 'Objeto: Servicios',
        time: 'Hace 1 semana',
        icon: 'checkmark-circle',
        color: palette.text,
      },
    ],
  });

  const handleDelete = (id: string) => {
    Alert.alert('Confirmación', '¿Estás seguro de que deseas eliminar esta alerta?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Eliminar',
        style: 'destructive',
        onPress: () => {
          setAlerts((prev) => ({
            ...prev,
            [activeTab]: prev[activeTab].filter((alert) => alert.id !== id),
          }));
        },
      },
    ]);
  };

  const handleEdit = (id: string) => {
    Alert.alert('Editar', `Función de edición para la alerta con ID: ${id}`);
  };

  const renderAlert = ({ item }: { item: AlertItem }) => (
    <View style={[styles.alertCard, { backgroundColor: palette.alert }]}>  
      <Ionicons name={item.icon} size={24} color={item.color} style={styles.alertIcon} />
      <View style={styles.alertContent}>
        <Text style={[styles.alertTitle, { color: palette.text }]}>{item.title}</Text>
        <Text style={[styles.alertSubtitle, { color: palette.text }]}>{item.description}</Text>
      </View>
      <View style={styles.alertActions}>
        <Pressable onPress={() => handleEdit(item.id)}>
          <Ionicons name="pencil" size={20} color={palette.dialog} />
        </Pressable>
        <Pressable onPress={() => handleDelete(item.id)}>
          <Ionicons name="trash" size={20} color={palette.text} />
        </Pressable>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: palette.background }]}>  
      <View style={[styles.header, { backgroundColor: palette.dialog }]}>  
        <Text style={[styles.title, { color: palette.text }]}>Alertas</Text>
        <View style={styles.tabs}>
          <Pressable
            style={[styles.tab, activeTab === 'upcoming' && { backgroundColor: palette.button }]}
            onPress={() => setActiveTab('upcoming')}
          >
            <Text style={[styles.tabText, { color: palette.text }]}>Próximas</Text>
          </Pressable>
          <Pressable
            style={[styles.tab, activeTab === 'past' && { backgroundColor: palette.button }]}
            onPress={() => setActiveTab('past')}
          >
            <Text style={[styles.tabText, { color: palette.text }]}>Pasadas</Text>
          </Pressable>
        </View>
      </View>

      <FlatList
        data={alerts[activeTab]}
        keyExtractor={(item) => item.id}
        renderItem={renderAlert}
        contentContainerStyle={styles.listContainer}
      />
      <FooterNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  header: {
    padding: 16,
  },
  title: { fontSize: 20, fontWeight: '700' },
  tabs: { flexDirection: 'row', justifyContent: 'space-around' },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: palette.dialog,
  },
  listContainer: { padding: 16 },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  alertIcon: { marginRight: 12 },
  alertContent: { flex: 1 },
  alertTitle: { fontSize: 16, fontWeight: '600' },
  alertSubtitle: { fontSize: 14 },
  alertActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});