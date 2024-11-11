export interface User {
    id: string;
    email: string;
    name: string;
    role: 'user' | 'admin';
  }
  
export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    token: string | null;

    // Actions
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    updateUser: (user: Partial<User>) => void;
    setToken: (token: string) => void;
}
