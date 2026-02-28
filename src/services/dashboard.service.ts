import axiosInstance from "@/lib/axios";
import type { DashboardResponse } from "@/types/dashboard.type";

export const getDashboard = async (): Promise<DashboardResponse> => {
    const { data } = await axiosInstance.get("/api/dashboard");
    return data;
};