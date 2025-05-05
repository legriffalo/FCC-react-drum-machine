import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pebbles.orchestra.app',
  appName: 'pebbles',
  webDir: 'dist',
  plugins: {
    SplashScreen: {
      launchShowDuration: 1000,
      launchAutoHide: true,
      launchFadeOutDuration: 1000,
      backgroundColor: "000000",
      androidSplashResourceName: "splash",
      androidScaleType: "FIT_END",
    }
  }
};

export default config;
