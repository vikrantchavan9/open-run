import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfile } from '../../models/profile.model';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="w-full bg-strava-bg select-none pt-[env(safe-area-inset-top,0px)]">
      <!-- Top Action Bar (Right-aligned actions) -->
      <div class="flex items-center justify-end px-4 h-12 gap-1">
        <!-- Plus Button -->
        <button
          type="button"
          aria-label="Create activity or post"
          class="w-11 h-11 flex items-center justify-center rounded-full text-white/90 hover:text-white active:scale-90 active:opacity-75 transition-transform duration-100 focus:outline-none"
        >
          <svg class="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>

        <!-- Search Button -->
        <button
          type="button"
          aria-label="Search"
          class="w-11 h-11 flex items-center justify-center rounded-full text-white/90 hover:text-white active:scale-90 active:opacity-75 transition-transform duration-100 focus:outline-none"
        >
          <svg class="w-6 h-6 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>

        <!-- Settings Button -->
        <button
          type="button"
          aria-label="Settings"
          class="w-11 h-11 flex items-center justify-center rounded-full text-white/90 hover:text-white active:scale-90 active:opacity-75 transition-transform duration-100 focus:outline-none"
        >
          <svg class="w-6 h-6 stroke-[1.9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </button>
      </div>

      <!-- User Profile Row -->
      <div class="px-4 pt-1 pb-3">
        <div class="flex items-center gap-4">
          <!-- Profile Picture -->
          <div class="w-[68px] h-[68px] rounded-full overflow-hidden border border-strava-border/60 shrink-0 bg-strava-surface">
            <img
              [src]="user().avatarUrl"
              [alt]="user().name"
              class="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <!-- Name and Activity Count -->
          <div class="flex flex-col">
            <h1 class="text-[21px] font-bold text-white tracking-tight leading-snug">
              {{ user().name }}
            </h1>
            <span class="text-[14px] font-normal text-strava-text-secondary leading-snug mt-0.5">
              {{ user().activitiesCount }} activities
            </span>
          </div>
        </div>

        <!-- Followers & Following -->
        <div class="mt-3.5 text-[14px] text-white font-medium flex items-center gap-1.5">
          <span>{{ user().followersCount }} followers</span>
          <span class="text-strava-text-secondary">·</span>
          <span>{{ user().followingCount }} following</span>
        </div>

        <!-- Action Buttons (Edit profile / Share profile) -->
        <div class="grid grid-cols-2 gap-3 mt-4">
          <button
            type="button"
            class="flex items-center justify-center min-h-[40px] px-4 rounded-full bg-strava-bg border border-strava-border hover:border-white/40 active:scale-95 active:opacity-80 transition-all duration-100 text-[14px] font-semibold text-white focus:outline-none"
          >
            Edit profile
          </button>
          <button
            type="button"
            class="flex items-center justify-center min-h-[40px] px-4 rounded-full bg-strava-bg border border-strava-border hover:border-white/40 active:scale-95 active:opacity-80 transition-all duration-100 text-[14px] font-semibold text-white focus:outline-none"
          >
            Share profile
          </button>
        </div>
      </div>
    </header>
  `
})
export class ProfileHeaderComponent {
  readonly user = input.required<UserProfile>();
}
