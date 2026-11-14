import { ActivityFeedItem, NavTabItem, StreakData } from '../models/dashboard.model';

export const MOCK_STREAK: StreakData = {
  count: 1,
  unit: 'Weeks',
  days: [
    { dayLabel: 'M', date: 9, isCompleted: true },
    { dayLabel: 'T', date: 10, isCompleted: false },
    { dayLabel: 'W', date: 11, isCompleted: false },
    { dayLabel: 'T', date: 12, isCompleted: false },
    { dayLabel: 'F', date: 13, isCompleted: true },
    { dayLabel: 'S', date: 14, isCompleted: false, isToday: true },
    { dayLabel: 'S', date: 15, isCompleted: false }
  ],
  carouselTotal: 4,
  carouselActiveIndex: 0
};

export const MOCK_ACTIVITY: ActivityFeedItem = {
  id: 'activity-101',
  author: {
    name: 'Anvay Salaskar',
    avatarUrl: 'assets/avatar.jpg',
    timeAgo: 'Today at 6:57 AM',
    sourceApp: 'Strava App',
    sportType: 'ride',
    location: 'Nashik, Maharashtra'
  },
  title: 'First winter ride',
  stats: {
    distance: '38.56',
    distanceUnit: 'km',
    elevationGain: '171',
    elevationUnit: 'm',
    totalAchievements: 5,
    medals: {
      gold: 1,
      silver: 1,
      bronze: 1
    }
  },
  personalRecord: {
    title: "Anvay's fastest ever 30K!",
    diffTime: '1m 44s',
    direction: 'faster'
  },
  map: {
    typeTag: 'Workout',
    mapImageUrl: 'assets/route-map.jpg',
    attribution: '© OpenMapTiles © OpenStreetMap'
  }
};

export const MOCK_NAV_TABS: NavTabItem[] = [
  { id: 'home', label: 'Home', icon: 'home', route: '/dashboard' },
  { id: 'maps', label: 'Maps', icon: 'maps' },
  { id: 'workout', label: 'Workout', icon: 'workout' },
  { id: 'groups', label: 'Groups', icon: 'groups' },
  { id: 'you', label: 'You', icon: 'you', isAvatar: true, avatarUrl: 'assets/you-avatar.jpg' }
];
