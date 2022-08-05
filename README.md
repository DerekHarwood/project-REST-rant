# Project REST-Rant

REST-Rant is an app where users can review restaurants.

Tech Used
CSS Framework: Bootstrap
MongoDB, Express, NodeJS
Node Modules: method-override, dotenv, express-react-views

Method_______________ Path ________________________Purpose
GET__________________ / ___________________________The home page.
GET__________________ /places______________________Index page listing all the places.
GET__________________ /places/new__________________New form for a new place.
POST_________________ /places______________________Create a new place.
GET__________________ /places/:id__________________Show one place in detail.
GET__________________ /places/:id/edit_____________	Edit form for a place.
PUT__________________ /places/:id__________________Make changes to existing place.
DELETE_______________ /places/:id__________________Delete a place.
POST_________________ /places/:id/rant_____________Add rant to a place.
DELETE_______________ /places/:id/rant/:rantId_____Delete a rant.
