import webpack from 'webpack'
import path from 'path';

import {buildWebpack} from './config/build/buildWebpack'

type envVariable = {
    mode: 'development' | 'production',
    port: number
}

export default (env:envVariable)=>{
    const config : webpack.Configuration = buildWebpack({
        port: env.port ?? 6000,
        path: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            html: path.resolve(__dirname, 'index.html'),
            output: path.resolve(__dirname, 'build'),
        },
        mode: env.mode ?? 'development'
    });
    return config
}