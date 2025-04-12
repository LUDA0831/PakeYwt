import { PakeCliOptions } from './types.js';

export const DEFAULT_PAKE_OPTIONS: PakeCliOptions = {
  icon: '',
  height: 1920,
  width: 1080,
  fullscreen: true,
  resizable: true,
  hideTitleBar: true,
  alwaysOnTop: false,
  appVersion: '1.0.0',
  darkMode: false,
  disabledWebShortcuts: false,
  activationShortcut: '',
  userAgent: '',
  showSystemTray: false,
  multiArch: false,
  targets: 'deb',
  useLocalFile: false,
  systemTrayIcon: '',
  proxyUrl: "",
  debug: false,
  inject: [],
  installerLanguage: 'zh-CN',
};

// Just for cli development
export const DEFAULT_DEV_PAKE_OPTIONS: PakeCliOptions & { url: string } = {
  ...DEFAULT_PAKE_OPTIONS,
  url: 'http://175.27.171.26:8085',
  name: 'WeRead',
  hideTitleBar: true,
};
