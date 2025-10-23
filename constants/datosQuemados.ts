// src/constants/formData.ts
import type { Property } from '@/types/location'

export const locationData: Property[] = [
    {
        name: 'Casa Principal',
        rooms: [
            { name: 'Cocina', storages: ['Despensa', 'Cajón de cubiertos', 'Nevera'] },
            { name: 'Dormitorio', storages: ['Armario', 'Mesita de noche'] },
        ],
    },
    { name: 'Oficina', rooms: [{ name: 'Escritorio', storages: ['Cajón 1'] }] },
]

export const CATEGORIES = [
    'Electrónica',
    'Documentos',
    'Herramientas',
    'Cocina',
    'Ropa',
    'Mobiliario',
]
export const UNIT_OPTIONS = ['u.', 'kg', 'g', 'L', 'ml', 'caja', 'paquete']
