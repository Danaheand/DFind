// src/components/FormSelect.tsx

import { palette } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

type FormSelectProps = {
    icon: keyof typeof Ionicons.glyphMap
    placeholder: string
    value: string // El valor a mostrar. Si está vacío, se muestra el placeholder.
    onPress: () => void // La función que se ejecuta al presionar, ej: abrir un modal.
    arrowIcon?: keyof typeof Ionicons.glyphMap // Icono de flecha opcional
}

export const FormSelect = ({
    icon,
    placeholder,
    value,
    onPress,
    arrowIcon = 'chevron-down', // Un buen valor por defecto
}: FormSelectProps) => {
    const displayText = value || placeholder
    const textColor = value ? palette.text : palette.placeholder

    return (
        <Pressable style={styles.inputContainer} onPress={onPress}>
            {/* Icono Principal (Izquierda) */}
            <Ionicons name={icon} size={20} color={palette.placeholder} style={styles.inputIcon} />

            {/* Texto (Valor o Placeholder) */}
            <Text style={[styles.input, { color: textColor }]} numberOfLines={1}>
                {displayText}
            </Text>

            {/* Icono de Flecha (Derecha) */}
            <Ionicons
                name={arrowIcon}
                size={20}
                color={palette.placeholder}
                style={styles.arrowIcon}
            />
        </Pressable>
    )
}

// Usamos los mismos estilos base para mantener la consistencia visual
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderRadius: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: palette.border,
        height: 55,
    },
    inputIcon: {
        marginHorizontal: 12,
    },
    input: {
        flex: 1,
        fontSize: 16,
        // No necesitamos padding aquí porque el contenedor ya lo maneja
    },
    arrowIcon: {
        marginRight: 12,
    },
})
