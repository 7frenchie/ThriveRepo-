import { Tabs } from 'expo-router';
import { House, Bot, Users, Trophy, User } from 'lucide-react-native';
import { StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

export default function TabLayout() {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: theme.colors.surface,
      borderTopColor: theme.colors.border,
      borderTopWidth: 1,
      paddingTop: 8,
      paddingBottom: 24,
      height: 84,
    },
    tabLabel: {
      fontFamily: 'Inter-Medium',
      fontSize: 12,
      marginTop: 4,
    },
    tabIcon: {
      marginBottom: -4,
    },
  });

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textTertiary,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIconStyle: styles.tabIcon,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <House size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="joe"
        options={{
          title: 'Joe',
          tabBarIcon: ({ size, color }) => (
            <Bot size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="communities"
        options={{
          title: 'Community',
          tabBarIcon: ({ size, color }) => (
            <Users size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="challenges"
        options={{
          title: 'Challenges',
          tabBarIcon: ({ size, color }) => (
            <Trophy size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ size, color }) => (
            <User size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}