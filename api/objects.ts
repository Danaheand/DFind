// api/objects.ts
import { DFindObject } from '@/types/object'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Clave para guardar los objetos en AsyncStorage
const OBJECTS_STORAGE_KEY = 'dfind_objects'

// Omitimos el 'id' al crear, ya que lo generaremos aquí
type CreateObjectDTO = Omit<DFindObject, 'id'>

// Función para obtener los objetos existentes (simula una llamada GET)
export const getObjects = async (): Promise<DFindObject[]> => {
    try {
        const jsonValue = await AsyncStorage.getItem(OBJECTS_STORAGE_KEY)
        return jsonValue != null ? JSON.parse(jsonValue) : []
    } catch (e) {
        console.error('Error al leer objetos de AsyncStorage:', e)
        return []
    }
}

// Función para crear un objeto (simula una llamada POST)
export const createObject = async (objectData: CreateObjectDTO): Promise<DFindObject> => {
    try {
        // 1. Obtiene los objetos actuales
        const existingObjects = await getObjects()

        // 2. Crea el nuevo objeto con un ID simulado (timestamp + aleatorio)
        const newObject: DFindObject = {
            ...objectData,
            id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        }

        // 3. Añade el nuevo objeto a la lista
        const updatedObjects = [...existingObjects, newObject]

        // 4. Guarda la lista actualizada en AsyncStorage
        await AsyncStorage.setItem(OBJECTS_STORAGE_KEY, JSON.stringify(updatedObjects))

        console.log('Objeto guardado localmente:', newObject) // Log para depuración

        // Simula una pequeña demora como si fuera una llamada de red
        await new Promise(resolve => setTimeout(resolve, 500))

        // 5. Devuelve el objeto creado (como haría un backend)
        return newObject
    } catch (e) {
        console.error('Error al guardar objeto en AsyncStorage:', e)
        throw new Error('Error al guardar el objeto localmente')
    }
}

// Puedes añadir más funciones aquí para simular 'update' o 'delete' si lo necesitas
