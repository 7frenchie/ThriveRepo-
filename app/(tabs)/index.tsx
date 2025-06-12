import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart, Activity, Moon, Footprints, Target, TrendingUp } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { router } from 'expo-router';

export default function HomeScreen() {
  const { theme } = useTheme();
  const { user } = useAuth();

  const healthData = {
    steps: 8247,
    stepGoal: 10000,
    heartRate: 72,
    sleep: 7.2,
    activeMinutes: 45,
    calories: 2156,
  };

  const achievements = [
    { id: 1, title: '7-Day Streak', icon: '🔥', earned: true },
    { id: 2, title: 'Step Goal', icon: '👟', earned: true },
    { id: 3, title: 'Sleep Master', icon: '😴', earned: false },
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
    greeting: {
      fontSize: 28,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: '#E5E7EB',
    },
    coachCard: {
      backgroundColor: theme.colors.surface,
      margin: 16,
      padding: 20,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    coachHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    coachAvatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    coachEmoji: {
      fontSize: 20,
    },
    coachInfo: {
      flex: 1,
    },
    coachName: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
    },
    coachTitle: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
    },
    coachMessage: {
      fontSize: 15,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 22,
      marginBottom: 16,
    },
    coachButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 12,
      alignSelf: 'flex-start',
    },
    coachButtonText: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: '#FFFFFF',
    },
    section: {
      margin: 16,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
    },
    viewAllButton: {
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
    viewAllText: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.primary,
    },
    metricsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
    metricCard: {
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      width: '48%',
      alignItems: 'center',
    },
    metricValue: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginTop: 8,
    },
    metricLabel: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: theme.colors.textTertiary,
      marginTop: 4,
    },
    metricSubtext: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      marginTop: 2,
    },
    progressBar: {
      width: '100%',
      height: 4,
      backgroundColor: theme.colors.border,
      borderRadius: 2,
      marginTop: 8,
    },
    progressFill: {
      height: '100%',
      backgroundColor: theme.colors.primary,
      borderRadius: 2,
    },
    actionsRow: {
      flexDirection: 'row',
      gap: 12,
    },
    actionCard: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: 20,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignItems: 'center',
    },
    actionText: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      marginTop: 8,
    },
    achievementCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: 8,
    },
    achievementLocked: {
      opacity: 0.5,
    },
    achievementIcon: {
      fontSize: 24,
      marginRight: 12,
    },
    achievementTitle: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
    },
    achievementTitleLocked: {
      color: theme.colors.textTertiary,
    },
    achievementBadge: {
      fontSize: 18,
      color: theme.colors.success,
    },
  });

  const firstName = user?.name?.split(' ')[0] || 'User';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={theme.colors.gradient.primary}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Text style={styles.greeting}>Good morning, {firstName}!</Text>
        <Text style={styles.subtitle}>Let's make today count 💪</Text>
      </LinearGradient>

      {/* AI Coach Insight */}
      <View style={styles.coachCard}>
        <View style={styles.coachHeader}>
          <View style={styles.coachAvatar}>
            <Text style={styles.coachEmoji}>🤖</Text>
          </View>
          <View style={styles.coachInfo}>
            <Text style={styles.coachName}>Joe</Text>
            <Text style={styles.coachTitle}>Your AI Coach</Text>
          </View>
        </View>
        <Text style={styles.coachMessage}>
          Great job on yesterday's workout! Your heart rate data shows improved recovery. 
          Try a 15-minute walk after lunch to boost your step goal.
        </Text>
        <TouchableOpacity style={styles.coachButton}>
          <Text style={styles.coachButtonText}>View Full Insights</Text>
        </TouchableOpacity>
      </View>

      {/* Health Metrics */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Health</Text>
          <TouchableOpacity 
            style={styles.viewAllButton}
            onPress={() => router.push('/health-data')}
          >
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.metricsGrid}>
          <View style={styles.metricCard}>
            <Footprints size={24} color={theme.colors.primary} />
            <Text style={styles.metricValue}>{healthData.steps.toLocaleString()}</Text>
            <Text style={styles.metricLabel}>Steps</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${(healthData.steps / healthData.stepGoal) * 100}%` }]} />
            </View>
          </View>

          <View style={styles.metricCard}>
            <Heart size={24} color={theme.colors.error} />
            <Text style={styles.metricValue}>{healthData.heartRate}</Text>
            <Text style={styles.metricLabel}>BPM</Text>
            <Text style={styles.metricSubtext}>Resting</Text>
          </View>

          <View style={styles.metricCard}>
            <Moon size={24} color={theme.colors.secondary} />
            <Text style={styles.metricValue}>{healthData.sleep}h</Text>
            <Text style={styles.metricLabel}>Sleep</Text>
            <Text style={styles.metricSubtext}>Last night</Text>
          </View>

          <View style={styles.metricCard}>
            <Activity size={24} color={theme.colors.accent} />
            <Text style={styles.metricValue}>{healthData.activeMinutes}</Text>
            <Text style={styles.metricLabel}>Active min</Text>
            <Text style={styles.metricSubtext}>Today</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity style={styles.actionCard}>
            <Target size={24} color={theme.colors.primary} />
            <Text style={styles.actionText}>Set Goal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <TrendingUp size={24} color={theme.colors.success} />
            <Text style={styles.actionText}>View Trends</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Recent Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Achievements</Text>
        {achievements.map((achievement) => (
          <View key={achievement.id} style={[styles.achievementCard, !achievement.earned && styles.achievementLocked]}>
            <Text style={styles.achievementIcon}>{achievement.icon}</Text>
            <Text style={[styles.achievementTitle, !achievement.earned && styles.achievementTitleLocked]}>
              {achievement.title}
            </Text>
            {achievement.earned && <Text style={styles.achievementBadge}>✓</Text>}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}