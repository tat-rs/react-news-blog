import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolve(options: BuildOptions):webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    alias: {},
    modules: [
      options.paths.src, 'node_modules'
    ]
  }
}