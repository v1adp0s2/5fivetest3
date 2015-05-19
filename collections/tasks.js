Tasks = new Mongo.Collection("tasks", { defaults: {
    createdAt: new Date()
}});

/*
 * Add query methods like this:
 *  Displays.findPublic = function () {
 *    return Displays.find({is_public: true});
 *  }
 */

Tasks.allow({
    insert: function (text, createdAt) {
        return true;
    },

    update: function (text, createdAt, fieldNames, modifier) {
        return true;
    },

    remove: function (text, createdAt) {
        return true;
    }
});

Tasks.deny({
    insert: function (text, createdAt) {
        return false;
    },

    update: function (text, createdAt, fieldNames, modifier) {
        return false;
    },

    remove: function (text, createdAt) {
        return false;
    }
});