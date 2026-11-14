import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.strava.clone',
  appName: 'Strava',
  webDir: 'dist/open-run/browser',
  backgroundColor: '#151611',
  plugins: {
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#151611',
      overlaysWebView: false,
    },
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
  },
};

export default config;
