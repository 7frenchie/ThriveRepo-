# Thrive - Health & Fitness Community App

A comprehensive health and fitness tracking app with AI coaching, community features, and challenges built with React Native and Expo.

## 🚀 Features

### Core Features
- **Health Tracking**: Monitor steps, heart rate, sleep, nutrition, and more
- **AI Coach (Joe)**: Personalized insights and recommendations
- **Community**: Join groups, participate in challenges, connect with others
- **Challenges**: Individual and group challenges with leaderboards
- **Profile Management**: Track achievements, view progress, manage settings

### Authentication & Onboarding
- Welcome screen with feature highlights
- Sign up/Sign in with email and password
- Forgot password functionality
- Interactive onboarding flow

### Health Data
- Comprehensive health metrics tracking
- Activity rings visualization
- Progress charts and trends
- Goal setting and tracking
- Integration-ready for health devices

### Social Features
- Community groups (free and premium)
- Local challenges and leaderboards
- Social badges and achievements
- Group messaging and interactions
- User profiles and sharing

## 📱 App Structure

### Navigation
- **Tab Navigation**: Primary navigation with 5 tabs
  - Home: Dashboard with health overview
  - Joe: AI coach interactions and insights
  - Community: Groups, challenges, social features
  - Challenges: Active and available challenges
  - Profile: User profile, settings, achievements

### Screens
- `app/index.tsx` - App entry point with auth routing
- `app/(auth)/` - Authentication flow
  - `welcome.tsx` - Landing page
  - `login.tsx` - Sign in
  - `signup.tsx` - Registration
  - `forgot-password.tsx` - Password reset
  - `onboarding.tsx` - First-time user flow
- `app/(tabs)/` - Main app tabs
  - `index.tsx` - Home dashboard
  - `joe.tsx` - AI coach
  - `communities.tsx` - Social features
  - `challenges.tsx` - Challenges and competitions
  - `profile.tsx` - User profile
- `app/` - Additional screens
  - `settings.tsx` - App settings
  - `health-data.tsx` - Detailed health metrics
  - `about.tsx` - About the app
  - `privacy-policy.tsx` - Privacy policy
  - `terms-of-service.tsx` - Terms of service
  - `help-support.tsx` - Help and support
  - `offline.tsx` - Offline mode

## 🛠 Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **Styling**: StyleSheet (React Native)
- **Icons**: Lucide React Native
- **Fonts**: Inter (Google Fonts)
- **Gradients**: Expo Linear Gradient
- **State Management**: React Context
- **TypeScript**: Full type safety

## 🎨 Design System

### Theme
- Light and dark mode support
- System theme detection
- Consistent color palette
- Typography scale with Inter font family

### Colors
- Primary: Purple (#8B5CF6)
- Secondary: Blue (#3B82F6)
- Accent: Orange (#F97316)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Error: Red (#EF4444)

### Components
- Gradient headers
- Card-based layouts
- Consistent spacing (8px grid)
- Rounded corners and shadows
- Interactive elements with hover states

## 📋 Development Plan

### Phase 1: Core Infrastructure ✅
- [x] Project setup with Expo
- [x] Navigation structure
- [x] Theme system
- [x] Authentication context
- [x] Basic UI components

### Phase 2: Authentication & Onboarding ✅
- [x] Welcome screen
- [x] Login/signup flows
- [x] Password reset
- [x] Onboarding experience
- [x] Auth state management

### Phase 3: Core Features ✅
- [x] Home dashboard
- [x] Health data tracking
- [x] AI coach interface
- [x] Community features
- [x] Challenges system
- [x] User profile

### Phase 4: Backend Integration (Next)
- [ ] Firebase setup
- [ ] User authentication
- [ ] Real-time database
- [ ] Cloud functions
- [ ] Push notifications
- [ ] File storage

### Phase 5: Health Data Integration
- [ ] HealthKit integration (iOS)
- [ ] Google Fit integration (Android)
- [ ] Wearable device connections
- [ ] Data synchronization
- [ ] Offline data storage

### Phase 6: AI & Analytics
- [ ] AI coach backend
- [ ] Health insights generation
- [ ] Recommendation engine
- [ ] Analytics tracking
- [ ] Performance optimization

### Phase 7: Social Features
- [ ] Real-time messaging
- [ ] Group management
- [ ] Challenge creation
- [ ] Leaderboards
- [ ] Social sharing

### Phase 8: Monetization
- [ ] RevenueCat integration
- [ ] Subscription tiers
- [ ] Premium features
- [ ] In-app purchases
- [ ] Payment processing

### Phase 9: Testing & Optimization
- [ ] Unit testing
- [ ] Integration testing
- [ ] Performance testing
- [ ] Accessibility testing
- [ ] Security audit

### Phase 10: Deployment
- [ ] App Store submission
- [ ] Google Play submission
- [ ] Beta testing
- [ ] Production deployment
- [ ] Monitoring setup

## 🔧 Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Web**
   ```bash
   npm run build:web
   ```

## 📱 Platform Support

- **Web**: Primary development platform
- **iOS**: Mobile app (requires Expo Dev Client)
- **Android**: Mobile app (requires Expo Dev Client)

## 🔐 Environment Variables

Create `.env` files for different environments:

```env
EXPO_PUBLIC_API_URL=https://api.thrive.com
EXPO_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

## 📊 Database Schema (Firebase)

### Users Collection
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    privacy: 'public' | 'friends' | 'private';
  };
  subscription?: {
    tier: 'free' | 'premium';
    expiresAt?: Timestamp;
  };
}
```

### Health Data Collection
```typescript
interface HealthData {
  id: string;
  userId: string;
  date: string; // YYYY-MM-DD
  metrics: {
    steps?: number;
    heartRate?: number;
    sleep?: number;
    weight?: number;
    calories?: number;
    activeMinutes?: number;
    water?: number;
  };
  goals: {
    steps?: number;
    sleep?: number;
    activeMinutes?: number;
    water?: number;
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### Communities Collection
```typescript
interface Community {
  id: string;
  name: string;
  description: string;
  type: 'free' | 'premium';
  category: string;
  memberCount: number;
  isPrivate: boolean;
  createdBy: string;
  createdAt: Timestamp;
  settings: {
    allowInvites: boolean;
    requireApproval: boolean;
    maxMembers?: number;
  };
}
```

### Challenges Collection
```typescript
interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'individual' | 'group';
  category: string;
  duration: number; // days
  startDate: Timestamp;
  endDate: Timestamp;
  participants: string[]; // user IDs
  goals: {
    metric: string;
    target: number;
    unit: string;
  };
  rewards: {
    points: number;
    badges: string[];
  };
  createdBy: string;
  createdAt: Timestamp;
}
```

## 🔒 Security & Privacy

- End-to-end encryption for sensitive health data
- HIPAA compliance considerations
- User consent management
- Data anonymization for analytics
- Secure authentication with Firebase Auth
- Regular security audits

## 📈 Analytics & Monitoring

- User engagement tracking
- Health data insights
- Performance monitoring
- Crash reporting
- A/B testing framework
- Revenue analytics

## 🚀 Deployment Strategy

1. **Development**: Local development with Expo
2. **Staging**: Expo Development Build
3. **Production**: App Store & Google Play
4. **Web**: Vercel/Netlify deployment
5. **Backend**: Firebase/Google Cloud

## 📞 Support & Documentation

- In-app help system
- User documentation
- Developer API docs
- Community forums
- Support ticket system

## 🎯 Success Metrics

- Daily/Monthly Active Users
- Health data logging frequency
- Community engagement
- Challenge completion rates
- User retention
- Revenue per user
- App store ratings

---

**Thrive** - Empowering healthier lives through technology and community.