/*
 * Add query methods like this:
 *  Site.findPublic = function () {
 *    return Site.find({is_public: true});
 *  }
 */

 host =  headers.get('host');
 host = String(host).replace(/^www\./,'');
 var header =  headers.get();


var user = Meteor.userId();
//console.log('userId = ' + user);
//Meteor.subscribe('userSites', {userId: user});
//var subs = new SubsManager({
//  // will be cached only 20 recently used subscriptions
//  cacheLimit: 20,
//  // any subscription will be expired after 5 minutes of inactivity
//  expireIn: 5
//});

//subs.subscribe('findSite', {'domain': host});
//subs.subscribe('userSites', {'userId': user});
//subs.subscribe('site', {'domain': host});