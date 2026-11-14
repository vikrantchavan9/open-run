import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityFeedItem } from '../../models/dashboard.model';

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="bg-strava-bg select-none" [attr.aria-label]="item().title + ' by ' + item().author.name">
      <!-- Author Header -->
      <div class="px-4 pt-4 pb-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <!-- Avatar -->
            <div class="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-strava-border/50 bg-strava-surface">
              <img
                [src]="item().author.avatarUrl"
                [alt]="item().author.name"
                class="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <!-- Author & Activity Meta -->
            <div class="flex flex-col">
              <span class="text-[15px] font-bold text-white tracking-tight leading-snug">
                {{ item().author.name }}
              </span>
              <span class="text-[12px] font-normal text-strava-text-secondary leading-snug">
                {{ item().author.timeAgo }} · {{ item().author.sourceApp }}
              </span>
              <div class="flex items-center gap-1.5 text-[12px] text-strava-text-secondary leading-snug mt-0.5">
                <!-- Bike Icon -->
                <svg class="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M5 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm14 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4.2-6.5l-3.2-5.5h-3.1v2h2.2l2.3 4h-4.3l-1.3-2.3c-.3-.5-.9-.8-1.5-.7L4.5 9.3 5.2 11l1.1-.3 2.1 3.8H14l.8 1.5h2.3l-2.3-4.5z" />
                </svg>
                <span>{{ item().author.location }}</span>
              </div>
            </div>
          </div>

          <!-- Options Menu Button -->
          <button
            type="button"
            aria-label="Activity options"
            class="w-11 h-11 -mr-2 flex items-center justify-center rounded-full text-white/80 hover:text-white active:scale-90 active:opacity-75 transition-transform duration-100 focus:outline-none"
          >
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="1.75" />
              <circle cx="12" cy="12" r="1.75" />
              <circle cx="19" cy="12" r="1.75" />
            </svg>
          </button>
        </div>

        <!-- Activity Title -->
        <h1 class="text-[22px] font-bold text-white tracking-tight mt-3 mb-2 leading-tight">
          {{ item().title }}
        </h1>

        <!-- Stats Grid -->
        <div class="flex items-baseline justify-between pt-1 pb-3">
          <!-- Distance -->
          <div class="flex flex-col">
            <span class="text-[12px] font-medium text-strava-text-secondary leading-none mb-1">Distance</span>
            <div class="flex items-baseline gap-1">
              <span class="text-[19px] font-bold text-white leading-tight tracking-tight">{{ item().stats.distance }}</span>
              <span class="text-[15px] font-bold text-white leading-tight">{{ item().stats.distanceUnit }}</span>
            </div>
          </div>

          <!-- Elev Gain -->
          <div class="flex flex-col">
            <span class="text-[12px] font-medium text-strava-text-secondary leading-none mb-1">Elev Gain</span>
            <div class="flex items-baseline gap-1">
              <span class="text-[19px] font-bold text-white leading-tight tracking-tight">{{ item().stats.elevationGain }}</span>
              <span class="text-[15px] font-bold text-white leading-tight">{{ item().stats.elevationUnit }}</span>
            </div>
          </div>

          <!-- Achievements -->
          <div class="flex flex-col items-end">
            <span class="text-[12px] font-medium text-strava-text-secondary leading-none mb-1">Achievements</span>
            <div class="flex items-center gap-1.5">
              <!-- Gold Medal -->
              <svg class="w-4 h-5" viewBox="0 0 20 24" fill="none">
                <path d="M5 2L10 8L15 2H18L11 10.5V11H9V10.5L2 2H5Z" fill="#EBB604" fill-opacity="0.9" />
                <circle cx="10" cy="16" r="6" fill="#EBB604" stroke="#FFF" stroke-width="0.75" />
                <path d="M8.5 16L9.5 17.5L12 14" stroke="#855B00" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <!-- Silver Medal -->
              <svg class="w-4 h-5" viewBox="0 0 20 24" fill="none">
                <path d="M5 2L10 8L15 2H18L11 10.5V11H9V10.5L2 2H5Z" fill="#B4B8BC" fill-opacity="0.9" />
                <circle cx="10" cy="16" r="6" fill="#B4B8BC" stroke="#FFF" stroke-width="0.75" />
                <path d="M8.5 16L9.5 17.5L12 14" stroke="#4B5158" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <!-- Bronze Medal -->
              <svg class="w-4 h-5" viewBox="0 0 20 24" fill="none">
                <path d="M5 2L10 8L15 2H18L11 10.5V11H9V10.5L2 2H5Z" fill="#CD7F32" fill-opacity="0.9" />
                <circle cx="10" cy="16" r="6" fill="#CD7F32" stroke="#FFF" stroke-width="0.75" />
                <path d="M8.5 16L9.5 17.5L12 14" stroke="#683908" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <!-- Count -->
              <span class="text-[19px] font-bold text-white leading-tight ml-0.5">{{ item().stats.totalAchievements }}</span>
            </div>
          </div>
        </div>

        <!-- PR / Personal Record Highlight Box -->
        @if (item().personalRecord; as pr) {
          <div class="bg-strava-card-banner rounded-xl p-3 flex items-center gap-3.5 mt-1 border border-strava-border/30">
            <!-- Trophy Badge -->
            <div class="relative w-10 h-10 shrink-0 flex items-center justify-center">
              <svg class="w-9 h-9" viewBox="0 0 36 36" fill="none">
                <!-- Ribbon ties -->
                <path d="M9 16L4 26L10 24L14 26L12 17" fill="#C29202" />
                <path d="M27 16L32 26L26 24L22 26L24 17" fill="#C29202" />
                <!-- Shield Trophy -->
                <path
                  d="M18 3L8 6V16C8 23 12.5 28.5 18 31C23.5 28.5 28 23 28 16V6L18 3Z"
                  fill="#EBB604"
                />
                <!-- Inner shield stroke -->
                <path
                  d="M18 5.5L10 8V16C10 21.8 13.6 26.2 18 28.4C22.4 26.2 26 21.8 26 16V8L18 5.5Z"
                  stroke="#FFF2A8"
                  stroke-width="0.8"
                />
                <!-- Text PR -->
                <text x="18" y="19" text-anchor="middle" font-size="9" font-weight="900" fill="#6A4900" font-family="sans-serif">
                  PR
                </text>
              </svg>
            </div>

            <!-- PR Text and Delta -->
            <div class="flex flex-col">
              <span class="text-[14px] font-semibold text-white tracking-tight leading-tight">
                {{ pr.title }}
              </span>
              <div class="flex items-center gap-1.5 mt-1">
                <span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-strava-badge-green text-strava-badge-green-text text-[11px] font-bold tracking-tight">
                  <svg class="w-2.5 h-2.5 fill-current" viewBox="0 0 10 10">
                    <polygon points="1,2 9,2 5,8" />
                  </svg>
                  <span>{{ pr.diffTime }}</span>
                </span>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Map & Route Container -->
      <div class="relative w-full h-[270px] sm:h-[300px] overflow-hidden bg-[#2D3A46] mt-2">
        <!-- Interactive/Styled Map Canvas Background -->
        <img
          [src]="item().map.mapImageUrl"
          alt="Route Map for {{ item().title }}"
          class="w-full h-full object-cover select-none"
          loading="eager"
        />

        <!-- Workout Tag Badge -->
        <div class="absolute top-3 left-3 bg-white text-black px-2.5 py-1 rounded-md text-[11px] font-bold shadow-md tracking-tight select-none">
          {{ item().map.typeTag }}
        </div>

        <!-- OpenStreetMap Attribution -->
        <div class="absolute bottom-1 left-2 text-[8.5px] font-normal text-white/50 tracking-tight select-none pointer-events-none">
          {{ item().map.attribution }}
        </div>
      </div>
    </article>
  `
})
export class ActivityCardComponent {
  readonly item = input.required<ActivityFeedItem>();
}
