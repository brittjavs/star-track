# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Constellation.create([
    {name: "Andromeda", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/andromeda.jpg"},
    {name: "Aquila", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/aquila.jpg"},
    {name: "Aries", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/aries.jpg"},
    {name: "Auriga", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/auriga.jpg"},
    {name: "Bootes", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/bootes.jpg"},
    {name: "Camelopardalis", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/camelopardalis.jpg"},
    {name: "Cancer", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/cancer.jpg"},
    {name: "Canes Venatici", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/canes-venatici.jpg"},
    {name: "Canis Minor", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/canis-minor.jpg"},
    {name: "Cassiopeia", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/cassiopeia.jpg"},
    {name: "Cepheus", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/cepheus.jpg"},
    {name: "Coma Berenices", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/coma-berenices.jpg"},
    {name: "Corona Borealis", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/corona-borealis.jpg"},
    {name: "Cygnus", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/cygnus.jpg"},
    {name: "Delphinus", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/delphinus.jpg"},
    {name: "Draco", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/draco.jpg"},
    {name: "Equuleus", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/equuleus.jpg"},
    {name: "Gemini", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/gemini.jpg"},
    {name: "Hercules", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/hercules.jpg"},
    {name: "Lacerta", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/lacerta.jpg"},
    {name: "Leo Minor", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/leo-minor.jpg"},
    {name: "Leo", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/leo.jpg"},
    {name: "Lynx", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/lynx.jpg"},
    {name: "Lyra", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/lyra.jpg"},
    {name: "Monoceros", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/monoceros.jpg"},
    {name: "Orion", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/orion.jpg"},
    {name: "Pegasus", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/pegasus.jpg"},
    {name: "Perseus", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/perseus.jpg"},
    {name: "Pisces", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/pisces.jpg"},
    {name: "Sagittarius", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/sagittarius.jpg"},
    {name: "Serpens Caput", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/serpens-caput.jpg"},
    {name: "Taurus", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/taurus.jpg"},
    {name: "Triangulum", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/triangulum.jpg"},
    {name: "Ursa Major", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/ursa-major.jpg"},
    {name: "Ursa Minor", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/ursa-minor.jpg"},
    {name: "Vulpecula", image: "/Users/brittanyjavalera/Documents/Learn-co/star-track/star-track-frontend/assets/images/vulpecula.jpg"}
])

Observation.create([
    {location: "Los Angeles, CA", clarity: 6, constellation_id: 34},
    {location: "Seattle, WA", clarity: 7, constellation_id: 1},
    {location: "Kelso, CA", clarity: 10, constellation_id: 2},
    {location: "Portland, OR", clarity: 9, constellation_id: 27},
    {location: "New York, NY", clarity: 7, constellation_id: 4}
])