export interface StreakDay {
  dayLabel: string;
  date: number;
  isCompleted: boolean;
  isToday?: boolean;
}

export interface StreakData {
  count: number;
  unit: string;
  days: StreakDay[];
  carouselTotal: number;
  carouselActiveIndex: number;
}

export interface AchievementMedals {
  gold: number;
  silver: number;
  bronze: number;
}

export interface PersonalRecord {
  title: string;
  diffTime: string;
  direction: 'faster' | 'slower';
}

export interface ActivityStats {
  distance: string;
  distanceUnit: string;
  elevationGain: string;
  elevationUnit: string;
  totalAchievements: number;
  medals: AchievementMedals;
}

export interface ActivityAuthor {
  name: string;
  avatarUrl: string;
  timeAgo: string;
  sourceApp: string;
  sportType: 'ride' | 'run' | 'walk' | 'workout';
  location: string;
}

export interface ActivityMapData {
  typeTag: string;
  mapImageUrl: string;
  attribution: string;
}

export interface ActivityFeedItem {
  id: string;
  author: ActivityAuthor;
  title: string;
  stats: ActivityStats;
  personalRecord?: PersonalRecord;
  map: ActivityMapData;
}

export interface NavTabItem {
  id: string;
  label: string;
  icon: string;
  /** Router path this tab navigates to. Tabs without a route are display-only. */
  route?: string;
  isAvatar?: boolean;
  avatarUrl?: string;
}
