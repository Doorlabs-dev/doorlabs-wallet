const path = require('path');

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'react-native-reanimated/plugin',
        {
          globals: ['__scanCodes'],
        },
      ],
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@features': './src/features',
            '@services': './src/services',
            '@assets': './assets',
            '@styles': './src/styles',
            '@utils': './src/utils',
            '@hooks': './src/hooks',
            '@router': './src/router',
            crypto: 'react-native-quick-crypto',
            stream: 'stream-browserify',
            buffer: '@craftzdog/react-native-buffer',
          },
        },
      ],
    ],
  };
};
