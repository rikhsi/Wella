import { Filter } from "./filter"

export interface Product {
    id: number,
    photos: string[],
    title: string,
    description: string,
    brand: string,
    country: string,
    size: string,
    color: string,
    price: string,
    available: boolean,
    isBestSeller: boolean,
    isCollection: boolean,
    categories: Filter[]
    created_at: string
}