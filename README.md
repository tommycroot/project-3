# Project 3: HAGL - Online Marketplace 

## Description

This project was our third and first full stack project of the General Assembly Software Engineering Immersive Course.  This was a group project carried out in groups of three and lasted one week. We chose to create an online marketplace called Hagl that allowed users to swap stuff they no longer need with each other.

![2023-05-05 (24)](https://user-images.githubusercontent.com/80596226/236505468-4170f528-d271-4870-a516-a3fdba9b7be0.png)

![2023-05-05 (25)](https://user-images.githubusercontent.com/80596226/236505715-31c46c07-bbef-491e-8be2-d86b3489a84b.png)

## Deployment Link

The app is deployed [here](http://haglproject.herokuapp.com/)

## Getting Started/Code Installation

* Clone or download the repo
* In the project root install the all of the project dependencies with npm install
* Run mongod –dbpath ~/data/db if you are using MacOS Catalina. Otherwise run mongod
* npm run seed for seeding
* npm run serve to run back-end
* Npm run start to run front-end
* Log in with any of the usernames already in the database with ‘name’@email.com & password: pass

## Timeframe & Working Team

This project was done in a group of four and was completed over seven days. My partners on this project were Jack Lungu and Simon Davis. 

* Jack's [GitHub](https://github.com/JackL-1/)

* Simon's [GitHub](https://github.com/sjdnz93/) 

## Technologies Used

```
Express
Node.js
Mongoose
MongoDB
Axios
React.js
JSX
CSS
SASS
Bootstrap
Git
GitHub
Excalidraw
```

## Brief

* Build a full-stack application by making your own back-end and front-end
* Use an express API to serve your data from a Mongo database
* Consume your API with a separate front-end built with React
* Be a complete product with multiple relationships and CRUD functionality for at least a couple of models
* Implement thoughtful user stories/wireframes 
* Have a visually impressive design
* Be deployed online

## Planning

Our first stage of planning was deciding what app we wanted to create. We decided on the idea of a marketplace app where users can swap their used items with each other. We wanted to challenge ourselves with functionality not covered in class and felt that developing code that allowed the swapping of items between users was an intriguing puzzle for us to solve.

We created a wireframe on Excalidraw and looked at sites like eBay to gain some inspiration in terms of design and interactivity. Our wireframe outlined the pages we needed, what functionality they required and how they were going to link together.

![2023-05-05 (26)](https://user-images.githubusercontent.com/80596226/236507953-8340c2b5-d503-4bcb-8914-69b8ad1e7168.png)

![2023-05-05 (27)](https://user-images.githubusercontent.com/80596226/236507755-61fa6773-817e-4e80-a00f-37cd91e5cc2c.png)

![2023-05-05 (28)](https://user-images.githubusercontent.com/80596226/236508357-eead1073-ffb4-4ef2-bd40-9fd7a18db6b7.png)

![2023-05-05 (30)](https://user-images.githubusercontent.com/80596226/236508936-f975934d-7dfe-4f9a-8696-f4cb9c031832.png)


We also created a shared Google Doc which allowed us to go into more detail about what code needed to be written. We typically highlighted a task in green once it was completed. 

![2023-05-05 (31)](https://user-images.githubusercontent.com/80596226/236509290-06a1175d-7c3e-4c36-81cd-bb4a3e834215.png)
![2023-05-05 (32)](https://user-images.githubusercontent.com/80596226/236509395-18099048-65a4-42d9-bed4-c2e582321c34.png)

At times, we used the Google Doc to pseudo code as seen below. As well as this, at times we would plan out what tasks needed to be completed for a section of the site and delegate tasks.

![2023-05-05 (33)](https://user-images.githubusercontent.com/80596226/236509717-70ccaaa6-1c1a-4c9d-b73d-250ed98cd480.png)

We also used this document to plan out what we aimed to complete on a particular day, which you can see below:

![2023-05-05 (34)](https://user-images.githubusercontent.com/80596226/236510399-16070dc0-42bd-4e00-85cc-a937844f4ec1.png)

We would meet early every morning, discuss what needed to be completed and how best to tackle the day. 

## Build/Code Process

### Back-end:


The first thing we tackled was developing the back-end. We felt like if this was completed it would hopefully make implementing the front-end easier. Whilst my teammates worked on seeding and creating the user and item models,  I set out creating the router and working on the login and register controllers. A user needs to be authorised to perform CRUD tasks, so I made a secure route to check that they are correctly authorised and that they would be routed to it first before being able to perform those tasks. I had a bit of time left over so I began developing our error handling. My teammates then began working on the controllers for the items, profiles and ratings whilst I worked on the messaging controller and made an item put request for the items controllers. 

![2023-05-05 (35)](https://user-images.githubusercontent.com/80596226/236518513-cbdaea55-761a-410c-86a6-f33cd1a965b4.png)

By salting the password with bCrypt and validating that the ‘password’ and the ‘confirm password’ fields both match, the user is securely authorised to the home page. 

![2023-05-05 (36)](https://user-images.githubusercontent.com/80596226/236518800-b12506d6-639f-4b67-b51a-43e8a7b1dec5.png)

Only after the server has checked that the body of a post request is properly entered can a user register. The user is checked to see if they are a validated user in the database before logging in.

![2023-05-05 (37)](https://user-images.githubusercontent.com/80596226/236519085-d234307f-4e5b-4275-a6f3-63f3d3493d8a.png)

The secure route checks if the user has the correct headers for authorization and whether or not the token was created by us. It also sets the token to the authorization header. Json Web Tokens were used for security in this project. 

![2023-05-05 (38)](https://user-images.githubusercontent.com/80596226/236519379-6825bf2b-3df3-405b-a87e-1a89becff484.png)

The above screenshot shows the controllers for messages. In both cases, firstly, the item is searched for in the database by id. For the post request, the messages are pushed to the messages array within the item object. The deleteOne() mongoose method was called on the item in the case of the delete item function.

### Front-end:

On the front-end we worked on individual pages and also collaborated a lot by screen sharing and working on a specific problem when one of us got stuck. As I had worked on the register, log in and messaging controllers on the back-end, it made sense that I worked on those pages and the authentication on the front-end too. I created the forms to register, log in, add a new item and message.

![2023-05-05 (39)](https://user-images.githubusercontent.com/80596226/236519705-e5f0ba04-3478-46b8-8149-a618c65f9ca4.png)

An example of one of the forms I created that were stylised with Bootstrap.

![2023-05-05 (40)](https://user-images.githubusercontent.com/80596226/236520111-f53854ff-e19e-4d33-b7db-71c60d3276c3.png)

For the login page I used useState in React to set the form fields to what the user has typed. The token for authorization is set in the header at the submitting stage and the user then navigates to the home page.

![2023-05-05 (41)](https://user-images.githubusercontent.com/80596226/236520520-3ab18b2b-2970-4de7-a09c-f983a4f2d02e.png)

This is a snippet of the authentication page. The token is split so we only get the part of the payload needed for parsing. The payload.exp is set to last 7 days so this is checked against the current time before authentication is granted. 

![2023-05-05 (42)](https://user-images.githubusercontent.com/80596226/236520824-e11ad9a0-c286-4e11-bc5c-48ec66f9a732.png)

This is a snippet of code from the item edit page. It uses imports from the authentication page to check that the user is permitted to edit the item. There is useState again used on the form fields which takes place inside of a useEffect function. The useEffect makes sure that the item is automatically updated without refreshing the page. If the user is authenticated then a put request to the server is made. 

![2023-05-05 (44)](https://user-images.githubusercontent.com/80596226/236521264-9dbfd67f-a187-4beb-9ff9-f9b8f107901e.png)



The message form uses window.alert for an extra layer of protection in case a user changes their mind. A post request to axios with their message text attached is then made to the server. Again, useState was used to set the form fields to the text of the message the user is typing and the URL of the item they propose to swap. If what is entered matches the requirements of the user schema then the attempt at sending the message will be successful. 

![2023-05-05 (43)](https://user-images.githubusercontent.com/80596226/236521035-f58ce2c1-e7a9-423d-9b6c-4077b9f9a18d.png)

This is the finished Edit Item page. All of the information about the item is already there so the user can choose what they want to edit without having to retype any item info. 

Whenever I got stuck, my teammates were always there to help solve the problem with me and vice versa. We were constantly talking to each other throughout the day and updating each other on how things were going. We were also repeatedly pushing and pulling our work to avoid merge conflicts and see the site come to life. We decided to go with a rather minimalist approach to the styling so it looked clean and professional. We used Bootstrap to help style a lot of our pages, including the cards and forms. 

## Challenges

Our biggest enemy on the project was time. We would have loved more time to stylise our website, but we decided to focus on adding more functionality instead. I think our time management could have been improved to allow time for that. We may have been able to find more time if we had fleshed out our wireframes diagrams more and pseudo coded some of our trickier functions. We were too eager to get started, perhaps.  Sometimes we found knowing what variables to put into the dependency array for useEffect to be quite tricky, as well as using setState, but we worked well together to get around these issues. We found ourselves using console.log on every line and joined in a big cheer once we achieved something or discovered a big clue. 

The biggest technical challenge we faced on this project was solving the problem of logging out and logging back in as a user on the front end. The issue was the token being sent was still showing the previously logged in user until a refresh was made. We needed the config options in this axios instance to change whenever the token in localStorage changes. Originally, this wasn’t happening. We discovered that when the profile component in React was mounted the imported authenticated variable had the stored value for the token of the previous user in memory. The value of the token in localStorage would only change when we reloaded the resources (refresh/send new http request.) 

We solved this by using interceptors to listen for a request being made so we could update the config headers with the correct token before it was sent. The interceptors intercept a request before it’s sent. It provides a use method that takes a custom callback function in which we could update the config headers. We added the Authorization header with the correct token to the request before each request is made. 

![2023-05-05 (45)](https://user-images.githubusercontent.com/80596226/236521617-61a4f191-341f-4fef-b94a-9811485d7cf7.png)

Anything that needs to be changed before each request needs to be added to the interceptor callback, in this case authenticated. Next, the interceptor callback is added by using the use method of the request interceptors. Inside of this is a standard callback function that returns the updated config object at the end. Now every time a request is sent, a callback function will execute just before and set the config headers based on what’s currently in the localStorage and not the old token in memory. 

## Wins

One of our biggest wins was getting the swap functionality working. We experienced a couple of excellent ‘Eureka!’ moments when we were working on this as a group. We collaborated together over one screen to work this out.

![2023-05-05 (47)](https://user-images.githubusercontent.com/80596226/236522337-88ce7393-4737-4b71-b55f-0851b2237a90.png)

This is an incredibly long function we’d like to refactor, but it handles the swapping of the items and the deletion of the messages. First a map method is used to check if the owner of the item has any messages. Then the messages array is mapped through and the split method is used to target the last part of the URL, which is also the id of the item proposed for a swap. If the trade is accepted and the accept button is clicked, the onClick function deletes the message and trades the items by sending a put request to the trade route on the back-end. 

![2023-05-05 (48)](https://user-images.githubusercontent.com/80596226/236523099-a9afff1b-7e1b-47a2-abf8-dab94d6baa00.png)

The swapping of items in the back-end involved setting an endpoint that took in both ids of the items proposed. Once the ids of the items and who their owner is found, the two users swap ownership of the items. This is achieved by updating both item documents with their new owners and then saving. 

![2023-05-05 (49)](https://user-images.githubusercontent.com/80596226/236523390-4781e78a-5fab-4037-9309-1059e29c0402.png)

Here you can see a swap proposal being made.

![2023-05-05 (50)](https://user-images.githubusercontent.com/80596226/236523547-1ec73662-78bc-4108-9b4c-5aab1e74d4ed.png)

This is what it looks like to the user receiving the swap request.

It was an incredible moment getting this working as it was one of our stretch goals and we were venturing into uncharted waters by attempting it.

Another great moment occurred on the last day of the project and that was when we got our ratings system implemented. All of our stretch goals were met once this was completed. Time was not on our side when we started building it, so it felt like a real achievement to finish it under pressure and deliver the project as we envisioned. 

## Key Learnings/Takeaways

This was my first time using Github with multiple people editing one repository and I am really pleased as to how smoothly it went after running into a couple of merge issues at the beginning of the project. We overcame this by ensuring that we merged our code together multiple times a day and as soon as possible after a big section of code had been implemented onto somebody’s branch. 

This project was also an exercise in project planning and expectation management for us. We planned very well and managed to pull off the scope that we wanted including our stretch goals, but we underestimated how much time to dedicate to styling and we were working right up until the deadline. We really wanted to implement animations to the CSS and make a more visually stunning website, but we had to shelve these ideas very quickly. 

The great thing about this project is that we learned how to tie the back-end and front-end together. I learned the importance of having flexibility built into the back-end as you will have to make adjustments to it as you build the front-end. Creating such large functions from scratch that involved useState and useEffect was a hugely beneficial learning experience for me personally. I felt like I had become much more comfortable using these hooks by the end of the project. In general, coming up with new ideas such as the trade functionality and writing our own code that actually achieved these goals was a brilliant experience. I really enjoyed the fact we were learning as we coded and this project has made me even more excited to join the industry now. Working with both Simon and Jack on this project was a really pleasurable experience. The biggest thing is I learned just how much fun you can have collaborating on a project. 

## Bugs

Although it’s not a “bug” in the traditional sense, we have employed the use of a reload of location which causes a page refresh, as we were having trouble getting the messages to display instantly. This is fine for our project, but we understand if we had a much larger site then this would not be ideal as it may require some loading time. We planned to go back and fix this, but unfortunately ran out of time.

Most of the bugs still existing in our project are cosmetic CSS issues that weren’t fixed due to time constraints as well. As a group, we decided to use our remaining time to focus on implementing what we had already built in the back-end and had ready to be implemented instead of allowing more time for styling. We plan to fix all of these styling issues post-course.

CSS Fixes:

* We have stylised our project for mobile devices, however the Nav Bar is a little bit wonky when the screen size is reduced. 
* Sometimes the title of an item on a card is too long and causes the size of the card to increase slightly, which means they are occasionally not uniform in size. 
* The profile page and messages to it need to be divided properly. As it stands, if there are a lot of message requests for an item swap then the space between rows of items increases slightly.
* The ratings drop down bar has very minimal styling right now.

## Future Improvements

We are so pleased that we managed to implement the swapping of items between users, but we would like to enhance this experience. It would be much better if there was a drop down of the user’s items to select for swapping instead of currently getting the user to post the URL of the item they wish to propose a trade for. Whilst trades for requests with URLs that don’t exist can’t be traded, the messages containing the nonsense link can still be posted. This would be eradicated with the implementation of the drop down functionality. 

We would also like to insert a search bar that allows a user to search for items they might be interested in and a categories section that grouped the items together by their genre. Another feature we would have loved to have built is the use of geolocation. Preferably, we would like to organise the items displayed on the home page by their closeness in location to the user. Finally, a ‘Delete All’ button on the front-end that allows a user to delete all of their trade request messages at once instead of individually deleting the items is something we would like to add as we have this completed in the back end.










