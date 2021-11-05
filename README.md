
# _Mr. ROBO Rogers Neighborhood_ 

#### By _**Ryan Ashby**_ 

#### _This program allows you to input a number and get a series of responses back from the legendary Mr. (ROBO) Rogers_ 

### _Link to the Site_

* https://github.com/rjashby/RoboRogers-Neighborhood

## Technologies Used 

* _VS Code Software_
* _Github_
* _Google Chrome Browser_
* _HTML_
* _CSS_ 
* _Markdown_ 
* _Bootstrap_ 
* _JavaScript_
* _jQuery_


## Description 

_This program has the user input a number and it spits back a series of responses from the talented Mr. Robo Rogers. He slices, he dices, he even... ummm... Well he doesn't say much, but he's not alive anymore. So, give the guy a break._ 

## Setup/Installation Requirements 

* _In order to utilize this page, you will need to clone a copy of this repository to your workspace using the "$ git clone {url}" in your coding terminal._ 
* _Once cloned you will need software to edit and further contribute to the code. You can download the free code editor, VS Code, at https://code.visualstudio.com/_.
* _Once installed, open the folder of the cloned repository, with will contain the HTML index, bootstrap.css and jQuery.js files, along with separate style and script pages for more personal edits._
* _You can now open each of the individual files and edit them as you see git on VS Code._
* _To open the cloned project, simply go to the folder/directory you to which you cloned the project, and open the index.html file in your browser._
* _As you add, edit, and change your code, the command "$ git status" will inform you what has been recently altered in the git._
* _Once any changes are made, utilize the command "$ git add ." to add the necessary files to be committed_
* _To commit any changes, use the command "$ git commit -m "description of what was altered for ease of reference."_
* _For example, the command "$ git commit -m "create initial html and style sheet pages," would be a short and concise example of a good initial commit to save your work._
* _The command "$ git log" will show the history of the commits that have been made. If the list is long, you may need to type the letter "Q" on your keyboard to return to your code terminal._
* _If you'd like, you can sign up for own Github account, so you can store any works of your own to share and/or publish, which can be done for free at https://github.com/ ._  
* _Once you have your Github account, you can create your own repositories to share with others and publish as you see fit._
* _Create a way to save your changes to your own personal Github account by adding a remote to your page via the command "$ git remote add {nickname for your remote} {url of your Github repository}."_
* _For example, the command "$ git remote add ra https://github.com/rjashby/interior-decorator," would add a new remote called "ra" located at "https://github.com/rjashby/interior-decorator"._
* _To "push" and save the changes to your Github repository, use the command "$git push {nickname for your remote} {url of your Github repository}."_ 
*_"Pushing" your commits saves them to the cloud server on Github, and allows you (or someone else) to clone down your saved repository in the same manner provided above._

## Spec Tests

### Description: roboRogers(input)
*Test:* "It should return "0" if the number "0" is inputted."
*Code:* roboRogers("0");
*Expected output:* "0"

*Test:* "It should return "Beep!" if the number "1" is inputted."
*Code:* roboRogers("1");
*Expected output:* "Beep!"

*Test:* "It should return "Boop!" if the number "2" is inputted."
*Code:* roboRogers("2");
*Expected output:* "Boop!"

*Test:* "It should return "Won't you be my neighbor?" if the number "3" is inputted."
*Code:* roboRogers("3");
*Expected output:* "Won't you be my neighbor?"

*Test:* "It should the same output as the value inputted for numbers 4 - 9."
*Code:* roboRogers("5");
*Expected output:* "5"

*Test:* "When given a string of numbers, it should replace "1" with "Beep! and leave the remaining numbers intact."
*Code:* roboRogers("1231");
*Expected output:* "Beep! 2 3 Beep!"

*Test:* "When given a string of numbers, it should replace "2" with "Boop!" and leave the remaining numbers intact."
*Code:* roboRogers("1221");
*Expected output:* "1 Boop! Boop! 1"

*Test:* "When given a string of numbers, it should replace "3" with "Won't you be my neighbor?" and leave the remaining numbers intact."
*Code:* roboRogers("123");
*Expected output:* "1 2 Won't you be my neighbor?"

*Test:* "When given a number larger than a single digit, it should return a string that follows the rules above."
*Code:* roboRogers("11");
*Expected output:* "0 , Beep! , Boop! , Won't you be my neighbor? , 4 , 5 , 6 , 7 , 8 , 9 , Beep! 0 , Beep! Beep!"

*Test:* "When given a number that reaches the number 13, it should return a string that follows the rules above, but also has the number 13 being changed to "Won't you be my neighbor."
*Code:* roboRogers("13");
*Expected output:* "0 , Beep! , Boop! , Won't you be my neighbor? , 4 , 5 , 6 , 7 , 8 , 9 , Beep! 0 , Beep! Beep!, Beep! Boop!, Won't You Be My Neighbor?"

*Test:* "When given a number that reaches the number 21, it should return a string that follows the rules above, but also has the number 21 being changed to "Boop!"
*Code:* roboRogers("21");
*Expected output:* ""0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!"

*Test:* "When given a number that reaches the number 32, it should return a string that follows the rules above, but also has the number 32 being changed to "Won't you be my neighbor."
*Code:* roboRogers("21");
*Expected output:* ""0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Boop!, Boop!, Boop!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?"

### Description: countUp(number)
*Test:* "It should return return an array of numbers from 0 to the inputted number"
*Code:* countUp("5");
*Expected output:* [0, 1, 2, 3, 4, 5]

## Known Bugs 

* _No Known Bugs_  

## License 

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) _November 4, 2021_, _Ryan Ashby_
