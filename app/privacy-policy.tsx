import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';

export default function PrivacyPolicyScreen() {
  const { theme } = useTheme();

  const sections = [
    {
      id: 1,
      title: 'Information We Collect',
      icon: Database,
      content: [
        'Personal information you provide when creating an account (name, email, profile picture)',
        'Health and fitness data you choose to share or sync from connected devices',
        'Usage data about how you interact with our app and services',
        'Device information including device type, operating system, and unique identifiers',
        'Location data when you enable location-based features',
      ],
    },
    {
      id: 2,
      title: 'How We Use Your Information',
      icon: Eye,
      content: [
        'Provide and improve our health tracking and coaching services',
        'Generate personalized insights and recommendations through our AI coach',
        'Enable community features and connect you with other users',
        'Send you important updates, notifications, and promotional content',
        'Ensure the security and integrity of our platform',
        'Comply with legal obligations and protect our rights',
      ],
    },
    {
      id: 3,
      title: 'Information Sharing',
      icon: Users,
      content: [
        'We do not sell your personal information to third parties',
        'Health data is only shared with your explicit consent',
        'Community features allow you to share information you choose to make public',
        'We may share aggregated, anonymized data for research purposes',
        'Service providers who help us operate our platform under strict confidentiality',
        'Legal authorities when required by law or to protect our users',
      ],
    },
    {
      id: 4,
      title: 'Data Security',
      icon: Lock,
      content: [
        'Industry-standard encryption for data transmission and storage',
        'Regular security audits and vulnerability assessments',
        'Access controls and authentication measures for our systems',
        'Employee training on data protection and privacy practices',
        'Incident response procedures for potential security breaches',
        'Compliance with healthcare data protection standards',
      ],
    },
    {
      id: 5,
      title: 'Your Rights and Choices',
      icon: Shield,
      content: [
        'Access, update, or delete your personal information at any time',
        'Control what health data you share and with whom',
        'Opt out of promotional communications while keeping essential notifications',
        'Request a copy of your data in a portable format',
        'Withdraw consent for data processing where applicable',
        'Contact us with privacy concerns or questions',
      ],
    },
    {
      id: 6,
      title: 'International Transfers',
      icon: Globe,
      content: [
        'Your data may be processed in countries other than your residence',
        'We ensure adequate protection through appropriate safeguards',
        'Compliance with international data protection frameworks',
        'Regular review of data transfer mechanisms and protections',
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
          <Text style={styles.title}>Privacy Policy</Text>
        </View>
        <Text style={styles.subtitle}>
          Your privacy is important to us. Learn how we collect, use, and protect your information.
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        <Text style={styles.lastUpdated}>
          Last updated: January 15, 2024
        </Text>

        <Text style={styles.introduction}>
          At Thrive, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect your data when you use our health and fitness platform.
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
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactEmail}>privacy@thrive.com</Text>
            <Text style={styles.contactAddress}>
                              Thrive Privacy Team{'\n'}
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