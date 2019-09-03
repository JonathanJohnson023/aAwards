​
## `Users`
column name     | data type | details
----------------|-----------|-----------------------
`id`              | integer   | not null, primary key
`username `       | string    | not null, indexed, unique
`password_digest` | string    | not null
`session_token`   | string    | not null, indexed, unique
`description`     | text      |
`job_role`        | string    |
`personal_url`    | string    |


## `Collections`
column name | data type | details
------------|-----------|---------
 `id`       | integer   | not null, primary key
 `title`    | string    | not null
 `body`     | text      | not null
 `user_id`  | integer   | not null
 

## `Jobs`
column name | data type | details
------------|-----------|---------
 `id`       | integer   | not null
 `title`    | string    | not null
 `body`     | text      | not null
 `location` | string    | not null


## `Talent`
column name     | data type | details
----------------|----------|---------
 `id`           | integer  | not null
 `user_id`      | integer  | not null

## `Apply Table`
column name |data type| details
------------|---------|---------
 `id`       | integer | not null
 `job_id`   | integer | not null
 `talent_id`| integer | not null


## `Website`
column name|data type| details
----------|----------|---------
 `id`     | integer  | not null
 `title`  | string   | not null
 `url`    | string   | not null
 `description` | text | not null
 `img_url` | string  | not null
 `user_id` | integer | not null
 `score_avg`| integer  | not null

## `Votes`
column name  | data type| details
-------------|----------|---------
 `id`        | integer  | not null
 `user_id`   | integer  | not null
 `website_id`| integer  | not null

## `Comments`
column name | data type | details
----------|----------|---------
 `id`     | integer  | not null
 `body`   | text     | not null
 `user_id`| integer  | not null
 `website_id`| integer  | not null
 
 
```js
 {
    entities: {
        users: {
            1: {
                id: 1,
                username: "JonJohn"
            },
            2: {
                id: 2,
                username: "Smiles"
            },
            3: {
                id:3,
                username:"Daniel"
            }
        },
        websites: {
            1: {
                title: 'aAwards',
                url: 'www.aAwards.com',
                description: "a clone of AAwards.com" ,
                img_url: null,
                user_id: 1,
                score_avg: 9.8 
            },
            2: { 
                title: 'aAopen',
                url: 'https://open.appacademy.io',
                description: "Daniels perferct work on aA open " ,
                img_url: null,
                user_id: 3,
                score_avg: 9.0 
            },
            votes:[user_id, user_id]
        },
        comments: {
            1: {
                body: "THIS IS AMAZING ",
                user_id: 2,
                website_id: 1 
            },
            2: {
                body: "JonJohns site is better" ,
                user_id: 2,
                website_id: 2
            }
        },
        collections:{
            1: {
                title: "Best Sites",
                body: "my collection of best sites",
                author: 1
                // most likely need an array of website IDs that a get request is ran on all of when someone clicks on the collection 
            },
            2: {
                title: "sites that make me chuckle" ,
                body: "all the webpages i get a laugh from (lets be honest thats everything )",
                author: 2
            }
        },
        jobs:{
            1: {
                title: "Front End Dev" ,
                body: "Fun work Enviroment looking for a Front end Dev to make them Dope CSS style sheets",
                location: "San Fransisco"
            },
            2: {
                title: "UX Dev" ,
                body: "Looking for a Dev that puts User Experince first" ,
                location: "My place"
            }
        },
        talent:{
            1: {
                user_id //displays user info
            },
            2: {
                user_id //displays user info
            }
        },
    },
    ui: {
        modalOpen: true,
        loading: true,
        waveForm: true
    },
    session: {
        currentUser: 2
    },
    errors: {
        userErrors: [],
        sessionErrors: [],
        playbackErrors: []
    }
}
```

# _**`Back-end Routes`**_

## `HTML`
* GET / StaticPagesController#root

**API Endpoints**

## `users`
* GET /api/users - returns the user information {name, descripton, etc}
* POST /api/users - sign up
  
## `session`
* POST /api/session - log in
* DELETE /api/session - log out
  
## `Collections`
* GET  /api/users/:user_id/collections - gets all the collections for a user
* GET  /api/users/:user_id/collections/:id - gets an exact collection
* POST /api/users/:user_id/collections - create a collection
* PATCH /api/users/:user_id/collections - updates collection info
* DELETE /api/users/:user_id/collections - remove a collection
  
## `Websites`
* GET /api/websites - returns relevant websites (filtered by data/params)
* GET /api/websites/:id - returns website
* POST /api/websites - creates a website
* PATCH /api/websites/:id - edit a website
* DELETE /api/websites/:id - remove a website
  
## `Votes`
* GET  /api/website/:website_id/votes - gets all the votes for a website
* POST /api/website/:website_id/votes - vote on a website
* PATCH /api/website/:website_id/votes - updates vote
* DELETE /api/website/:website_id/votes - remove a vote
  
## `Comments`
* GET  /api/website/:website_id/comments - gets all the comments for a website
* POST /api/website/:website_id/comments - comment on a website
* PATCH /api/website/:website_id/comments - updates comment
* DELETE /api/website/:website_id/comments - remove a comment
  
## `Talent`
* POST /api/user/:user_id - it will display the users name and info under the talent section if they choose to 
* DELETE /api/user/:user_id - will remove the user from job listings 
  
## `Jobs`
* GET /api/jobs - gets all the job offers 
* GET /api/jobs/:id - displays an exact job listing 
* POST /api/jobs - adds a job listing 
* PATCH /api/jobs/:id - update a job listing 
* DELETE /api/jobs/:id - remove a job listing 



# _**`Front-end Routes`**_

Our components are organized as follows:


* Root
  * App
    * NavBar
    * (main component goes here)
    * Footer

The following routes, defined in App, will render components between NavBar and Footer.

* /
  * Home
    * WebsiteIndex // with highest scores
* /login
  * SessionForm
* /signup
  * UserForm
* /winners
  * WebsiteIndex
    * WebsiteIndexItem // WebsiteShow
* /users/:userId
  * ProfilePage
  * CollectionsIndex
    * WebsiteIndexItem // WebsiteShow
* /jobs/new
  * jobForm
* /jobs/:jobId
  * jobShow
* /jobs/:jobId/edit
  * jobForm







//do i need a nested app in root 
//how should my state look 
//how should my front end routes look 
//am i in over my head 
//how should i do jobs && talent 
//what information should i store 
