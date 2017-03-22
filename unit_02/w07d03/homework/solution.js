/*### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.
*/
//### 1. Ultra E-mail App

//This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

var User = {
    id: Number,
    name: String,
    user_id: String,
    password: String
    email_accounts: [];
};

var Email_Account = {
    id: Number,
    email_address: String,
    password: String,
    provider: String,
    inbox: [];
    outbox: [];
    emails: [];
};

var Emails = {
    id: Number,
    sender: String,
    recipient: String,
    subject: String,
    message: String,
    timestamp: Date,
    readStatus: boolean
};

//Setting up Their Relationships

var User = {
    id: Number,
    name: String,
    user_id: String,
    password: String
    email_accounts: [{
              id: Number,
              email_address: String,
              password: String,
              provider: String,
              inbox: [];
              outbox: [];
              emails: [{
                id: Number,
                sender: String,
                recipient: String,
                subject: String,
                message: String,
                timestamp: Date,
                readStatus: boolean
            }];
      }];
  };


//### 2. Radio on the Internet app

//This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.
//Radio App
//Stations, playlists, songs

var Station {
    id: Number,
    name: String,
    numberOfListeners: Number,
    playlists: [],
    genre: [],
};

var Playlists {
    id: Number,
    name: String,
    songs: []
};

var Songs {
    id: Number,
    title: String,
    Artist: String,
    Duration: Number,
};

//Building Relationships

var Station {
    id: Number,
    name: String,
    numberOfListeners: Number,
    playlists: [{
                id: Number,
                name: String,
                songs: [{
                        id: Number,
                        title: String,
                        Artist: String,
                        Duration: Number,
                      }]
                  }],
};


//### 3. Rock Concert App

//This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

var User {
    id: Number,
    name: String,
    location: String,
    favoriteBands: [],
    recommendedShows: []
}
var Band {
    id: Number,
    name: String,
    genre: String,
    bio: String
    shows: []
}

var Shows {
    id: Number,
    date: Date,
    location: String,
    tickInfo: String,
    performers: String
    venue: String
}

//Defining Relationships

var User {
    id: Number,
    name: String,
    location: String,
    favoriteBands: [{
                id: Number,
                name: String,
                genre: String,
                bio: String
                shows: [{
                        id: Number,
                        date: Date,
                        location: String,
                        tickInfo: String,
                        performers: String
                        venue: String
                        }]
                }],
    recommendedShows: []
};


//### 4. Coffee To-Go App

//This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.

var User = {
    id: Number,
    name: String,
    location: String,
    cart: [],
    pastOrders: []
}

var Cart = {
    id: Number,
    coffeeShop: String,
    drinks: [],
    orderTotal: Number
}

var Drinks = {
    id: Number,
    name: String,
    size: String,
    price: Number,
    description: String
}
//Relationships

var User = {
    id: Number,
    name: String,
    location: String,
    cart: [{
          id: Number,
          coffeeShop: String,
          drinks: [{
                  id: Number,
                  name: String,
                  size: String,
                  price: Number,
                  description: String
              }],
          orderTotal: Number
      }],
    pastOrders: []
}


/*

### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.
*/
//Team-Tracker

var User = {
    id: Number,
    name: String,
    userName: String,
    teams: []
};
var Teams = {
    name: String,
    city: String,
    id: Numbers,
    stats: []
    players: []
};
var Players = {
    number: Number,
    id: Numbers,
    name: String
    stats: []
};

// Relationships

var User = {
    id: Number,
    name: String,
    userName: String,
    teams: [{
            name: String,
            city: String,
            id: Numbers,
            stats: []
            players: [{
                  number: Number,
                  id: Numbers,
                  name: String
                  stats: []
                      }]
            }]
};


/*

### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

We began listing long lists of attributes to list under different elements at first. We later began learning how to only pick attributes related to a Minimum Viable Product. Only the items needed to complete the processes that the instructions spell out did we then include. Because this builds to a NoSQL database, we wanted it to be less confusing.
*/