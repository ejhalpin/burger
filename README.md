# story-chain

This homework illustrates proficiency with mysql, express, object relation models, and handlebars.

The assignment originally called for a burger naming and devouring app that would allow users to add a burger of their choice (stored in a database). The burger could then be devoured via button click, updating its devoured property in the database. The UI shows both uneaten and eaten burgers. Okay, kind of fun but mostly an exercise to show that I could make an app that will create and update entries in a database table.

## What story chain does

Story chain is an app with the same funcionality described above, but with a more sensible theme. The front end is pre-populated with a story beginning _(selected from the [Bulwer-Lytton](https://www.bulwer-lytton.com/) competition site which honors really bad writing)_ that users can then add to. The additions can be deleted and restored with a button click. The User can also append their name to their addition, if they choose.

## How it works

Story chain is a full stack app with a node server environment that utilizes express and an object relational model. The data store is a mySQL database (Jaws-BD) add-on. The site is hosted on Heroku.

For a more detailed view of the app structure, you can check out this [map](./story-chain-structure.png).
For a high level view of component communication, you can check out this [diagram](./story-chain-component-communication.png).

# Viewing the live site

You can visit the live site here. Please contribute to the story if you check it out.
