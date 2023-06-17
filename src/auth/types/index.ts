
// SCHEMES

export type AuthScheme = {
    uid: string;
    name: string;
    email: string;
    checking: boolean;
    logged: boolean;
}


export type LoginScheme = {
    email: string;
    password: string;
    rememberme: boolean;
}

export type UserLogin = Omit< LoginScheme, "rememberme" >;

export type RememberedUser = Omit< LoginScheme, "password" >;


export type RegisterScheme = {
    name: string;
    email: string;
    password: string;
}


export * from './response-types';
