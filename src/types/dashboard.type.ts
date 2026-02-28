import type { Analytics } from "./analytic.type";
import type { Product } from "./product.type";
import type { DashboardUser } from "./user.type";

export interface Overview {
    totalUsers: number;
    activeUsers: number;
    revenue: number;
    growth: number;
}


export interface DashboardResponse {
    overview: Overview;
    users: DashboardUser[];
    analytics: Analytics[];
    products: Product[];
}