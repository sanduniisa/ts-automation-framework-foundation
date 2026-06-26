import { TestUser } from './user.types';
import { Product } from './product.types';

export interface Order {
  id: number;
  user: TestUser;
  products: Product[];
  totalPrice: number;
  status: 'pending' | 'completed' | 'cancelled';
}

export type OrderOverrides = Partial<Order>;