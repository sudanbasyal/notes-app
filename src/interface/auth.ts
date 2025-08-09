import { User } from "./user";

export interface LoginValues {
  email: string;
  password: string;
}
export interface SignupValues {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}
export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  usedToken: string | null;
}

export interface AuthResponse {
  data: {
    accessToken: string;
    refreshToken: string;
  };
  user: User;
}
