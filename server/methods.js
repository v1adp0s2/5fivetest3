Meteor.methods({
    message: {
        add: function() {
            /* validate input + return some data */
            var email = Session.get("email");
            var text = Session.get("text");
            console.log("email: "+email);

            check(email, String);
            check(text, String);
            Messages.insert({"email":email,"text":text});
            console.log("email: "+email);
        }
    },
    reorder: function() {
        Tasks.createValues(1);
    }
});

Tasks.createValues = function(normalize) {
    console.log("in Tasks.createValues (normalize = "+!!normalize + ")");
    if(normalize) {
        Tasks.remove({});
    }
    if(Tasks.find({}).count() == 0) {
        for(var i = 1; i <= 10; i++) {
            Tasks.insert({
                text: "Item " + i,
                createdAt: new Date(),
                rank: i
            })
        }
    }
};