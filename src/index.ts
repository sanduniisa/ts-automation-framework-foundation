import {lockedOutUser ,standardUser} from './test-data/users';
import {createUser} from './factories/userFactory';
import {printProductSummary, printUserScenario} from './utils/printUtils';
import {Product} from './types/product.types';
import {createProduct} from './factories/productFactory';
import {createOrder} from './factories/orderFactory';
import {printOrderSummary} from './utils/printUtils';
import { backpack, bikeLight, tshirt } from './test-data/products';

const adminUser = createUser({
    username: 'admin_user',
    role: 'admin'
});

const users = [standardUser, lockedOutUser, adminUser];
for (const user of users) {
    printUserScenario(user);
}

const products : Product[] = [
    createProduct(),
    createProduct({id: 19002, name: 'product Bike Light', price: 5000, category: 'bike-light'}),
    createProduct({id: 19003, name: 'product T-Shirt', price: 1500, category: 't-shirt'}),
    createProduct({id: 19004, name: 'product Backpack', price: 3000, category: 'backpack'}),
];

for (const product of products) {
    printProductSummary(product);
}
   
const order = createOrder(standardUser, [backpack, bikeLight, tshirt]);
printOrderSummary(order);
