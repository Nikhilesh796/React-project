React Project:

->Pacakges that you need to know abbout before starting with the project
1.Parcel
2.Babel
3.Browsers-List

#In our project we are using the parcel beacause
-Dev build
-Local Server
-HMR - Hot Module Replacement[When we save thte changes they will automatically reflected in the browser]
-File Watching Algorithms - Written in C++
-caching - faster builds
-Image Optimization[parcel will do the image optimization which is an expensive task ]
-If we create a production build,the parcel will minify our files
-It`ll even bundle all the files(Bundling)
-Compressing
-consistent hashing
-code splitting
-differntial bundling-developed app can be opened in any browser with any version
-Error handling
-Https
-Tree Shaking - remove unused code for us
-different dev and production bundles

#The production build is optimized for performance and size. It minifies and optimizes the code, removing unnecessary parts such as development warnings and error messages. This results in a smaller, faster application that is ready for deployment.

#The development build for building and testing your app, and the production build for deploying a fast, optimized version of your app.

#Use the commands
-npm install //to get all the node_modules
-npx parcel index.html // to intialize development build
-npx parcel build index.html //to intialize production build
-npm run start //to run the project
(or)
-npm start
