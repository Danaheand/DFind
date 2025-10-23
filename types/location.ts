// src/types/location.ts
export interface StorageLocation {
    name: string
}

export interface Room {
    name: string
    storages: string[]
}

export interface Property {
    name: string
    rooms: Room[]
}

export type LocationData = Property[] | Room[] | StorageLocation[]
