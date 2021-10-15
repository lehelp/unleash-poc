# Test

Run these commands in `deploy` directory:

`docker-compose -p unleash postgres`

`docker-compose -p unleash unleash-server`

`docker-compose -p unleash unleash-proxy`

Once everything is UP, run `npm start` to start the app.

## Unleash

In order to make this PoC work, login into Unleash admin panel (`admin`:`unleash4all`). 

Create a new feature toggle called `test-toggle`. For Activation Strategy, choose `UserIDs`, and add the `b3ce6c8a-4c8f-43d7-a10e-7a4c193cfb45` ID to config.

In couple of seconds, you should see the React logo visible on frontend. Everything else is self-explanatory from that point.
