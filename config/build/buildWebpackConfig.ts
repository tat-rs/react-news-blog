import webpack from 'webpack';
import { BuildOptions } from "./types/config";
import { buildLoaders } from './buildLoaders';
import { buildResolve } from './buildResolve';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev} = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolve(),
    plugins: buildPlugins(paths),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}