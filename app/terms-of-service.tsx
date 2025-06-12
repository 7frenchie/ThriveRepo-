import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, FileText, Users, Shield, TriangleAlert as AlertTriangle, Scale, Globe } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';

export default function TermsOfServiceScreen() {
  const { theme } = useTheme();

  const sections = [
    {
      id: 1,
      title: 'Acceptance of Terms',
      icon: FileText,
      content: [
        'By accessing or using Thrive, you agree to be bound by these Terms of Service',
        'If you do not agree to these terms, you may not use our services',
        'We may update these terms from time to time, and continued use constitutes acceptance',
        'You must be at least 13 years old to use our services',
      ],
    },
    {
      id: 2,
      title: 'Description of Service',
      icon: Users,
      content: [
        'Thrive is a health and fitness platform that provides tracking, coaching, and community features',
        'Our AI coach provides personalized insights based on your health data',
        'Community features allow you to connect with other users and participate in challenges',
        'We reserve the right to modify or discontinue any part of our service',
      ],
    },
    {
      id: 3,
      title: 'User Responsibilities',
      icon: Shield,
      content: [
        'You are responsible for maintaining the confidentiality of your account',
        'You must provide accurate and complete information when creating your account',
        'You agree not to use the service for any unlawful or prohibited activities',
        'You are responsible for all activities that occur under your account',
        'You must not attempt to gain unauthorized access to our systems',
      ],
    },
    {
      id: 4,
      title: 'Health Information Disclaimer',
      icon: AlertTriangle,
      content: [
        'Thrive is not a medical device and should not replace professional medical advice',
        'Our AI coach provides general wellness suggestions, not medical diagnoses',
        'Always consult with healthcare professionals for medical concerns',
        'We are not responsible for any health decisions made based on our platform',
        'Emergency situations should be handled by contacting emergency services',
      ],
    },
    {
      id: 5,
      title: 'Intellectual Property',
      icon: Scale,
      content: [
        'All content and technology on Thrive is owned by us or our licensors',
        'You may not copy, modify, or distribute our content without permission',
        'User-generated content remains your property, but you grant us license to use it',
        'We respect intellectual property rights and expect users to do the same',
      ],
    },
    {
      id: 6,
      title: 'Limitation of Liability',
      icon: Globe,
      content: [
        'Our service is provided "as is" without warranties of any kind',
        'We are not liable for any indirect, incidental, or consequential damages',
        'Our total liability is limited to the amount you paid for our services',
        'Some jurisdictions do not allow limitation of liability, so these may not apply to you',
      ],
    },
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
      marginBottom: 16,
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
    subtitle: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: '#E5E7EB',
      lineHeight: 24,
    },
    content: {
      flex: 1,
      paddingHorizontal: 24,
    },
    lastUpdated: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      textAlign: 'center',
      marginBottom: 24,
      paddingVertical: 12,
      paddingHorizontal: 16,
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    introduction: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 24,
      marginBottom: 32,
      textAlign: 'center',
    },
    section: {
      marginBottom: 24,
    },
    sectionCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 20,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    sectionIcon: {
      marginRight: 12,
    },
    sectionTitle: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      flex: 1,
    },
    sectionContent: {
      gap: 12,
    },
    bulletPoint: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    bullet: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: theme.colors.primary,
      marginTop: 8,
      marginRight: 12,
    },
    bulletText: {
      flex: 1,
      fontSize: 15,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 22,
    },
    contactSection: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 20,
      marginBottom: 32,
    },
    contactTitle: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 12,
    },
    contactText: {
      fontSize: 15,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 22,
      marginBottom: 16,
    },
    contactInfo: {
      backgroundColor: theme.colors.background,
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    contactEmail: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.primary,
      marginBottom: 4,
    },
    contactAddress: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      lineHeight: 20,
    },
  });

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
          <Text style={styles.title}>Terms of Service</Text>
        </View>
        <Text style={styles.subtitle}>
          Please read these terms carefully before using our services.
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.lastUpdated}>
          Last updated: January 15, 2024
        </Text>

        <Text style={styles.introduction}>
          Welcome to Thrive. These Terms of Service govern your use of our health and fitness platform. By using our services, you agree to these terms and our commitment to helping you achieve your wellness goals.
        </Text>

        {sections.map((section) => {
          const IconComponent = section.icon;
          return (
            <View key={section.id} style={styles.section}>
              <View style={styles.sectionCard}>
                <View style={styles.sectionHeader}>
                  <View style={styles.sectionIcon}>
                    <IconComponent size={24} color={theme.colors.primary} />
                  </View>
                  <Text style={styles.sectionTitle}>{section.title}</Text>
                </View>
                <View style={styles.sectionContent}>
                  {section.content.map((item, index) => (
                    <View key={index} style={styles.bulletPoint}>
                      <View style={styles.bullet} />
                      <Text style={styles.bulletText}>{item}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          );
        })}

        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Contact Us</Text>
          <Text style={styles.contactText}>
            If you have any questions about these Terms of Service, please contact us:
          </Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactEmail}>legal@thrive.com</Text>
            <Text style={styles.contactAddress}>
              Thrive Legal Team{'\n'}
              123 Health Street{'\n'}
              San Francisco, CA 94105{'\n'}
              United States
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}