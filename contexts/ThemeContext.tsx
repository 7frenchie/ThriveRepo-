import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

export interface Theme {
  colors: {
    background: string;
    surface: string;
    surfaceSecondary: string;
    border: string;
    text: string;
    textSecondary: string;
    textTertiary: string;
    primary: string;
    secondary: string;
    accent: string;
    success: string;
    warning: string;
    error: string;
    gradient: {
      primary: string[];
      secondary: string[];
    };
  };
  isDark: boolean;
}

const lightTheme: Theme = {
  colors: {
    background: '#FFFFFF',
    surface: '#F9FAFB',
    surfaceSecondary: '#F3F4F6',
    border: '#E5E7EB',
    text: '#111827',
    textSecondary: '#6B7280',
    textTertiary: '#9CA3AF',
    primary: '#8B5CF6',
    secondary: '#3B82F6',
    accent: '#F97316',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    gradient: {
      primary: ['#8B5CF6', '#3B82F6'],
      secondary: ['#F97316', '#EF4444'],
    },
  },
  isDark: false,
};

const darkTheme: Theme = {
  colors: {
    background: '#111827',
    surface: '#1F2937',
    surfaceSecondary: '#374151',
    border: '#374151',
    text: '#FFFFFF',
    textSecondary: '#E5E7EB',
    textTertiary: '#9CA3AF',
    primary: '#8B5CF6',
    secondary: '#3B82F6',
    accent: '#F97316',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    gradient: {
      primary: ['#8B5CF6', '#3B82F6'],
      secondary: ['#F97316', '#EF4444'],
    },
  },
  isDark: true,
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  themeMode: 'light' | 'dark' | 'system';
  setThemeMode: (mode: 'light' | 'dark' | 'system') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<'light' | 'dark' | 'system'>('system');
  
  const getTheme = (): Theme => {
    if (themeMode === 'system') {
      return systemColorScheme === 'dark' ? darkTheme : lightTheme;
    }
    return themeMode === 'dark' ? darkTheme : lightTheme;
  };

  const [theme, setTheme] = useState<Theme>(getTheme());

  useEffect(() => {
    setTheme(getTheme());
  }, [themeMode, systemColorScheme]);

  const toggleTheme = () => {
    setThemeMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}