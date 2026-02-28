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

export interface DashboardUser extends User {
    name: string;
    status: "active" | "inactive";
    joinDate: string;
}