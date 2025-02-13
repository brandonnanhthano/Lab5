

## Getting Started

To use this website clone the repository and go into the assessment files folder. In there go to the html file and live preview the website from there.

## Development

It is recommended to use the VSCode Live Server extension to run the project
locally. This will allow you to see changes in real-time as you make them. There
is no need to run a build process or refresh the page manually. Additionally,
you do not need to setup a local server to run the project.

## Testing

No tests were made for this

## Accessibility Lab Answers

## Color 
-Color contrast with the background and the text made it very hard for any users to read. The two dark colors made it difficult for the text to pop out and be more visible to users

## Semantic HTML
1. When you tried to use the keyboard originally you were not able to navigate the website. Now you can use the arrow keys to scroll up and down the website.

2. Added alt attributes so that screen readers can now describe images 

3. Swapped <div class = "nav"> with <nav> which is the correct semantic element for nav menus

The nav class is updated so it can be recognized by screen readers and other assistive technologies.

the way the website originally had using div was just using div like a generic container screen readers wont be able to tell if they are looking at navigation links unless there was additional labels to tell them


## The images
I added alt text so that the screen readers can get a description of the image.

## Audio Player
1. To fix the audio player I added a transcript link for deaf users or people who aren't able to access sound
2. For older browsers that don't support the audio I added a message showing that it doesn't support that version of the browser they are using

## Forms
1. I added an sr-only label for screen readers it stays hidden but when a screen reader comes across it, it will be read aloud for accessibility

2. linked labels to inputs so that screen readers can correctly associate labels with there fields.

## The Show/Hide Comment control
I Had to do a couple things to help get the show/hide comment button to be keyboard recognizable first in the javascript folder I changed the const showHideBtn and gave it an attribute using the setAttribute() and gave it a tab index as it did not have one before.

Second the showHideBtn.onclick = function() - this gave it no keyboard support functionality. I added an eventListener so that on keydown if the key is enter it will call the method toggleComments();

Something we read in the readme what aria support before this website didn't have any ARIA accessibility in the updated website we I added the aria-expanded to let the screen reader know if it was true or false when the comment section is expanded or not by default it is set to not expanded

and then using the setAttribute methods to tell when the comment section is expanded or not.

## Data table
For the data table I changed the <td> which made headers unclear and swapped in <th> with the scope "col" to help clarify where screen readers were at

I added in a <caption> tag so that screen readers would announce the tables purpose

## Other considerations

Originally when I would tab after reaching the end of the page my tab would go out of the index and not loop around, so I had to add in a loop for whenever you pressed tab and were on the last element of the tab index it would reset back to 0 and go back to the top of the screen or whichever element of the page was 0

Besides the color contrast I spaced out the table and more of the buttons for easier readability.