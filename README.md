## Installation
`npm install`
- You must have Expo and React Native to be able to run this application!

## Project Breakdown
- These project contains two main components. The Car vision scanner `car_counter` and the React Native app "SlugSpot" in the `ParkingTrackerApp` directory. 

## Car Scanner /  OpenCV application
- To run the OpenCV application `car_counter`, you must be on Python3 and have the [weights](https://drive.google.com/file/d/1zSWql3ZrDdOr9AnOSTTQ3Rf8mVle9RDx/view?usp=sharing) file installed, which should be placed under the `dnn_model` directory. To be able to run the project, you can simulate two parking areas at UCSC by running `python3 EastRemote.py` or `python3 WestRemote.py` on different machines!

## React Native App
- To run the main UI interface "SlugSpot", you must be under the `ParkingTrackerApp` directory. You can run the application by doing `npx export run`. Our main component `App.js` is responsible for rendering all the subcomponents with proper state management.
- Additionally, we have created additional service.js files for ease of data retrieval from Firebase. Feel free to add your own data and make your own requests by calling these files `FirebaseService.js` and `parkingDataConversion.js`. (Very scalabale as we used the same file for both our Main Page and Graph data retrieval!)
- You can run the app by doing `npx expo start`


## Inspiration. 
Many of us have experienced the frustration of driving for hours, only to find that there's no available parking. This issue is particularly acute on campus during busy periods, such as class times, making parking a challenge. For those living off-campus and relying solely on driving to fulfill their commitments, this often leads to tardiness due to the scarcity of accessible parking spots. Moreover, there is an absence of mobile solutions in most cities to update drivers on parking garage availability. This is leading to traffic congestion, contributing to unnecessary fuel consumption and heightened driver irritation. The endeavor to ease this process inspired us to create SlugSpot.  
  
## What it does. 
SlugSpot tracks real-time availability in parking garages near your destination, delivering instant updates directly to your phone. The app also analyzes parking patterns to recommend the best times for hassle-free parking allowing you to arrive at your destination on time.  
  
## How we built it. 
SlugSpot calculates the number of parking spots available through images captured on a video camera. To develop SlugSpot, we used React-Native to build our user interface and FireBase to create our database and backend. We built our car detection software using open-cv. In order to observe the output of our application, we used Expo Go. Figma served as our go-to way to create our designs and GitHub was our main resource to store and share files.    
  
## Challenges we ran into.  
Creating an API that would communicate between Firebase and our programs is the most challenging part of our project. Our project utilizes several different languages that each require different methods of query to access the data. Creating a React Native app was a first for all of us and posed its own challenges.  
  
## Accomplishments that we're proud of. 
We are very proud of how we managed to ensure scalability if we wanted to continue this project after the hackathon, and we feel our efforts rewarded us with a very developed and professional full-stack project that could benefit our community.  
  
## What we learned. 
Through the course of this project, our team learned a whole new language in the form of React-Native. React-Native is a framework that allows you to build mobile applications natively across multiple platforms. Learning React-Native was a challenge. Furthermore, collaborating through git and Liveshare on VScode presented its own challenges. We spent a lot of time learning workflow prioritizing to ensure that when each member finished, we could integrate our programs together quickly and without pain. Through a lot of research and collective debugging, we were able to tie a lot of different programs together and create a project we are proud of.  
  
## What's next for Slug Spot. 
Sleep, and then we’ve already discussed creating our own hardware for real-world testing around campus. This would be a camera microcomputer machine that we could mount in several parking lots. This would involve purchasing equipment, designing parts, and a lot more experimentation than what we have done so far.

***Disclaimer***
- Due to technical difficulties, our original branch with our code had been deleted due to trying to migrate a non-main branch to become the NEW main. We decided to restore our old branch (as we had multiple backups) and successfully retrieved the project. We apologize for any confusion!

Made by:
- Zahra (ML Engineer, Front-end, UI/UX)
- Rylee (Front-end, UI/UX, Back-end)
- Animesh (API Integration, Back-end, Data Analytics)
- Merrick (API Integration, Back-End, Data Anlaytics, ML Engineer)
