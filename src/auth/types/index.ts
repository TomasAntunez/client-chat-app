
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


export type RegisterScheme = {
    name: string;
    email: string;
    password: string;
}


// FUNCTIONS

export interface Login {
    (scheme: UserLogin): void;
}

export interface Register {
    (scheme: RegisterScheme): void;
}
