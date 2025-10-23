// src/components/LocationPickerModal.tsx
// import { locationData as initialLocationData } from '@/constants/formData'
import { locationData } from '@/constants/datosQuemados'
import { palette } from '@/constants/theme'
import type { LocationData, Property, Room, StorageLocation } from '@/types/location'
import { Ionicons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native'

interface Props {
    isVisible: boolean
    onClose: () => void
    onLocationSelect: (location: string) => void
}
const initialLocationData: LocationData = locationData

export const LocationPickerModal = ({ isVisible, onClose, onLocationSelect }: Props) => {
    const [path, setPath] = useState<string[]>([])
    const [currentSelection, setCurrentSelection] = useState<{ level: number; data: LocationData }>(
        {
            level: 0,
            data: initialLocationData,
        }
    )

    const handleSelect = (item: Property | Room | StorageLocation) => {
        const newPath = [...path, item.name]
        setPath(newPath)

        if (currentSelection.level === 0) {
            // Propiedad
            setCurrentSelection({ level: 1, data: (item as Property).rooms })
        } else if (currentSelection.level === 1) {
            // Habitación
            const storages = (item as Room).storages.map(s => ({ name: s }))
            setCurrentSelection({ level: 2, data: storages })
        } else {
            // Almacenamiento
            onLocationSelect(newPath.join(' / '))
            handleClose()
        }
    }

    const handleClose = () => {
        setPath([])
        setCurrentSelection({ level: 0, data: initialLocationData })
        onClose()
    }

    return (
        <Modal visible={isVisible} transparent animationType='slide' onRequestClose={handleClose}>
            <Pressable style={styles.modalBackdrop} onPress={handleClose}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>
                        {path.length > 0 ? path.join(' > ') : 'Selecciona una Propiedad'}
                    </Text>
                    <FlatList
                        data={currentSelection.data}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => (
                            <Pressable
                                style={styles.modalOption}
                                onPress={() => handleSelect(item)}
                            >
                                <Text style={styles.modalOptionText}>{item.name}</Text>
                                {currentSelection.level < 2 && (
                                    <Ionicons
                                        name='chevron-forward'
                                        size={20}
                                        color={palette.textSecondary}
                                    />
                                )}
                            </Pressable>
                        )}
                    />
                </View>
            </Pressable>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        backgroundColor: palette.card,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: '60%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: palette.text,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalOption: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: palette.border,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalOptionText: {
        fontSize: 16,
        color: palette.text,
    },
})
