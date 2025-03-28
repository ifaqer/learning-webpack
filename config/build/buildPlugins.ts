import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import webpack from 'webpack'
import path from 'path'

import { BuildOptions } from './types/types'

export function buildPlugins(options:BuildOptions):webpack.Configuration['plugins']{
    return [
        new CopyPlugin({
            patterns: [
                { from: './src/database', to: './data' },
            ],
        }),
        new HtmlWebpackPlugin({ // добавляет HTML в сборку!
            template: options.path.html, // './index.html'
            favicon: path.resolve(__dirname, '../../public/favicon.ico')
            // filename: '[name].[contenthash].html' // имя с директорией вывода!
        }),
        new MiniCssExtractPlugin({ // добавляет CSS в сборку!
            filename: 'style/style.[chunkhash].css' // добавлено в новую папку style!
        }),
        new ReactRefreshWebpackPlugin(), // HMR - горячая загрузка модулей! ДЛЯ REACT!
        new webpack.ProgressPlugin(), // добавляет прогресс сборки!
        // new BundleAnalyzerPlugin() // плагин на анализ файлов, их ресурсоемкость!
        new webpack.DefinePlugin({ // Добавление глобальных переменных!
            __TEST__: false
        }),
    ]
}