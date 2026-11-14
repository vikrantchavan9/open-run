import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { StreakCardComponent } from '../../components/streak-card/streak-card.component';
import { ActivityCardComponent } from '../../components/activity-card/activity-card.component';
import { BottomNavComponent } from '../../components/bottom-nav/bottom-nav.component';
import { MOCK_ACTIVITY, MOCK_NAV_TABS, MOCK_STREAK } from '../../mock-data/dashboard.mock';
import { ActivityFeedItem, NavTabItem, StreakData } from '../../models/dashboard.model';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    StreakCardComponent,
    ActivityCardComponent,
    BottomNavComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './dashboard-page.css',
  templateUrl: './dashboard-page.html',
})
export class DashboardPage {
  private readonly router = inject(Router);

  readonly streak = signal<StreakData>(MOCK_STREAK);
  readonly activity = signal<ActivityFeedItem>(MOCK_ACTIVITY);
  readonly navTabs = signal<NavTabItem[]>(MOCK_NAV_TABS);
  readonly activeTab = signal<string>('home');

  onTabChanged(tabId: string): void {
    this.activeTab.set(tabId);
    if (tabId === 'you') {
      this.router.navigate(['/profile']);
    }
  }
}
