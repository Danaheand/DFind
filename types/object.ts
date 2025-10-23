// types/object.ts
export interface DFindObject {
    id?: string // El ID será asignado por el backend
    name: string
    description?: string
    category?: string
    quantity: number
    units: string
    location?: string
}
