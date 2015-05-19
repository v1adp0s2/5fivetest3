/*subscriptions, basic Meteor.startup code.*/

SimpleRationalRanks = {
    beforeFirst: function (firstRank) {return firstRank-1;},
    between: function (beforeRank,afterRank) {return (beforeRank+afterRank)/2;},
    afterLast: function (lastRank) {return lastRank+1;}
};

Template.body.rendered = function() {
    this.$("div.main-container").find("div.task-list").sortable({
        stop: function (event, ui) {
            var el = ui.item.get(0), before = ui.item.prev().get(0), after = ui.item.next().get(0);

            var newRank;

            if(!before) {
                newRank = SimpleRationalRanks.beforeFirst(Blaze.getData(after).rank);
            } else if (!after) {
                newRank = SimpleRationalRanks.afterLast(Blaze.getData(before).rank);
            } else {
                newRank = SimpleRationalRanks.between(Blaze.getData(before).rank,Blaze.getData(after).rank);
            }

            Tasks.update({_id:Blaze.getData(el)._id} ,{$set: {rank:newRank}});
        }
    })
}