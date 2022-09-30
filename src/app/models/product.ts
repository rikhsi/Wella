import { Filter } from "./filter"

export interface Product {
    id: number,
    photos: string[],
    title: string,
    title_uz: string,
    description: string,
    description_uz: string,
    brand: string,
    country: string,
    size: string,
    color: string,
    color_uz: string,
    price: string,
    available: boolean,
    isBestSeller: boolean,
    isCollection: boolean,
    categories: Filter[]
    created_at: string
}