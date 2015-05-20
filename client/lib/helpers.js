/*any helpers (handlebars or otherwise) that are used often in view files*/

Template.body.helpers({
    counter: function () {
        return Session.get('counter');
    }
});

Template.template_tasks.helpers({
    tasks2show: function () {
        return Tasks.find({}, {sort: {rank:1}});
    }
});

Template.login.helpers({
    showLogin: function(){
        // code goes here
        Accounts._loginButtonsSession.set('dropdownVisible', true);
    }
});

Template.body.events({
    'click button[id=btnHello]': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);

        var tb = Session.get('tb');

        console.log(JSON.stringify(tb))
        //tb.info("just for your information", {"date":new Date()}, "Meteor.startup");
    },

    'click button[id=btnServer]': function () {
        //go to serverç
        var email = "ceva_"+jQuery.now()+"@gmail.com";
        Session.set("email", email);
        console.log("email: "+Session.get("email"));
        /*Meteor.call('message.add', function (err, data) {
         if (!err) {
         Session.set('myData', data);
         console.log(JSON.stringify(data));
         }

         console.log("email5: "+Session.get("email"));
         });*/
    },

    'click button[id=normalizeItems]': function () {
        //go to server
        Meteor.call('reorder', function (err, data) {
            console.log(JSON.stringify(data));
        });
    }
});

Template.login.events({
    'click button[id=login-buttons-password]': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);

        var tb = Session.get('tb');

        console.log(JSON.stringify(tb))
        //tb.info("just for your information", {"date":new Date()}, "Meteor.startup");
    }
});

Template.logout.events({
    /*'click #logout-button': function() {
        Meteor.logout();
    }*/
});
