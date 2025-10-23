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

    return (
        <View style={styles.quantityRow}>
            <Pressable onPress={() => handleUpdate(-1)} style={styles.quantityButton}>
                <Ionicons name='remove-outline' size={24} color={palette.primary} />
            </Pressable>
            <TextInput
                style={styles.quantityInput}
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: palette.border,
        borderRadius: 12,
        height: 55,
    },
    quantityButton: { padding: 10 },
    quantityInput: {
        fontSize: 18,
        fontWeight: 'bold',
        color: palette.text,
        minWidth: 40,
    },
})
