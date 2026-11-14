import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSubTab } from '../../models/profile.model';

@Component({
  selector: 'app-profile-nav-tabs',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="w-full bg-strava-bg select-none border-b border-strava-border/50" role="tablist" aria-label="Profile Sections">
      <div class="grid grid-cols-4 px-2">
        <!-- Progress Tab -->
        <button
          type="button"
          role="tab"
          [attr.aria-selected]="activeTab() === 'progress'"
          (click)="selectTab('progress')"
          class="flex flex-col items-center justify-center pt-2.5 pb-1 relative transition-colors focus:outline-none"
          [ngClass]="activeTab() === 'progress' ? 'text-white' : 'text-strava-text-secondary hover:text-white/80'"
        >
          <svg class="w-5 h-5 mb-1 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <path d="M9 14h6M9 18h4" />
          </svg>
          <span class="text-[12px] font-semibold tracking-tight">Progress</span>
          @if (activeTab() === 'progress') {
            <div class="absolute bottom-0 left-2 right-2 h-[2.5px] bg-strava-orange rounded-full"></div>
          }
        </button>

        <!-- Activities Tab -->
        <button
          type="button"
          role="tab"
          [attr.aria-selected]="activeTab() === 'activities'"
          (click)="selectTab('activities')"
          class="flex flex-col items-center justify-center pt-2.5 pb-1 relative transition-colors focus:outline-none"
          [ngClass]="activeTab() === 'activities' ? 'text-white' : 'text-strava-text-secondary hover:text-white/80'"
        >
          <svg class="w-5 h-5 mb-1 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          <span class="text-[12px] font-medium tracking-tight">Activities</span>
          @if (activeTab() === 'activities') {
            <div class="absolute bottom-0 left-2 right-2 h-[2.5px] bg-strava-orange rounded-full"></div>
          }
        </button>

        <!-- Gallery Tab -->
        <button
          type="button"
          role="tab"
          [attr.aria-selected]="activeTab() === 'gallery'"
          (click)="selectTab('gallery')"
          class="flex flex-col items-center justify-center pt-2.5 pb-1 relative transition-colors focus:outline-none"
          [ngClass]="activeTab() === 'gallery' ? 'text-white' : 'text-strava-text-secondary hover:text-white/80'"
        >
          <svg class="w-5 h-5 mb-1 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          <span class="text-[12px] font-medium tracking-tight">Gallery</span>
          @if (activeTab() === 'gallery') {
            <div class="absolute bottom-0 left-2 right-2 h-[2.5px] bg-strava-orange rounded-full"></div>
          }
        </button>

        <!-- More Tab -->
        <button
          type="button"
          role="tab"
          [attr.aria-selected]="activeTab() === 'more'"
          (click)="selectTab('more')"
          class="flex flex-col items-center justify-center pt-2.5 pb-1 relative transition-colors focus:outline-none"
          [ngClass]="activeTab() === 'more' ? 'text-white' : 'text-strava-text-secondary hover:text-white/80'"
        >
          <svg class="w-5 h-5 mb-1 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
          <span class="text-[12px] font-medium tracking-tight">More</span>
          @if (activeTab() === 'more') {
            <div class="absolute bottom-0 left-2 right-2 h-[2.5px] bg-strava-orange rounded-full"></div>
          }
        </button>
      </div>
    </nav>
  `
})
export class ProfileNavTabsComponent {
  readonly activeTab = input<ProfileSubTab>('progress');
  readonly tabChange = output<ProfileSubTab>();

  selectTab(tab: ProfileSubTab): void {
    this.tabChange.emit(tab);
  }
}
