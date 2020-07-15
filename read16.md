### Event Driven Applications

Nearly everything in the world is “Event Driven”

Machines can be event driven as well. Self driving cars can stay in their lane by “reading” the road lines in real time. Thermostats constantly turn the heat/air on or off in response to the temperature.

- Everything in JS is an object
  - Most actions in JS are event driven
  - UI Events
  - Express Routes
  - (soon) Model Lifecycle Hooks
  - (later) React … everything

        let SQL = "DELETE FROM sometable WHERE id = $1"
        let values = [request.query.id];
        client.query(SQL, values)
          .then( results => {
          emit('delete', request.query.id);
          res.send('Record Deleted')
        });

        events.on('delete', (data) => {
          sendEmail({
            to: 'admin@here.com',
            subject: 'Someone deleted part of the database',
            body: `Record id: ${data} was removed`
          });
        });