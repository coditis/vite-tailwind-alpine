const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            colors: {
                // 'color-name': '#XXXXXX',
            },
            fontFamily: {
                // serif: ['FontName', ...defaultTheme.fontFamily.serif],
                // sans: ['FontName', ...defaultTheme.fontFamily.sans],
				// custom-property: ['Font', 'sans']
            }
        },
    },
    plugins: [],
};

// Uncomment the lines to add custom colors or custom self-hosted fonts
