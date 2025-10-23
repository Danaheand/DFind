// src/components/PickerButton.tsx

import { palette } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native'

type PickerButtonProps = {
    /** El texto que se mostrará en el botón. */
    value: string
    /** La función a ejecutar cuando se presiona el botón. */
    onPress: () => void
    /** Icono opcional a la derecha. Por defecto es 'chevron-down'. */
    icon?: keyof typeof Ionicons.glyphMap
    /** Estilos personalizados para el contenedor, útil para añadir márgenes. */
    style?: StyleProp<ViewStyle>
}

export const PickerButton = ({
    value,
    onPress,
    icon = 'chevron-down',
    style,
}: PickerButtonProps) => {
    return (
        // Aplicamos los estilos base y luego cualquier estilo personalizado que se pase
        <Pressable style={[styles.buttonContainer, style]} onPress={onPress}>
            <Text style={styles.buttonText}>{value}</Text>
            <Ionicons name={icon} size={20} color={palette.primary} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 55,
        borderWidth: 1,
        borderColor: palette.border,
        borderRadius: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: 80, // Asegura un tamaño mínimo
    },
    buttonText: {
        fontSize: 16,
        color: palette.text,
        marginRight: 8,
    },
})
