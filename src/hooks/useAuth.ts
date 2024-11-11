import { useCallback } from 'react';
import { useAuthStore } from '@/store/useAuthStore';

export const useAuth = () => {
  const store = useAuthStore();

  const handleLogin = useCallback(async (email: string, password: string) => {
    try {
      await store.login(email, password);
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }, []);

  return {
    user: store.user,
    isAuthenticated: store.isAuthenticated,
    token: store.token,
    login: handleLogin,
    logout: store.logout,
    updateUser: store.updateUser,
  };
};