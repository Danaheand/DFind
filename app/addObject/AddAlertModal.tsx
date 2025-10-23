// src/components/AddAlertModal.tsx
import { palette } from '@/constants/theme'
import { AlertData } from '@/hooks/addObject/useAlert'
// import type { AlertData } from '@/hooks/useAlert'
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import React, { useEffect, useState } from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'

interface Props {
    isVisible: boolean
    onClose: () => void
    onSave: (data: AlertData) => void
    onRemove: () => void
    initialData: AlertData | null
}

export const AddAlertModal = ({ isVisible, onClose, onSave, onRemove, initialData }: Props) => {
    // Inicializamos la fecha con los datos existentes o con la fecha actual
    const [date, setDate] = useState(initialData?.date || new Date())

    // Sincroniza el estado si el modal se abre con datos diferentes
    useEffect(() => {
        setDate(initialData?.date || new Date())
    }, [initialData, isVisible])

    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || date
        setDate(currentDate)
    }

    const handleSave = () => {
        onSave({ type: 'expiry', date }) // Por ahora solo tipo 'expiry'
    }

    return (
        <Modal visible={isVisible} transparent animationType='slide' onRequestClose={onClose}>
            <Pressable style={styles.modalBackdrop} onPress={onClose}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Configurar Alerta</Text>

                    <Text style={styles.label}>Fecha de Caducidad</Text>
                    <RNDateTimePicker
                        value={date}
                        mode='date'
                        display='spinner' // Un selector de fecha nativo y atractivo
                        onChange={handleDateChange}
                        locale='es-ES'
                    />

                    <Pressable style={styles.saveButton} onPress={handleSave}>
                        <Text style={styles.saveButtonText}>Guardar Alerta</Text>
                    </Pressable>

                    {initialData && (
                        <Pressable style={styles.removeButton} onPress={onRemove}>
                            <Text style={styles.removeButtonText}>Quitar Alerta</Text>
                        </Pressable>
                    )}
                </View>
            </Pressable>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackdrop: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.4)' },
    modalContent: {
        backgroundColor: palette.card,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: palette.text,
        textAlign: 'center',
        marginBottom: 20,
    },
    label: { fontSize: 14, color: palette.textSecondary, marginBottom: 10, fontWeight: '600' },
    saveButton: {
        backgroundColor: palette.primary,
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
    removeButton: { marginTop: 15, padding: 10, alignItems: 'center' },
    removeButtonText: { color: palette.danger, fontSize: 15 },
})
