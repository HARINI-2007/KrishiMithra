import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.krishimithra.app',
  appName: 'Krishi Mithra',
  webDir: 'www',
  server: {
    url: 'https://krishi-mithra-ruddy.vercel.app/',
    cleartext: false
  }
};

export default config;