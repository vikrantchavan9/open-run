import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProfileHeaderComponent } from '../../components/profile-header/profile-header.component';
import { ProfileNavTabsComponent } from '../../components/profile-nav-tabs/profile-nav-tabs.component';
import { ProgressCardComponent } from '../../components/progress-card/progress-card.component';
import { StreakPreviewCardComponent } from '../../components/streak-preview-card/streak-preview-card.component';
import { BottomNavComponent } from '../../../dashboard/components/bottom-nav/bottom-nav.component';
import { MOCK_PROGRESS_DATA, MOCK_STREAK_PREVIEW, MOCK_USER_PROFILE } from '../../mock-data/profile.mock';
import { MOCK_NAV_TABS } from '../../../dashboard/mock-data/dashboard.mock';
import { ProfileSubTab, ProgressCardData, StreakPreviewData, UserProfile } from '../../models/profile.model';
import { NavTabItem } from '../../../dashboard/models/dashboard.model';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    CommonModule,
    ProfileHeaderComponent,
    ProfileNavTabsComponent,
    ProgressCardComponent,
    StreakPreviewCardComponent,
    BottomNavComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './profile-page.css',
  templateUrl: './profile-page.html',
})
export class ProfilePage {
  private readonly router = inject(Router);

  readonly user = signal<UserProfile>(MOCK_USER_PROFILE);
  readonly progressData = signal<ProgressCardData>(MOCK_PROGRESS_DATA);
  readonly streakData = signal<StreakPreviewData>(MOCK_STREAK_PREVIEW);
  readonly activeSubTab = signal<ProfileSubTab>('progress');

  readonly navTabs = signal<NavTabItem[]>(MOCK_NAV_TABS);
  readonly activeNavTab = signal<string>('you');

  onSubTabChanged(tab: ProfileSubTab): void {
    this.activeSubTab.set(tab);
  }

  onNavTabChanged(tabId: string): void {
    this.activeNavTab.set(tabId);
    if (tabId === 'home') {
      this.router.navigate(['/']);
    }
  }
}
