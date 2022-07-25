const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Finnegans Pub',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Irish Cuisine, Beer',
        pic: '/images/Finnegans-Pub.jpg'
      }, {
        name: 'Cozy Bean Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/Cozy-Bean-Cafe.jpg'
      }]      
      res.render('places/index', { places })
})

module.exports = router
