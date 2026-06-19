import {TestUser} from '../types/user.types';

export function printUserScenario(user: TestUser): void {
    console.log(`Testing with user: ${user.username} as: ${user.role}`);
}