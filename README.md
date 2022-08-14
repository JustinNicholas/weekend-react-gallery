Project Name:
Weekend React Gallery

Description:
Duration: Weekend (Aug 12th - 14th)

For this project I created a gallery page to share pictures.

Visitors can add to the gallery by inserting an image address and discription in the fields at the top of the page. Within the gallery, visitors can click on an image to see the description and use a button to like or remove an image. The total likes for each image is displayed within each image card.

The biggest problem I faced was making the website responsive. I was able to use the Bootstrap grid system to make the image cards responsive and I added a breakpoint for the header. At 645px screen size and below the font size of the header goes down to make sure none of the text is cut off. I also used absolut positioning for the buttons and certain divs to make sure the look of the website was maintained at all sizes. 

Screen Shot: [Screenshot of completed site](public/images/ReactGallery.png)

Prerequisites and Installation:

Node.js

Fork and Clone this repo

"npm install" in the termianl of this project

"npm run server" to start the server.

"npm run client" to start the client.

npm run client will automaticallt open http://localhost:3000/ in your browser

Create a database named react_gallery, The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, Open up your editor of choice and run an npm install

Usage of website:

-A user is able to type up to 300 characters in the URL input and 175 characters in the Description input. Clicking the plus button will submit a new entry to be added to the gallery.
-Users can like an image or delete an image on the image card.
-Users can click on an image and it will toggle the image with the description.

Built With:

React.js
Node.js
JSX
Bootstrap
PostgreSQL
Express.js
Axios
HTML
CSS
PG

Support: If you have suggestions or issues, please email me at nicholasj964@yahoo.com