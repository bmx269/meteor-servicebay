Template.FeaturesTeaser.helpers({
  features: function(){
    return Site.findOneFaster({'_id': Session.get("selectedDocId")},{fields: {'featuresIntro': 1}});
  }
});
