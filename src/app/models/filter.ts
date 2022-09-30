import { Product } from "./product";

export interface Filter {
    id: number,
    title: string,
    created_at?: string,
    dresses: Product[],
    active?: boolean
}