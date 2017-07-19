const models = require('../models');

exports.seed = function (knex, Promise) {

  return models.Profile.where({ email: 'Yugata_B@Khidding.org' }).fetch()
    .then((profile) => {
      if (profile) {
        throw profile;
      }
      return models.Profile.forge({
        firstname: 'Kurt',
        lastname: 'Larson',
        display: 'DJ HarshMellow',
        email: 'Yugata_B@Khidding.org',
        phone: '415.555.1234',
        accessToken: '',
        refreshToken: ''
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create profile');
      throw err;
    })
    .then((profile) => {
      return models.Auth.forge({
        type: 'local',
        password: 'admin123',
        profile_id: profile.get('id'),
        accessToken: '',
        refreshToken: ''
      }).save();
    })
    .error(err => {
      console.error('ERROR: failed to create auth');
    })
    .catch((err) => {
      console.log('FAILZ0RZ! - default user already exists.\n', err);
    });

};
