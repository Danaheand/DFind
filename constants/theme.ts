/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native'

const tintColorLight = '#0a7ea4'
const tintColorDark = '#fff'

export const Colors = {
    light: {
        text: '#11181C',
        background: '#fff',
        tint: tintColorLight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#ECEDEE',
        background: '#151718',
        tint: tintColorDark,
        icon: '#9BA1A6',
        tabIconDefault: '#9BA1A6',
        tabIconSelected: tintColorDark,
    },
}
export const palette = {
    background: '#f8f9fa',
    card: '#ffffff',
    primary: '#64ac8f',
    primaryLight: '#e7f5dc',
    text: '#343a40',
    textSecondary: '#6c757d',
    placeholder: '#adb5bd',
    border: '#dee2e6',
    accent: '#a8d5a2',
    accentLight: '#e6f2e8',
    danger: '#ff6b6b',
}

export const Fonts = Platform.select({
    ios: {
        /** iOS `UIFontDescriptorSystemDesignDefault` */
        sans: 'system-ui',
        /** iOS `UIFontDescriptorSystemDesignSerif` */
        serif: 'ui-serif',
        /** iOS `UIFontDescriptorSystemDesignRounded` */
        rounded: 'ui-rounded',
        /** iOS `UIFontDescriptorSystemDesignMonospaced` */
        mono: 'ui-monospace',
    },
    default: {
        sans: 'normal',
        serif: 'serif',
        rounded: 'normal',
        mono: 'monospace',
    },
    web: {
        sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        serif: "Georgia, 'Times New Roman', serif",
        rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
        mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    },
})
