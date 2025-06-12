import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Search, Plus, MapPin, Users, Crown, MessageCircle, Trophy, Target, Star } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';

export default function CommunitiesScreen() {
  const { theme } = useTheme();

  const socialBadges = [
    { id: 1, title: 'Group Leader', icon: '👑', color: '#F59E0B', earned: true },
    { id: 2, title: 'Motivator', icon: '💪', color: '#10B981', earned: true },
    { id: 3, title: 'Team', icon: '🤝', color: '#8B5CF6', earned: true },
    { id: 4, title: 'Helper', icon: '🤗', color: '#EF4444', earned: false },
  ];

  const leaderboardData = [
    { rank: 1, name: 'Mike Chen', steps: '17,234 steps', avatar: '🏃‍♂️', trophy: '🏆' },
    { rank: 2, name: 'Lisa Park', steps: '43,891 steps', avatar: '🚶‍♀️', trophy: '🥈' },
    { rank: 3, name: 'You', steps: '58,567 steps', avatar: '🔥', trophy: '🥉', isCurrentUser: true },
  ];

  const myGroups = [
    {
      id: 1,
      name: 'Better Sleep Club',
      members: 234,
      type: 'Free',
      lastMessage: 'Great sleep last night! 8hrs 15min 😴',
      time: '2m ago',
      unread: 0,
      achievement: '87% achieved',
      icon: '🌙',
    },
    {
      id: 2,
      name: 'Morning Warriors',
      members: 89,
      type: 'Pro Trainer',
      isPremium: true,
      lastMessage: "Today's workout: 20min HIIT session 💪",
      time: '5m ago',
      unread: 0,
      goal: '5 workouts/week',
      progress: '3/5 done',
      icon: '🌅',
    },
  ];

  const discoverGroups = [
    {
      id: 1,
      name: 'Plant-Based Eaters',
      members: 1200,
      type: 'Free',
      description: 'Share recipes, meal prep tips, and nutrition advice for plant-based lifestyle.',
      activity: 'Very Active • 50+ posts/day',
      memberAvatars: ['👩‍🍳', '🧑‍🌾', '👨‍⚕️'],
      tags: ['Nutrition', 'Recipes', 'Lifestyle'],
    },
    {
      id: 2,
      name: '5K Training Squad',
      members: 456,
      type: 'Premium',
      isPremium: true,
      description: '8-week program to get you from couch to 5K with professional guidance.',
      price: '$9.99/month',
      trainer: 'Pro Trainer',
      memberAvatars: ['🏃‍♀️', '🏃‍♂️', '👟'],
      tags: ['Running', 'Training', 'Beginner'],
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
    headerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
    },
    title: {
      fontSize: 32,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    addButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    subtitle: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: '#E5E7EB',
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
    section: {
      marginBottom: 24,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
    },
    sectionSubtitle: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
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
    badgesContainer: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      gap: 12,
    },
    badgeCard: {
      alignItems: 'center',
      padding: 12,
      backgroundColor: theme.colors.surface,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: theme.colors.border,
      minWidth: 80,
    },
    badgeEarned: {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.primary + '10',
    },
    badgeIcon: {
      fontSize: 24,
      marginBottom: 8,
    },
    badgeTitle: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      textAlign: 'center',
    },
    leaderboardCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginHorizontal: 16,
      padding: 16,
    },
    leaderboardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    leaderboardTitle: {
      fontSize: 16,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      flex: 1,
    },
    leaderboardSubtitle: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      marginTop: 2,
    },
    leaderboardItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginBottom: 4,
    },
    currentUserItem: {
      backgroundColor: theme.colors.primary + '20',
    },
    rankContainer: {
      width: 24,
      alignItems: 'center',
      marginRight: 12,
    },
    rankNumber: {
      fontSize: 14,
      fontFamily: 'Inter-Bold',
      color: theme.colors.textSecondary,
    },
    trophy: {
      fontSize: 16,
    },
    userAvatar: {
      fontSize: 20,
      marginRight: 12,
    },
    userInfo: {
      flex: 1,
    },
    userName: {
      fontSize: 14,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
    },
    userSteps: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
    },
    plusIcon: {
      fontSize: 16,
      color: theme.colors.success,
      marginLeft: 8,
    },
    viewFullButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 8,
      alignSelf: 'center',
      marginTop: 8,
    },
    viewFullButtonText: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: '#FFFFFF',
    },
    groupCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginHorizontal: 16,
      marginBottom: 12,
      padding: 16,
    },
    groupHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    groupIcon: {
      fontSize: 20,
      marginRight: 12,
    },
    groupInfo: {
      flex: 1,
    },
    groupName: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
    },
    groupMeta: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 2,
    },
    groupMembers: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
    },
    groupType: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.primary,
      marginLeft: 8,
    },
    premiumBadge: {
      backgroundColor: theme.colors.accent,
      paddingHorizontal: 6,
      paddingVertical: 2,
      borderRadius: 4,
      marginLeft: 8,
    },
    premiumText: {
      fontSize: 10,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    chatButton: {
      padding: 8,
    },
    groupMessage: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      marginBottom: 8,
      lineHeight: 20,
    },
    groupFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    groupProgress: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.success,
    },
    groupTime: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
    },
    discoverCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      marginHorizontal: 16,
      marginBottom: 12,
      padding: 16,
    },
    discoverHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8,
    },
    discoverName: {
      fontSize: 16,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      flex: 1,
    },
    joinButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 8,
    },
    joinButtonText: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      color: '#FFFFFF',
    },
    previewButton: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    previewButtonText: {
      color: theme.colors.primary,
    },
    discoverDescription: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 20,
      marginBottom: 12,
    },
    discoverMeta: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    discoverMembers: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
    },
    discoverPrice: {
      fontSize: 12,
      fontFamily: 'Inter-Bold',
      color: theme.colors.accent,
      marginLeft: 8,
    },
    discoverActivity: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.success,
      marginBottom: 8,
    },
    memberAvatars: {
      flexDirection: 'row',
      marginRight: 8,
    },
    memberAvatar: {
      fontSize: 16,
      marginLeft: -4,
    },
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={theme.colors.gradient.primary}
        style={styles.header}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.headerTop}>
          <Text style={styles.title}>Community</Text>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>Connect & achieve together</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchIcon}>
            <Search size={20} color="#E5E7EB" />
          </View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search groups..."
            placeholderTextColor="#E5E7EB"
          />
        </View>
      </LinearGradient>

      {/* Filter Tabs */}
      <View style={styles.section}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', paddingHorizontal: 16, gap: 12 }}>
            {['All', 'Free', 'Premium', 'Local'].map((filter, index) => (
              <TouchableOpacity
                key={filter}
                style={[
                  {
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 20,
                    borderWidth: 1,
                    borderColor: theme.colors.border,
                    backgroundColor: index === 0 ? theme.colors.primary : theme.colors.surface,
                  }
                ]}
              >
                <Text style={{
                  fontSize: 14,
                  fontFamily: 'Inter-Medium',
                  color: index === 0 ? '#FFFFFF' : theme.colors.text,
                }}>
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* My Social Badges */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>My Social Badges</Text>
            <Text style={styles.sectionSubtitle}>4 earned</Text>
          </View>
        </View>
        <View style={styles.badgesContainer}>
          {socialBadges.map((badge) => (
            <View key={badge.id} style={[styles.badgeCard, badge.earned && styles.badgeEarned]}>
              <Text style={styles.badgeIcon}>{badge.icon}</Text>
              <Text style={styles.badgeTitle}>{badge.title}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Local Walking Challenge */}
      <View style={styles.section}>
        <View style={styles.leaderboardCard}>
          <View style={styles.leaderboardHeader}>
            <MapPin size={16} color={theme.colors.success} />
            <View style={{ flex: 1, marginLeft: 8 }}>
              <Text style={styles.leaderboardTitle}>Local Walking Challenge</Text>
              <Text style={styles.leaderboardSubtitle}>Weekly leaderboard • 127 participants</Text>
            </View>
          </View>
          
          {leaderboardData.map((user) => (
            <View key={user.rank} style={[styles.leaderboardItem, user.isCurrentUser && styles.currentUserItem]}>
              <View style={styles.rankContainer}>
                {user.rank <= 3 ? (
                  <Text style={styles.trophy}>{user.trophy}</Text>
                ) : (
                  <Text style={styles.rankNumber}>{user.rank}</Text>
                )}
              </View>
              <Text style={styles.userAvatar}>{user.avatar}</Text>
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userSteps}>{user.steps}</Text>
              </View>
              {user.isCurrentUser && <Text style={styles.plusIcon}>+2</Text>}
            </View>
          ))}
          
          <TouchableOpacity style={styles.viewFullButton}>
            <Text style={styles.viewFullButtonText}>View Full Leaderboard</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* My Groups */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My Groups</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        
        {myGroups.map((group) => (
          <View key={group.id} style={styles.groupCard}>
            <View style={styles.groupHeader}>
              <Text style={styles.groupIcon}>{group.icon}</Text>
              <View style={styles.groupInfo}>
                <Text style={styles.groupName}>{group.name}</Text>
                <View style={styles.groupMeta}>
                  <Text style={styles.groupMembers}>{group.members} members</Text>
                  <Text style={styles.groupType}>• {group.type}</Text>
                  {group.isPremium && (
                    <View style={styles.premiumBadge}>
                      <Text style={styles.premiumText}>Pro Trainer</Text>
                    </View>
                  )}
                </View>
              </View>
              <TouchableOpacity style={styles.chatButton}>
                <MessageCircle size={20} color={theme.colors.textSecondary} />
              </TouchableOpacity>
            </View>
            
            <Text style={styles.groupMessage}>{group.lastMessage}</Text>
            
            <View style={styles.groupFooter}>
              <Text style={styles.groupProgress}>
                {group.achievement || group.progress}
              </Text>
              <Text style={styles.groupTime}>{group.time}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Discover Groups */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Discover Groups</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        
        {discoverGroups.map((group) => (
          <View key={group.id} style={styles.discoverCard}>
            <View style={styles.discoverHeader}>
              <Text style={styles.discoverName}>{group.name}</Text>
              <TouchableOpacity style={[styles.joinButton, group.isPremium && styles.previewButton]}>
                <Text style={[styles.joinButtonText, group.isPremium && styles.previewButtonText]}>
                  {group.isPremium ? 'Preview' : 'Join'}
                </Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.discoverDescription}>{group.description}</Text>
            
            <View style={styles.discoverMeta}>
              <View style={styles.memberAvatars}>
                {group.memberAvatars.map((avatar, index) => (
                  <Text key={index} style={styles.memberAvatar}>{avatar}</Text>
                ))}
              </View>
              <Text style={styles.discoverMembers}>{group.members.toLocaleString()} members</Text>
              <Text style={styles.groupType}>• {group.type}</Text>
              {group.price && (
                <Text style={styles.discoverPrice}>• {group.price}</Text>
              )}
            </View>
            
            <Text style={styles.discoverActivity}>{group.activity}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}