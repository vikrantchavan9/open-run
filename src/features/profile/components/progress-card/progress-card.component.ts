import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCardData, SportCategory } from '../../models/profile.model';

@Component({
  selector: 'app-progress-card',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="mx-4 mt-4 p-4 rounded-3xl bg-[#0E0E0C] border border-strava-border/40 select-none" aria-label="Progress summary">
      <!-- Sport Filter Pills -->
      <div class="flex items-center gap-2 mb-4">
        <!-- All Sports Pill -->
        <button
          type="button"
          (click)="selectSport('all')"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-150 active:scale-95 focus:outline-none"
          [ngClass]="selectedSport() === 'all'
            ? 'border-strava-orange bg-strava-orange/15 text-strava-orange'
            : 'border-strava-border bg-[#181915] text-white hover:border-white/40'"
        >
          <!-- All Sports Icon (Target/Rings) -->
          <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2" />
            <path d="M7 12a5 5 0 0 1 5-5M12 17a5 5 0 0 1-5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          <span>All Sports</span>
        </button>

        <!-- Run Pill (Active in screenshot) -->
        <button
          type="button"
          (click)="selectSport('run')"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-150 active:scale-95 focus:outline-none"
          [ngClass]="selectedSport() === 'run'
            ? 'border-strava-orange bg-[#241306] text-strava-orange'
            : 'border-strava-border bg-[#181915] text-white hover:border-white/40'"
        >
          <!-- Running Shoe Icon -->
          <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M2.5 16.5C3.2 17.5 4.5 18 6 18c3.5 0 6.2-1.3 9-1.3 1.8 0 3.8.7 5.5.7 1 0 1.5-.7 1.5-1.5 0-1.8-1.5-3.5-3.2-4.7l-4.2-2.8C13.2 7.4 11.7 7 10 7H8.5c-.8 0-1.5.5-1.8 1.2L5.2 12H2.5c-.8 0-1.5.7-1.5 1.5 0 1.2.7 2.3 1.5 3z" />
          </svg>
          <span>Run</span>
        </button>
      </div>

      <!-- Card Title -->
      <h2 class="text-[19px] font-bold text-white tracking-tight leading-tight">
        {{ data().title }}
      </h2>

      <!-- Metrics Row (Distance, Time, Elev Gain) -->
      <div class="flex items-baseline justify-between mt-3 mb-5">
        <!-- Distance -->
        <div class="flex flex-col">
          <span class="text-[12px] font-medium text-strava-text-secondary leading-none mb-1">Distance</span>
          <div class="flex items-baseline gap-1">
            <span class="text-[20px] font-bold text-white leading-tight tracking-tight">{{ data().metrics.distance }}</span>
            <span class="text-[15px] font-bold text-white leading-tight">{{ data().metrics.distanceUnit }}</span>
          </div>
        </div>

        <!-- Time -->
        <div class="flex flex-col">
          <span class="text-[12px] font-medium text-strava-text-secondary leading-none mb-1">Time</span>
          <span class="text-[20px] font-bold text-white leading-tight tracking-tight">{{ data().metrics.time }}</span>
        </div>

        <!-- Elev Gain -->
        <div class="flex flex-col">
          <span class="text-[12px] font-medium text-strava-text-secondary leading-none mb-1">Elev Gain</span>
          <div class="flex items-baseline gap-1">
            <span class="text-[20px] font-bold text-white leading-tight tracking-tight">{{ data().metrics.elevationGain }}</span>
            <span class="text-[15px] font-bold text-white leading-tight">{{ data().metrics.elevationUnit }}</span>
          </div>
        </div>
      </div>

      <!-- Past 12 Weeks Subtitle -->
      <div class="text-[12px] font-normal text-strava-text-secondary mb-2">
        {{ data().subtitle }}
      </div>

      <!-- 12-Week Interactive SVG Line Chart -->
      <div class="relative w-full h-[180px] mt-1 select-none">
        <svg class="w-full h-full overflow-visible" viewBox="0 0 320 160">
          <defs>
            <!-- Area Gradient Fill -->
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#FC5200" stop-opacity="0.35" />
              <stop offset="100%" stop-color="#FC5200" stop-opacity="0.0" />
            </linearGradient>
          </defs>

          <!-- Horizontal Grid Lines -->
          <!-- 8 km Line -->
          <line x1="10" y1="20" x2="275" y2="20" stroke="#252622" stroke-width="1" />
          <text x="282" y="23" font-size="10" fill="#8C8E8B" font-weight="500">8 km</text>

          <!-- 4 km Line -->
          <line x1="10" y1="75" x2="275" y2="75" stroke="#252622" stroke-width="1" />
          <text x="282" y="78" font-size="10" fill="#8C8E8B" font-weight="500">4 km</text>

          <!-- 0 km Baseline -->
          <line x1="10" y1="130" x2="275" y2="130" stroke="#252622" stroke-width="1" />
          <text x="282" y="133" font-size="10" fill="#8C8E8B" font-weight="500">0 km</text>

          <!-- Area Gradient Fill Path -->
          <path [attr.d]="svgAreaPath()" fill="url(#areaGrad)" />

          <!-- Orange Line Stroke Path -->
          <path
            [attr.d]="svgLinePath()"
            fill="none"
            stroke="#FC5200"
            stroke-width="2.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <!-- Vertical Active Week Cursor Line at Last Point -->
          @if (activePoint(); as pt) {
            <line
              [attr.x1]="pt.x"
              y1="20"
              [attr.x2]="pt.x"
              y2="130"
              stroke="#FFFFFF"
              stroke-width="1.8"
            />
          }

          <!-- Data Points Nodes -->
          @for (pt of computedPoints(); track $index) {
            @if ($index === computedPoints().length - 1) {
              <!-- Active Highlight Current Week Node -->
              <circle
                [attr.cx]="pt.x"
                [attr.cy]="pt.y"
                r="6"
                fill="#FC5200"
                stroke="#FFFFFF"
                stroke-width="2"
              />
            } @else {
              <!-- Normal Node -->
              <circle
                [attr.cx]="pt.x"
                [attr.cy]="pt.y"
                r="3.2"
                fill="#0E0E0C"
                stroke="#FC5200"
                stroke-width="1.8"
              />
            }
          }

          <!-- X-Axis Month Labels -->
          <text x="35" y="152" font-size="10" fill="#8C8E8B" font-weight="600" text-anchor="middle">SEP</text>
          <text x="140" y="152" font-size="10" fill="#8C8E8B" font-weight="600" text-anchor="middle">OCT</text>
          <text x="240" y="152" font-size="10" fill="#8C8E8B" font-weight="600" text-anchor="middle">NOV</text>
        </svg>
      </div>

      <!-- Action Button ("See more of your progress") -->
      <div class="mt-4">
        <button
          type="button"
          class="w-full min-h-[44px] flex items-center justify-center rounded-full bg-[#121210] border border-strava-border/80 text-[14px] font-semibold text-white hover:border-white/40 active:scale-98 active:opacity-80 transition-all duration-100 focus:outline-none"
        >
          See more of your progress
        </button>
      </div>
    </section>
  `
})
export class ProgressCardComponent {
  readonly data = input.required<ProgressCardData>();
  readonly selectedSport = signal<SportCategory>('run');

  selectSport(sport: SportCategory): void {
    this.selectedSport.set(sport);
  }

  // Calculate coordinates in 320x160 SVG box
  readonly computedPoints = computed(() => {
    const points = this.data().chartPoints;
    const count = points.length;
    const startX = 14;
    const endX = 275;
    const stepX = (endX - startX) / (count - 1);
    const zeroY = 130;
    const maxVal = this.data().maxScaleKm || 8;
    const rangeY = 110; // from y=20 (8km) to y=130 (0km)

    return points.map((p, i) => {
      const x = startX + i * stepX;
      const y = zeroY - (p.distanceKm / maxVal) * rangeY;
      return { x, y, isCurrent: p.isCurrentWeek };
    });
  });

  readonly activePoint = computed(() => {
    const pts = this.computedPoints();
    return pts[pts.length - 1];
  });

  readonly svgLinePath = computed(() => {
    const pts = this.computedPoints();
    if (!pts.length) return '';
    return pts.reduce((acc, curr, idx) => {
      return idx === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
    }, '');
  });

  readonly svgAreaPath = computed(() => {
    const pts = this.computedPoints();
    if (!pts.length) return '';
    const line = this.svgLinePath();
    const lastX = pts[pts.length - 1].x;
    const firstX = pts[0].x;
    return `${line} L ${lastX} 130 L ${firstX} 130 Z`;
  });
}
