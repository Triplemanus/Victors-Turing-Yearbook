# Turing Yearbook

This application is a sample Yearbook for students and staff at Turing Schools of Software & Design. The application displays 
images, a quote and a superlative for each student and staff member. It also provides the ability to delete and entry and add a new entry for students only.

### Set Up



### Expectations / Rules

Build a React App that displays Turing front-end staff!

![turing yearbook screenshot](https://raw.githubusercontent.com/turingschool-examples/yearbook/master/screenshot.png)

We want to see good commit habits - atomic commits that log small, focused changesets.


### Iteration 0

Get set up (per the instructions above)!

We've provided a boilerplate for you to work with. Look through the file structure to get a sense of the app.

Notice that we have multiple stylesheets - one for each component. You are welcome to style this application however you'd like. We got you started with a little styling, but feel free to get creative. (Remember, though - most of your energy should be spent on learning React, not styling.)

### Iteration 1

Create a Cohort component, which will act as a container that renders each of our Person cards. For now, the Cohort being displayed will be "Staff". Figure out how to pass information from `App.js` to `Cohort.js`!

Then create a Person component. Each Person card will display: the image, the name, the quote, and the superlative (see the screenshot above for an idea).

In your Cohort component, create Person cards that have the information each needs to display properly.

### Iteration 2

In the `yearbook-data.js` file, un-comment-out the "students" information. Get that information displaying, too. How can you reuse components?

Then create a controlled component that allows a user to add a new student.

### Iteration 3 (extension - do not attempt until iterations 0 - 2 are completed)

Add in the functionality so that a user can click and edit a student's information.  A user should be able to update the name, quote, and superlative.  

Lastly, add a delete button on each card that allowers a user to remove students that are no longer attending.

### Iteration 4 (extension - do not attempt until iterations 0 - 3 are completed)

Test all of your components.  This not only includes snapshot tests, but also all of your methods and changes in state.
