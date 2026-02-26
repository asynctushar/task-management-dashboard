import axiosInstance from "@/lib/axios";
import type { LoginPayload, LoginResponse } from "@/types/user.type";

export const loginUser = async (
    payload: LoginPayload
): Promise<LoginResponse> => {
    const { data } = await axiosInstance.post<LoginResponse>(
        "/api/login",
        payload
    );

    return data;
};