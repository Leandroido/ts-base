module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-transform-typescript',
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        alias: {
          '@routes': './src/routes',
          '@models': './src/models',
          '@controllers': './src/controllers',
          '@views': './src/views',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
