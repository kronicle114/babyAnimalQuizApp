# Baby Animal QuizApp
__Description:__ This is a simple quiz app that is not IE compatible. It uses HTML, CSS, and JavaScript/jQuery. I tried to make it as a11y compatible as possible.  

## Instructions:
1. Clone the repo to your local drive. 
2. Open `index.html` on your browser. 
3. Follow directions on the app and fill out the quiz. 

> Note: For keyboard users: use the tab, arrow, and enter keys to navigate. 

__Sources:__ 
- unsplash.com for the animal photos
- I made the icons
- gif from giphy.com
- I used [Catherine Lynn's backpacking quiz](https://repl.it/@Catherine_Lynn/backpacking-quiz-app) & [Evan Thompson's RuPaul quiz](https://repl.it/@Vlodnik/Completed-RuPaul-Quiz-App) as reference for HTML, CSS, & JS codes 

### Room for Improvement:
* Make it compatible for IE
* Fix images to fit the screen better. Something to do with inheriting the width of the parent div/container. (Not media query).
* In the buildQuizForm, please make a variable for the answer HTML and then loop over it to add relevant content rather than writing out the HTML four times.
* Please do something similar with the renderResults method so it doesn't have similarly structured HTML written out three times.
* ~~Please set a consistent width AND height for your images. The portrait ones can get super tall when they should all be uniform.~~
* ~~Your fieldset needs a legend! The legend should contain the prompt that the form controls in a fieldset are hoping to answer. What prompt is that in this app?~~
* ~~The submit button gets cut off on smaller screen sizes. Check the smallest we test, 320px wide.~~
* ~~The startQuiz method uses vanilla JS when the rest of the JS file uses jQuery when selecting elements. Please stick with one for best code practices.~~
