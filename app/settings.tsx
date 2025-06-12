import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Moon, Sun, Monitor, Bell, Shield, User, Heart, Smartphone, Globe, CircleHelp as HelpCircle, LogOut, ChevronRight } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { router } from 'expo-router';

export default function SettingsScreen() {
  const { theme, themeMode, setThemeMode } = useTheme();
  const { signOut } = useAuth();

  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: signOut,
        },
      ]
    );
  };

  const settingsGroups = [
    {
      title: 'Appearance',
      items: [
        {
          id: 'theme',
          title: 'Theme',
          subtitle: 'Choose your preferred theme',
          type: 'theme',
          icon: themeMode === 'dark' ? Moon : themeMode === 'light' ? Sun : Monitor,
        },
      ],
    },
    {
      title: 'Notifications',
      items: [
        {
          id: 'push',
          title: 'Push Notifications',
          subtitle: 'Get notified about challenges and achievements',
          type: 'toggle',
          icon: Bell,
          value: true,
        },
        {
          id: 'health-reminders',
          title: 'Health Reminders',
          subtitle: 'Daily reminders to log your health data',
          type: 'toggle',
          icon: Heart,
          value: true,
        },
        {
          id: 'social',
          title: 'Social Updates',
          subtitle: 'Updates from your communities and friends',
          type: 'toggle',
          icon: Globe,
          value: false,
        },
      ],
    },
    {
      title: 'Privacy & Security',
      items: [
        {
          id: 'privacy',
          title: 'Privacy Settings',
          subtitle: 'Control who can see your data',
          type: 'navigation',
          icon: Shield,
          onPress: () => router.push('/privacy-policy'),
        },
        {
          id: 'data-sync',
          title: 'Health Data Sync',
          subtitle: 'Manage connected health apps',
          type: 'navigation',
          icon: Smartphone,
        },
      ],
    },
    {
      title: 'Account',
      items: [
        {
          id: 'profile',
          title: 'Edit Profile',
          subtitle: 'Update your personal information',
          type: 'navigation',
          icon: User,
        },
        {
          id: 'help',
          title: 'Help & Support',
          subtitle: 'Get help and contact support',
          type: 'navigation',
          icon: HelpCircle,
          onPress: () => router.push('/help-support'),
        },
        {
          id: 'logout',
          title: 'Sign Out',
          subtitle: 'Sign out of your account',
          type: 'action',
          icon: LogOut,
          destructive: true,
          onPress: handleSignOut,
        },
      ],
    },
  ];

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      padding: 24,
      paddingTop: 60,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      marginBottom: 16,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    backButton: {
      marginRight: 16,
      padding: 8,
    },
    title: {
      fontSize: 28,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      flex: 1,
    },
    section: {
      margin: 16,
    },
    sectionTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.textSecondary,
      marginBottom: 12,
      marginLeft: 4,
    },
    settingCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: 8,
    },
    settingItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    lastItem: {
      borderBottomWidth: 0,
    },
    settingIcon: {
      marginRight: 12,
    },
    settingContent: {
      flex: 1,
    },
    settingTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      marginBottom: 2,
    },
    settingSubtitle: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
    },
    settingAction: {
      marginLeft: 12,
    },
    destructiveText: {
      color: theme.colors.error,
    },
    themeModal: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginTop: 8,
    },
    themeOption: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    themeOptionLast: {
      borderBottomWidth: 0,
    },
    themeOptionSelected: {
      backgroundColor: theme.colors.primary + '20',
    },
    themeOptionIcon: {
      marginRight: 12,
    },
    themeOptionText: {
      fontSize: 16,
      fontFamily: 'Inter-Medium',
      color: theme.colors.text,
      flex: 1,
    },
    themeOptionCheck: {
      width: 20,
      height: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    themeOptionCheckSelected: {
      backgroundColor: theme.colors.primary,
    },
    checkMark: {
      color: '#FFFFFF',
      fontSize: 12,
      fontFamily: 'Inter-Bold',
    },
    versionInfo: {
      alignItems: 'center',
      padding: 24,
      marginTop: 16,
    },
    versionText: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      marginBottom: 4,
    },
    buildText: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
    },
  });

  const renderSettingItem = (item: any, isLast: boolean) => {
    const IconComponent = item.icon;
    
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.settingItem, isLast && styles.lastItem]}
        onPress={item.onPress}
      >
        <View style={styles.settingIcon}>
          <IconComponent 
            size={20} 
            color={item.destructive ? theme.colors.error : theme.colors.textSecondary} 
          />
        </View>
        <View style={styles.settingContent}>
          <Text style={[styles.settingTitle, item.destructive && styles.destructiveText]}>
            {item.title}
          </Text>
          <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
        </View>
        <View style={styles.settingAction}>
          {item.type === 'toggle' && (
            <Switch
              value={item.value}
              onValueChange={() => {}}
              trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
              thumbColor={item.value ? '#FFFFFF' : theme.colors.textTertiary}
            />
          )}
          {(item.type === 'navigation' || item.type === 'action') && (
            <ChevronRight size={20} color={theme.colors.textTertiary} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderThemeSection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Appearance</Text>
      <View style={styles.settingCard}>
        <View style={styles.settingItem}>
          <View style={styles.settingIcon}>
            {themeMode === 'dark' ? (
              <Moon size={20} color={theme.colors.textSecondary} />
            ) : themeMode === 'light' ? (
              <Sun size={20} color={theme.colors.textSecondary} />
            ) : (
              <Monitor size={20} color={theme.colors.textSecondary} />
            )}
          </View>
          <View style={styles.settingContent}>
            <Text style={styles.settingTitle}>Theme</Text>
            <Text style={styles.settingSubtitle}>Choose your preferred theme</Text>
          </View>
        </View>
        <View style={styles.themeModal}>
          {themeOptions.map((option, index) => {
            const IconComponent = option.icon;
            const isSelected = themeMode === option.value;
            const isLast = index === themeOptions.length - 1;
            
            return (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.themeOption,
                  isLast && styles.themeOptionLast,
                  isSelected && styles.themeOptionSelected,
                ]}
                onPress={() => setThemeMode(option.value as 'light' | 'dark' | 'system')}
              >
                <View style={styles.themeOptionIcon}>
                  <IconComponent size={20} color={theme.colors.textSecondary} />
                </View>
                <Text style={styles.themeOptionText}>{option.label}</Text>
                <View style={[styles.themeOptionCheck, isSelected && styles.themeOptionCheckSelected]}>
                  {isSelected && <Text style={styles.checkMark}>✓</Text>}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={theme.colors.gradient.primary}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.headerContent}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color="#FFFFFF" />
          </TouchableOpacity>
          <Text style={styles.title}>Settings</Text>
        </View>
      </LinearGradient>

      {renderThemeSection()}

      {settingsGroups.slice(1).map((group) => (
        <View key={group.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{group.title}</Text>
          <View style={styles.settingCard}>
            {group.items.map((item, index) => 
              renderSettingItem(item, index === group.items.length - 1)
            )}
          </View>
        </View>
      ))}

      <View style={styles.versionInfo}>
                    <Text style={styles.versionText}>Thrive v1.0.0</Text>
        <Text style={styles.buildText}>Build 2024.1.1</Text>
      </View>
    </ScrollView>
  );
}