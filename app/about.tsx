import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Heart, Users, Target, Award, Mail, Globe, Github, Twitter } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';

export default function AboutScreen() {
  const { theme } = useTheme();

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former fitness coach with 10+ years helping people achieve their health goals.',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Chief Medical Officer',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Board-certified physician specializing in preventive medicine and digital health.',
    },
    {
      name: 'Alex Rodriguez',
      role: 'Head of Engineering',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Tech veteran with expertise in AI, machine learning, and health data platforms.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Health First',
      description: 'We prioritize your wellbeing above all else, ensuring our platform promotes healthy habits and positive outcomes.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'We believe in the power of community support and connection to help everyone achieve their goals.',
    },
    {
      icon: Target,
      title: 'Personalized Approach',
      description: 'Every person is unique, so we provide personalized insights and recommendations tailored to you.',
    },
    {
      icon: Award,
      title: 'Evidence Based',
      description: 'Our recommendations are grounded in scientific research and proven health practices.',
    },
  ];

  const stats = [
    { number: '500K+', label: 'Active Users' },
    { number: '2M+', label: 'Workouts Tracked' },
    { number: '150+', label: 'Countries' },
    { number: '4.8★', label: 'App Rating' },
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
    section: {
      marginBottom: 32,
    },
    sectionTitle: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 16,
    },
    missionCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 24,
      alignItems: 'center',
      marginBottom: 32,
    },
    missionIcon: {
      marginBottom: 16,
    },
    missionTitle: {
      fontSize: 22,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 12,
      textAlign: 'center',
    },
    missionText: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 24,
      textAlign: 'center',
    },
    statsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 16,
      marginBottom: 32,
    },
    statCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 20,
      width: '48%',
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
      textAlign: 'center',
    },
    valuesGrid: {
      gap: 16,
    },
    valueCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 20,
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    valueIcon: {
      marginRight: 16,
      marginTop: 4,
    },
    valueContent: {
      flex: 1,
    },
    valueTitle: {
      fontSize: 16,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 8,
    },
    valueDescription: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 20,
    },
    teamGrid: {
      gap: 16,
    },
    teamCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 20,
      alignItems: 'center',
    },
    teamImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginBottom: 16,
    },
    teamName: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 4,
    },
    teamRole: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.primary,
      marginBottom: 12,
    },
    teamBio: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 20,
      textAlign: 'center',
    },
    contactSection: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 24,
      marginBottom: 32,
    },
    contactTitle: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 16,
      textAlign: 'center',
    },
    contactText: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 24,
      textAlign: 'center',
      marginBottom: 24,
    },
    socialLinks: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 16,
    },
    socialButton: {
      backgroundColor: theme.colors.background,
      width: 48,
      height: 48,
      borderRadius: 24,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignItems: 'center',
      justifyContent: 'center',
    },
    contactInfo: {
      backgroundColor: theme.colors.background,
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginTop: 16,
    },
    contactEmail: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.primary,
      textAlign: 'center',
      marginBottom: 8,
    },
    contactAddress: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      textAlign: 'center',
      lineHeight: 20,
    },
    versionInfo: {
      alignItems: 'center',
      paddingVertical: 24,
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
                        <Text style={styles.title}>About Thrive</Text>
        </View>
        <Text style={styles.subtitle}>
          Learn about our mission, values, and the team behind your health journey.
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        {/* Mission */}
        <View style={styles.missionCard}>
          <View style={styles.missionIcon}>
            <Heart size={48} color={theme.colors.primary} />
          </View>
          <Text style={styles.missionTitle}>Our Mission</Text>
          <Text style={styles.missionText}>
            To empower everyone to live healthier, happier lives through personalized health tracking, AI-powered insights, and supportive community connections.
          </Text>
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Impact by Numbers</Text>
          <View style={styles.statsContainer}>
            {stats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <Text style={styles.statNumber}>{stat.number}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Values */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Values</Text>
          <View style={styles.valuesGrid}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <View key={index} style={styles.valueCard}>
                  <View style={styles.valueIcon}>
                    <IconComponent size={24} color={theme.colors.primary} />
                  </View>
                  <View style={styles.valueContent}>
                    <Text style={styles.valueTitle}>{value.title}</Text>
                    <Text style={styles.valueDescription}>{value.description}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        {/* Team */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Our Team</Text>
          <View style={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <View key={index} style={styles.teamCard}>
                <Image source={{ uri: member.image }} style={styles.teamImage} />
                <Text style={styles.teamName}>{member.name}</Text>
                <Text style={styles.teamRole}>{member.role}</Text>
                <Text style={styles.teamBio}>{member.bio}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Contact */}
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Get in Touch</Text>
          <Text style={styles.contactText}>
            We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, don't hesitate to reach out.
          </Text>
          
          <View style={styles.socialLinks}>
            <TouchableOpacity style={styles.socialButton}>
              <Mail size={20} color={theme.colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Globe size={20} color={theme.colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Twitter size={20} color={theme.colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Github size={20} color={theme.colors.primary} />
            </TouchableOpacity>
          </View>

          <View style={styles.contactInfo}>
                            <Text style={styles.contactEmail}>hello@thrive.com</Text>
            <Text style={styles.contactAddress}>
                              Thrive Inc.{'\n'}
              123 Health Street{'\n'}
              San Francisco, CA 94105{'\n'}
              United States
            </Text>
          </View>
        </View>

        {/* Version Info */}
        <View style={styles.versionInfo}>
                        <Text style={styles.versionText}>Thrive v1.0.0</Text>
          <Text style={styles.buildText}>Build 2024.1.1</Text>
        </View>
      </View>
    </ScrollView>
  );
}