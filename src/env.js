/**
 * @flow
 */

// NlarHFBeyd63KG0ULkKNV2cJU4CUV11xDbpZe
const defaults = {};

if (__DEV__) {
  module.exports = {
    ...defaults,
    // API_URL: 'http://re.dev/api',
    API_URL: 'http://sood.ideasowners.net/api',
    GOOGLE_MAPS_KEY: '',
    GOOGLE_MAPS_IOS_KEY: '',
    GOOGLE_MAPS_ANDROID_KEY: '',
    CODEPUSH_ENABLED: false,
  };
  // XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  //   ? GLOBAL.originalXMLHttpRequest
  //   : GLOBAL.XMLHttpRequest;
} else {
  module.exports = {
    ...defaults,
    API_URL: 'http://sood.ideasowners.net/api',
    GOOGLE_MAPS_KEY: '',
    GOOGLE_MAPS_IOS_KEY: '',
    GOOGLE_MAPS_ANDROID_KEY: '',
    CODEPUSH_ENABLED: true,
  };
}
