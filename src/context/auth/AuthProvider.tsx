import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { loginUser } from "@/services/auth.service";
import type { User } from "@/types/user.type";

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    // Restore session on refresh
    useEffect(() => {
        const storedToken = localStorage.getItem("donezo_token");
        const storedUser = localStorage.getItem("donezo_user");

        if (storedToken && storedUser) {
            setToken(storedToken);
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        const response = await loginUser({ email, password });

        setUser({
            id: response.id,
            email: response.email,
        });

        setToken(response.token);

        localStorage.setItem("donezo_token", response.token);
        localStorage.setItem(
            "donezo_user",
            JSON.stringify({
                id: response.id,
                email: response.email,
            })
        );
    };

    const logout = () => {
        setUser(null);
        setToken(null);

        localStorage.removeItem("donezo_token");
        localStorage.removeItem("donezo_user");
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                isAuthenticated: !!token,
                login,
                logout,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};