import {TestUser} from '../types/user.types';
import {environment} from '../config/environment';

export const standardUser: TestUser = {
    username: 'standard_user',
    password: environment.defaultPassword,
    role: 'customer'
};

export const lockedOutUser: TestUser = {
    username: 'locked_out_user',
    password: environment.defaultPassword,
    role: 'blocked'
};