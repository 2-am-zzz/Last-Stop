## Last-Stop
A DevBootcamp final project focusing on alerting users of the time of the last bus/train/BART to arrive.

## MVP

- A user can see the Front page, which has multiple sections for each transit agency with stops nearby.
- A user can see that each section will have the remaining time left until the last train or bus leaves for each nearby line for each nearby stop.
- The user's current location should be used as the reference point for finding the closest stations.


## Tech Stack
- Rails API backend
- Mongoid MongoDB driver.
- mLab for our database solution and hosting MongoDB
- Heroku for hosting
- GoDaddy for our domain name
- React Frontend
- Bootstrap CSS Framework
- SFMTA, AC Trans, BART, and Caltrain Datasets

## Team Dynamics

### Schedule
- 9am - 9pm (Flexible)

### Lunch
- Least: 1 hours
- Most: 1.5 hours

### StandUps
1. 9am
2. 2pm
3. 6pm <- 360 Feedback
  * How are they doing?
  * What did they do from yesterday?
  * What are they working on today?
  * Current roadblocks.
  * ASK feedback.

### Slice/Pairing
- 2 Pairs of 2
- Pair that created PR does not merge their own PR.
- Pair swap for merge to fix and solve merge conflicts.
- Branch for each feature.

### Database Update Procedure
- mongoimport -h <host> -d last-stop -c <collection> -u <user> -p <password> --file <input .csv file> --type csv --headerline
- mongo <host> -u <dbuser> -p <dbpassword>
- db.stops.ensureIndex({loc:"2d"});
- db.stops.find().batchSize(20).forEach( function(r) { r.loc = [r.stop_lat, r.stop_lon]; db.stops.save(r); });

