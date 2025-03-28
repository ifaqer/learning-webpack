import webpack from 'webpack'
import path from 'path'

import { BuildOptions } from './types/types'

export function buildResolver(options:BuildOptions):webpack.Configuration['resolve']{
    return { //  какие расширения файлов должны быть авто-добавлены при импорте модулей!
        extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
        alias: {
            '@': path.resolve(__dirname, '../../src'),
            'components': path.resolve(__dirname, '../../src/components'), // './src/components/'
        }
    }
}