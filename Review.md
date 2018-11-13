# Review Questions

## What is Node.js?
-NodeJS is a javascript framework that allows the developer to use JavaScript on the backend to create servers. It also gives you access to npm packages as well as single thread async actions.

## What is Express?
-Express is a nodeJS framework that is light and unopinionated. This means that although it comes with some good features, you will have to locate others that you may want to use.

## Mention two parts of Express that you learned about this week.
-this week we learned about middleware and routing

## What is Middleware?
-middle can be either installed from NPM or custom and made by the developer as needed. It is an in-between function that can evaluate data and commit an action based on the evaluation if needed such as uppercasing letters from a user input.

## What is a Resource?
-Resource is any form of data that is being processed and used.

## What can the API return to help clients know if a request was successful?
-API can return 200 letting them know that everything was successful or 201 letting them know that the information was generated and created ok.

## How can we partition our application into sub-applications?
-You can create sub-routes by passing everything through each other and splitting your files apart. This causes your files to be smaller and more precise to what the actions and information they may hold.

## What is express.json() and why do we need it?
Express.json() is a middleware that tells express to convert all data that is sent back to the client as json formatted data.