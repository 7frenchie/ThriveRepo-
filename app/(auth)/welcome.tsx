import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, Activity, Users, Trophy, ArrowRight, Sparkles, Target, Brain } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';
import { useState, useEffect } from 'react';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const { theme } = useTheme();
  const [currentFeature, setCurrentFeature] = useState(0);

  const heroFeatures = [
    {
      title: 'Track Your Health Journey',
      subtitle: 'Monitor vitals, sleep, and activity with AI insights',
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Heart,
      gradient: ['#8B5CF6', '#3B82F6'],
    },
    {
      title: 'Connect with Community',
      subtitle: 'Join supportive groups and find motivation',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Users,
      gradient: ['#10B981', '#06B6D4'],
    },
    {
      title: 'Complete Challenges',
      subtitle: 'Stay motivated with fun challenges and rewards',
      image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Trophy,
      gradient: ['#F97316', '#EF4444'],
    },
  ];

  const features = [
    {
      icon: Target,
      title: 'Smart Goals',
      description: 'AI-powered goal setting based on your lifestyle',
      color: '#8B5CF6',
    },
    {
      icon: Brain,
      title: 'AI Coach Joe',
      description: 'Personalized insights and recommendations',
      color: '#10B981',
    },
    {
      icon: Activity,
      title: 'Real-time Tracking',
      description: 'Seamless integration with all your devices',
      color: '#F97316',
    },
    {
      icon: Sparkles,
      title: 'Achievements',
      description: 'Unlock badges and celebrate milestones',
      color: '#EF4444',
    },
  ];

  const stats = [
    { number: '500K+', label: 'Active Users' },
    { number: '2M+', label: 'Workouts Tracked' },
    { number: '4.8★', label: 'App Rating' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % heroFeatures.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    heroSection: {
      height: height * 0.65,
      position: 'relative',
      overflow: 'hidden',
    },
    heroImage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    heroOverlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    heroGradient: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    heroContent: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 32,
      paddingBottom: 48,
    },
    logoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
    },
    logo: {
      width: 48,
      height: 48,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    appName: {
      fontSize: 32,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    heroTitle: {
      fontSize: 40,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      lineHeight: 48,
      marginBottom: 12,
    },
    heroSubtitle: {
      fontSize: 18,
      fontFamily: 'Inter-Regular',
      color: '#E5E7EB',
      lineHeight: 26,
      marginBottom: 32,
    },
    heroIndicators: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8,
      marginBottom: 24,
    },
    indicator: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
    activeIndicator: {
      backgroundColor: '#FFFFFF',
      width: 24,
    },
    contentSection: {
      paddingHorizontal: 24,
      paddingVertical: 32,
    },
    sectionTitle: {
      fontSize: 28,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: 16,
    },
    sectionSubtitle: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
      marginBottom: 32,
    },
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 48,
      paddingVertical: 24,
      backgroundColor: theme.colors.surface,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: theme.colors.primary,
      marginBottom: 4,
    },
    statLabel: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
    },
    featuresGrid: {
      gap: 16,
      marginBottom: 48,
    },
    featureRow: {
      flexDirection: 'row',
      gap: 16,
    },
    featureCard: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: 24,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignItems: 'center',
    },
    featureIcon: {
      width: 56,
      height: 56,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    featureTitle: {
      fontSize: 16,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 8,
      textAlign: 'center',
    },
    featureDescription: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 20,
    },
    ctaSection: {
      paddingHorizontal: 24,
      paddingBottom: 48,
    },
    ctaCard: {
      padding: 32,
      borderRadius: 24,
      alignItems: 'center',
      marginBottom: 24,
    },
    ctaTitle: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginBottom: 12,
      textAlign: 'center',
    },
    ctaSubtitle: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: '#E5E7EB',
      textAlign: 'center',
      lineHeight: 24,
      marginBottom: 32,
    },
    buttonContainer: {
      gap: 16,
      width: '100%',
    },
    primaryButton: {
      borderRadius: 16,
      overflow: 'hidden',
    },
    primaryButtonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 18,
      paddingHorizontal: 32,
    },
    primaryButtonText: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginRight: 8,
    },
    secondaryButton: {
      backgroundColor: theme.colors.surface,
      paddingVertical: 18,
      paddingHorizontal: 32,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignItems: 'center',
    },
    secondaryButtonText: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
    },
    termsText: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      textAlign: 'center',
      lineHeight: 18,
      marginTop: 24,
    },
    linkText: {
      color: theme.colors.primary,
      textDecorationLine: 'underline',
    },
  });

  const currentHeroFeature = heroFeatures[currentFeature];
  const IconComponent = currentHeroFeature.icon;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={{ uri: currentHeroFeature.image }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay} />
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
          style={styles.heroGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        
        <View style={styles.heroContent}>
          <View style={styles.logoContainer}>
            <LinearGradient
              colors={currentHeroFeature.gradient}
              style={styles.logo}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Heart size={24} color="#FFFFFF" />
            </LinearGradient>
                            <Text style={styles.appName}>Thrive</Text>
          </View>
          
          <Text style={styles.heroTitle}>{currentHeroFeature.title}</Text>
          <Text style={styles.heroSubtitle}>{currentHeroFeature.subtitle}</Text>
          
          <View style={styles.heroIndicators}>
            {heroFeatures.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === currentFeature && styles.activeIndicator,
                ]}
              />
            ))}
          </View>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.contentSection}>
        <Text style={styles.sectionTitle}>Trusted by Thousands</Text>
        <Text style={styles.sectionSubtitle}>
          Join a community of health enthusiasts achieving their goals every day
        </Text>
        
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statNumber}>{stat.number}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Features Grid */}
        <View style={styles.featuresGrid}>
          <View style={styles.featureRow}>
            {features.slice(0, 2).map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <View key={index} style={styles.featureCard}>
                  <LinearGradient
                    colors={[feature.color, feature.color + '80']}
                    style={styles.featureIcon}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <FeatureIcon size={24} color="#FFFFFF" />
                  </LinearGradient>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>{feature.description}</Text>
                </View>
              );
            })}
          </View>
          <View style={styles.featureRow}>
            {features.slice(2, 4).map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <View key={index + 2} style={styles.featureCard}>
                  <LinearGradient
                    colors={[feature.color, feature.color + '80']}
                    style={styles.featureIcon}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <FeatureIcon size={24} color="#FFFFFF" />
                  </LinearGradient>
                  <Text style={styles.featureTitle}>{feature.title}</Text>
                  <Text style={styles.featureDescription}>{feature.description}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <LinearGradient
          colors={theme.colors.gradient.primary}
          style={styles.ctaCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.ctaTitle}>Ready to Transform Your Health?</Text>
          <Text style={styles.ctaSubtitle}>
            Start your journey today with personalized insights, community support, and AI-powered coaching
          </Text>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => router.push('/(auth)/signup')}
            >
              <LinearGradient
                colors={['#FFFFFF', '#F3F4F6']}
                style={styles.primaryButtonContent}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={[styles.primaryButtonText, { color: theme.colors.primary }]}>
                  Get Started Free
                </Text>
                <ArrowRight size={20} color={theme.colors.primary} />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => router.push('/(auth)/login')}
            >
              <Text style={styles.secondaryButtonText}>I already have an account</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text 
            style={styles.linkText}
            onPress={() => router.push('/terms-of-service')}
          >
            Terms of Service
          </Text>{' '}
          and{' '}
          <Text 
            style={styles.linkText}
            onPress={() => router.push('/privacy-policy')}
          >
            Privacy Policy
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}