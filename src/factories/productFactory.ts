import {Product} from '../types/product.types';
type ProductOverrides = Partial<Product>;
export function createProduct(overrides: ProductOverrides = {}): Product {
    return {
        id: 19001,
        name: 'product Backpack',
        price: 3000,
        category: 'backpack',
        ...overrides
    };  
}