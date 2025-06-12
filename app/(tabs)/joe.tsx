import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Bot, MessageCircle, Target, TrendingUp, Calendar, Zap } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

export default function JoeScreen() {
  const { theme } = useTheme();

  const insights = [
    {
      id: 1,
      type: 'synergy',
      title: 'Sleep & Workout Connection',
      description: 'Your 8+ hour sleep nights lead to 23% better workout performance. Try maintaining your bedtime routine.',
      icon: '💤',
      priority: 'high',
    },
    {
      id: 2,
      type: 'trend',
      title: 'Hydration Impact',
      description: 'Days with 8+ glasses of water show improved heart rate recovery. Keep that water bottle handy!',
      icon: '💧',
      priority: 'medium',
    },
    {
      id: 3,
      type: 'goal',
      title: 'Weekly Step Goal',
      description: 'You\'re 85% towards your weekly step goal. A 20-minute walk tomorrow will get you there!',
      icon: '🎯',
      priority: 'low',
    },
  ];

  const suggestions = [
    'Set a new strength training goal',
    'Plan your meal prep for optimal recovery',
    'Schedule rest days for better performance',
    'Track your mood alongside workouts',
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
    joe: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    joeAvatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    joeInfo: {
      flex: 1,
    },
    joeName: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    joeTitle: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: '#E5E7EB',
    },
    headerSubtitle: {
      fontSize: 15,
      fontFamily: 'Inter-Regular',
      color: '#E5E7EB',
      lineHeight: 22,
    },
    chatSection: {
      margin: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 16,
    },
    chatInput: {
      flexDirection: 'row',
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 4,
      alignItems: 'center',
    },
    textInput: {
      flex: 1,
      padding: 16,
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: theme.colors.text,
    },
    sendButton: {
      backgroundColor: theme.colors.primary,
      width: 40,
      height: 40,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 4,
    },
    quickQuestions: {
      flexDirection: 'row',
      gap: 8,
      marginTop: 12,
    },
    quickQuestion: {
      backgroundColor: theme.colors.surface,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    quickQuestionText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: theme.colors.textSecondary,
    },
    section: {
      margin: 16,
    },
    insightCard: {
      backgroundColor: theme.colors.surface,
      padding: 20,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: 12,
    },
    insightHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    insightIcon: {
      fontSize: 24,
      marginRight: 12,
    },
    insightInfo: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    insightTitle: {
      fontSize: 16,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      flex: 1,
    },
    priorityBadge: {
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 8,
      marginLeft: 8,
    },
    priorityHigh: {
      backgroundColor: theme.colors.error,
    },
    priorityMedium: {
      backgroundColor: theme.colors.accent,
    },
    priorityLow: {
      backgroundColor: theme.colors.success,
    },
    priorityText: {
      fontSize: 10,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    insightDescription: {
      fontSize: 15,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 22,
      marginBottom: 16,
    },
    insightAction: {
      alignSelf: 'flex-start',
    },
    insightActionText: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.primary,
    },
    goalCard: {
      backgroundColor: theme.colors.surface,
      padding: 20,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignItems: 'center',
      textAlign: 'center',
    },
    goalTitle: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginTop: 12,
      marginBottom: 8,
    },
    goalDescription: {
      fontSize: 15,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 22,
      marginBottom: 20,
    },
    goalButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 12,
    },
    goalButtonText: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: '#FFFFFF',
    },
    suggestionCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: 8,
    },
    suggestionText: {
      fontSize: 15,
      fontFamily: 'Inter-Medium',
      color: theme.colors.text,
      marginLeft: 12,
      flex: 1,
    },
    premiumCard: {
      margin: 16,
      padding: 24,
      borderRadius: 20,
      alignItems: 'center',
      textAlign: 'center',
    },
    premiumTitle: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginBottom: 8,
    },
    premiumDescription: {
      fontSize: 15,
      fontFamily: 'Inter-Regular',
      color: '#FFFFFF',
      textAlign: 'center',
      lineHeight: 22,
      marginBottom: 20,
      opacity: 0.9,
    },
    premiumButton: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 12,
    },
    premiumButtonText: {
      fontSize: 16,
      fontFamily: 'Inter-Bold',
      color: theme.colors.accent,
    },
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={theme.colors.gradient.primary}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.joe}>
          <View style={styles.joeAvatar}>
            <Bot size={32} color="#FFFFFF" />
          </View>
          <View style={styles.joeInfo}>
            <Text style={styles.joeName}>Joe</Text>
            <Text style={styles.joeTitle}>Your AI Health Coach</Text>
          </View>
        </View>
        <Text style={styles.headerSubtitle}>
          I analyze your health patterns to unlock personalized insights and help you reach your goals faster.
        </Text>
      </LinearGradient>

      {/* Quick Chat */}
      <View style={styles.chatSection}>
        <Text style={styles.sectionTitle}>Ask Joe Anything</Text>
        <View style={styles.chatInput}>
          <TextInput
            style={styles.textInput}
            placeholder="How can I improve my recovery time?"
            placeholderTextColor={theme.colors.textTertiary}
          />
          <TouchableOpacity style={styles.sendButton}>
            <MessageCircle size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View style={styles.quickQuestions}>
          <TouchableOpacity style={styles.quickQuestion}>
            <Text style={styles.quickQuestionText}>Why am I tired after workouts? 💤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickQuestion}>
            <Text style={styles.quickQuestionText}>Best time to exercise? ⏰</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Smart Insights */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Smart Insights</Text>
        {insights.map((insight) => (
          <View key={insight.id} style={styles.insightCard}>
            <View style={styles.insightHeader}>
              <Text style={styles.insightIcon}>{insight.icon}</Text>
              <View style={styles.insightInfo}>
                <Text style={styles.insightTitle}>{insight.title}</Text>
                <View style={[styles.priorityBadge, styles[`priority${insight.priority.charAt(0).toUpperCase() + insight.priority.slice(1)}`]]}>
                  <Text style={styles.priorityText}>{insight.priority.toUpperCase()}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.insightDescription}>{insight.description}</Text>
            <TouchableOpacity style={styles.insightAction}>
              <Text style={styles.insightActionText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Goal Setting */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Goal Assistant</Text>
        <View style={styles.goalCard}>
          <Target size={24} color={theme.colors.primary} />
          <Text style={styles.goalTitle}>Set Your Next Goal</Text>
          <Text style={styles.goalDescription}>
            Based on your progress, I recommend focusing on consistency over intensity this month.
          </Text>
          <TouchableOpacity style={styles.goalButton}>
            <Text style={styles.goalButtonText}>Create Goal Plan</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Suggestions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personalized Suggestions</Text>
        {suggestions.map((suggestion, index) => (
          <TouchableOpacity key={index} style={styles.suggestionCard}>
            <Zap size={20} color={theme.colors.accent} />
            <Text style={styles.suggestionText}>{suggestion}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Premium Unlock */}
      <LinearGradient
        colors={theme.colors.gradient.secondary}
        style={styles.premiumCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Text style={styles.premiumTitle}>Unlock Full Joe Experience</Text>
        <Text style={styles.premiumDescription}>
          Get unlimited insights, advanced goal planning, and priority support
        </Text>
        <TouchableOpacity style={styles.premiumButton}>
          <Text style={styles.premiumButtonText}>Start Free Trial</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}