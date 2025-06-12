import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Trophy, Users, Calendar, Zap, Medal, Target, Clock } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

export default function ChallengesScreen() {
  const { theme } = useTheme();

  const activeChallenge = {
    id: 1,
    title: '10K Steps Daily',
    description: 'Complete 10,000 steps every day this week',
    progress: 65,
    daysLeft: 3,
    participants: 1247,
    prize: 'Golden Walker Badge',
    type: 'personal',
  };

  const availableChallenges = [
    {
      id: 2,
      title: 'Weekend Warrior',
      description: '3 workouts this weekend',
      participants: 892,
      duration: '2 days',
      difficulty: 'Medium',
      prizes: ['Warrior Badge', '50 points'],
      image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      title: 'Hydration Hero',
      description: 'Drink 8 glasses of water daily for a week',
      participants: 634,
      duration: '7 days',
      difficulty: 'Easy',
      prizes: ['Hydration Badge', '30 points'],
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      title: 'Sleep Challenge',
      description: 'Get 8 hours of sleep for 5 nights',
      participants: 445,
      duration: '5 days',
      difficulty: 'Hard',
      prizes: ['Sleep Master Badge', '75 points'],
      image: 'https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Sarah M.', points: 2845, avatar: '🏃‍♀️' },
    { rank: 2, name: 'Mike R.', points: 2791, avatar: '💪' },
    { rank: 3, name: 'You', points: 2456, avatar: '🔥' },
    { rank: 4, name: 'Emma L.', points: 2234, avatar: '⚡' },
    { rank: 5, name: 'John D.', points: 2156, avatar: '🎯' },
  ];

  const achievements = [
    { id: 1, title: 'First Steps', icon: '👣', earned: true, date: '2 days ago' },
    { id: 2, title: '7-Day Streak', icon: '🔥', earned: true, date: '1 week ago' },
    { id: 3, title: 'Team Player', icon: '🤝', earned: true, date: '2 weeks ago' },
    { id: 4, title: 'Marathon Walker', icon: '🏃', earned: false, requirement: 'Walk 26.2 miles in a month' },
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
    title: {
      fontSize: 32,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: '#E5E7EB',
    },
    section: {
      margin: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 16,
    },
    activeChallengeCard: {
      padding: 20,
      borderRadius: 20,
    },
    activeChallengeHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    activeChallengeTitle: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      flex: 1,
    },
    daysLeftBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
    },
    daysLeftText: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: '#FFFFFF',
      marginLeft: 4,
    },
    activeChallengeDescription: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: '#FFFFFF',
      marginBottom: 20,
      opacity: 0.9,
    },
    progressSection: {
      marginBottom: 20,
    },
    progressHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    progressLabel: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: '#FFFFFF',
    },
    progressPercentage: {
      fontSize: 14,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    progressBar: {
      height: 8,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      borderRadius: 4,
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: 4,
    },
    activeChallengeFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    participantsInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    participantsText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: '#FFFFFF',
      marginLeft: 6,
    },
    challengeButton: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 12,
    },
    challengeButtonText: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.accent,
    },
    challengeCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginBottom: 16,
      overflow: 'hidden',
    },
    challengeImage: {
      width: '100%',
      height: 120,
    },
    challengeInfo: {
      padding: 16,
    },
    challengeName: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 6,
    },
    challengeDescription: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      marginBottom: 12,
      lineHeight: 20,
    },
    challengeMeta: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
      flexWrap: 'wrap',
      gap: 12,
    },
    metaItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    metaText: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      marginLeft: 4,
    },
    difficultyBadge: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    difficultyEasy: {
      backgroundColor: theme.colors.success,
    },
    difficultyMedium: {
      backgroundColor: theme.colors.accent,
    },
    difficultyHard: {
      backgroundColor: theme.colors.error,
    },
    difficultyText: {
      fontSize: 10,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    prizesSection: {
      marginBottom: 16,
    },
    prizesLabel: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      marginBottom: 4,
    },
    prizeText: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      marginLeft: 8,
    },
    joinButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 12,
      alignItems: 'center',
    },
    joinButtonText: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: '#FFFFFF',
    },
    leaderboardCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    leaderboardItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    currentUser: {
      backgroundColor: theme.colors.primary,
      borderBottomColor: theme.colors.primary,
    },
    leaderboardRank: {
      width: 32,
      alignItems: 'center',
    },
    rankEmoji: {
      fontSize: 20,
    },
    rankNumber: {
      fontSize: 16,
      fontFamily: 'Inter-Bold',
      color: theme.colors.textTertiary,
    },
    userAvatar: {
      fontSize: 24,
      marginHorizontal: 12,
    },
    userName: {
      flex: 1,
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
    },
    currentUserName: {
      color: '#FFFFFF',
    },
    userPoints: {
      fontSize: 14,
      fontFamily: 'Inter-Bold',
      color: theme.colors.accent,
    },
    achievementsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
    achievementCard: {
      backgroundColor: theme.colors.surface,
      padding: 16,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      width: '48%',
      alignItems: 'center',
      position: 'relative',
    },
    achievementLocked: {
      opacity: 0.5,
    },
    achievementIcon: {
      fontSize: 32,
      marginBottom: 8,
    },
    achievementTitle: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: 4,
    },
    achievementTitleLocked: {
      color: theme.colors.textTertiary,
    },
    achievementDate: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.success,
      textAlign: 'center',
    },
    achievementRequirement: {
      fontSize: 11,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      textAlign: 'center',
      lineHeight: 16,
    },
    earnedBadge: {
      position: 'absolute',
      top: 8,
      right: 8,
    },
    createChallengeCard: {
      backgroundColor: theme.colors.surface,
      padding: 24,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
      alignItems: 'center',
      textAlign: 'center',
    },
    createChallengeTitle: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginTop: 12,
      marginBottom: 8,
    },
    createChallengeDescription: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      textAlign: 'center',
      lineHeight: 20,
      marginBottom: 20,
    },
    createChallengeButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 12,
    },
    createChallengeButtonText: {
      fontSize: 14,
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
        <Text style={styles.title}>Challenges</Text>
        <Text style={styles.subtitle}>
          Push your limits, earn rewards, and compete with friends
        </Text>
      </LinearGradient>

      {/* Active Challenge */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Challenge</Text>
        <LinearGradient
          colors={theme.colors.gradient.secondary}
          style={styles.activeChallengeCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <View style={styles.activeChallengeHeader}>
            <Text style={styles.activeChallengeTitle}>{activeChallenge.title}</Text>
            <View style={styles.daysLeftBadge}>
              <Clock size={14} color="#FFFFFF" />
              <Text style={styles.daysLeftText}>{activeChallenge.daysLeft}d left</Text>
            </View>
          </View>
          <Text style={styles.activeChallengeDescription}>{activeChallenge.description}</Text>
          
          <View style={styles.progressSection}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>Progress</Text>
              <Text style={styles.progressPercentage}>{activeChallenge.progress}%</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${activeChallenge.progress}%` }]} />
            </View>
          </View>

          <View style={styles.activeChallengeFooter}>
            <View style={styles.participantsInfo}>
              <Users size={16} color="#FFFFFF" />
              <Text style={styles.participantsText}>{activeChallenge.participants.toLocaleString()} joined</Text>
            </View>
            <TouchableOpacity style={styles.challengeButton}>
              <Text style={styles.challengeButtonText}>View Details</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      {/* Available Challenges */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Available Challenges</Text>
        {availableChallenges.map((challenge) => (
          <View key={challenge.id} style={styles.challengeCard}>
            <Image source={{ uri: challenge.image }} style={styles.challengeImage} />
            <View style={styles.challengeInfo}>
              <Text style={styles.challengeName}>{challenge.title}</Text>
              <Text style={styles.challengeDescription}>{challenge.description}</Text>
              
              <View style={styles.challengeMeta}>
                <View style={styles.metaItem}>
                  <Calendar size={14} color={theme.colors.textTertiary} />
                  <Text style={styles.metaText}>{challenge.duration}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Users size={14} color={theme.colors.textTertiary} />
                  <Text style={styles.metaText}>{challenge.participants}</Text>
                </View>
                <View style={[styles.difficultyBadge, styles[`difficulty${challenge.difficulty}`]]}>
                  <Text style={styles.difficultyText}>{challenge.difficulty}</Text>
                </View>
              </View>

              <View style={styles.prizesSection}>
                <Text style={styles.prizesLabel}>Rewards:</Text>
                {challenge.prizes.map((prize, index) => (
                  <Text key={index} style={styles.prizeText}>• {prize}</Text>
                ))}
              </View>

              <TouchableOpacity style={styles.joinButton}>
                <Text style={styles.joinButtonText}>Join Challenge</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Leaderboard */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>This Week's Leaderboard</Text>
        <View style={styles.leaderboardCard}>
          {leaderboard.map((user) => (
            <View key={user.rank} style={[styles.leaderboardItem, user.name === 'You' && styles.currentUser]}>
              <View style={styles.leaderboardRank}>
                {user.rank <= 3 ? (
                  <Text style={styles.rankEmoji}>
                    {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                  </Text>
                ) : (
                  <Text style={styles.rankNumber}>{user.rank}</Text>
                )}
              </View>
              <Text style={styles.userAvatar}>{user.avatar}</Text>
              <Text style={[styles.userName, user.name === 'You' && styles.currentUserName]}>{user.name}</Text>
              <Text style={styles.userPoints}>{user.points.toLocaleString()} pts</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementsGrid}>
          {achievements.map((achievement) => (
            <View key={achievement.id} style={[styles.achievementCard, !achievement.earned && styles.achievementLocked]}>
              <Text style={styles.achievementIcon}>{achievement.icon}</Text>
              <Text style={[styles.achievementTitle, !achievement.earned && styles.achievementTitleLocked]}>
                {achievement.title}
              </Text>
              {achievement.earned ? (
                <Text style={styles.achievementDate}>{achievement.date}</Text>
              ) : (
                <Text style={styles.achievementRequirement}>{achievement.requirement}</Text>
              )}
              {achievement.earned && (
                <View style={styles.earnedBadge}>
                  <Medal size={16} color={theme.colors.accent} />
                </View>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Create Challenge CTA */}
      <View style={styles.section}>
        <View style={styles.createChallengeCard}>
          <Target size={32} color={theme.colors.primary} />
          <Text style={styles.createChallengeTitle}>Create Custom Challenge</Text>
          <Text style={styles.createChallengeDescription}>
            Design your own challenge and invite friends to join
          </Text>
          <TouchableOpacity style={styles.createChallengeButton}>
            <Text style={styles.createChallengeButtonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}