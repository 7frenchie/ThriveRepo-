import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  ArrowLeft, 
  Heart, 
  Activity, 
  Moon, 
  Footprints, 
  Droplets,
  Zap,
  TrendingUp,
  TrendingDown,
  Calendar,
  Filter,
  Target,
  Wind,
  Thermometer,
  Scale,
  Brain,
  Pill,
  Volume2,
  Baby,
  Dumbbell,
  Timer,
  Mountain,
  Gauge,
  Eye,
  Waves,
  Apple
} from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function HealthDataScreen() {
  const { theme } = useTheme();

  const activityData = [
    {
      id: 'steps',
      title: 'Steps',
      value: '8,247',
      unit: 'steps',
      goal: '10,000',
      progress: 82.47,
      icon: Footprints,
      color: theme.colors.primary,
      trend: 'up',
      trendValue: '+12%',
      data: [6500, 7200, 8100, 7800, 9200, 8500, 8247],
      category: 'Activity'
    },
    {
      id: 'distance',
      title: 'Walking + Running Distance',
      value: '6.2',
      unit: 'km',
      goal: '8.0',
      progress: 77.5,
      icon: Mountain,
      color: '#10B981',
      trend: 'up',
      trendValue: '+8%',
      data: [5.1, 5.8, 6.4, 5.9, 7.2, 6.8, 6.2],
      category: 'Activity'
    },
    {
      id: 'active-energy',
      title: 'Active Energy',
      value: '456',
      unit: 'kcal',
      goal: '600',
      progress: 76,
      icon: Zap,
      color: '#F97316',
      trend: 'up',
      trendValue: '+15%',
      data: [380, 420, 390, 500, 480, 440, 456],
      category: 'Activity'
    },
    {
      id: 'exercise-minutes',
      title: 'Exercise Minutes',
      value: '45',
      unit: 'min',
      goal: '60',
      progress: 75,
      icon: Timer,
      color: '#8B5CF6',
      trend: 'up',
      trendValue: '+10%',
      data: [35, 42, 38, 50, 48, 40, 45],
      category: 'Activity'
    }
  ];

  const vitalsData = [
    {
      id: 'heart-rate',
      title: 'Resting Heart Rate',
      value: '62',
      unit: 'BPM',
      goal: '60-100',
      progress: 85,
      icon: Heart,
      color: '#EF4444',
      trend: 'down',
      trendValue: '-3%',
      data: [65, 63, 64, 62, 61, 63, 62],
      category: 'Vitals'
    },
    {
      id: 'hrv',
      title: 'Heart Rate Variability',
      value: '42',
      unit: 'ms',
      goal: '30-50',
      progress: 80,
      icon: Waves,
      color: '#06B6D4',
      trend: 'up',
      trendValue: '+5%',
      data: [38, 40, 41, 39, 43, 41, 42],
      category: 'Vitals'
    },
    {
      id: 'vo2-max',
      title: 'VO2 Max',
      value: '48.2',
      unit: 'ml/kg/min',
      goal: '45+',
      progress: 92,
      icon: Wind,
      color: '#10B981',
      trend: 'up',
      trendValue: '+2%',
      data: [46.8, 47.1, 47.5, 47.2, 48.0, 47.8, 48.2],
      category: 'Vitals'
    },
    {
      id: 'blood-oxygen',
      title: 'Blood Oxygen',
      value: '98',
      unit: '%',
      goal: '95-100',
      progress: 98,
      icon: Eye,
      color: '#3B82F6',
      trend: 'stable',
      trendValue: '0%',
      data: [97, 98, 98, 97, 98, 98, 98],
      category: 'Vitals'
    }
  ];

  const bodyData = [
    {
      id: 'weight',
      title: 'Weight',
      value: '72.5',
      unit: 'kg',
      goal: '70.0',
      progress: 85,
      icon: Scale,
      color: '#8B5CF6',
      trend: 'down',
      trendValue: '-2%',
      data: [74.2, 73.8, 73.5, 73.1, 72.8, 72.7, 72.5],
      category: 'Body'
    },
    {
      id: 'bmi',
      title: 'BMI',
      value: '22.1',
      unit: '',
      goal: '18.5-24.9',
      progress: 75,
      icon: Target,
      color: '#10B981',
      trend: 'down',
      trendValue: '-1%',
      data: [22.6, 22.5, 22.4, 22.3, 22.2, 22.1, 22.1],
      category: 'Body'
    },
    {
      id: 'body-fat',
      title: 'Body Fat',
      value: '15.2',
      unit: '%',
      goal: '10-20',
      progress: 80,
      icon: Gauge,
      color: '#F59E0B',
      trend: 'down',
      trendValue: '-3%',
      data: [16.1, 15.8, 15.6, 15.4, 15.3, 15.2, 15.2],
      category: 'Body'
    }
  ];

  const sleepData = [
    {
      id: 'sleep-duration',
      title: 'Sleep Duration',
      value: '7h 24m',
      unit: '',
      goal: '8h 0m',
      progress: 92.5,
      icon: Moon,
      color: '#6366F1',
      trend: 'up',
      trendValue: '+8%',
      data: [6.5, 7.1, 6.8, 7.5, 7.8, 7.0, 7.4],
      category: 'Sleep'
    },
    {
      id: 'deep-sleep',
      title: 'Deep Sleep',
      value: '1h 45m',
      unit: '',
      goal: '1h 30m+',
      progress: 87,
      icon: Moon,
      color: '#4338CA',
      trend: 'up',
      trendValue: '+12%',
      data: [1.2, 1.4, 1.3, 1.6, 1.8, 1.5, 1.75],
      category: 'Sleep'
    },
    {
      id: 'rem-sleep',
      title: 'REM Sleep',
      value: '1h 52m',
      unit: '',
      goal: '1h 30m+',
      progress: 93,
      icon: Brain,
      color: '#7C3AED',
      trend: 'stable',
      trendValue: '0%',
      data: [1.6, 1.7, 1.8, 1.9, 1.8, 1.9, 1.87],
      category: 'Sleep'
    }
  ];

  const nutritionData = [
    {
      id: 'calories',
      title: 'Calories',
      value: '2,156',
      unit: 'kcal',
      goal: '2,200',
      progress: 98,
      icon: Apple,
      color: '#EF4444',
      trend: 'up',
      trendValue: '+5%',
      data: [2000, 2100, 1950, 2200, 2300, 2050, 2156],
      category: 'Nutrition'
    },
    {
      id: 'water',
      title: 'Water Intake',
      value: '2.1',
      unit: 'L',
      goal: '2.5',
      progress: 84,
      icon: Droplets,
      color: '#06B6D4',
      trend: 'up',
      trendValue: '+10%',
      data: [1.8, 2.0, 2.2, 1.9, 2.3, 2.1, 2.1],
      category: 'Nutrition'
    },
    {
      id: 'protein',
      title: 'Protein',
      value: '125',
      unit: 'g',
      goal: '140',
      progress: 89,
      icon: Dumbbell,
      color: '#10B981',
      trend: 'up',
      trendValue: '+7%',
      data: [110, 120, 115, 130, 135, 120, 125],
      category: 'Nutrition'
    }
  ];

  const mindfulnessData = [
    {
      id: 'mindful-minutes',
      title: 'Mindful Minutes',
      value: '15',
      unit: 'min',
      goal: '20',
      progress: 75,
      icon: Brain,
      color: '#8B5CF6',
      trend: 'up',
      trendValue: '+25%',
      data: [10, 12, 8, 15, 18, 12, 15],
      category: 'Mindfulness'
    },
    {
      id: 'noise-exposure',
      title: 'Environmental Sound',
      value: '68',
      unit: 'dB',
      goal: '<70',
      progress: 85,
      icon: Volume2,
      color: '#F59E0B',
      trend: 'down',
      trendValue: '-5%',
      data: [72, 70, 69, 68, 67, 69, 68],
      category: 'Mindfulness'
    }
  ];

  const allHealthData = [
    ...activityData,
    ...vitalsData,
    ...bodyData,
    ...sleepData,
    ...nutritionData,
    ...mindfulnessData
  ];

  const categories = [
    { name: 'All', count: allHealthData.length, color: theme.colors.primary },
    { name: 'Activity', count: activityData.length, color: '#10B981' },
    { name: 'Vitals', count: vitalsData.length, color: '#EF4444' },
    { name: 'Body', count: bodyData.length, color: '#8B5CF6' },
    { name: 'Sleep', count: sleepData.length, color: '#6366F1' },
    { name: 'Nutrition', count: nutritionData.length, color: '#F97316' },
    { name: 'Mindfulness', count: mindfulnessData.length, color: '#06B6D4' },
  ];

  const timeRanges = ['Today', '7 Days', '30 Days', '3 Months'];
  const selectedRange = '7 Days';
  const selectedCategory = 'All';

  const activityRings = {
    move: { current: 456, goal: 600, color: '#EF4444' },
    exercise: { current: 45, goal: 60, color: '#10B981' },
    stand: { current: 8, goal: 12, color: '#06B6D4' }
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
    filterButton: {
      padding: 8,
    },
    timeRangeContainer: {
      flexDirection: 'row',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 12,
      padding: 4,
      marginBottom: 16,
    },
    timeRangeButton: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    timeRangeButtonActive: {
      backgroundColor: '#FFFFFF',
    },
    timeRangeText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: '#FFFFFF',
    },
    timeRangeTextActive: {
      color: theme.colors.primary,
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
    categoriesScroll: {
      marginBottom: 20,
    },
    categoriesContainer: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      gap: 12,
    },
    categoryChip: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
      backgroundColor: theme.colors.surface,
    },
    categoryChipActive: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    categoryText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: theme.colors.text,
    },
    categoryTextActive: {
      color: '#FFFFFF',
    },
    activityRingsCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 24,
      marginBottom: 20,
      alignItems: 'center',
    },
    activityRingsTitle: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 20,
    },
    ringsContainer: {
      width: 200,
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    ring: {
      position: 'absolute',
      borderRadius: 100,
      borderWidth: 12,
    },
    moveRing: {
      width: 180,
      height: 180,
    },
    exerciseRing: {
      width: 140,
      height: 140,
    },
    standRing: {
      width: 100,
      height: 100,
    },
    ringsLegend: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 20,
    },
    legendItem: {
      alignItems: 'center',
    },
    legendDot: {
      width: 12,
      height: 12,
      borderRadius: 6,
      marginBottom: 4,
    },
    legendLabel: {
      fontSize: 12,
      fontFamily: 'Inter-Medium',
      color: theme.colors.textSecondary,
      marginBottom: 2,
    },
    legendValue: {
      fontSize: 14,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
    },
    metricsGrid: {
      gap: 16,
    },
    metricCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 20,
      marginBottom: 16,
    },
    metricHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    metricInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    metricIcon: {
      marginRight: 12,
    },
    metricTitle: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
    },
    trendContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 8,
    },
    trendText: {
      fontSize: 12,
      fontFamily: 'Inter-SemiBold',
      marginLeft: 4,
    },
    trendUp: {
      color: theme.colors.success,
    },
    trendDown: {
      color: theme.colors.error,
    },
    trendStable: {
      color: theme.colors.textSecondary,
    },
    metricValues: {
      flexDirection: 'row',
      alignItems: 'baseline',
      marginBottom: 16,
    },
    metricValue: {
      fontSize: 32,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
    },
    metricUnit: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      marginLeft: 4,
    },
    metricGoal: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      marginLeft: 8,
    },
    progressContainer: {
      marginBottom: 16,
    },
    progressHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    progressLabel: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: theme.colors.textSecondary,
    },
    progressPercentage: {
      fontSize: 14,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
    },
    progressBar: {
      height: 8,
      backgroundColor: theme.colors.border,
      borderRadius: 4,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      borderRadius: 4,
    },
    chartContainer: {
      height: 60,
      flexDirection: 'row',
      alignItems: 'end',
      justifyContent: 'space-between',
      paddingHorizontal: 4,
    },
    chartBar: {
      width: (width - 80) / 7 - 4,
      borderRadius: 2,
      minHeight: 4,
    },
    summaryCard: {
      backgroundColor: theme.colors.surface,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: 20,
    },
    summaryTitle: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 16,
    },
    summaryGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 16,
    },
    summaryItem: {
      flex: 1,
      minWidth: '45%',
      alignItems: 'center',
      padding: 16,
      backgroundColor: theme.colors.background,
      borderRadius: 12,
    },
    summaryValue: {
      fontSize: 20,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      marginBottom: 4,
    },
    summaryLabel: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      textAlign: 'center',
    },
  });

  const renderChart = (data: number[], color: string) => {
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue || 1;

    return (
      <View style={styles.chartContainer}>
        {data.map((value, index) => {
          const height = ((value - minValue) / range) * 50 + 10;
          return (
            <View
              key={index}
              style={[
                styles.chartBar,
                {
                  height,
                  backgroundColor: color,
                  opacity: index === data.length - 1 ? 1 : 0.6,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  const renderActivityRings = () => {
    const { move, exercise, stand } = activityRings;
    
    return (
      <View style={styles.activityRingsCard}>
        <Text style={styles.activityRingsTitle}>Activity Rings</Text>
        <View style={styles.ringsContainer}>
          {/* Move Ring */}
          <View style={[
            styles.ring,
            styles.moveRing,
            {
              borderColor: move.color + '30',
              borderTopColor: move.color,
              transform: [{ rotate: `${(move.current / move.goal) * 360}deg` }]
            }
          ]} />
          
          {/* Exercise Ring */}
          <View style={[
            styles.ring,
            styles.exerciseRing,
            {
              borderColor: exercise.color + '30',
              borderTopColor: exercise.color,
              transform: [{ rotate: `${(exercise.current / exercise.goal) * 360}deg` }]
            }
          ]} />
          
          {/* Stand Ring */}
          <View style={[
            styles.ring,
            styles.standRing,
            {
              borderColor: stand.color + '30',
              borderTopColor: stand.color,
              transform: [{ rotate: `${(stand.current / stand.goal) * 360}deg` }]
            }
          ]} />
        </View>
        
        <View style={styles.ringsLegend}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: move.color }]} />
            <Text style={styles.legendLabel}>Move</Text>
            <Text style={styles.legendValue}>{move.current}/{move.goal}</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: exercise.color }]} />
            <Text style={styles.legendLabel}>Exercise</Text>
            <Text style={styles.legendValue}>{exercise.current}/{exercise.goal}</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: stand.color }]} />
            <Text style={styles.legendLabel}>Stand</Text>
            <Text style={styles.legendValue}>{stand.current}/{stand.goal}</Text>
          </View>
        </View>
      </View>
    );
  };

  const getFilteredData = () => {
    if (selectedCategory === 'All') return allHealthData;
    return allHealthData.filter(item => item.category === selectedCategory);
  };

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
          <Text style={styles.title}>Health Data</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.timeRangeContainer}>
          {timeRanges.map((range) => (
            <TouchableOpacity
              key={range}
              style={[
                styles.timeRangeButton,
                range === selectedRange && styles.timeRangeButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.timeRangeText,
                  range === selectedRange && styles.timeRangeTextActive,
                ]}
              >
                {range}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>

      {/* Categories Filter */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
      >
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.name}
              style={[
                styles.categoryChip,
                category.name === selectedCategory && styles.categoryChipActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  category.name === selectedCategory && styles.categoryTextActive,
                ]}
              >
                {category.name} ({category.count})
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Activity Rings */}
      {(selectedCategory === 'All' || selectedCategory === 'Activity') && (
        <View style={styles.section}>
          {renderActivityRings()}
        </View>
      )}

      {/* Health Metrics */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          {selectedCategory === 'All' ? 'All Health Metrics' : `${selectedCategory} Metrics`}
        </Text>
        <View style={styles.metricsGrid}>
          {getFilteredData().map((metric) => {
            const IconComponent = metric.icon;
            const TrendIcon = metric.trend === 'up' ? TrendingUp : metric.trend === 'down' ? TrendingDown : Activity;
            
            return (
              <View key={metric.id} style={styles.metricCard}>
                <View style={styles.metricHeader}>
                  <View style={styles.metricInfo}>
                    <View style={styles.metricIcon}>
                      <IconComponent size={24} color={metric.color} />
                    </View>
                    <Text style={styles.metricTitle}>{metric.title}</Text>
                  </View>
                  <View style={styles.trendContainer}>
                    <TrendIcon 
                      size={12} 
                      color={
                        metric.trend === 'up' ? theme.colors.success : 
                        metric.trend === 'down' ? theme.colors.error : 
                        theme.colors.textSecondary
                      } 
                    />
                    <Text style={[
                      styles.trendText,
                      metric.trend === 'up' ? styles.trendUp : 
                      metric.trend === 'down' ? styles.trendDown : 
                      styles.trendStable,
                    ]}>
                      {metric.trendValue}
                    </Text>
                  </View>
                </View>

                <View style={styles.metricValues}>
                  <Text style={styles.metricValue}>{metric.value}</Text>
                  <Text style={styles.metricUnit}>{metric.unit}</Text>
                  <Text style={styles.metricGoal}>/ {metric.goal}</Text>
                </View>

                <View style={styles.progressContainer}>
                  <View style={styles.progressHeader}>
                    <Text style={styles.progressLabel}>Progress</Text>
                    <Text style={styles.progressPercentage}>{metric.progress.toFixed(0)}%</Text>
                  </View>
                  <View style={styles.progressBar}>
                    <LinearGradient
                      colors={[metric.color, metric.color + '80']}
                      style={[styles.progressFill, { width: `${Math.min(metric.progress, 100)}%` }]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                    />
                  </View>
                </View>

                {renderChart(metric.data, metric.color)}
              </View>
            );
          })}
        </View>
      </View>

      {/* Weekly Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weekly Summary</Text>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>This Week's Highlights</Text>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>5</Text>
              <Text style={styles.summaryLabel}>Days Goal Met</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>87%</Text>
              <Text style={styles.summaryLabel}>Average Progress</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>3</Text>
              <Text style={styles.summaryLabel}>Personal Records</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>12</Text>
              <Text style={styles.summaryLabel}>Current Streak</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>48.2</Text>
              <Text style={styles.summaryLabel}>VO2 Max Peak</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>98%</Text>
              <Text style={styles.summaryLabel}>Sleep Quality</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}