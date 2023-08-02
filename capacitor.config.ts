import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'android-app',
  webDir: 'dist/android-app',
  server: {
    androidScheme: 'https'
  },
  bundledWebRuntime: false
};

export default config;
