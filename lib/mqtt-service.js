"use strict";
/*
 * mqtt-service
 * https://github.com/wolfeidau/queue-stream
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */

var mqtt = require('mqtt')
  , client = mqtt.createClient();

client.publish('$client/driver/notification', JSON.stringify({message: "hello", counter: 1}));
client.end();