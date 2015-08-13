// Notifications.warn('title', 'message');
// Notifications.error('title', 'message');
// Notifications.info('title', 'message');
// Notifications.success('title', 'message');


AutoForm.addHooks(['createSiteForm', 'editSiteForm', 'quickEditSiteForm', 'createSubscriptionForm', 'editSubscriptionForm'], {
    after: {
        insert: function(error, result) {
            if (error) {
                console.log("Insert Error:", error);
                toastr.error('There is an error in your form, and the form could not been saved.','Oh Snap!');
            } else {
                console.log("Insert Result:", result);
                $.fancybox.close();
                toastr.success('Your changes have been saved.', 'Success');
            }
        },
        update: function(error) {
            if (error) {
                console.log("Oh Snap!", error);
                toastr.error('There is an error in your form, and the changes have not been saved.', 'Update Error');


            } else {
                console.log("Updated!");
                //$.fancybox.close();
                toastr.success('Your changes have been saved.', 'Success');
            }
        },
        remove: function(error) {
            console.log("Remove Error:", error);
        }
    }
});

AutoForm.addHooks(null, {
    onSubmit: function () {
        console.log("onSubmit ALL FORMS!");
    }
});

AutoForm.hooks({
    serviceInsert: {
        before: {
            insert: function (doc, template) {
                //modify the document here
                doc.siteId = Session.get("selectedDocId");
                //doc.order = Session.get("sortIndex");
                return doc;
            }
        }
    }
});

//Template.docList.helpers({
//    docs: function () {
//        return Site.find();
//    },
//    onError: function () {
//        return function (error) { alert("BOO!"); console.log(error); };
//    },
//    onSuccess: function () {
//        return function (result) { alert("YAY!"); console.log(result); };
//    },
//    beforeRemove: function () {
//        return function (collection, id) {
//            var doc = collection.findOne(id);
//            if (confirm('Really delete "' + doc.name + '"?')) {
//                this.remove();
//            }
//        };
//    }
//});