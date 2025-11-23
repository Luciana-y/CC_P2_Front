// src/services/auth.ts
import type { LoginRequest, LoginResponse, RegisterClientRequest } from '../interfaces/user';

// Obtener el URL Base del API Gateway de Auth
// Nota: 'as string' es un Type Assertion para asegurar a TypeScript que la variable existe.
const AUTH_API_URL: string = import.meta.env.VITE_AUTH_API_BASE_URL as string;

// --- FUNCIÓN DE LOGIN ---
export const loginUser = async (credentials: LoginRequest): Promise<LoginResponse> => {
  const LOGIN_ENDPOINT = `${AUTH_API_URL}/auth/login`;

  try {
    const response = await fetch(LOGIN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials), // Usa el objeto tipado
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error ${response.status}: Fallo al iniciar sesión.`);
    }

    const data: LoginResponse = await response.json();
    return data;

  } catch (error) {
    throw error;
  }
};

// --- FUNCIÓN DE REGISTRO DE CLIENTE ---
export const registerClient = async (data: RegisterClientRequest): Promise<void> => {
  const REGISTER_CLIENT_ENDPOINT = `${AUTH_API_URL}/register/client`;

  try {
    const response = await fetch(REGISTER_CLIENT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error ${response.status}: Fallo al registrar usuario.`);
    }

    // No se espera un cuerpo de respuesta exitoso (void)
  } catch (error) {
    throw error;
  }
};