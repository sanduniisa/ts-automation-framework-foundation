import { Order, OrderOverrides } from "../types/order.types";
import { TestUser } from "../types/user.types";
import { Product } from "../types/product.types";

export const createOrder = (
  user: TestUser,
  products: Product[],
  overrides: OrderOverrides = {}
): Order => {
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
  
  return {
    id: Math.random(),
    user,
    products,
    totalPrice,
    status: 'pending',
    ...overrides
  };
};