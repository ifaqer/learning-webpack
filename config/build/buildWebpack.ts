import webpack from 'webpack'
// import devServer from 'webpack-dev-server'

import {BuildOptions} from './types/types'

import { buildDevServer } from './buildDevServer'
import { buildResolver } from './buildResolvers'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'

export function buildWebpack(options:BuildOptions):webpack.Configuration {
    return { // export в Node.js! Должен вернуть объект!
        mode: options.mode ?? 'development', // development или production
        entry: options.path.entry, // получить абсолютный путь к файлу!
        output: {
            path: options.path.output, // path: './build'
            filename: '[name].[chunkhash].js', // имя Bundle! Есть [name] и [contenthash] для динамики имя! и др.
            clean: true // очистка старых Bundle's!
        },
        plugins: buildPlugins(options),
        module: buildLoaders(options),
        resolve: buildResolver(options),
        devServer: buildDevServer(options),
        devtool: 'eval-cheap-module-source-map'
    }
}