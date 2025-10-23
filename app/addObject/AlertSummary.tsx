// src/components/AlertSummary.tsx
import { palette } from '@/constants/theme'
import { AlertData } from '@/hooks/addObject/useAlert'
// import type { AlertData } from '@/hooks/useAlert'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface AlertSummaryProps {
    alert: AlertData
    onPress: () => void
}

// Función para formatear la fecha de manera legible
const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })
}

export const AlertSummary = ({ alert, onPress }: AlertSummaryProps) => {
    const alertText = alert.type === 'expiry' ? 'Alerta de caducidad' : 'Alerta de bajo stock'

    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Ionicons name='notifications' size={20} color={palette.accent} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{alertText}</Text>
                <Text style={styles.dateText}>{formatDate(alert.date)}</Text>
            </View>
            <Ionicons name='chevron-forward' size={20} color={palette.placeholder} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: palette.accentLight, // Un color suave para destacar
        borderRadius: 12,
        padding: 14,
        borderWidth: 1,
        borderColor: palette.accent,
    },
    iconContainer: {
        marginRight: 12,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        color: palette.accent,
        fontWeight: 'bold',
        fontSize: 14,
    },
    dateText: {
        color: palette.text,
        fontSize: 14,
    },
})
