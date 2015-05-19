// Get the logger
//var tb = Observatory.getToolbox();

Meteor.startup(function () {
    /***** CODE TO RUN ON SERVER AT STARTUP *******/
    //AND only seed if there are no items
    Tasks.createValues(0);
});

Meteor.publish("messages", function() {
    return (this.userId!=null?Messages.find():[]);
});

Meteor.publish("tasks", function() {
    return (this.userId!=null?Tasks.find():[]);
});