# Personal Website

## Overview

Objective:

* Teach students how to use HTML and CSS, and Javascript to build a basic
  website.

Skills learned:

* What HTML, CSS, and Javascript are and the difference between them.
* How to apply HTML, CSS, and Javascript to build a website.
* How to find help when building websites.
* How to use Neocities to host a website.

Tangible outcome:

* A hosted website at a publicly accessible domain.

## Example Progression

1. Download and install [Sublime Text](http://www.sublimetext.com/3).
2. Create a new directory where you want the website files to be.
3. Open Sublime Text and go to File > Open Folder. Open the directory you just
   created.
4. Right click on the folder to the left and click "New File". Go File > Save
   and name the file `index.html`.
5. Add the following to `index.html`.
  
  ```
  <!doctype html>
  <html>
    <head>
      <title>I'm a title</title>
    </head>
    <body>
      <p>Hello, World!</p>
    </body>
  </html>
  ```

6. Right click anywhere in the file and select "Open in Browser".
7. Those things that start with `<` and end with `>` are called elements.
   Notice how every element has a corresponding closing element. Closing
   elements have a `/` before the element's name. Elements are also sometimes
   known as tags.
8. The `html` element encapsulates the rest of the elements in our web page.
   Everything in the `head` element is not on the web page and is for the
   browser to read. Everything in the `body` element is on the webpage. The `p`
   element stands for paragraph and indicates a paragraph on the page.
8. We can use the `a` tag to add a link to our website. Put the following under
   the `p` element and reload the page.

   ```
   <a href="https://google.com">Google</a>
   ```

9. Notice the `href` in the `a` tag we just created. That's called an
   attribute. All attributes have corresponding values. In this case, `href`'s
   corresponding value is `https://google.com`. `href`'s corresponding value
   is where the link leads to.
10. `img` tag example. Use an exciting image, like a meme or doge.
11. Ordered and unordered lists.
12. Change the background color and some other stuff with CSS.
13. Add a button that increments a wow number on the page using Javascript.
14. Save the site and host it on Neocities.