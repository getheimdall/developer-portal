require('dotenv').config()
const webpack = require('webpack')
const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
// const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config')

module.exports = withCss(withSass({
    webpack: (config) => {
        config.plugins = config.plugins || []

        config.plugins.push(new webpack.EnvironmentPlugin(process.env))
        // config = commonsChunkConfig(config, /\.(sass|scss|css)$/)

        config.module.rules = config.module.rules || []

        config.module.rules.push(
            {
                test: /\.md$/i,
                use: 'raw-loader',
            },
        )

        return config
    }
}))