import { getObjects } from '@/api/objects'
import { Ionicons } from '@expo/vector-icons'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
    Button,
    FlatList,
    Modal,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native'

interface Property {
    id: string
    name: string
    rooms: Room[]
}

interface Room {
    id: string
    name: string
    items: Item[]
}

interface Item {
    id: string
    name: string
}

interface RootStackParamList {
    AddObject: undefined
    RoomScreen: { propertyId: string }
    home: undefined // Added 'home' route
    inventory: undefined // Added 'inventory' route
    alerts: undefined // Added 'alerts' route
    profile: undefined // Added 'profile' route
}

export default function InventoryScreen() {
    // SOLO PARA VER POR TERMINAL LOS DATOS (DEBUGGING)
    const logStoredObjects = async () => {
        console.log('Buscando objetos en AsyncStorage...')
        const objects = await getObjects()
        console.log('--- OBJETOS ENCONTRADOS ---')
        console.log(JSON.stringify(objects, null, 2)) // Usamos JSON.stringify para un formato legible
        console.log('---------------------------')
        if (objects.length === 0) {
            console.log('No se encontraron objetos. ¡Intenta guardar uno primero!')
        }
    }

    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const [properties, setProperties] = useState<Property[]>([
        { id: '1', name: 'Casa Principal', rooms: [] }, // Prepopulated property
    ])
    const [newPropertyName, setNewPropertyName] = useState('')
    const [modalVisible, setModalVisible] = useState(false)

    const addProperty = () => {
        if (newPropertyName.trim()) {
            setProperties(prev => [
                ...prev,
                { id: Date.now().toString(), name: newPropertyName, rooms: [] },
            ])
            setNewPropertyName('')
            setModalVisible(false)
        }
    }

    const renderProperty = ({ item }: { item: Property }) => (
        <View style={[styles.propertyCard, { backgroundColor: '#d4f1e0' }]}>
            <Text style={[styles.propertyName, { color: '#4b6154' }]}>{item.name}</Text>
            <Pressable
                style={styles.arrowButton}
                onPress={() => navigation.navigate('RoomScreen', { propertyId: item.id })}
            >
                <Ionicons name='arrow-forward' size={24} color='#64ac8f' />
            </Pressable>
        </View>
    )

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: '#f5f5dc' }]}>
            <View style={[styles.header, { backgroundColor: '#64ac8f' }]}>
                <Text style={[styles.title, { color: '#FFF' }]}>Propiedades</Text>
            </View>
            <View style={{ padding: 16 }}>
                <Button
                    title='Ver Objetos en Terminal'
                    onPress={logStoredObjects}
                    color='#64ac8f'
                />
            </View>

            <FlatList
                data={properties}
                keyExtractor={item => item.id}
                renderItem={renderProperty}
                contentContainerStyle={styles.listContainer}
            />

            <Pressable style={[styles.addPropertyButton]} onPress={() => setModalVisible(true)}>
                <Text style={[styles.addPropertyButtonText]}>+ Añadir Propiedad</Text>
            </Pressable>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={[styles.modalContent, { backgroundColor: '#FFF' }]}>
                        <Text style={[styles.modalTitle, { color: '#4b6154' }]}>
                            Añadir Propiedad
                        </Text>
                        <TextInput
                            style={[styles.input, { borderColor: '#94d6ba', color: '#4b6154' }]}
                            placeholder='Nombre de propiedad'
                            placeholderTextColor='#94d6ba'
                            value={newPropertyName}
                            onChangeText={setNewPropertyName}
                        />
                        <View style={styles.modalButtons}>
                            <Pressable
                                style={[styles.cancelButton, { backgroundColor: '#E6E6E6' }]}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={[styles.cancelButtonText, { color: '#4b6154' }]}>
                                    Cancelar
                                </Text>
                            </Pressable>
                            <Pressable
                                style={[styles.saveButton, { backgroundColor: '#64ac8f' }]}
                                onPress={addProperty}
                            >
                                <Text style={[styles.saveButtonText, { color: '#FFF' }]}>
                                    Guardar
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={[styles.footer, { backgroundColor: '#64ac8f' }]}>
                <Pressable
                    style={[styles.footerButton, styles.activeTab]}
                    onPress={() => navigation.navigate('home')}
                >
                    <Ionicons name='home' size={24} color='#FFF' />
                    <Text style={styles.footerText}>Inicio</Text>
                </Pressable>
                <Pressable
                    style={[styles.footerButton, styles.activeTab]}
                    onPress={() => navigation.navigate('inventory')}
                >
                    <Ionicons name='list' size={24} color='#FFF' />
                    <Text style={styles.footerText}>Inventario</Text>
                </Pressable>
                <Pressable
                    style={[styles.addPropertyButton, { backgroundColor: '#94d6ba' }]}
                    onPress={() => navigation.navigate('AddObject')}
                >
                    <Ionicons name='add' size={32} color='#FFF' />
                </Pressable>
                <Pressable
                    style={styles.footerButton}
                    onPress={() => navigation.navigate('alerts')}
                >
                    <Ionicons name='notifications' size={24} color='#FFF' />
                    <Text style={styles.footerText}>Alertas</Text>
                </Pressable>
                <Pressable
                    style={styles.footerButton}
                    onPress={() => navigation.navigate('profile')}
                >
                    <Ionicons name='person' size={24} color='#FFF' />
                    <Text style={styles.footerText}>Perfil</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    header: {
        padding: 16,
        backgroundColor: '#64ac8f',
    },
    title: { fontSize: 20, fontWeight: '700', color: '#FFF' },
    listContainer: { padding: 16 },
    propertyCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#d4f1e0',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
    },
    propertyName: { fontSize: 18, fontWeight: '600', color: '#4b6154' },
    arrowButton: { padding: 8 },
    addPropertyButton: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#64ac8f',
        padding: 16,
        marginHorizontal: 16,
        marginBottom: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addPropertyButtonText: {
        color: '#64ac8f',
        fontSize: 16,
        fontWeight: '600',
    },
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
    modalTitle: { fontSize: 18, fontWeight: '700', marginBottom: 16, color: '#4b6154' },
    input: {
        width: '100%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#94d6ba',
        borderRadius: 8,
        marginBottom: 16,
        color: '#4b6154',
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
    cancelButtonText: { color: '#4b6154', fontSize: 16, fontWeight: '600' },
    saveButton: {
        flex: 1,
        padding: 12,
        backgroundColor: '#64ac8f',
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
        backgroundColor: '#64ac8f',
    },
    footerButton: { alignItems: 'center' },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#FFF',
    },
    footerText: { fontSize: 12, color: '#FFF', marginTop: 4 },
})
