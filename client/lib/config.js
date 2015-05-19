/*configuration of any client side packages*/
// counter starts at 0
Session.setDefault('counter', 0);

Meteor.subscribe("messages");
Meteor.subscribe("tasks");