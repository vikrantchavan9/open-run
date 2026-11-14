import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTabItem } from '../../models/dashboard.model';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav
      class="fixed bottom-0 left-0 right-0 z-40 bg-strava-bg/98 backdrop-blur-md border-t border-strava-border/60 select-none"
      role="tablist"
      aria-label="Main Navigation"
    >
      <div class="flex items-center justify-around h-14 max-w-md mx-auto px-1">
        @for (tab of tabs(); track tab.id) {
          <button
            type="button"
            role="tab"
            [id]="'tab-' + tab.id"
            [attr.aria-selected]="activeTab() === tab.id"
            [attr.aria-controls]="'panel-' + tab.id"
            (click)="selectTab(tab.id)"
            class="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] py-1 px-2 rounded-lg text-xs transition-all duration-150 active:scale-90 active:opacity-75 focus:outline-none"
            [ngClass]="{
              'text-white': activeTab() === tab.id,
              'text-strava-text-secondary hover:text-white/80': activeTab() !== tab.id
            }"
          >
            <!-- Tab Icon Container -->
            <div class="relative flex items-center justify-center w-6 h-6 mb-0.5">
              @if (tab.id === 'home') {
                <!-- Home Icon (Active: Solid Orange Strava Home) -->
                <svg
                  class="w-6 h-6 transition-colors duration-150"
                  [ngClass]="activeTab() === 'home' ? 'text-strava-orange fill-current' : 'text-strava-text-secondary fill-none stroke-current stroke-[2]'"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
              } @else if (tab.id === 'maps') {
                <!-- Maps Icon (Folded Map with Pin) -->
                <svg class="w-6 h-6 stroke-[1.9] fill-none stroke-current" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                  <circle cx="12" cy="11" r="1.5" fill="currentColor" />
                </svg>
              } @else if (tab.id === 'workout') {
                <!-- Workout Icon (Target / Record concentric circles) -->
                <svg class="w-6 h-6 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="4.5" fill="currentColor" />
                </svg>
              } @else if (tab.id === 'groups') {
                <!-- Groups Icon (Strava 2-overlapping diamonds) -->
                <svg class="w-6 h-6 stroke-current stroke-[1.9] fill-none" viewBox="0 0 24 24" stroke-linejoin="round">
                  <rect x="7" y="1" width="10" height="10" rx="1.5" transform="rotate(45 12 6)" />
                  <rect x="7" y="9" width="10" height="10" rx="1.5" transform="rotate(45 12 14)" />
                </svg>
              } @else if (tab.isAvatar) {
                <!-- You Icon (Circular User Thumbnail) -->
                <div
                  class="w-6 h-6 rounded-full overflow-hidden border transition-all duration-150"
                  [ngClass]="activeTab() === tab.id ? 'border-strava-orange ring-1 ring-strava-orange' : 'border-strava-text-secondary/60'"
                >
                  <img
                    [src]="tab.avatarUrl || 'assets/you-avatar.jpg'"
                    alt="You"
                    class="w-full h-full object-cover"
                  />
                </div>
              }
            </div>

            <!-- Tab Label -->
            <span
              class="text-[10px] tracking-tight leading-none transition-colors duration-150"
              [ngClass]="{
                'font-bold text-white': activeTab() === tab.id,
                'font-medium text-strava-text-secondary': activeTab() !== tab.id
              }"
            >
              {{ tab.label }}
            </span>
          </button>
        }
      </div>

      <!-- Safe area bottom padding -->
      <div class="h-[env(safe-area-inset-bottom,0px)] w-full"></div>
    </nav>
  `
})
export class BottomNavComponent {
  readonly tabs = input.required<NavTabItem[]>();
  readonly activeTab = input<string>('home');
  readonly tabChange = output<string>();

  selectTab(tabId: string): void {
    this.tabChange.emit(tabId);
  }
}
