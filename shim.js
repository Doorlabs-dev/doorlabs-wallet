import RNQuickCrypto from 'react-native-quick-crypto';

if (typeof BigInt === 'undefined') global.BigInt = require('big-integer');
global.crypto.getRandomValues = RNQuickCrypto.getRandomValues;
