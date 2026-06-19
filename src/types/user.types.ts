//like a plan - to achieve abstraction
export interface TestUser {
    username: string;
    password: string;
    role:'customer'|'admin'|'blocked';
}
export type UserOverrides = Partial<TestUser>; //if we need to amend some other to testyser user type