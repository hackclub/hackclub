# How to use APIs (with RapidAPI)

> Don't re-invent the wheel.

# What is an API?

- "Application Programming Interface"
- Usually created by companies for customer use.
- Basically, using code/information from other sources and using them for your own
    
    - Example: Covid-19 cases tracker to put on your own dashboard
- Example:
    - A user sends information over to an API, the API reads the data, and sends back information that the user needs.

    ![API Demonstration](https://cloud-dqwq9wck9.vercel.app/untitled.png)

    - GET, POST, PUT, DELETE are the 4 different ways that you interact with the API
    - The API will usually send you information back in the form of a JSON file

## What is a JSON file?

- JavaScript Object Notation

![JSON Example](https://cloud-o77ycppek.vercel.app/untitled__1_.png)

- Simple way to send and recieve information:
- Starts with a key in the form of a string; the key is assigned a value, which can be any type (String, integer, array, etc.)

# Time to use an API!

1. Create an account on RapidAPI (rapidapi.com)
2. Find an API that you want to use
    
    - For this example, we are going to use a Covid-19 Tracker ([https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics](https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics))
3. Create a [Repl.it](http://repl.it) for HTML, CSS, JS (repl.it/languages/html) and copy paste the following line into the <head> tag in the HTML page

    ```html
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    ```

    - This will import jQuery into your page. jQuery is a JavaScript library designed for HTML DOM. It isn't too important to understand it right now, but if you want, you can learn more about it
4. Go back to your RapidAPI. If you need to subscribe to your API, do that right now
5. Select the type of result that you want (called an endpoint) in the column to the left
6. Change the Code Snippet language (right column) to JavaScript > jQuery.
7. Press the button labelled "Test Endpoint" in the center column and verify that the API works and gives the information that you are looking for.
8. Press the button Copy Code or copy it manually.
9. Paste the code into script.js in your Repl project.
10. In the console, you will see a JSON of the information that your retrieved. 
11. Using the JSON file, you can set variables to the different values received from the JSON
12. You can also use the given information to create your own information
13. After they are saved as variables, you can use then wherever you want

## Example Idea

- 4 `<p>` tags with unique IDs. in the JS file, change the html using document.getElementById("id").innerHTML and updating your website as you go
- Style the page as you see fit
- [https://repl.it/talk/share/RapidAPI-Workshop-Example-1/54538](https://repl.it/talk/share/RapidAPI-Workshop-Example-1/54538)

Congratulations! You just created a Covid-19 Dashboard website, ready to go! The URL to the website that you just created can be found on the [repl.it](http://repl.it) page in the top-right corner, on top of the website overview
