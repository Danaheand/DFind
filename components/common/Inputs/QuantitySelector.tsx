// src/components/QuantitySelector.tsx
import { palette } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'

interface QuantitySelectorProps {
    quantity: string
    setQuantity: (value: string) => void
}

export const QuantitySelector = ({ quantity, setQuantity }: QuantitySelectorProps) => {
    const handleUpdate = (amount: number) => {
        const numericValue = parseInt(quantity, 10) || 0
        const newValue = Math.max(0, numericValue + amount)
        setQuantity(newValue.toString())
    }

    // Ancho dinámico del input basado en la cantidad de dígitos
    const charWidth = 12 // px aproximados por carácter con fontSize 18
    const basePadding = 14 // padding interno visual
    const inputWidth = Math.max(32, Math.max(1, quantity.length) * charWidth + basePadding)

    return (
        <View style={styles.quantityRow}>
            <Pressable onPress={() => handleUpdate(-1)} style={styles.quantityButton}>
                <Ionicons name='remove-outline' size={24} color={palette.primary} />
            </Pressable>
            <TextInput
                style={[styles.quantityInput, { width: inputWidth }]}
                value={quantity}
                onChangeText={setQuantity}
                keyboardType='number-pad'
                textAlign='center'
            />
            <Pressable onPress={() => handleUpdate(1)} style={styles.quantityButton}>
                <Ionicons name='add-outline' size={24} color={palette.primary} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    quantityRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: palette.border,
        borderRadius: 12,
        height: 55,
        alignSelf: 'center',
        paddingHorizontal: 8,
    },
    quantityButton: { padding: 10 },
    quantityInput: {
        fontSize: 18,
        fontWeight: 'bold',
        color: palette.text,
        minWidth: 32,
    },
})
