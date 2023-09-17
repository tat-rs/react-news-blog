export type BuildMode = 'development' | 'production';

export type BuildPath = {
  entry: string,
  build: string,
  html: string
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPath,
  isDev: boolean
}