import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowRight, Target, Users, Trophy, Bot } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';
import { useState, useRef } from 'react';
import { ScrollView } from 'react-native';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const onboardingSteps = [
    {
      id: 1,
      title: 'Track Your Health Journey',
      description: 'Monitor your vitals, sleep patterns, activity levels, and nutrition with comprehensive health tracking.',
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Target,
      color: theme.colors.primary,
    },
    {
      id: 2,
      title: 'Connect with Community',
      description: 'Join supportive communities, share your progress, and find motivation from like-minded individuals.',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Users,
      color: theme.colors.secondary,
    },
    {
      id: 3,
      title: 'Complete Challenges',
      description: 'Stay motivated with fun challenges, compete with friends, and earn rewards for your achievements.',
      image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Trophy,
      color: theme.colors.accent,
    },
    {
      id: 4,
      title: 'Meet Joe, Your AI Coach',
      description: 'Get personalized insights, recommendations, and coaching from Joe, your intelligent health companion.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Bot,
      color: theme.colors.success,
    },
  ];

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      scrollViewRef.current?.scrollTo({
        x: nextStep * width,
        animated: true,
      });
    } else {
      router.replace('/(tabs)');
    }
  };

  const handleSkip = () => {
    router.replace('/(tabs)');
  };

  const handleDotPress = (index: number) => {
    setCurrentStep(index);
    scrollViewRef.current?.scrollTo({
      x: index * width,
      animated: true,
    });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollContainer: {
      flex: 1,
    },
    stepContainer: {
      width,
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 60,
    },
    skipButton: {
      alignSelf: 'flex-end',
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginBottom: 32,
    },
    skipText: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.textSecondary,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 48,
    },
    stepImage: {
      width: width * 0.8,
      height: width * 0.6,
      borderRadius: 20,
      marginBottom: 24,
    },
    iconContainer: {
      width: 80,
      height: 80,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 24,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 24,
    },
    stepTitle: {
      fontSize: 28,
      fontFamily: 'Inter-Bold',
      color: theme.colors.text,
      textAlign: 'center',
      marginBottom: 16,
      lineHeight: 36,
    },
    stepDescription: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      textAlign: 'center',
      lineHeight: 24,
      marginBottom: 48,
    },
    bottomContainer: {
      paddingHorizontal: 24,
      paddingBottom: 40,
    },
    dotsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 32,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.colors.border,
      marginHorizontal: 4,
    },
    activeDot: {
      width: 24,
      backgroundColor: theme.colors.primary,
    },
    nextButton: {
      borderRadius: 16,
      overflow: 'hidden',
    },
    nextButtonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 32,
    },
    nextButtonText: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
      marginRight: 8,
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 24,
    },
    progressText: {
      fontSize: 14,
      fontFamily: 'Inter-Medium',
      color: theme.colors.textSecondary,
    },
    progressBar: {
      flex: 1,
      height: 4,
      backgroundColor: theme.colors.border,
      borderRadius: 2,
      marginHorizontal: 16,
    },
    progressFill: {
      height: '100%',
      backgroundColor: theme.colors.primary,
      borderRadius: 2,
    },
  });

  const currentStepData = onboardingSteps[currentStep];
  const IconComponent = currentStepData.icon;

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        style={styles.scrollContainer}
      >
        {onboardingSteps.map((step, index) => {
          const StepIcon = step.icon;
          return (
            <View key={step.id} style={styles.stepContainer}>
              <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                <Text style={styles.skipText}>Skip</Text>
              </TouchableOpacity>

              <View style={styles.imageContainer}>
                <Image source={{ uri: step.image }} style={styles.stepImage} />
                <LinearGradient
                  colors={[step.color, step.color + '80']}
                  style={styles.iconContainer}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <StepIcon size={40} color="#FFFFFF" />
                </LinearGradient>
              </View>

              <View style={styles.contentContainer}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.bottomContainer}>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            {currentStep + 1} of {onboardingSteps.length}
          </Text>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((currentStep + 1) / onboardingSteps.length) * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.progressText}>
            {Math.round(((currentStep + 1) / onboardingSteps.length) * 100)}%
          </Text>
        </View>

        <View style={styles.dotsContainer}>
          {onboardingSteps.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.dot, index === currentStep && styles.activeDot]}
              onPress={() => handleDotPress(index)}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <LinearGradient
            colors={theme.colors.gradient.primary}
            style={styles.nextButtonContent}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.nextButtonText}>
              {currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
            </Text>
            <ArrowRight size={20} color="#FFFFFF" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}