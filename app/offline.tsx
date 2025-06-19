import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { WifiOff, RefreshCw, Settings } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';

export default function OfflineScreen() {
  const { theme } = useTheme();

  const handleRetry = () => {
    // In a real app, this would check network connectivity and retry
    router.back();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    illustration: {
      width: 200,
      height: 200,
      borderRadius: 20,
      marginBottom: 32,
    },
    iconContainer: {
      width: 80,
      height: 80,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 32,
    },
    title: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: 12,
    },
    description: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
      marginBottom: 32,
    },
    featuresContainer: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 20,
      marginBottom: 32,
      width: '100%',
    },
    featuresTitle: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 16,
      textAlign: 'center',
    },
    featuresList: {
      gap: 12,
    },
    featureItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    featureBullet: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: theme.colors.primary,
      marginRight: 12,
    },
    featureText: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      flex: 1,
      lineHeight: 20,
    },
    buttonsContainer: {
      width: '100%',
      gap: 12,
    },
    retryButton: {
      borderRadius: 16,
      overflow: 'hidden',
    },
    retryButtonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 32,
    },
    retryButtonText: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginLeft: 8,
    },
    settingsButton: {
      backgroundColor: theme.colors.surface,
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    settingsButtonText: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      marginLeft: 8,
    },
    tipContainer: {
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 16,
      marginTop: 24,
      width: '100%',
    },
    tipTitle: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      marginBottom: 8,
    },
    tipText: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 18,
    },
  });

  const offlineFeatures = [
    'View previously synced health data',
    'Log workouts and activities manually',
    'Browse saved community content',
    'Access downloaded challenge details',
    'Review your achievement history',
  ];

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400' }}
        style={styles.illustration}
      />

      <LinearGradient
        colors={[theme.colors.error, theme.colors.error + '80']}
        style={styles.iconContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <WifiOff size={40} color="#FFFFFF" />
      </LinearGradient>

      <Text style={styles.title}>You're Offline</Text>
      <Text style={styles.description}>
                  It looks like you're not connected to the internet. Don't worry, you can still use some features of Thrive while offline.
      </Text>

      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>What you can do offline:</Text>
        <View style={styles.featuresList}>
          {offlineFeatures.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={styles.featureBullet} />
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
          <LinearGradient
            colors={theme.colors.gradient.primary}
            style={styles.retryButtonContent}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <RefreshCw size={20} color="#FFFFFF" />
            <Text style={styles.retryButtonText}>Try Again</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={20} color={theme.colors.text} />
          <Text style={styles.settingsButtonText}>Network Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tipContainer}>
        <Text style={styles.tipTitle}>💡 Tip</Text>
        <Text style={styles.tipText}>
          Your data will automatically sync when you're back online. Any activities you log offline will be saved and uploaded once connected.
        </Text>
      </View>
    </View>
  );
}