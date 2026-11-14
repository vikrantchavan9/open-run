import { ProgressCardData, StreakPreviewData, UserProfile } from '../models/profile.model';

export const MOCK_USER_PROFILE: UserProfile = {
  name: 'Vikrant Chavan',
  avatarUrl: 'assets/vikrant-avatar.jpg',
  activitiesCount: 40,
  followersCount: 9,
  followingCount: 15,
};

export const MOCK_PROGRESS_DATA: ProgressCardData = {
  selectedSport: 'run',
  title: 'This week',
  metrics: {
    distance: '2.57',
    distanceUnit: 'km',
    time: '19m 24s',
    elevationGain: '25',
    elevationUnit: 'm',
  },
  subtitle: 'Past 12 weeks',
  maxScaleKm: 8,
  chartPoints: [
    { weekIndex: 0, distanceKm: 2.8 },
    { weekIndex: 1, distanceKm: 6.2 },
    { weekIndex: 2, distanceKm: 0.0 },
    { weekIndex: 3, distanceKm: 4.2 },
    { weekIndex: 4, distanceKm: 3.0 },
    { weekIndex: 5, distanceKm: 3.0 },
    { weekIndex: 6, distanceKm: 2.9 },
    { weekIndex: 7, distanceKm: 0.0 },
    { weekIndex: 8, distanceKm: 1.2 },
    { weekIndex: 9, distanceKm: 0.0 },
    { weekIndex: 10, distanceKm: 0.0 },
    { weekIndex: 11, distanceKm: 2.57, isCurrentWeek: true },
  ],
};

export const MOCK_STREAK_PREVIEW: StreakPreviewData = {
  title: 'Streak',
  timeframe: 'This month',
  totalDays: 10,
  activeDotsCount: 1,
};
