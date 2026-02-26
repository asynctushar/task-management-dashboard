export interface User {
    id: number;
    email: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse extends User {
    token: string;
}