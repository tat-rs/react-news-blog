import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions, BuildPath } from './types/config';

export function buildPlugins(paths: BuildPath): webpack.WebpackPluginInstance[] {

  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin()
  ]
}