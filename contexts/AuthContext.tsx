import React, { createContext, useContext, useState, useEffect } from 'react';
import { router } from 'expo-router';
import { auth } from '../app/config/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  UserCredential,
  updateProfile,
} from 'firebase/auth';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName || '',
          email: firebaseUser.email || '',
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)');
    } catch (error) {
      throw new Error('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (firstName: string, lastName: string, email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });
      router.replace('/(auth)/onboarding');
    } catch (error) {
      throw new Error('Sign up failed');
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      signIn,
      signUp,
      signOut,
      isAuthenticated: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}