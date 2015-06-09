Meteor.startup(function() {
  if (Meteor.isClient || !process.env.IS_MIRROR) {
    return;
  }
  Meteor.users.remove({});
  Accounts.createUser({
    username: "testuser",
    email: "test@test.com",
    password: "good password",
    profile: {
      name: "Test User"
    }
  });
});
