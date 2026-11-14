import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreakData } from '../../models/dashboard.model';

@Component({
  selector: 'app-streak-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="px-4 pt-3 pb-5 border-b border-strava-border/60 bg-strava-bg select-none" aria-label="Your Activity Streak">
      <!-- Streak Header -->
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-[17px] font-bold text-white tracking-tight">Your streak</h2>
        <button
          type="button"
          aria-label="Share your streak"
          class="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/40 text-white hover:bg-white/10 active:scale-95 active:opacity-80 transition-all duration-100 min-h-[32px]"
        >
          <svg class="w-3.5 h-3.5 stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          <span class="text-xs font-semibold">Share</span>
        </button>
      </div>

      <!-- Streak Content Row -->
      <div class="flex items-center gap-4">
        <!-- Flame & Streak Count -->
        <div class="flex flex-col items-center justify-center shrink-0 w-14">
          <div class="relative flex items-center justify-center w-12 h-12">
            <!-- Flame SVG with gradient -->
            <svg class="w-11 h-11" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="flameGrad" x1="18" y1="2" x2="18" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF6B00" />
                  <stop offset="1" stop-color="#FC5200" />
                </linearGradient>
              </defs>
              <path
                d="M18.8 2C18.8 2 12 11.2 12 18.5C12 20.3 12.5 22 13.3 23.5C11.5 21.8 10.4 19.3 10.4 16.5C7.2 19.8 5 24.3 5 29.2C5 36.3 10.8 42 18 42C25.2 42 31 36.3 31 29.2C31 21.5 24.2 12.2 18.8 2Z"
                fill="url(#flameGrad)"
              />
            </svg>
            <!-- Flame Number -->
            <span class="absolute inset-0 flex items-center justify-center pt-2 text-[15px] font-black text-strava-bg select-none">
              {{ data().count }}
            </span>
          </div>
          <span class="text-[12px] font-bold text-strava-orange mt-0.5 tracking-tight">
            {{ data().unit }}
          </span>
        </div>

        <!-- Weekly Days Grid -->
        <div class="grid grid-cols-7 gap-2 flex-1 items-center">
          @for (day of data().days; track $index) {
            <div class="flex flex-col items-center gap-1.5">
              <!-- Day Initials (M, T, W, ...) -->
              <span class="text-[11px] font-medium text-strava-text-secondary select-none">
                {{ day.dayLabel }}
              </span>

              <!-- Bubble indicator -->
              @if (day.isCompleted) {
                <!-- Completed Activity (White bubble with shoe silhouette) -->
                <div
                  class="w-[34px] h-[34px] rounded-full bg-white flex items-center justify-center shadow-sm select-none"
                  [attr.aria-label]="day.dayLabel + ' completed'"
                >
                  <svg class="w-4 h-4 text-strava-bg fill-current" viewBox="0 0 24 24">
                    <!-- Clean running sneaker silhouette -->
                    <path d="M2.5 16.5C3.2 17.5 4.5 18 6 18c3.5 0 6.2-1.3 9-1.3 1.8 0 3.8.7 5.5.7 1 0 1.5-.7 1.5-1.5 0-1.8-1.5-3.5-3.2-4.7l-4.2-2.8C13.2 7.4 11.7 7 10 7H8.5c-.8 0-1.5.5-1.8 1.2L5.2 12H2.5c-.8 0-1.5.7-1.5 1.5 0 1.2.7 2.3 1.5 3z" />
                    <circle cx="11" cy="11.5" r="1" fill="#FFFFFF" />
                  </svg>
                </div>
              } @else if (day.isToday) {
                <!-- Today / Active circle border -->
                <div
                  class="w-[34px] h-[34px] rounded-full border-[1.5px] border-white flex items-center justify-center select-none"
                  [attr.aria-label]="day.dayLabel + ' ' + day.date + ' today'"
                >
                  <span class="text-[12px] font-bold text-white leading-none">
                    {{ day.date }}
                  </span>
                </div>
              } @else {
                <!-- Uncompleted Day (Muted background bubble) -->
                <div
                  class="w-[34px] h-[34px] rounded-full bg-strava-surface flex items-center justify-center select-none"
                  [attr.aria-label]="day.dayLabel + ' ' + day.date"
                >
                  <span class="text-[12px] font-medium text-strava-text-secondary leading-none">
                    {{ day.date }}
                  </span>
                </div>
              }
            </div>
          }
        </div>
      </div>

      <!-- Carousel Pagination Dots -->
      <div class="flex items-center justify-center gap-1.5 mt-4">
        @for (dot of carouselDots; track $index) {
          <div
            class="h-1.5 rounded-full transition-all duration-200"
            [ngClass]="{
              'w-2 bg-white': $index === data().carouselActiveIndex,
              'w-1.5 bg-[#3E403B]': $index !== data().carouselActiveIndex
            }"
          ></div>
        }
      </div>
    </section>
  `
})
export class StreakCardComponent {
  readonly data = input.required<StreakData>();

  get carouselDots(): number[] {
    return Array.from({ length: this.data().carouselTotal });
  }
}
