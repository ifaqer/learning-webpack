import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

import { BuildOptions } from './types/types'

export function buildDevServer(options:BuildOptions):DevServerConfiguration{
    return {
      open: true,
      port: options.port,
      hot: true,
      historyApiFallback: true, // включает history перенаправление, нужно для React Router
    }
}