// src/hooks/useAddObjectForm.ts
import { createObject } from '@/api/objects'
import { router } from 'expo-router'
import { useState } from 'react'
import { Alert } from 'react-native'

export const useAddObjectForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [quantity, setQuantity] = useState('1')
    const [units, setUnits] = useState('u.')
    const [location, setLocation] = useState('')
    const [loading, setLoading] = useState(false)

    const [isCategoryModalVisible, setCategoryModalVisible] = useState(false)
    const [isUnitsModalVisible, setUnitsModalVisible] = useState(false)
    const [isLocationModalVisible, setLocationModalVisible] = useState(false)

    const handleSave = async () => {
        if (!name.trim()) {
            Alert.alert('Campo Requerido', 'El nombre del objeto es obligatorio.')
            return
        }
        setLoading(true)
        try {
            await createObject({
                name,
                description,
                category,
                quantity: parseInt(quantity, 10),
                units,
                location,
            })
            Alert.alert('¡Éxito!', 'Objeto guardado.')
            router.back()
        } catch (error) {
            Alert.alert('Error', 'No se pudo guardar el objeto.')
        } finally {
            setLoading(false)
        }
    }

    return {
        // Estado de los campos
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
        // Visibilidad de modales
        isCategoryModalVisible,
        setCategoryModalVisible,
        isUnitsModalVisible,
        setUnitsModalVisible,
        isLocationModalVisible,
        setLocationModalVisible,
        // Acciones
        handleSave,
    }
}
