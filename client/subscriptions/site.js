/*
 * Add query methods like this:
 *  Site.findPublic = function () {
 *    return Site.find({is_public: true});
 *  }
 */

var host = headers.get('host'),
    host = String(host).replace(/^www\./,'');
var header =  headers.get();
//console.log(host);
//return Site.find({'domain': host});

Meteor.subscribe('site', {domain: host});

//Meteor.subscribe('site', {'domain': host});

var user = Meteor.userId();
//console.log('userId = ' + user);
//Meteor.subscribe('userSites', {userId: user});
