import { Product } from "./product";

export interface Filter {
    id: number,
    title: string,
    title_uz: string,
    created_at?: string,
    dresses: Product[],
    active?: boolean
}