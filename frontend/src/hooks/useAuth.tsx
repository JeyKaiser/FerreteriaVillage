"use client";

import { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { apiClient, RegisterRequest, LoginRequest, AuthResponse } from '@/lib/api';

export interface User {
  id: number;
  email: string;
  role: 'user' | 'ferreteria';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (credentials: LoginRequest) => Promise<{ success: boolean; error?: string }>;
  register: (userData: RegisterRequest) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is authenticated on mount
  useEffect(() => {
    const checkAuth = () => {
      if (apiClient.isAuthenticated()) {
        // In a real app, you might want to validate the token with the server
        // For now, we'll assume the token is valid if it exists
        // TODO: Add token validation endpoint
        setUser({ id: 0, email: '', role: 'user' }); // Placeholder
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (credentials: LoginRequest): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    try {
      const response = await apiClient.login(credentials);

      if (response.error) {
        setIsLoading(false);
        return { success: false, error: response.error };
      }

      if (response.data) {
        // For now, we don't have user info in the response
        // In a real app, you'd decode the JWT or call a /me endpoint
        setUser({
          id: 1, // Placeholder - should come from token or /me endpoint
          email: credentials.username,
          role: 'user', // Placeholder - should come from token
        });
      }

      setIsLoading(false);
      return { success: true };
    } catch (error) {
      setIsLoading(false);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Login failed'
      };
    }
  };

  const register = async (userData: RegisterRequest): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true);
    try {
      const response = await apiClient.register(userData);

      if (response.error) {
        setIsLoading(false);
        return { success: false, error: response.error };
      }

      if (response.data) {
        setUser({
          id: 1, // Placeholder
          email: userData.email,
          role: userData.role,
        });
      }

      setIsLoading(false);
      return { success: true };
    } catch (error) {
      setIsLoading(false);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Registration failed'
      };
    }
  };

  const logout = () => {
    apiClient.logout();
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}