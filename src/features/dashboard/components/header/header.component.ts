import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="sticky top-0 z-40 w-full bg-strava-bg/95 backdrop-blur-md border-b border-strava-border/40 select-none">
      <!-- Safe area top spacer -->
      <div class="h-[env(safe-area-inset-top,0px)] w-full"></div>
      
      <div class="flex items-center justify-between px-4 h-14">
        <!-- Brand Logo -->
        <div class="flex items-center">
          <span class="text-[23px] font-black tracking-tight text-white select-none italic font-sans" style="font-stretch: expanded;">
            STRAVA
          </span>
        </div>

        <!-- Action Icons -->
        <div class="flex items-center gap-1 -mr-2">
          <!-- Plus Icon -->
          <button
            type="button"
            aria-label="Create activity or post"
            class="w-11 h-11 flex items-center justify-center rounded-full text-white/90 hover:text-white active:scale-90 active:opacity-75 transition-transform duration-100 focus:outline-none"
          >
            <svg class="w-6 h-6 stroke-[2.2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>

          <!-- Chat / Messages Icon -->
          <button
            type="button"
            aria-label="Messages"
            class="w-11 h-11 flex items-center justify-center rounded-full text-white/90 hover:text-white active:scale-90 active:opacity-75 transition-transform duration-100 focus:outline-none"
          >
            <svg class="w-6 h-6 stroke-[1.9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </button>

          <!-- Search Icon -->
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

          <!-- Notifications Bell Icon -->
          <button
            type="button"
            aria-label="Notifications"
            class="w-11 h-11 flex items-center justify-center rounded-full text-white/90 hover:text-white active:scale-90 active:opacity-75 transition-transform duration-100 focus:outline-none"
          >
            <svg class="w-6 h-6 stroke-[1.9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}
