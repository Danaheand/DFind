// src/components/FormInput.tsx
import { palette } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'

type FormInputProps = {
    icon: keyof typeof Ionicons.glyphMap
} & TextInputProps

export const FormInput = ({ icon, style, ...props }: FormInputProps) => (
    <View style={styles.inputContainer}>
        <Ionicons name={icon} size={20} color={palette.placeholder} style={styles.inputIcon} />
        <TextInput
            style={[styles.input, style]}
            placeholderTextColor={palette.placeholder}
            {...props}
        />
    </View>
)

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
    inputIcon: { marginHorizontal: 12 },
    input: {
        flex: 1,
        height: 55,
        fontSize: 16,
        color: palette.text,
        paddingRight: 12,
    },
})
