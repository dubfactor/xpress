<center>

### AUSTIN COMMUNITY COLLEGE 
#### Web Software Bootcamp 
###### January 2019 - August 2019

</center>

### Week 4 Projects - JavaScript

Instructions: Your task is to re-create from scratch the websites that you see from the screenshots. Each project is it’s own individual website which may have one or more pages. Detailed instructions for each project are listed below. Good luck!

## Project #1: Greetings

This project will not be a “real” website per se, but rather is meant to give you practice on how to think logically using JavaScript.

Create a index.html and script.js file. When the index.html page is opened, the user should be prompted with three pop boxes that ask the following questions:

* Please enter your name.
* What is your favorite snack?
* What is your favorite drink?

After the user inputs the data, a message should display on the page “Hi there _______, it seems that you enjoy eating _______ and drinking ________!”

The blanks should be filled with text that the user wrote.
Note: make the body of page have a font size of 96px to make it easier to see.

## Project #2: The Function

This project will not be a “real” website per se, but rather is meant to give you practice on how to think logically using JavaScript.

Create a index.html and script.js file. When the index.html page is opened, the user should be prompted with three pop boxes that ask the following questions:

* Tell me your name.
* Give me a number.
* Give me another number.

You will then need to create two functions in your script.js file. 

The first function takes the name and returns a sentence that says “You are going to have a wonderful day, _____.”

The second function should return another sentence that says “By the way, the sum of your numbers is _____.” The blank should be the sum total of the two numbers that were entered by the user.

Note: make the body of page have a font size of 96px to make it easier to see.

You should be familiar with the differences between strings and integers, and how to convert them from one to the other.

## Project #3: The Array

This project will not be a “real” website per se, but rather is meant to give you practice on how to think logically using JavaScript.

Create a index.html and script.js file. When the index.html page is opened, the user should be prompted with three pop boxes that ask the following questions:

* Give a number.
* Give a another number.
* Give a number again.

Then create a for loop that adds all the numbers together, and writes to the page “The sum of all of your numbers is
_____.”

## Project #4: Rotating Background

For this project we are going to build a single page website that has a rotating background image with some text splashed across it..


* The background image should rotate every 3 seconds. 
* The text should be 54px.
* The text should have a width of 900px.

In order to make the images rotate, you'll need to be familiar with JavaScript and how to:
* Work with functions
* Work with arrays, as well looping through them
* work with JavaScript DOM elements
* Use conditional statements
* Screenshot: https://imgtc.com/i/2YzC5k4.png

## Project #5: Image gallery

In this project, you’ll build a simple image gallery. When we press on the buttons, they will rotates through a set number of images.

The body of the page should:
* Use the same layout from JavaScript Project 2 (maybe in previous week), minus the previous image.
* Use the onClick attribute in HTML

With Javascript, you should:
* Use functions and know how to pass arguments into them
* Work with JavaScript DOM elements
* Use conditional statements
* Use an array to hold your images
* Screenshot: https://imgtc.com/i/JqjlpUu.png

## Project #6: The Clock

In this project, we'll build a beautiful clock that displays the time and changes background color every second.

The body of the page should:
*  Rotate through the following colors: '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B',
				  '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92',
				  '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E',
				  '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'

With JavaScript, you will:
*  need to use functions (and perhaps even have a function within a function)
*  need to use a new Date object to get the time
*  need to know how to get the seconds, minutes, and hour
*  need to know how to correct format the time
*  need to use conditional statements
*  need to know how to set interval to get the time every second
*  Screenshot: https://imgtc.com/i/pwMFrH5.png

## Project #7: Form Validator

In this project, you are going to build a simple form validator to make sure the user doesn't leave any blank fields on a form.

The form should:
*  Have an h1 that says Please enter your name and email to enter our raffle!"
*  Have two fields, an email field and password field.
*  A submit button
*  Screenshot: https://imgtc.com/i/zhmNXgS.png

Using JavaScript, you should:
*  Check to make sure that neither of the fields are blank.
* If either of the fields are blank, a pop up box appears that says "Please check the fields and make sure they are not blank."

# Bonus Project #8: Analog Clock

### In this project, you are going to extend the clock in Project #6 to make it an analog clock.  A screengrab is included here in the Project8 folder.

The clock should:
*  Have hour, minute and seconds hand.  
*  The seconds hand should turn every second.  
*  The seconds hand should have a transition effect (you may try any, the demo in class shows cubic-bezier).  

If you get here and are ready for additional practice, please ask.


# Bonus Projects 9: Objects

## Project 9a: The Recipe Card

Never forget another recipe!

Create an object to hold information on your favorite recipe. It should have properties for a recipe title (a string), # of servings, and ingredients list (an array of strings).

On separate lines (one console.log statement for each), log the recipe information so it looks like:

### Mole

Serves: 2
Ingredients:
 * cinnamon
 * cumin
 * cocoa
 
### Project 9b: The Reading List

Keep track of which books you read and which books you want to read!

Create an array of JS objects, where each object describes a book and has properties for the book title, author (a string), and alreadyRead (a boolean).

Iterate through the array of books. For each book, log the book title and book author like so: 

### "The Hobbit by J.R.R. Tolkien".

Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'