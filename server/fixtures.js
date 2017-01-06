if ( Meteor.users.find().count() === 0 ) {
  var users = [
      {name:"Normal User",email:"normal@example.com",roles:[]},
      {name:"Admin User",email:"admin@example.com",roles:['admin']}
    ];

  _.each(users, function (user) {
    var id;

    id = Accounts.createUser({
      email: user.email,
      password: "123456",
      profile: { name: user.name }
    });

    if (user.roles.length > 0) {
      // Need _id of existing user record so this call must come
      // after `Accounts.createUser` or `Accounts.onCreate`
      Roles.addUsersToRoles(id, user.roles);
    }
  });
};

if (Site.find().count() === 0) {

  Site.insert({
    companyCountry: "Canada",
    companyName: "Small Robot",
    contactIntro: "Contact Introduction Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque.",
    domain: "localhost:3000",
    featuresIntro: "<p>ServiceBay has many of the key features you will need to build a presence on the Internet, which is where your potential customers are looking for you. With setup and site configuration being handled, all you need to focus on is filling out your information, and choosing a design. We take you through all the steps with clear instructions, along with tips and tricks to make your website shine.</p>",
    homeIntro: "<h2>ServiceBay is a website tool for the smaller mechanic shops, from backyard tinker's, to specialty automotive repair.</h2> \n<p>ServiceBay helps business owners promote their services, share a bit of their history, and share their passion for the vehicles they work on. Keeping it simple, and focussing on the needs of the business, all for a great price.</p>",
    homeSplash: "/img/home-splash.jpg",
    siteTheme: "Master",
    siteTitle: "ServiceBay - Beautifully Easy Auto Service Websites",
    storeIntro: "Gallery Introduction Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque.",
  });
};