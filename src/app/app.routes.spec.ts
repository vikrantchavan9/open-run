import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { MainLayout } from '../layouts/main-layout/main-layout';

describe('app routes', () => {
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });
    router = TestBed.inject(Router);
  });

  async function navigate(url: string) {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(url);
    return harness;
  }

  it('redirects the root path to /dashboard', async () => {
    await navigate('/');
    expect(router.url).toBe('/dashboard');
  });

  it('renders the dashboard inside the main layout', async () => {
    const harness = await navigate('/dashboard');

    expect(harness.routeDebugElement?.componentInstance).toBeInstanceOf(
      MainLayout
    );
    expect(
      harness.fixture.nativeElement.querySelector('app-dashboard-page')
    ).not.toBeNull();
  });

  it('renders the activity list on /activities', async () => {
    const harness = await navigate('/activities');

    expect(
      harness.fixture.nativeElement.querySelector('app-activity-list')
    ).not.toBeNull();
  });

  it('renders the activity detail on /activities/:id', async () => {
    const harness = await navigate('/activities/42');

    expect(
      harness.fixture.nativeElement.querySelector('app-activity-detail')
    ).not.toBeNull();
    expect(router.url).toBe('/activities/42');
  });

  it('renders the analytics overview on /analytics', async () => {
    const harness = await navigate('/analytics');

    expect(
      harness.fixture.nativeElement.querySelector('app-overview')
    ).not.toBeNull();
  });

  it('falls back to the dashboard for unknown paths', async () => {
    await navigate('/does-not-exist');
    expect(router.url).toBe('/dashboard');
  });
});
