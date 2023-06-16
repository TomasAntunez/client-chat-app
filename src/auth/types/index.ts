
// HELP TYPES

type error = string;


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


// FUNCTIONS

export interface Login {
    (scheme: UserLogin): Promise<error | undefined>;
}

export interface Register {
    (scheme: RegisterScheme): void;
}
