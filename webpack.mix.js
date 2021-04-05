const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/js")
    .vue({ version: 2 })
    .css("resources/css/nucleo-icons.css", "public/css")
    .postCss("resources/css/app.css", "public/css", [
        require("postcss-import"),
        require("tailwindcss")
    ])
    .sass("resources/sass/black-dashboard-pro.scss", "public/css", {
        implementation: require("node-sass")
    })
    .sourceMaps()
    .webpackConfig(require("./webpack.config"));

if (mix.inProduction()) {
    mix.version();
}
