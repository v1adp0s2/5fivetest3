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
    this.route('about');
    this.route('logo.small', {
        path: 'client/css/logo.png'
    });
});

/*Router.route('about', function() {
    if(this.user()){
        this.render('template_tasks');
    } else {
        Router.go("home");
    }
});*/
Router.route('template_tasks', function() {
    this.render('template_tasks');
});