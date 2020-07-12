# React Gallery

## Description

_Duration: Weekend Project_

My first build with react and material UI.  This app allows a user to add photos with descriptions, the photos are displaed in a gallery below with their decriptions "behind" them. When clicked, the images are swapped with their description. A user can "like" or delete each photo by clicking the appropriate icon buttons. 

## Screen Shot

![Screenshot](images/GalleryScreenShot.png)

### Prerequisites

- [Node.js](https://nodejs.org/en/) 

## Installation


1. Create a database named `react_gallery`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly.  Feel free to add in the photos included, or to begin with a blank app and upload your own! The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Input a new photo with an absolute url and description
2. When satisfied with the url and description, click 'Submit'
3. like a photo by clicking the heart icon
4. delete a photo by clicking the trash icon
5. Display the description by clicking an image

## Built With

-   React
-   Axios
-   Material UI
-   Postgres
-   Express

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Special thanks to Dev, Mary, and all my parakeets in the Paxos Cohort! Bird Up!

