Template.servicesList0.helpers({
  services: function() {
    return Services.find({'domain': Session.get("domain")});
  }
});
Template.servicesList1.helpers({
  services: function() {
    return Services.find({'domain': Session.get("domain")});
  }
});
Template.servicesList2.helpers({
  services: function() {
    return Services.find({'domain': Session.get("domain")});
  }
});
Template.servicesList3.helpers({
  services: function() {
    return Services.find({'domain': Session.get("domain")});
  }
});
