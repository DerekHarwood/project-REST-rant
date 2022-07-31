const db = require('../models')

db.Place.create([{
    name: 'Finnegans Pub',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Irish Cuisine, Beer',
    pic: '/images/Finnegans-Pub.jpg',
    founded: 1989
}, {
    name: 'Cozy Bean Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/Cozy-Bean-Cafe.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})

