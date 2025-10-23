import { palette } from '@/constants/theme'
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

// --- Componente ModalPicker Reutilizable ---

type ModalPickerProps = {
    isVisible: boolean
    title: string
    options: string[]
    selectedValue: string
    onValueChange: (value: string) => void
    onClose: () => void
}

export const ModalPicker = ({
    isVisible,
    title,
    options,
    selectedValue,
    onValueChange,
    onClose,
}: ModalPickerProps) => {
    return (
        <Modal visible={isVisible} transparent={true} animationType='fade'>
            <Pressable style={styles.modalBackdrop} onPress={onClose}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <ScrollView>
                        {options.map(option => (
                            <Pressable
                                key={option}
                                style={[
                                    styles.modalOption,
                                    selectedValue === option && {
                                        backgroundColor: palette.primaryLight,
                                    },
                                ]}
                                onPress={() => {
                                    onValueChange(option)
                                    onClose()
                                }}
                            >
                                <Text style={styles.modalOptionText}>{option}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>
            </Pressable>
        </Modal>
    )
}

const styles = StyleSheet.create({
    // --- Estilos para los Modales ---
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
        maxHeight: '60%', // Limita la altura del modal
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
