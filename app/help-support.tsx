import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Search, MessageCircle, Book, Video, Mail, Phone, ChevronRight, CircleHelp as HelpCircle, Bug, Lightbulb, Heart } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';
import { useState } from 'react';

export default function HelpSupportScreen() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const quickActions = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      action: 'chat',
      available: true,
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      action: 'email',
      available: true,
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for urgent issues',
      action: 'phone',
      available: false,
      note: 'Available Mon-Fri 9AM-5PM PST',
    },
  ];

  const helpCategories = [
    {
      icon: Heart,
      title: 'Getting Started',
              description: 'Learn the basics of using Thrive',
      articles: 12,
      popular: true,
    },
    {
      icon: Book,
      title: 'Health Tracking',
      description: 'How to track and sync your health data',
      articles: 18,
      popular: true,
    },
    {
      icon: MessageCircle,
      title: 'Communities & Challenges',
      description: 'Join groups and participate in challenges',
      articles: 8,
      popular: false,
    },
    {
      icon: Video,
      title: 'AI Coach (Joe)',
      description: 'Understanding your AI health coach',
      articles: 6,
      popular: true,
    },
    {
      icon: Bug,
      title: 'Troubleshooting',
      description: 'Fix common issues and problems',
      articles: 15,
      popular: false,
    },
    {
      icon: Lightbulb,
      title: 'Tips & Best Practices',
              description: 'Get the most out of Thrive',
      articles: 10,
      popular: false,
    },
  ];

  const faqItems = [
    {
      question: 'How do I sync my fitness tracker with Thrive?',
      answer: 'Go to Settings > Connected Devices and follow the setup instructions for your specific device.',
    },
    {
      question: 'Is my health data secure and private?',
      answer: 'Yes, we use industry-standard encryption and never sell your personal health data. See our Privacy Policy for details.',
    },
    {
      question: 'How does the AI coach work?',
      answer: 'Joe analyzes your health patterns and provides personalized insights based on your data and goals.',
    },
    {
      question: 'Can I use Thrive without a fitness tracker?',
      answer: 'Absolutely! You can manually log activities or use your phone\'s built-in sensors.',
    },
    {
      question: 'How do I join a community challenge?',
      answer: 'Visit the Challenges tab, browse available challenges, and tap "Join Challenge" on any that interest you.',
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
      marginBottom: 20,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    searchIcon: {
      marginRight: 12,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: '#FFFFFF',
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
    quickActionsGrid: {
      gap: 12,
    },
    actionCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    actionCardDisabled: {
      opacity: 0.6,
    },
    actionIcon: {
      marginRight: 16,
    },
    actionContent: {
      flex: 1,
    },
    actionTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      marginBottom: 4,
    },
    actionDescription: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 20,
    },
    actionNote: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      marginTop: 4,
    },
    actionChevron: {
      marginLeft: 12,
    },
    categoriesGrid: {
      gap: 12,
    },
    categoryCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    categoryIcon: {
      marginRight: 16,
    },
    categoryContent: {
      flex: 1,
    },
    categoryHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    categoryTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      flex: 1,
    },
    popularBadge: {
      backgroundColor: theme.colors.accent,
      paddingHorizontal: 8,
      paddingVertical: 2,
      borderRadius: 8,
      marginLeft: 8,
    },
    popularText: {
      fontSize: 10,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    categoryDescription: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 20,
      marginBottom: 4,
    },
    categoryArticles: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
    },
    faqList: {
      gap: 12,
    },
    faqCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 20,
    },
    faqQuestion: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      marginBottom: 12,
      lineHeight: 22,
    },
    faqAnswer: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 20,
    },
    contactSection: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 24,
      alignItems: 'center',
      marginBottom: 32,
    },
    contactTitle: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 8,
    },
    contactDescription: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 20,
      marginBottom: 20,
    },
    contactButton: {
      borderRadius: 12,
      overflow: 'hidden',
    },
    contactButtonContent: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      alignItems: 'center',
    },
    contactButtonText: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: '#FFFFFF',
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
          <Text style={styles.title}>Help & Support</Text>
        </View>
        <Text style={styles.subtitle}>
          Find answers to your questions or get in touch with our support team
        </Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <Search size={20} color="#E5E7EB" />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for help..."
            placeholderTextColor="#E5E7EB"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </LinearGradient>

      <View style={styles.content}>
        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get Help Now</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <TouchableOpacity 
                  key={index} 
                  style={[styles.actionCard, !action.available && styles.actionCardDisabled]}
                  disabled={!action.available}
                >
                  <View style={styles.actionIcon}>
                    <IconComponent size={24} color={theme.colors.primary} />
                  </View>
                  <View style={styles.actionContent}>
                    <Text style={styles.actionTitle}>{action.title}</Text>
                    <Text style={styles.actionDescription}>{action.description}</Text>
                    {action.note && (
                      <Text style={styles.actionNote}>{action.note}</Text>
                    )}
                  </View>
                  <View style={styles.actionChevron}>
                    <ChevronRight size={20} color={theme.colors.textTertiary} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Help Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Browse Help Topics</Text>
          <View style={styles.categoriesGrid}>
            {helpCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <TouchableOpacity key={index} style={styles.categoryCard}>
                  <View style={styles.categoryIcon}>
                    <IconComponent size={24} color={theme.colors.primary} />
                  </View>
                  <View style={styles.categoryContent}>
                    <View style={styles.categoryHeader}>
                      <Text style={styles.categoryTitle}>{category.title}</Text>
                      {category.popular && (
                        <View style={styles.popularBadge}>
                          <Text style={styles.popularText}>POPULAR</Text>
                        </View>
                      )}
                    </View>
                    <Text style={styles.categoryDescription}>{category.description}</Text>
                    <Text style={styles.categoryArticles}>{category.articles} articles</Text>
                  </View>
                  <View style={styles.actionChevron}>
                    <ChevronRight size={20} color={theme.colors.textTertiary} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* FAQ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          <View style={styles.faqList}>
            {faqItems.map((faq, index) => (
              <View key={index} style={styles.faqCard}>
                <Text style={styles.faqQuestion}>{faq.question}</Text>
                <Text style={styles.faqAnswer}>{faq.answer}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Contact */}
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Still Need Help?</Text>
          <Text style={styles.contactDescription}>
            Can't find what you're looking for? Our support team is here to help you with any questions or issues.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <LinearGradient
              colors={theme.colors.gradient.primary}
              style={styles.contactButtonContent}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.contactButtonText}>Contact Support</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}