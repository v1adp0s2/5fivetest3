Messages = new Meteor.Collection('messages', { defaults: {
    createdAt: new Date()
}});

/*
 * Add query methods like this:
 *  Displays.findPublic = function () {
 *    return Displays.find({is_public: true});
 *  }
 */

Messages.allow({
    insert: function (email, text) {
        return true;
    },

    update: function (email, text, fieldNames, modifier) {
        return true;
    },

    remove: function (email, text) {
        return true;
    }
});

Messages.deny({
    insert: function (email, text) {
        return false;
    },

    update: function (email, text, fieldNames, modifier) {
        return false;
    },

    remove: function (email, text) {
        return false;
    }
});
