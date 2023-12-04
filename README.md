<div align="center">
  <img src="frontend/src/logo/logo.png">
</div>

<h1 align="center">Meet the Team</h1>

<!-- Meet the Team -->

<div align="center">
<kbd>

## devvaru
**FULL STACK SOFTWARE DEVELOPER**
<br><br>
<span>
  <a href="https://linkedin.com/in/devon-g-b627872a1/" target="_blank"><img src="https://skillicons.dev/icons?i=linkedin"></a>
</span>
<span>
  <a href="https://github.com/devvaru/" target="_blank"><img src="https://skillicons.dev/icons?i=github"></a>
</span>
</kbd>
</div>

<br>

<div align="center">
<kbd>

## shivangi0109
**FULL STACK SOFTWARE DEVELOPER**
<br><br>
<span>
  <a href="https://linkedin.com/in/shivangi-srivastava-390135180/" target="_blank"><img src="https://skillicons.dev/icons?i=linkedin"></a>
</span>
<span>
  <a href="https://github.com/shivangi0109/" target="_blank"><img src="https://skillicons.dev/icons?i=github"></a>
</span>
</kbd>
</div>

<br>

<div align="center">
<kbd>

## kazvee
**FULL STACK SOFTWARE DEVELOPER**
<br><br>
<span>
  <a href="https://linkedin.com/in/kazvee/" target="_blank"><img src="https://skillicons.dev/icons?i=linkedin"></a>
</span>
<span>
  <a href="https://github.com/kazvee/" target="_blank"><img src="https://skillicons.dev/icons?i=github"></a>
</span>
</kbd>
</div>

*** 

# ✨ [Live Demo](pawtrackr.netlify.app/) ✨

**Please note:** The app goes into "sleep" (idle) mode to conserve resources when inactive.\
If you're the first visitor in a while, the first launch may take a few extra seconds to load, but subsequent launches will be much quicker! ⚡

**Add a Pet:** Feel free to copy & paste one of the lines below into the `image` field of the new pet form, to have the newly-added pet display with a photo! 🖼️  
`images/angora.jpg`  
`images/cat.jpg`  
`images/chocolate_lab.jpg`  
`images/collie.jpg`  
`images/dachshund.jpg`  
`images/dog.jpg`  
`images/frog.jpg`  
`images/parakeet.jpg`  
`images/shepherd.jpg`  
`images/shire_horse.jpg`  
`images/tabby_cat.jpg`  
`images/tortoise.jpg`  

Example:\
![Add New Pet Photo Field Screnshot](planning/readme_images/Add_New_Pet_Image.png)

## PawTrackr - [Planning Board](https://github.com/users/Devvaru/projects/1)

PawTrackr is a full stack app that enables pet owners to track all their pets' info in a central place.

<!-- ## Final Product -->

<!-- [ Demo Video ] -->

<!-- [ Screenshots ] -->



## Project ERD (Entity Relationship Diagram)

<!-- A link to the ERD with dynamic highlighting of table relationships is available [HERE](https://dbdocs.io/**TBC**/**Filename-TBC**?view=relationships) -->

!["Screenshot of ERD"](/planning/PawTrackr-ERD.png)

## Purpose

This project was created, designed, and built by:
* [devvaru](https://github.com/Devvaru)
* [shivangi0109](https://github.com/shivangi0109)
* [kazvee](https://github.com/kazvee)

for our Final Project at [Lighthouse Labs](https://www.lighthouselabs.ca/en/web-development-flex-program)

### Project Goals

While working to build this project to successful completion, we:

* Built an application from start to finish using a tech stack of our choosing
* Designed and architected a complete application
* Leveraged all of the skills and knowledge learned to date
* Created functional requirements, user stories, ERD, and wireframes
<!-- * Stretch: Deploy the application to the cloud -->

### Project Outcomes & Learning Achievements

* Worked efficiently as a team
* Leveraged code sharing and carried out code reviews
* Collaborated effectively to deliver a product by the deadline
* Built a complete Project to add to our portfolio
* Learned a new library
<!-- * Learned a new framework/library/tech stack/language -->

## Dependencies

* [React](https://react.dev/)
* [react-bootstrap](https://react-bootstrap.netlify.app/)
* [Express](https://expressjs.com)
* [Node.js](https://nodejs.org/)
* [node-postgres](https://node-postgres.com/)
* [SASS](https://www.npmjs.com/package/sass)
* [Babel](https://babeljs.io/)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [Axios](https://www.npmjs.com/package/axios/)
* [Morgan](https://www.npmjs.com/package/morgan/)
* [dotenv](https://www.npmjs.com/package/dotenv/)

## A note about `create-react-app`

For larger-scale production-ready applications with enhanced customization, React's official documentation and best practices now recommend other ways to [Start a New React Project](https://react.dev/learn/start-a-new-react-project)

Since this was a project for educational purposes, it has been bootstrapped with [Create React App](https://github.com/facebook/create-react-app) which provided a straightforward way to get a functional React app up and running quickly.

## Installation

### Getting Started

* Fork this repository to your own GitHub account
* Clone your fork to your local device

### Set up Frontend & Backend

* From within the project root folder, install all dependencies with `npm i` (or `npm install`), in the `/frontend` and `/backend` folders

### Set Up Database

* In a terminal window, connect to your PostgreSQL environment using the `psql` command and your login credentials
  * In some environments, the `startpostgres` command may need to be run beforehand
* Create a new database using the `CREATE DATABASE pawtrackr;` command, where 'pawtrackr' is the name you want to call this new DB
* Connect to the new database with the `\c pawtrackr` command, where 'pawtrackr' is whichever name you chose for your new DB in the the previous step

### Set up DB Tables

* Within `psql`, set up database tables by running the migrations file with `\i backend/src/db/schema/create.sql`.
* To verify the tables have been created, run command `\dt` and you should see tables named: `users`, `pets`, `reminders`, and `contacts`.

### Add Data to Tables

* Within `psql`, run the seed file with `\i backend/src/db/schema/seeds.sql`.
* To confirm that your tables have been populated with data, run command `SELECT * FROM users;` (or any of the table names) and you should see some data displayed.
* You can now exit postgres by typing `\q` to return to your command line.

### Add Database Credentials to **dotenv** file (`.env`)

* Using the provided `.env.example` file as a template, create a new `.env` file in the same folder.
* Add your database name, username, and password.
* **Note:** If running the app locally, the `DB_HOST` would be `localhost`, and for PostgreSQL the `DB_PORT` will usually be `5432`.
* For security reasons, the `.env` file has been added to the `.gitignore` file, so these sensitive details will not accidentally be published to GitHub.
  
### Start the App

* Connect to the database server from the root folder by using the `psql` command and your database credentials
* Start the backend by running the `npm start` command from within the `/backend` folder. The API server will run on Port 8080
* Start the frontend side using the `npm start` command from within the `/frontend` folder. The client will run on Port 3000
* Navigate to [http://localhost:3000](http://localhost:3000) in your browser

## Acknowledgements & Thanks

* Photos provided by [Pexels](https://www.pexels.com/)
