/**
 * Created by vladimirpostu on 5/18/15.
 */
/*

Router.map(function () {
    this.route('widgetsShow', {
        path: '/widgets/:_id',

        onBeforeAction: function (pause) {
            if (!Meteor.user()) {
                // render the login template but keep the url in the browser the same
                this.render('template_tasks');
            }
        }
    });
});
*/

Router.map(function () {
    this.route('home', {path: '/'} );
    this.route('about', {
        layoutTemplate: 'MainContainer',
        action: function() {
            // this is an instance of RouteController
            // access to:
            //  this.params
            //  this.wait
            //  this.render
            //  this.stop
            //  this.redirect


            // render yieldTemplates
            this.render('about', {to: 'main.container'});
        }
    });
    this.route('application', {
        layoutTemplate: 'MainContainer',
        action: function() {
            // this is an instance of RouteController
            // access to:
            //  this.params
            //  this.wait
            //  this.render
            //  this.stop
            //  this.redirect


            // render yieldTemplates
            this.render('application', {to: 'main.container'});
        }
    });
    this.route('profile', {
        layoutTemplate: 'MainContainer',
        action: function() {
            // this is an instance of RouteController
            // access to:
            //  this.params
            //  this.wait
            //  this.render
            //  this.stop
            //  this.redirect


            // render yieldTemplates
            this.render('profile', {to: 'main.container'});
        }
    });
    this.route('tasks', {
        layoutTemplate: 'MainContainer',
        action: function() {
            // this is an instance of RouteController
            // access to:
            //  this.params
            //  this.wait
            //  this.render
            //  this.stop
            //  this.redirect


            // render yieldTemplates
            this.render('template_tasks', {to: 'main.container'});
        }
    });
    this.route('login', {
        onBeforeAction: function (pause) {
            if (!Meteor.user()) {
                // render the login template but keep the url in the browser the same
                Accounts._loginButtonsSession.set('dropdownVisible', true);
            } else {
                Accounts._loginButtonsSession.set('dropdownVisible', false);
                Router.go("home");
            }

            this.next();
        }
    });
    this.route("logout", {
        onBeforeAction: function (pause) {
            if (Meteor.user()) {
                // render the login template but keep the url in the browser the same
                Accounts._loginButtonsSession.set('dropdownVisible', true);
            }
            this.next();
        },
        onAfterAction: function() {
            if (Meteor.user()) {
                // for now we will log-out
                Meteor.logout();
                Router.go("home");
            }
        }
    });
    this.route('logo.small', {
        path: 'client/css/logo.png'
    });
});