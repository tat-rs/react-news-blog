export type BuildMode = 'development' | 'production';

export type BuildPath = {
  entry: string,
  build: string,
  html: string,
  src: string
}

export type BuildEnv = {
  mode: BuildMode,
  port: number
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPath,
  isDev: boolean,
  port: number
}
