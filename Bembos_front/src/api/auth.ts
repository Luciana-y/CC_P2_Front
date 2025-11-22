import api from "./axios";
import type {LoginRequest} from "../interfaces/user";
import type {LoginResponse} from "../interfaces/user";

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await api.post("/login", data);
  return response.data.data; // por tu wrapper "ok()" → { data: {...} }
}

export async function registerWorker(data: any) {
  const response = await api.post("/register-worker", data);
  return response.data.data;
}

export async function registerClient(data: any) {
  const response = await api.post("/register-client", data);
  return response.data.data;
}
