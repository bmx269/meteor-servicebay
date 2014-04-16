if (Subscription.find().count() === 0) {
  Subscription.insert({
    siteTitle: 'ServiceBay Sample',
    userId: '1',
    owner: 'bm269@gmail.com',
    domain: 'localhost:3000',
    subscriptionLevel: '1',
    active: '1',
    siteId: '123'
  });
  Subscription.insert({
    siteTitle: 'ServiceBay 123 Sample',
    userId: '1',
    owner: 'bm269@gmail.com',
    domain: '123.servicebay.ca',
    subscriptionLevel: '1',
    active: '1',
    siteId: '123'
  });
}

if (Services.find().count() === 0) {
  Services.insert({
    siteId: '123',
    domain: '127.0.0.1:3000',
    serviceTitle: 'Oil Change',
    image: 'http://www.driftsafari.com/sites/default/files/media/974396632_mrkxj-xl.jpg',
    serviceDescription: 'Donec turpis est, sagittis vel gravida nec, condimentum non augue. Aenean at vulputate nulla. Maecenas at hendrerit turpis.'
  });
  Services.insert({
    siteId: '123',
    domain: '127.0.0.1:3000',
    serviceTitle: 'Brake Check',
    image: 'http://www.driftsafari.com/sites/default/files/media/974396632_mrkxj-xl.jpg',
    serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque. Nam convallis sed orci sed sollicitudin.'
  });
  Services.insert({
    siteId: '123',
    domain: '127.0.0.1:3000',
    serviceTitle: 'Alignment',
    image: 'http://www.driftsafari.com/sites/default/files/media/974396632_mrkxj-xl.jpg',
    serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque. Nam convallis sed orci sed sollicitudin.'
  });
  Services.insert({
    siteId: '123',
    domain: '123.servicebay.ca',
    serviceTitle: 'Oil Change',
    image: 'http://www.driftsafari.com/sites/default/files/media/974396632_mrkxj-xl.jpg',
    serviceDescription: 'Donec turpis est, sagittis vel gravida nec, condimentum non augue. Aenean at vulputate nulla. Maecenas at hendrerit turpis.'
  });
  Services.insert({
    siteId: '123',
    domain: '123.servicebay.ca',
    serviceTitle: 'Brake Check',
    image: 'http://www.driftsafari.com/sites/default/files/media/974396632_mrkxj-xl.jpg',
    serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque. Nam convallis sed orci sed sollicitudin.'
  });
  Services.insert({
    siteId: '123',
    domain: '123.servicebay.ca',
    serviceTitle: 'Alignment',
    image: 'http://www.driftsafari.com/sites/default/files/media/974396632_mrkxj-xl.jpg',
    serviceDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque. Nam convallis sed orci sed sollicitudin.'
  });
}

if (Site.find().count() === 0) {
  Site.insert({
    siteId: '123',
    domain: '123.servicebay.ca',
    siteTheme: '1',
    siteTitle: 'ServiceBay Sample 123',
    homeIntro: 'Welcome Introduction...',
    servicesIntro: 'Services Introduction...',
    aboutIntro: 'About ServiceBay...',
    galleryIntro: 'Gallery Introduction...',
    contactIntro: 'Contact Introduction ...',
    companyAddress: '#123 - Anytown Road',
    companyCity: 'Cityville',
    companyState: 'BC',
    companyCountry: 'Canada',
    companyPhone: '604-555-1234',
    companyFax: '604-555-4321',
    companyEmail: 'test@servicebay.ca',
    companyFacebook: '',
    companyTwitter: 'bmx269',
    companyYelp: ''
  });
  Site.insert({
    siteId: '1',
    domain: 'servicebay.ca',
    siteTheme: '269',
    siteTitle: 'ServiceBay - Easy Auto Service Websites',
    homeIntro: 'Welcome to ServiceBay ...',
    featuresIntro: '<p>ServiceBay has many of the key features you will need to build a presence on the Internet, which is where your potential customers are looking for you. With setup and site configuration being handled, all you need to focus on is filling out your information, and choosing a design. We take you through all the steps with clear instructions, along with tips and tricks to make your website shine.</p>',
    aboutIntro: 'About ServiceBay Sample Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque. Nam convallis sed orci sed sollicitudin. Maecenas accumsan porta odio, ut mollis nulla rhoncus ac. Praesent rutrum felis ac tortor tincidunt, sed venenatis odio vulputate. Sed sagittis felis non nisl malesuada pretium. Donec turpis est, sagittis vel gravida nec, condimentum non augue. Aenean at vulputate nulla. Maecenas at hendrerit turpis. Nam tincidunt leo non lobortis aliquet. Vivamus consequat ligula sit amet ipsum viverra, quis mattis lacus fringilla. Curabitur lacinia porttitor urna a egestas. Nunc consectetur diam porttitor dui viverra, vitae sagittis metus adipiscing. Pellentesque mattis at dui nec suscipit. Mauris cursus arcu eu arcu congue, vitae hendrerit metus faucibus. Aenean rhoncus, velit id molestie convallis, lectus arcu aliquet lacus, placerat sodales orci dui ut odio.',
    storeIntro: 'Gallery Introduction Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque.',
    contactIntro: 'Contact Introduction Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque.',
    companyAddress: '#123 - Anytown Road',
    companyCity: 'Cityville',
    companyState: 'BC',
    companyCountry: 'Canada',
    companyPhone: '604-555-1234',
    companyFax: '604-555-4321',
    companyEmail: 'test@servicebay.ca',
    companyFacebook: '',
    companyTwitter: 'bmx269',
    companyYelp: ''
  });
    Site.insert({
      siteId: '123',
      domain: '127.0.0.1:3000',
        siteTheme: '1',
        siteTitle: 'ServiceBay Sample 123',
        homeIntro: 'Welcome Introduction...',
        servicesIntro: 'Services Introduction...',
        aboutIntro: 'About Company...',
        galleryIntro: 'Gallery Introduction...',
        contactIntro: 'Contact Introduction ...',
        companyAddress: '#123 - Anytown Road',
        companyCity: 'Cityville',
        companyState: 'BC',
        companyCountry: 'Canada',
        companyPhone: '604-555-1234',
        companyFax: '604-555-4321',
        companyEmail: 'test@servicebay.ca',
        companyFacebook: '',
        companyTwitter: 'bmx269',
        companyYelp: ''
      });
    Site.insert({
      siteId: '1',
      domain: 'localhost:3000',
      siteTheme: '269',
       siteTitle: 'ServiceBay - Easy Websites',
       homeIntro: 'Welcome to ServiceBay ...',
       featuresIntro: '<p>ServiceBay has many of the key features you will need to build a presence on the Internet, which is where your potential customers are looking for you. With setup and site configuration being handled, all you need to focus on is filling out your information, and choosing a design. We take you through all the steps with clear instructions, along with tips and tricks to make your website shine.</p>',
       aboutIntro: 'About ServiceBay Sample Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque. Nam convallis sed orci sed sollicitudin. Maecenas accumsan porta odio, ut mollis nulla rhoncus ac. Praesent rutrum felis ac tortor tincidunt, sed venenatis odio vulputate. Sed sagittis felis non nisl malesuada pretium. Donec turpis est, sagittis vel gravida nec, condimentum non augue. Aenean at vulputate nulla. Maecenas at hendrerit turpis. Nam tincidunt leo non lobortis aliquet. Vivamus consequat ligula sit amet ipsum viverra, quis mattis lacus fringilla. Curabitur lacinia porttitor urna a egestas. Nunc consectetur diam porttitor dui viverra, vitae sagittis metus adipiscing. Pellentesque mattis at dui nec suscipit. Mauris cursus arcu eu arcu congue, vitae hendrerit metus faucibus. Aenean rhoncus, velit id molestie convallis, lectus arcu aliquet lacus, placerat sodales orci dui ut odio.',
       storeIntro: 'Gallery Introduction Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque.',
       contactIntro: 'Contact Introduction Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut dui ut nunc lacinia rhoncus at venenatis purus. Integer lorem tortor, vestibulum nec quam ac, aliquet lacinia neque.',
       companyAddress: '#123 - Anytown Road',
       companyCity: 'Cityville',
       companyState: 'BC',
       companyCountry: 'Canada',
       companyPhone: '604-555-1234',
       companyFax: '604-555-4321',
       companyEmail: 'test@servicebay.ca',
       companyFacebook: '',
       companyTwitter: 'bmx269',
       companyYelp: ''
    });
}
