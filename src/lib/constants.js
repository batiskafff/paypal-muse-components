/* @flow */
export default {
  'oneHour': 1000 * 60 * 60,
  'sevenDays': 1000 * 60 * 60 * 24 * 7,
  'oneMonth': 1000 * 60 * 60 * 24 * 30,
  'accessTokenUrl': 'https://www.paypal.com/muse/api/partner-token',
  'storage': {
    'paypalCrUser': 'paypal-cr-user',
    'paypalCrCart': 'paypal-cr-cart',
    'paypalCrPropertyId': 'paypal-cr-propid',
    'paypalCrContainer': 'paypal-cr-container',
    'paypalSDKIdentity': 'paypal-sdk-identity'
  },
  'defaultTrackerConfig': {
    'user': {
      'id': null,
      'email': null,
      'name': null
    }
  }
};
