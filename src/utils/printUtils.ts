import {TestUser} from '../types/user.types';
import {Product} from '../types/product.types';

export function printUserScenario(user: TestUser): void {
    console.log(`Testing with user: ${user.username} as: ${user.role}`);
}

export function printProductSummary(product: Product): void {
    console.log(`${product.name} costs ${product.price}`);
}