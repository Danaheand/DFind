// src/components/ScreenHeader.tsx

import { palette } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'

type ScreenHeaderProps = {
    title: string
    leftIcon?: keyof typeof Ionicons.glyphMap
    onPressLeft?: () => void
    rightIcon?: keyof typeof Ionicons.glyphMap
    onPressRight?: () => void
}

export const ScreenHeader = ({
    title,
    leftIcon,
    onPressLeft,
    rightIcon,
    onPressRight,
}: ScreenHeaderProps) => {
    return (
        <View style={styles.container}>
            {/* --- Lado Izquierdo --- */}
            <View style={[styles.sideContainer, styles.alignStart]}>
                {leftIcon && onPressLeft && (
                    <Pressable onPress={onPressLeft} style={styles.button}>
                        <Ionicons name={leftIcon} size={28} color={palette.textSecondary} />
                    </Pressable>
                )}
            </View>

            {/* --- Título Central --- */}
            <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {title}
                </Text>
            </View>

            {/* --- Lado Derecho --- */}
            <View style={[styles.sideContainer, styles.alignEnd]}>
                {rightIcon && onPressRight && (
                    <Pressable onPress={onPressRight} style={styles.button}>
                        {/* // <-- CAMBIO 3: Color de ícono unificado y más suave */}
                        <Ionicons name={rightIcon} size={28} color={palette.textSecondary} />
                    </Pressable>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: palette.card, // El fondo debe tener color para que la sombra funcione
        paddingHorizontal: 8, // Ajustamos padding para botones más grandes

        // --- CAMBIO 1: Sombra moderna en lugar de borde ---
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.05,
                shadowRadius: 4,
            },
            android: {
                elevation: 3,
                borderBottomWidth: 0, // Aseguramos que no haya borde en Android
            },
        }),
    },
    sideContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
    titleContainer: {
        flex: 2, // Le damos más espacio para asegurar que el título no se corte
        alignItems: 'center',
    },
    title: {
        // --- CAMBIO 2: Tipografía más fuerte y moderna ---
        fontSize: 20,
        fontWeight: '700', // Más audaz
        color: palette.text,
    },
    button: {
        // Un área de toque más grande es mejor para la UX
        padding: 12,
    },
})
