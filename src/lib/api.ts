import axios, { AxiosInstance } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Request interceptor to add auth token
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = this.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle errors
    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          this.clearToken();
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
        }
        return Promise.reject(error);
      }
    );
  }

  private getToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token");
    }
    return null;
  }

  private clearToken(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
    }
  }

  public setToken(token: string): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
  }

  // Auth endpoints
  async register(data: { name: string; email: string; password: string }) {
    const response = await this.axiosInstance.post("/auth/register", data);
    return response.data;
  }

  async login(data: { email: string; password: string }) {
    const response = await this.axiosInstance.post("/auth/login", data);
    if (response.data.token) {
      this.setToken(response.data.token);
      // Also sync with zustand store
      if (typeof window !== 'undefined') {
        const { setToken } = await import('@/store/authStore').then(m => m.useAuthStore.getState());
        setToken(response.data.token);
      }
    }
    return response.data;
  }

  async getMe() {
    const response = await this.axiosInstance.get("/auth/me");
    return response.data;
  }

  // Goal endpoints
  // Removed - deleted goal, insights, dashboard modules

  // Progress endpoints
  // Removed - deleted goal, insights, dashboard modules

  // Insight endpoints
  // Removed - deleted goal, insights, dashboard modules

  // PDF endpoints
  // Removed - deleted goal, insights, dashboard modules
}

// Create a single instance
export const api = new ApiClient();

// Also export individual API objects for backward compatibility
export const authAPI = {
  register: (data: { name: string; email: string; password: string }) => 
    api.register(data),
  login: (data: { email: string; password: string }) => 
    api.login(data),
  getMe: () => 
    api.getMe(),
};
