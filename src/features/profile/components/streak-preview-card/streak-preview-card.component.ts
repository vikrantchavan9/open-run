import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreakPreviewData } from '../../models/profile.model';

@Component({
  selector: 'app-streak-preview-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="mx-4 mt-3 mb-6 p-4 rounded-3xl bg-[#0E0E0C] border border-strava-border/40 select-none" aria-label="Streak summary">
      <!-- Card Header -->
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-[17px] font-bold text-white tracking-tight leading-tight">
          {{ data().title }}
        </h3>
        <button
          type="button"
          class="flex items-center gap-1 text-[13px] font-medium text-strava-text-secondary hover:text-white active:scale-95 transition-all focus:outline-none"
        >
          <span>{{ data().timeframe }}</span>
          <svg class="w-4 h-4 stroke-current stroke-[2] fill-none" viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <!-- Graphic Row -->
      <div class="flex items-end justify-between pt-1 pb-1">
        <!-- Orange Flame / Mountain Silhouette Vector -->
        <div class="flex items-end gap-1">
          <svg class="w-16 h-12" viewBox="0 0 70 50" fill="none">
            <!-- Mountain / Flame Peak 1 -->
            <path d="M5 50L25 15C26 13 28 13 29 15L45 50H5Z" fill="#FC5200" />
            <!-- Peak 2 -->
            <path d="M35 50L48 24C49 22 51 22 52 24L65 50H35Z" fill="#FC5200" fill-opacity="0.9" />
          </svg>
        </div>

        <!-- Monthly Grid / Dot Matrix Indicator -->
        <div class="flex items-center gap-1.5 pb-2">
          @for (dot of [1,2,3,4,5,6,7,8]; track $index) {
            <div
              class="w-1.5 h-1.5 rounded-full"
              [ngClass]="$index === 7 ? 'bg-strava-border' : 'bg-[#22231E]'"
            ></div>
          }
        </div>
      </div>
    </section>
  `
})
export class StreakPreviewCardComponent {
  readonly data = input.required<StreakPreviewData>();
}
