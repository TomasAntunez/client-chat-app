
// SCHEMES

export type AuthScheme = {
    uid: string;
    name: string;
    email: string;
    checking: boolean;
    logged: boolean;
}

export type RegisterScheme = {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export type UserRegister = Omit< RegisterScheme, "repeatPassword" >

export type LoginScheme = {
    email: string;
    password: string;
    rememberme: boolean;
}

export type UserLogin = Omit< LoginScheme, "rememberme" >;

export type RememberedUser = Omit< LoginScheme, "password" >;


export * from './response-types';
