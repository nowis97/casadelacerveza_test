export interface ProductDTO {
    product_id: number;
    price_per_unit: number;
    sku: string;
    categories: string[];
    image_url: string;
    name: string;
    description: string;
    total_price: number;
}