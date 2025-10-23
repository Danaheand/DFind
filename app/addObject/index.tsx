import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import {
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    View,
} from 'react-native'

// --- Importaciones de nuestra refactorización ---

// 1. Componentes de UI reutilizables
// import { FormInput } from '@/components/FormInput';
// import { QuantitySelector } from '@/components/QuantitySelector';
import { ModalPicker } from '@/components/picker' // Componente que ya tenías
// import { LocationPickerModal } from '@/components/LocationPickerModal';

// 2. Hook con toda la lógica de estado y funciones
import { useAddObjectForm } from '@/hooks/addObject/useAddObjectForm'

// 3. Constantes y datos estáticos
// import { CATEGORIES, UNIT_OPTIONS } from '@/constants/formData';

// 4. Estilos específicos de esta pantalla
import { FormInput } from '@/components/common/Inputs/FormInput'
import { FormSelect } from '@/components/common/Inputs/FormSelect'
import { LocationPickerModal } from '@/components/common/Inputs/LocationPicker'
import { PickerButton } from '@/components/common/Inputs/PickerButton'
import { QuantitySelector } from '@/components/common/Inputs/QuantitySelector'
import { ScreenHeader } from '@/components/common/ScreenHeader'
import { CATEGORIES, UNIT_OPTIONS } from '@/constants/datosQuemados'
import { palette } from '@/constants/theme'
import { useAlert } from '@/hooks/addObject/useAlert'
import { AddAlertModal } from './AddAlertModal'
import { AlertSummary } from './AlertSummary'
import { styles } from './styles'

// --- Componente de la Pantalla (Ahora es solo la capa de presentación) ---

export default function AddObjectScreen() {
    // El hook nos provee todo el estado y la lógica. ¡Adiós al desorden!
    const {
        name,
        setName,
        description,
        setDescription,
        category,
        setCategory,
        quantity,
        setQuantity,
        units,
        setUnits,
        location,
        setLocation,
        loading,
        isCategoryModalVisible,
        setCategoryModalVisible,
        isUnitsModalVisible,
        setUnitsModalVisible,
        isLocationModalVisible,
        setLocationModalVisible,
        handleSave,
    } = useAddObjectForm()
    const { alert, isAlertModalVisible, openAlertModal, closeAlertModal, saveAlert, removeAlert } =
        useAlert()

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* --- Header --- */}
            {/* <View style={styles.header}>
                <Text style={styles.title}>Nuevo Objeto</Text>
                <Pressable onPress={() => router.back()} style={styles.closeButton}>
                    <Ionicons name='close-circle' size={28} color={palette.placeholder} />
                </Pressable>
            </View> */}
            <ScreenHeader
                title='Nuevo Objeto'
                rightIcon='close-circle'
                onPressRight={() => router.back()}
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* --- Selector de Imagen --- */}
                    <Pressable style={styles.imagePicker}>
                        <Ionicons name='camera-outline' size={32} color={palette.primary} />
                        <Text style={styles.imagePickerText}>Añadir una foto</Text>
                    </Pressable>

                    {/* --- Card: ¿QUÉ ES? --- */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>¿QUÉ ES?</Text>
                        <FormInput
                            icon='cube-outline'
                            placeholder='* Nombre del objeto'
                            value={name}
                            onChangeText={setName}
                        />
                        <FormInput
                            icon='create-outline'
                            placeholder='Descripción (opcional)'
                            value={description}
                            onChangeText={setDescription}
                        />
                        <FormSelect
                            icon='pricetags-outline'
                            placeholder='Categoría'
                            value={category}
                            onPress={() => setCategoryModalVisible(true)}
                        />
                    </View>

                    {/* --- Card: ¿CUÁNTO HAY? --- */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>¿CUÁNTO HAY?</Text>
                        <View style={styles.quantitySection}>
                            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
                            <PickerButton
                                value={units}
                                onPress={() => setUnitsModalVisible(true)}
                                style={{ marginLeft: 12 }} // Pasamos el margen como un estilo
                            />
                        </View>
                    </View>

                    {/* --- Card: ¿DÓNDE ESTÁ? --- */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>¿DÓNDE ESTÁ?</Text>
                        <FormSelect
                            icon='location-outline'
                            placeholder='Seleccionar ubicación'
                            value={location}
                            onPress={() => setLocationModalVisible(true)}
                            arrowIcon='chevron-forward' // Podemos personalizar el ícono!
                        />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>ALERTAS</Text>

                        {/* 2. Lógica de renderizado condicional */}
                        {alert ? (
                            // Si hay una alerta, muestra el resumen
                            <AlertSummary alert={alert} onPress={openAlertModal} />
                        ) : (
                            // Si no, muestra el botón para añadir una
                            <FormSelect
                                icon='notifications-outline'
                                placeholder='Añadir alerta'
                                value='' // El valor está vacío para mostrar el placeholder
                                onPress={openAlertModal}
                                arrowIcon='add' // Usamos un ícono de 'más' para mayor claridad
                            />
                        )}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            {/* --- Footer con Botón de Guardar --- */}
            <View style={styles.footer}>
                <Pressable
                    style={({ pressed }) => [
                        styles.saveButton,
                        { opacity: pressed || loading ? 0.7 : 1 },
                    ]}
                    onPress={handleSave}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color='#FFF' />
                    ) : (
                        <Text style={styles.saveButtonText}>Guardar Objeto</Text>
                    )}
                </Pressable>
            </View>

            {/* --- Modales (no ocupan espacio visual hasta que se activan) --- */}
            <ModalPicker
                isVisible={isCategoryModalVisible}
                title='Selecciona una Categoría'
                options={CATEGORIES}
                selectedValue={category}
                onValueChange={setCategory}
                onClose={() => setCategoryModalVisible(false)}
            />
            <ModalPicker
                isVisible={isUnitsModalVisible}
                title='Selecciona una Unidad'
                options={UNIT_OPTIONS}
                selectedValue={units}
                onValueChange={setUnits}
                onClose={() => setUnitsModalVisible(false)}
            />
            <LocationPickerModal
                isVisible={isLocationModalVisible}
                onClose={() => setLocationModalVisible(false)}
                onLocationSelect={setLocation}
            />
            <AddAlertModal
                isVisible={isAlertModalVisible}
                onClose={closeAlertModal}
                onSave={saveAlert}
                onRemove={removeAlert}
                initialData={alert}
            />
        </SafeAreaView>
    )
}
