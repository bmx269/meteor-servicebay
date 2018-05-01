import SimpleSchema from 'simpl-schema';


Schema = {};
Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    }
});

Template.ContactMaster.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var siteId = Session.get("selectedDocId")
        self.subscribe('siteData', siteId)
    });
});

Template.ContactMaster.helpers({
    contact: function() {
        var siteId = Session.get("selectedDocId")
        var contact =  Site.findOneFaster({'_id': siteId},{fields: {'contactIntro': 1}});
        return contact;
    }
});