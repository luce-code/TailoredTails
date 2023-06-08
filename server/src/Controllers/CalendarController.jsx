const router = require('express').Router();
const Event = require('../../../Luce-code/TailoredTails/server/src/models/Event');
const moment = require('moment');

router.post({ path: '/create-event' }, async (req, res) => {
  const event = Event(req.body);
  await event.save();
  res.sendStatus(201);
});

router.get({ path: '/get-events' }, async (req, res) => {
  const events = await Event.find({
    start: {
      $gte: moment(req.query.start).toDate(),
      $lt: moment(req.query.end).toDate(),
    },
  });

  res.send(events);
});

module.exports = router;
