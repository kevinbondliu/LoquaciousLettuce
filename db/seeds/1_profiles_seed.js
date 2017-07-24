const models = require('../models');

const dummyProfileData = {
  first: ['Galadriel', 'Glorfindel', 'Celebrimbor', 'Thingol', 'Feanor', 'Cirdan', 'Thranduil', 'Maeglin', 'Nimrodel', 'Ithilbor'],

  last: ['Artanis', 'Imladrim', 'Galadhon', 'Singollo', 'High King Of The Noldor', 'GreyHaven', 'Woodleaf', 'The Accursed', 'Riverborn', 'Moonchild'],

  display: ['Galadriel Artanis', 'Glorfindel Imladrim', 'Celebrimbor Galadhon', 'Thingol Singollo', 'Feanor, High King Of The Noldor', 'Cirdan GreyHaven', 'Thranduil Woodleaf', 'Maeglin The Accursed', 'Nimrodel Riverborn', 'Ithilbor Moonchild'],

  email: ['Yugata_B@khidding.com', 'nunyabiznet@goway.org', 'esterhazy@tanks.mil', 'Valaquen@insoc.us', 'Harbinger@banshee.org', 'TheViceroy@palace.org', 'Yoda@jediacademy.edu', 'A_horse@thestable.gov', 'troll@blackops.org', 'fearanddoubt@heaven.gov'],

  phone: ['415.555.1234', '612.633.3636', '801.778.9293', '911.911.9111', '310.555.8989', '715.882.9395', '512.726.8956', '212.274.1644', '718.562.4499', '206.650.2096'],

  accessToken: ['', '', '', '', '', '', '', '', '', ''],

  refreshToken: ['', '', '', '', '', '', '', '', '', ''],
};

let createProfile = (knex, i) => {
  return models.Profile.where({ email: dummyProfileData.email[i] }).fetch()
    .then((profile) => {
      if (profile) {
        throw profile;
      }
      return models.Profile.forge({
        first: dummyProfileData.first[i],
        last: dummyProfileData.last[i],
        display: dummyProfileData.display[i],
        email: dummyProfileData.email[i],
        phone: dummyProfileData.phone[i],
        accessToken: dummyProfileData.accessToken[i],
        refreshToken: dummyProfileData.refreshToken[i],
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


exports.seed = function (knex, Promise) {

  let records = [];

  for (let i = 0; i < 10; i++) {  // DO THIS TEN TIMES FOR DUMMY DATA
    records.push(createProfile(knex, i));
  }
  return Promise.all(records);
};

/*
exports.seed = function (knex, Promise) {

  for (let i = 0; i < 10; i++) {  // DO THIS TEN TIMES FOR DUMMY DATA
    let records = [];
    records.push(createProfile(knex, i));
    return Promise.all(records);
  }

};
*/