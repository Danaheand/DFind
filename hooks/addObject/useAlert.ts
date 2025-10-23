// src/hooks/useAlert.ts
import { useState } from 'react'

// Definimos la estructura de una alerta para que sea escalable
export interface AlertData {
    type: 'expiry' | 'low_stock' // Tipo de alerta (ej. caducidad, bajo stock)
    date: Date
}

export const useAlert = () => {
    const [isAlertModalVisible, setAlertModalVisible] = useState(false)
    // El estado puede ser una alerta o null si no hay ninguna
    const [alert, setAlert] = useState<AlertData | null>(null)

    const openAlertModal = () => setAlertModalVisible(true)
    const closeAlertModal = () => setAlertModalVisible(false)

    // Esta función se llamará desde el modal para guardar los datos
    const saveAlert = (data: AlertData) => {
        setAlert(data)
        closeAlertModal() // Cierra el modal al guardar
    }

    const removeAlert = () => {
        setAlert(null)
        closeAlertModal()
    }

    return {
        alert,
        isAlertModalVisible,
        openAlertModal,
        closeAlertModal,
        saveAlert,
        removeAlert,
    }
}
