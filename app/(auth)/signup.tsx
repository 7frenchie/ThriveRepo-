import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, Eye, EyeOff, Mail, Lock, User } from 'lucide-react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { router } from 'expo-router';
import { useState } from 'react';

export default function SignupScreen() {
  const { theme } = useTheme();
  const { signUp, isLoading } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!agreeToTerms) {
      Alert.alert('Error', 'Please agree to the Terms of Service and Privacy Policy');
      return;
    }

    try {
      await signUp(firstName, lastName, email, password);
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Sign up failed');
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
      marginBottom: 32,
    },
    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 24,
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
    form: {
      marginBottom: 32,
    },
    nameRow: {
      flexDirection: 'row',
      gap: 12,
      marginBottom: 20,
    },
    nameInput: {
      flex: 1,
    },
    inputGroup: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      marginBottom: 8,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
      paddingHorizontal: 16,
    },
    inputIcon: {
      marginRight: 12,
    },
    input: {
      flex: 1,
      paddingVertical: 16,
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: theme.colors.text,
    },
    eyeButton: {
      padding: 8,
    },
    passwordRequirements: {
      marginTop: 8,
    },
    requirementText: {
      fontSize: 12,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textTertiary,
      lineHeight: 18,
    },
    termsContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: 24,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: theme.colors.border,
      marginRight: 12,
      marginTop: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxChecked: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.primary,
    },
    checkmark: {
      color: '#FFFFFF',
      fontSize: 12,
      fontFamily: 'Inter-Bold',
    },
    termsText: {
      flex: 1,
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      lineHeight: 20,
    },
    linkText: {
      color: theme.colors.primary,
      textDecorationLine: 'underline',
    },
    signupButton: {
      borderRadius: 16,
      overflow: 'hidden',
      marginBottom: 24,
    },
    signupButtonContent: {
      paddingVertical: 16,
      alignItems: 'center',
    },
    signupButtonText: {
      fontSize: 18,
      fontFamily: 'Inter-Bold',
      color: '#FFFFFF',
    },
    signupButtonDisabled: {
      opacity: 0.6,
    },
    divider: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 24,
    },
    dividerLine: {
      flex: 1,
      height: 1,
      backgroundColor: theme.colors.border,
    },
    dividerText: {
      fontSize: 14,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
      marginHorizontal: 16,
    },
    socialButtons: {
      gap: 12,
      marginBottom: 32,
    },
    socialButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.surface,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    socialButtonText: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.text,
      marginLeft: 12,
    },
    loginPrompt: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 40,
    },
    loginPromptText: {
      fontSize: 16,
      fontFamily: 'Inter-Regular',
      color: theme.colors.textSecondary,
    },
    loginLink: {
      fontSize: 16,
      fontFamily: 'Inter-SemiBold',
      color: theme.colors.primary,
      marginLeft: 4,
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
          <Text style={styles.title}>Create Account</Text>
        </View>
        <Text style={styles.subtitle}>
          Join thousands of people on their journey to better health and wellness
        </Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.nameRow}>
            <View style={styles.nameInput}>
              <Text style={styles.label}>First Name</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputIcon}>
                  <User size={20} color={theme.colors.textSecondary} />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="First name"
                  placeholderTextColor={theme.colors.textTertiary}
                  value={firstName}
                  onChangeText={setFirstName}
                  autoComplete="given-name"
                />
              </View>
            </View>
            <View style={styles.nameInput}>
              <Text style={styles.label}>Last Name</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, { paddingLeft: 0 }]}
                  placeholder="Last name"
                  placeholderTextColor={theme.colors.textTertiary}
                  value={lastName}
                  onChangeText={setLastName}
                  autoComplete="family-name"
                />
              </View>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <View style={styles.inputIcon}>
                <Mail size={20} color={theme.colors.textSecondary} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor={theme.colors.textTertiary}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <View style={styles.inputIcon}>
                <Lock size={20} color={theme.colors.textSecondary} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Create a password"
                placeholderTextColor={theme.colors.textTertiary}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoComplete="new-password"
              />
              <TouchableOpacity 
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} color={theme.colors.textSecondary} />
                ) : (
                  <Eye size={20} color={theme.colors.textSecondary} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.passwordRequirements}>
              <Text style={styles.requirementText}>
                Password must be at least 8 characters with uppercase, lowercase, and number
              </Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputContainer}>
              <View style={styles.inputIcon}>
                <Lock size={20} color={theme.colors.textSecondary} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Confirm your password"
                placeholderTextColor={theme.colors.textTertiary}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                autoComplete="new-password"
              />
              <TouchableOpacity 
                style={styles.eyeButton}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} color={theme.colors.textSecondary} />
                ) : (
                  <Eye size={20} color={theme.colors.textSecondary} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.termsContainer}
          onPress={() => setAgreeToTerms(!agreeToTerms)}
        >
          <View style={[styles.checkbox, agreeToTerms && styles.checkboxChecked]}>
            {agreeToTerms && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.termsText}>
            I agree to the{' '}
            <Text style={styles.linkText}>Terms of Service</Text> and{' '}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.signupButton, isLoading && styles.signupButtonDisabled]}
          onPress={handleSignup}
          disabled={isLoading}
        >
          <LinearGradient
            colors={theme.colors.gradient.primary}
            style={styles.signupButtonContent}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.signupButtonText}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Continue with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginPrompt}>
          <Text style={styles.loginPromptText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.loginLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}