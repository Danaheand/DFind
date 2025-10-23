// src/screens/AddObjectScreen/styles.ts
import { palette } from '@/constants/theme'
import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: palette.background },
    header: {
        paddingVertical: 12,
        alignItems: 'center',
        backgroundColor: palette.card,
    },
    title: { fontSize: 18, fontWeight: '600', color: palette.text },
    closeButton: { position: 'absolute', top: 10, right: 15 },
    scrollContainer: { padding: 16, paddingBottom: 100 },
    imagePicker: {
        height: 120,
        borderRadius: 16,
        backgroundColor: palette.primaryLight,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 2,
        borderColor: palette.accent,
        borderStyle: 'dashed',
    },
    imagePickerText: { color: palette.primary, fontWeight: '600', marginTop: 8 },
    card: {
        backgroundColor: palette.card,
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: palette.textSecondary,
        marginBottom: 16,
        letterSpacing: 0.8,
    },

    picker: {
        flex: 1,
        height: '100%',
        color: palette.text,
    },
    quantitySection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
    },

    unitsInput: {
        marginLeft: 12,
        height: 55,
        borderWidth: 1,
        borderColor: palette.border,
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: palette.text,
    },
    footer: {
        padding: 16,
        paddingBottom: Platform.OS === 'ios' ? 30 : 16,
        backgroundColor: palette.card,
        borderTopWidth: 1,
        borderTopColor: palette.border,
    },
    saveButton: {
        backgroundColor: palette.primary,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    // Añadir y modificar en StyleSheet.create({...})

    // Para el botón de unidades
    unitsButton: {
        marginLeft: 12,
        height: 55,
        borderWidth: 1,
        borderColor: palette.border,
        borderRadius: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: 80,
    },
    unitsButtonText: {
        fontSize: 16,
        color: palette.text,
        marginRight: 8,
    },
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
    input: {
        flex: 1,

        height: 55,

        fontSize: 16,

        color: palette.text,

        paddingRight: 12,
    },
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
})
