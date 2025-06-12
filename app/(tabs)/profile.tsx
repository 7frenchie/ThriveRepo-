import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  User, 
  Settings, 
  Shield, 
  Trophy, 
  Users, 
  Target, 
  Calendar,
  Flame,
  Medal,
  Crown,
  Share,
  Lock,
  Globe,
  ChevronRight,
  Star,
  TrendingUp
} from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const { theme } = useTheme();

  const userStats = {
    name: 'Alex Johnson',
    memberSince: 'January 2024',
    currentStreak: 12,
    longestStreak: 28,
    totalPoints: 2456,
    rank: 3,
    completedChallenges: 8,
    activeChallenges: 2,
  };

  const achievements = [
    { id: 1, title: 'First Steps', icon: '👣', earned: true, date: '2 days ago', rarity: 'common' },
    { id: 2, title: '7-Day Streak', icon: '🔥', earned: true, date: '1 week ago', rarity: 'common' },
    { id: 3, title: 'Team Player', icon: '🤝', earned: true, date: '2 weeks ago', rarity: 'uncommon' },
    { id: 4, title: 'Sleep Master', icon: '😴', earned: true, date: '3 weeks ago', rarity: 'rare' },
    { id: 5, title: 'Marathon Walker', icon: '🏃', earned: false, requirement: 'Walk 26.2 miles in a month', rarity: 'epic' },
    { id: 6, title: 'Community Leader', icon: '👑', earned: false, requirement: 'Start a community with 50+ members', rarity: 'legendary' },
  ];

  const myGroups = [
    { id: 1, name: 'Morning Warriors', role: 'Member', members: 2847, isAdmin: false },
    { id: 2, name: 'Sleep Optimization', role: 'Admin', members: 892, isAdmin: true },
    { id: 3, name: 'Home Gym Heroes', role: 'Member', members: 1547, isAdmin: false },
  ];

  const activeChallenges = [
    { id: 1, title: '10K Steps Daily', progress: 65, daysLeft: 3 },
    { id: 2, title: 'Hydration Hero', progress: 28, daysLeft: 5 },
  ];

  const recentChallenges = [
    { id: 1, title: 'Weekend Warrior', completed: true, result: '1st Place', points: 150 },
    { id: 2, title: 'Sleep Challenge', completed: true, result: '3rd Place', points: 75 },
    { id: 3, title: 'Step Master', completed: false, result: 'Incomplete', points: 0 },
  ];

  const privacySettings = [
    { id: 1, label: 'Health Data Visible to Groups', value: true },
    { id: 2, label: 'Show Activity Status', value: true },
    { id: 3, label: 'Allow Friend Requests', value: false },
    { id: 4, label: 'Share Achievements Publicly', value: true },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return theme.colors.textTertiary;
      case 'uncommon': return theme.colors.success;
      case 'rare': return theme.colors.secondary;
      case 'epic': return theme.colors.primary;
      case 'legendary': return theme.colors.accent;
      default: return theme.colors.textTertiary;
    }
  };

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
    profileHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 16,
    },
    profileInfo: {
      flex: 1,
    },
    name: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginBottom: 4,
    },
    memberSince: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: '#E5E7EB',
      marginBottom: 8,
    },
    rankBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      alignSelf: 'flex-start',
    },
    rankText: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: '#FFFFFF',
      marginLeft: 4,
    },
    settingsButton: {
      padding: 8,
    },
    statsRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    statItem: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 24,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    statLabel: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: '#E5E7EB',
      marginTop: 4,
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
    seeAllText: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.primary,
    },
    achievementsRow: {
      flexDirection: 'row',
      gap: 12,
      paddingHorizontal: 4,
    },
    achievementCard: {
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      width: 120,
      alignItems: 'center',
    },
    achievementLocked: {
      opacity: 0.5,
    },
    achievementRarity: {
      position: 'relative',
      borderWidth: 2,
      borderRadius: 12,
      padding: 8,
      marginBottom: 8,
    },
    achievementIcon: {
      fontSize: 24,
    },
    earnedBadge: {
      position: 'absolute',
      top: -4,
      right: -4,
      backgroundColor: theme.colors.surface,
      borderRadius: 8,
      padding: 2,
    },
    achievementTitle: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: 4,
    },
    achievementTitleLocked: {
      color: theme.colors.textTertiary,
    },
    achievementDate: {
      fontSize: 10,
      fontFamily: 'Inter-Regular',
      color: theme.colors.success,
      textAlign: 'center',
    },
    achievementRequirement: {
      fontSize: 9,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      textAlign: 'center',
      lineHeight: 12,
    },
    challengeCard: {
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: 12,
    },
    challengeHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    challengeTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
    },
    daysLeft: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.accent,
    },
    challengeProgress: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    progressBar: {
      flex: 1,
      height: 8,
      backgroundColor: theme.colors.border,
      borderRadius: 4,
    },
    progressFill: {
      height: '100%',
      backgroundColor: theme.colors.primary,
      borderRadius: 4,
    },
    progressText: {
      fontSize: 14,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      minWidth: 40,
      textAlign: 'right',
    },
    groupCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: 8,
    },
    groupInfo: {
      flex: 1,
      marginLeft: 12,
    },
    groupHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    groupName: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      flex: 1,
    },
    adminBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.accent,
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 8,
      marginLeft: 8,
    },
    adminText: {
      fontSize: 10,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginLeft: 2,
    },
    groupMembers: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
    },
    historyCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: 8,
    },
    historyInfo: {
      flex: 1,
    },
    historyTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      marginBottom: 4,
    },
    historyResult: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
    },
    historyCompleted: {
      color: theme.colors.success,
    },
    historyIncomplete: {
      color: theme.colors.error,
    },
    historyPoints: {
      alignItems: 'center',
    },
    pointsNumber: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.accent,
    },
    pointsLabel: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
    },
    settingCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: 8,
    },
    settingInfo: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    settingLabel: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: theme.colors.text,
      flex: 1,
    },
    settingIcon: {
      marginLeft: 8,
    },
    shareCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      padding: 20,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    shareInfo: {
      flex: 1,
      marginLeft: 12,
    },
    shareTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      marginBottom: 4,
    },
    shareDescription: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      lineHeight: 20,
    },
    coachCard: {
      margin: 16,
      padding: 24,
      borderRadius: 20,
      alignItems: 'center',
      textAlign: 'center',
    },
    coachTitle: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginTop: 12,
      marginBottom: 8,
    },
    coachDescription: {
      fontSize: 15,
      fontFamily: 'Inter-Regular',
      color: '#FFFFFF',
      textAlign: 'center',
      lineHeight: 22,
      marginBottom: 20,
      opacity: 0.9,
    },
    coachButton: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 12,
    },
    coachButtonText: {
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
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <User size={32} color="#FFFFFF" />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>{userStats.name}</Text>
            <Text style={styles.memberSince}>Member since {userStats.memberSince}</Text>
            <View style={styles.rankBadge}>
              <Trophy size={16} color="#F97316" />
              <Text style={styles.rankText}>Rank #{userStats.rank}</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.settingsButton}
            onPress={() => router.push('/settings')}
          >
            <Settings size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.currentStreak}</Text>
            <Text style={styles.statLabel}>Current Streak</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.totalPoints.toLocaleString()}</Text>
            <Text style={styles.statLabel}>Total Points</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{userStats.completedChallenges}</Text>
            <Text style={styles.statLabel}>Challenges Won</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Achievements */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.achievementsRow}>
            {achievements.map((achievement) => (
              <View key={achievement.id} style={[styles.achievementCard, !achievement.earned && styles.achievementLocked]}>
                <View style={[styles.achievementRarity, { borderColor: getRarityColor(achievement.rarity) }]}>
                  <Text style={styles.achievementIcon}>{achievement.icon}</Text>
                  {achievement.earned && (
                    <View style={styles.earnedBadge}>
                      <Medal size={12} color={theme.colors.accent} />
                    </View>
                  )}
                </View>
                <Text style={[styles.achievementTitle, !achievement.earned && styles.achievementTitleLocked]}>
                  {achievement.title}
                </Text>
                {achievement.earned ? (
                  <Text style={styles.achievementDate}>{achievement.date}</Text>
                ) : (
                  <Text style={styles.achievementRequirement}>{achievement.requirement}</Text>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Active Challenges */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Challenges</Text>
        {activeChallenges.map((challenge) => (
          <View key={challenge.id} style={styles.challengeCard}>
            <View style={styles.challengeHeader}>
              <Text style={styles.challengeTitle}>{challenge.title}</Text>
              <Text style={styles.daysLeft}>{challenge.daysLeft}d left</Text>
            </View>
            <View style={styles.challengeProgress}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${challenge.progress}%` }]} />
              </View>
              <Text style={styles.progressText}>{challenge.progress}%</Text>
            </View>
          </View>
        ))}
      </View>

      {/* My Communities */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Communities</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Manage</Text>
          </TouchableOpacity>
        </View>
        {myGroups.map((group) => (
          <TouchableOpacity key={group.id} style={styles.groupCard}>
            <Users size={20} color={theme.colors.primary} />
            <View style={styles.groupInfo}>
              <View style={styles.groupHeader}>
                <Text style={styles.groupName}>{group.name}</Text>
                {group.isAdmin && (
                  <View style={styles.adminBadge}>
                    <Crown size={12} color="#FFFFFF" />
                    <Text style={styles.adminText}>Admin</Text>
                  </View>
                )}
              </View>
              <Text style={styles.groupMembers}>{group.members.toLocaleString()} members</Text>
            </View>
            <ChevronRight size={20} color={theme.colors.textTertiary} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Challenge History */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Challenges</Text>
        {recentChallenges.map((challenge) => (
          <View key={challenge.id} style={styles.historyCard}>
            <View style={styles.historyInfo}>
              <Text style={styles.historyTitle}>{challenge.title}</Text>
              <Text style={[styles.historyResult, challenge.completed ? styles.historyCompleted : styles.historyIncomplete]}>
                {challenge.result}
              </Text>
            </View>
            <View style={styles.historyPoints}>
              <Text style={styles.pointsNumber}>+{challenge.points}</Text>
              <Text style={styles.pointsLabel}>pts</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Privacy Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy & Sharing</Text>
        {privacySettings.map((setting) => (
          <View key={setting.id} style={styles.settingCard}>
            <View style={styles.settingInfo}>
              <Text style={styles.settingLabel}>{setting.label}</Text>
              <View style={styles.settingIcon}>
                {setting.value ? <Globe size={16} color={theme.colors.success} /> : <Lock size={16} color={theme.colors.error} />}
              </View>
            </View>
            <Switch
              value={setting.value}
              onValueChange={() => {}}
              trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
              thumbColor={setting.value ? '#FFFFFF' : theme.colors.textTertiary}
            />
          </View>
        ))}
      </View>

      {/* Share Profile */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.shareCard}>
          <Share size={24} color={theme.colors.primary} />
          <View style={styles.shareInfo}>
            <Text style={styles.shareTitle}>Share Your Progress</Text>
            <Text style={styles.shareDescription}>
              Let friends see your achievements and challenge them to beat your streaks
            </Text>
          </View>
          <ChevronRight size={20} color={theme.colors.textTertiary} />
        </TouchableOpacity>
      </View>

      {/* Become a Coach CTA */}
      <LinearGradient
        colors={theme.colors.gradient.secondary}
        style={styles.coachCard}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <Star size={32} color="#FFFFFF" />
        <Text style={styles.coachTitle}>Become a Coach</Text>
        <Text style={styles.coachDescription}>
          Share your expertise, start premium communities, and earn while helping others reach their goals
        </Text>
        <TouchableOpacity style={styles.coachButton}>
          <Text style={styles.coachButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
}