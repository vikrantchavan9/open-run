export type SportCategory = 'all' | 'run';

export type ProfileSubTab = 'progress' | 'activities' | 'gallery' | 'more';

export interface UserProfile {
  name: string;
  avatarUrl: string;
  activitiesCount: number;
  followersCount: number;
  followingCount: number;
}

export interface WeeklyMetrics {
  distance: string;
  distanceUnit: string;
  time: string;
  elevationGain: string;
  elevationUnit: string;
}

export interface ChartDataPoint {
  weekIndex: number;
  distanceKm: number;
  label?: string;
  isCurrentWeek?: boolean;
}

export interface ProgressCardData {
  selectedSport: SportCategory;
  title: string;
  metrics: WeeklyMetrics;
  subtitle: string;
  maxScaleKm: number;
  chartPoints: ChartDataPoint[];
}

export interface StreakPreviewData {
  title: string;
  timeframe: string;
  totalDays: number;
  activeDotsCount: number;
}
