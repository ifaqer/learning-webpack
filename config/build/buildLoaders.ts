import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import ReactRefreshTypeScript from 'react-refresh-typescript'

import { BuildOptions } from './types/types'

export function buildLoaders(options:BuildOptions):webpack.ModuleOptions{
    return {
        rules: [ // порядок loaders важен!
            {
                test: /\.s[ac]ss$/i,
                use: [
                        MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: options.mode == 'development' ? '[path][name]__[local]' : '[hash:base64:8]',
                                exportLocalsConvention: 'camelCase',
                                namedExport: false,
                                exportOnlyLocals: false,
                            },
                        },
                    },
                        "sass-loader",
                ],
            },
            /*{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    getCustomTransformers: () => ({
                        before: [ReactRefreshTypeScript()].filter(Boolean),
                }),
                transpileOnly: true, //
                }, // Для HMR с TypeScript
                exclude: "/node_modules/"
            },*/
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-typescript',
                                ['@babel/preset-react', {
                                    runtime: 'automatic'
                                }]
                            ],
                        },
                    },
                    "source-map-loader"
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    }
}