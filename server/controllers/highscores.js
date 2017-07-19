// THIS FILE CONTAINS THE ATOMIC DB FUNCTIONS FOR THE 'highscores' TABLE ONLY. IT IS DRAWN IN BY THE 'index.js' FILE IN THIS SAME FOLDER.

// I AM NOT ENTIRELY CERTAIN WE ACTUALLY NEED THIS FILE; IT SEEMS WE COULD SIMPLY DERIVE A HIGH SCORE ON-DEMAND FROM DATA IN THE 'games' TABLE VIA A '.where max' FUNCTION.

const models = require('../../db/models');

module.exports.getAll = (req, res) => {  // [ R ]
  models.Highscore.fetchAll()
    .then(highscores => {
      res.status(200).send(highscores);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};

// WHY WERE SOME OF THESE METHODS COMMENTED OUT?

module.exports.create = (req, res) => {  // [ C ]
  models.Highscore.forge({
    profile_id: req.params.profile_id,
    highscore: req.params.highscore,
    song_id: req.params.song_id,
    game_id: req.params.game_id,
  })
    .save()
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports.getAllForUser = (req, res) => {  // [ R ]
  models.Highscore.where({ profile_id: req.params.profile_id }).fetch() // 'params' = SOME NODE THING WHICH WILL AUTO-BE THERE
    .then(highscore => {
      if (!highscore) {
        throw highscore;
      }
      res.status(200).send(highscore);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

// I DO NOT BELIEVE WE NEED TO UPDATE HIGHSCORES RECORDS (?)

module.exports.update = (req, res) => {  // [ U ]
  models.Highscore.where({ id: req.params.id }).fetch()
    .then(highscore => {
      if (!highscore) {
        throw highscore;
      }
      return highscore.save(req.params, { method: 'update' });
    })
    .then(() => {
      res.sendStatus(201);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

// NOT SURE WHEN WE WOULD USE THIS, BUT IT SHOULD WORK IF WE DO NEED IT

module.exports.deleteOne = (req, res) => {  // [ D ]
  models.Highscore.where({ id: req.params.id }).fetch()
    .then(highscore => {
      if (!highscore) {
        throw highscore;
      }
      return highscore.destroy();
    })
    .then(() => {
      res.sendStatus(200);
    })
    .error(err => {
      res.status(503).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};
