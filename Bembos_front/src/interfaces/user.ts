export interface LoginRequest {
  correo: string;
  contraseña: string;
}

export interface LoginResponse {
  token: string;
  type: "worker" | "user"; // coincide con tu lambda
}

export interface RegisterWorkerRequest {
  nombre: string;
  apellidos: string;
  correo: string;
  documento: string;
  numero_telefono: string;
  rol: "admin" | "cocina" | "delivery";
  tenant_id: string;
  contraseña: string;
}

export interface RegisterClientRequest {
  nombre: string;
  apellidos: string;
  correo: string;
  numero: string;
  documento: string;
  fecha_nacimiento: string;
  contraseña: string;
}

export interface AuthData {
  token: string | null;
  type: "worker" | "user" | null;
}
