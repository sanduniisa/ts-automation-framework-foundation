import {lockedOutUser ,standardUser} from './test-data/users';
import {createUser} from './factories/userFactory';
import {printUserScenario} from './utils/printUtils';

const adminUser = createUser({
    username: 'admin_user',
    role: 'admin'
});

const users = [standardUser, lockedOutUser, adminUser];
for (const user of users) {
    printUserScenario(user);
}