import {TestUser} from '../types/user.types';
import {Product} from '../types/product.types';
import { Order } from "../types/order.types";

export function printUserScenario(user: TestUser): void {
    console.log(`Testing with user: ${user.username} as: ${user.role}`);
}

export function printProductSummary(product: Product): void {
    console.log(`${product.name} costs ${product.price}`);
}

export const printOrderSummary = (order: Order): void => {
  console.log('=== ORDER SUMMARY ===');
  console.log(`Order ID: ${order.id}`);
  console.log(`Customer: ${order.user.username}`);
  console.log(`Status: ${order.status}`);
  console.log(`\nProducts:`);
  order.products.forEach(p => {
    console.log(`  - ${p.name}: $${p.price}`);
  });
  console.log(`\nTotal Price: $${order.totalPrice}`);
};