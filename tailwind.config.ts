/** @type {import('tailwindcss').Config} */
module.exports = {
    // 1. Configuración para NativeWind v4 (modo oscuro basado en `class` o `data-theme`)
    darkMode: 'class',

    // 2. Aquí le dices a Tailwind qué archivos debe escanear
    content: [
        './src/app/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
        './src/screens/**/*.{js,jsx,ts,tsx}',
    ],

    // 3. Definición del Tema
    theme: {
        // 4. Familias de fuentes (tomadas de tu archivo Fonts.ts)
        // Usamos las definiciones web ya que son las más completas.
        fontFamily: {
            sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            serif: "Georgia, 'Times New Roman', serif",
            rounded:
                "'SF Pro Rounded', 'Hirangino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
            mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        },

        // 5. Extensión del tema
        extend: {
            // 6. Paleta de colores semántica (el núcleo de la mejora)
            // Estos nombres (ej. 'background') usarán las variables CSS
            // que definiremos en el archivo global.css.
            colors: {
                border: 'hsl(var(--border))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: 'hsl(var(--card))',
                'card-foreground': 'hsl(var(--card-foreground))',
                primary: 'hsl(var(--primary))',
                'primary-foreground': 'hsl(var(--primary-foreground))',
                muted: 'hsl(var(--muted))',
                'muted-foreground': 'hsl(var(--muted-foreground))',
                destructive: 'hsl(var(--destructive))',
                'destructive-foreground': 'hsl(var(--destructive-foreground))',
                success: 'hsl(var(--success))',
                'success-foreground': 'hsl(var(--success-foreground))',
                warning: 'hsl(var(--warning))',
                'warning-foreground': 'hsl(var(--warning-foreground))',
                // También puedes mantener tu color de "marca" como un color estático
                brand: '#0a7ea4',
            },
        },
    },

    // 7. Plugins (NativeWind se encarga a través de Babel, no se necesita aquí)
    plugins: [],
}
