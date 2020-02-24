# star-track app

## Usage
This is an application with a Rails API and JS frontend. 
The app is designed as a public data collector for observations of constellations.
A user can browse through constellations that are visible in the Northern Hemisphere.
A user can add observations through a form, browse through a specific constellations observations, and browse through all submitted data.


## Installation:

* You will need Postgresql and a postgres server to use this application

After cloning this repository,
```
cd star-track
cd star-track-api
bundle install
rails db:create
rails db:migrate
rails db:seed
rails s
```
Open star-track-frontend/index.html
