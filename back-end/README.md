

An application that lists shops nearby and display the preferred shops list based in user preference, built with React, Redux, NodeJS, Express, Html and CSS

## Routes

* [/signup]() `POST`
* [/signin]() `POST`
* [/shops/preferredSops]() `GET`
* [/shops/nearbyShops]() `GET`
* [/shops/:id/like]() `POST`
* [/shops/:id/dislike]() `POST`
* [/shops/:id/remove]() `DELETE`

## Installation 

To work, you need to couple this with [Front-End](https://github.com/smiletondi/HF_frontEnd)

### Prerequisites

You need to [Download & Install Node.js](https://www.guru99.com/download-install-node-js.html).
Also an active internet connection is required to import CDNs.

###  Setup Instructions

Clone down this repository or download it.
Go to each folder (front-end and back-end) in your terminal and type the following commands:

Installation:

`npm install`  

To Start the Servers:

`npm start`  

To Visit the App:

`localhost:3000`  

## Reflection

This was a project built during my application at United Remote. Project goals included using technologies i wanted and familiarizing myself with documentation for new features.  

I started the building process by using `express-generator` to create an application skeleton for the back-end. Then i refractor the code to use the Serverless Framework.

Due to the absence of time constraints, I had to meticulously choose the technologies and test them before implementation in the project.


## Built With

* [NodeJS](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [The Serverless Framework](https://serverless.com/)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [cookie-parser](https://www.npmjs.com/package/cookie-parser)
* [cors](https://www.npmjs.com/package/cors)
* [express-validator](https://express-validator.github.io/)
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
* [mongoose](https://mongoosejs.com/)
* [morgan](https://www.npmjs.com/package/morgan)
* [nodemon](https://nodemon.io/)
* [serverless-http](https://github.com/dougmoscrop/serverless-http)

## Authors

* **Tondi Ismael** - *Initial work* - [smiletondi](https://twitter.com/smiletondi)