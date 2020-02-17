# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Constellation.create([
    {name: "Ursa Major", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/ursa-major.jpg"},
    {name: "Ursa Minor", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/ursa-minor.jpg"},
    {name: "Carina", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/carina.jpg"},
    {name: "Centaurus", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/centaurus.jpg"},
    {name: "Crux", image:"/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/crux.jpg"}
])

User.create([
    {username: "Billie"},
    {username: "Nugget"}
])

Observation.create([
    {location: "Los Angeles, CA", clarity: 6, constellation_id: 1, user_id: 1},
    {location: "Seattle, WA", clarity: 7, constellation_id: 2, user_id: 2}
])