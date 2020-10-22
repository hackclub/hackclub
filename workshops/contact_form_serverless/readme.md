```
---
name: 'Contact Me handler with Netlify Functions'
description: 'Make a "contact me" form using serverless functions'
author: '@shreyfirst'
---
```



## Make a "contact me" form

In this tutorial, you will learn how to use:

* [HTTP POST](https://www.w3schools.com/tags/ref_httpmethods.asp) requests
* Serverles functions ([Netlify functions](https://www.netlify.com/products/functions/)/[AWS Lambda](https://aws.amazon.com/lambda/))
* [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) communication packages

You will be making an ["API"](https://en.wikipedia.org/wiki/API#:~:text=An%20application%20programming%20interface%20(API,the%20conventions%20to%20follow%2C%20etc.) that allows someone to submit a form and it will send you (or anyone you choose) and email, all within a few seconds.

**Difficulty/interest level:** If you've made a website before, this might be of interest to you. A contact form would be great if you don't want to put your personal email public facing, but still want to get contacted. This isn't terribly difficult, but prior knowledge of <u>HTML, CSS, and Javascript</u> might help you do this quicker.

**Average time for completion:** You can complete this in <u>15-20 minutes</u>. You will need the following tools:

* [Repl.it](https://repl.it/) online coding platform (no account nessesary, but highly reccomended)
* [Github](https://github.com/) account
* [Netlify](https://netlify.com/) account



### First, let's make the form that you want to recieve emails with.

1. Go to to [Repl.it](https://repl.it/) and either:

   1. Create an account
   2. Click the "Start coding" button on the top right

2. Choose "HTML/CSS/JS"

   1. This means that we will be coding in different web languages. HTML is like the text files, CSS is similar to the design element, and JS is anything special like animations, etc.

3. The first thing we want to do is create an [HTML form](https://www.w3schools.com/html/html_forms.asp). An HTML form is used to collect input from the user and (typically) send it to a specific server to handle that data. In our case, we haven't made our server yet, but we'll be taking the data into our server, then using that data to send an email.

   1. A form element is wrapped with a `<form>` tag.
      * Here is a sample code block with a form:

   ```html
   <form>
   <!-- This is where your form element go (I'm currently using a COMMENT to tell you this.) -->
   </form>
   ```

   2. The HTML form will have a few input boxes (`<input>`), which will take in our data. We'll need this for the <u>Name, Subject, Email, and Message</u> of the person wanting to send us information.
      * Here is a sample code block with an input box (notice the properties on the `<input>` tag and try to understand what they mean ` type="text" id="name" name="name" placeholder="Shrey"`). We'll go deeper into this later:

   ```html
   <input type="text" id="name" name="name" placeholder="Shrey">
   <!-- You can also use INPUT tags for SUBMIT buttons -->
   <input type="submit" value="Submit">
   ```

   3. We want to use a few labels (`<label>`) for the user to understand what we want them to type in the input boxes. *This usually goes before the input box.*
      * Here is a sample code block with an input box:

   ```html
   <label for="name">Name</label>
   ```
   4. Once you add all the required information, your code should look a little like this:
      * Notice what I did here that I didn't include above? You may have tried the code I wrote above and thought it didn't look so nice. What I did here was I added a `<br>` tag anytime I wanted it <u>to be on a new line</u>. This gave me some freedom on how I want it organized. You can do as many as you want, just try to make it visually appealing.

   ```html
   <form>
   
   	<label for="name">Name</label> <br>
   	<input type="text" id="name" name="name" placeholder="John Doe"> <br><br>
   
   	<label for="email">Your email</label><br>
   	<input type="text" id="email" name="email" placeholder="john@doe.com"> <br><br>
       
     <label for="subject">Subject</label><br>
   	<input type="text" id="subject" name="subject" placeholder="I have a question..."> <br><br>
       
     <label for="message">Message</label><br>
   	<input type="text" id="message" name="message" placeholder="Hi Shrey..."> <br><br>
   
   	<input type="submit" value="Submit">
       
   </form> 
   ```

   Above I talked a little bit about about [*HTML tag properties*](https://www.w3schools.com/html/html_attributes.asp). People have different words for these, like HTML attributes or properties. I like to call them properties (or props) because it helps when understanding more complex web languages like [React](https://reactjs.org/).

   * The properties you use are fixed, meaning there are only certain ones you can use depending on the tag name. Doing a quick Google/DuckDuckGo search can tell you exactly what you need to put in there. Ex. searching `attributes on input tag` can give you this link from [W3Schools (a trusted documentation site)](https://www.w3schools.com/tags/tag_input.asp).
   * Let's learn a little bit about the `<form>` tag's properties.
     * Two important ones are: `method` and `action` .
     * `method` is essentially what kind of HTTP request you want to send. You can learn about it here on [Mozilla's web documentation (another trusted site).](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
       * The main types are GET and POST. It's really simple to understand, GET means you want to recieve data from a server and POST data means you want to give data to a server. We want to use POST for our method on this form because we're GIVING data TO the server to handle and email us.
     * `action` is the *who* you want to send data to. This is a server URL/path that can handle data.
     * **ACTION:** Let's update our code to have these two attributes. Update the **first** line of your code to have this:

   ```html
   <form action="/hello" method="POST">
   ```

   Try to understand what this line of code is doing. We are SENDING data (b/c it's post) to a PATH called "/hello" -- When there isn't any domain involved in the URL/path, the code assumes it to be the current domain and location of the HTML file.

   Try opening your [repl.it](https://repl.it) website using the external link button on the top right. Enter all the data in the form and see what happens.

   * Once you try it and click submit, you may realize that it takes you to a dead link! Little did you know that it tried sending data to a server that isn't real. 
   * Let's dig a little bit deeper and see what that data looks like.
     * To some this might seem like some glorified verion of hacking a website, but really we are seeing how the data moves! Follow the instruction in the GIF below.
       1. Enter form data
       2. Open Inspect Element (right click and click *Inspect*)
          1. It may open on the bottom or the side, either one is just fine.
       3. Click on "Network" on the top menu bar
       4. Click "Submit" on your form
       5. See the new *red* item pop up in the Inspect element window
       6. Click on it and see all the details, you may need to expand to see it well
          1. Details include the form data at the bottom, the link it was being sent to, the error message we got, and other fun info. **Keep this data saved somewhere!**
          2. The most important information we see is the data at the bottom.
             1. When data is sent to a server, this is how it's being sent. It uses a [x-www-form-urlencoded](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) format to store it.
             2. Something you might wonder is: "how did they know that my input box's name was `message` or other?" This is because of the `name` property on our input tags! Changing those will change how our form communicates with the server we will build in the next step.

   ![GIF of Shrey showing you how to Inspect Element and see the network requests](https://cloud-igmhy1ffg.vercel.app/0screenshot_taken_by_shrey_on_10-21-2020_at_20.10__11_.gif)

   

4. Now we want to build a server to handle the information that we just created. We are going to use Netlify Functions for this. Netlify allows for people to create "serverless" functions for people to use. They use a server to manage our functions, but for us, we only need to call the function. This is so we don't have to spend time worrying about maintaining, securing, and building a full server- we just get a little peice of a gigantic, already built, secure server.

   1. Go to [github.com](https://github.com) and either create an account OR sign in with an existing one.

   2. Once you are signed in, use [this repository](https://github.com/shreyfirst/workshop-netlify-function-boilerplate) as a template (you can click "Use this template") and name your repository something meaningful like "contact-form-functions."

      1. You are going to be editing the code directly from Github. We will set-up your repository to recompile and deploy to Netlify after every push. Your repository can be either private or public.

   3. We will use this basic file structure for our serverless function. Notice the following file structure

      * `netlify.toml` - used to tell Netlify (our function's server manager) what to do with this repository
      * `package.json` - used to tell the server to download certain libraries that we will use to code
      * `src`  - folder used to store all of our functions
        *  `hello.js` - the function template

      Feel free to do any investigation or research into the above files. They are all boilerplate and you can edit them completely!

   4. In the `hello.js` file in `src`, you should be able to see some sample code:

   ```javascript
   import nodemailer from "nodemailer";
   
   exports.handler = async (event, context) => {
     // code here
     return { statusCode: 200 }
   };
   ```

   This is Javascript. The first line is telling the code to import a library called `nodemailer`. We use it to manage email sending.

   5. Let's add some code to our function (we are first going to do everything with sample data)

      * Learning how to read documentation is crucial when programming. Look at the [nodemailer documentation](https://nodemailer.com/about/) and try to understand what is going on.

      1. Where it says `// code here`, add the following block of code:
         * Be sure to read the comments to understand what it is doing

      ```javascript
      // createTestAccount is a function that creates a sample SMTP server for you to use for testing (using the https://ethereal.email service)
      let testAccount = await nodemailer.createTestAccount();
      
      // right now we are "authenticating" our email service
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email", // this is an SMTP address
        port: 587, // this is the port we send the request to
        secure: false, // whether or not the email is secured or not (this is off depending on the port)
        auth: { // username and password for the SMTP host. this is auto generated from the first line
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      
      // now we are sending the email itself, with all the data
      let info = await transporter.sendMail({
        from: 'sender@example.com',
        to: 'me@example.com', // enter in your personal email here
        subject: 'subject_sample',
        text: 'text_sample'
      });
      
      // logging functions to get any data we may need 
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      ```

      2. There is a lot going on here. Essentially we are authenticating the email service and sending a sample, hard-coded email. We are using a service called https://ethereal.email. This allows for getting fake SMTP details for testing.
      3. Now, let's put our function to the test!

   6. Go to [netlify.com](https://netlify.com) and login with Github.

      1. Create a new site from Git, choose your Github repo
      2. Select enter with the prefilled data, wait for it to deploy
      3. After about a minute, click on "Functions" and you should see the function `hello`.
      4. Open the function and copy + paste the link in the browser.
      5. After about a minute of staring at the blank page, go back to the function page and see if there is a new log
      6. Copy and paste the link in the log and it should take you to a site with all the email data!
         1. Theoretically you should be getting the email in your inbox, but if you use a Gmail account, you may need to [configure your settings](https://nodemailer.com/usage/using-gmail/) for it to recieve those types of emails.

   7. This is exciting! Now I can get emails from my server. I just need to connect my server and my repl.it site together!

      1. Remember the `x-www-form-urlencoded` item we had originally posted to the blank server when we first made the frontend website? We are going to need that data again here.

         - One way you can convert a `x-www-form-urlencoded` item to [JSON](https://www.w3schools.com/js/js_json_intro.asp) format is by creating a function. 
         - After we pass it in through our function, we want to "query" it to pick up all of our data. This means that you find everything by it's key value. You can dig deeper [here](https://www.w3schools.com/js/js_json_intro.asp), but I'll do an example in the next step.
         - The way that our function can pick up data is using the `context` parameter in the function template.

         ```javascript
         // ...
         exports.handler = async (event, context) => {  // this EVENT parameter will collect the Form Data JSON object once we connect them. Since we know what the event will have, let's configure the nodemailer code to work with it.
           // ...
           return { statusCode: 200 }
         };
         ```

         * Something like `name` can be found by the function by doing: ` event.body.name  ` 
           * One thing to note is that everything gets turned into a string when we send data, so we need to parse it back into JSON. Add this code below the start of the function:

         ```javascript
         // this is turning our x-www-form-urlencoded to JSON
         function queryStringToJSON(queryString) { 
           if(queryString.indexOf('?') > -1){
             queryString = queryString.split('?')[1];
           }
           var pairs = queryString.split('&');
           var result = {};
           pairs.forEach(function(pair) {
             pair = pair.split('=');
             result[pair[0]] = decodeURIComponent(pair[1] || '');
           });
           return result;
         }
         
         // we are using the function here
         const body = queryStringToJSON(event.body);
         
         // we are "querying" the JSON object here
         const name = body.name;
         const email = body.email;
         const subject = body.subject;
         const message = body.message;
         ```

      2. Once you have that, you can prefill all the information in the code. Here is what your function should look like:

      ```javascript
      import nodemailer from "nodemailer"
      
      exports.handler = async (event, context) => {
      
        const body = JSON.parse(event.body);
        const name = body.name;
        const email = body.email;
        const subject = body.subject;
        const message = body.message;
      
        let testAccount = await nodemailer.createTestAccount();
      
          let transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });
      
        let info = await transporter.sendMail({
          // let's update these values to reflect the data we are pulling!
          from: email,
          to: "my_email@example.com", 
          subject: subject + " - " + name, 
          text: message,
        });
      
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      
        return { statusCode: 200 }
      };
      ```

      * If you don't want to use the fake SMTP mailer, you can find more complex instructions for how to connect your Gmail or other type of email account to this app: https://www.w3schools.com/nodejs/nodejs_email.asp

   8. Now, once you finish editing the code on Github (web), it will automatically deploy within the minute and update the function. Add the function URL to the `action` property on the `form` tag.

   ```html
   <form action="https://sad-kowalevski-93deb6.netlify.app/.netlify/functions/hello" method="POST">
   ```

   9. Now, if we submit the form on the repl.it page, we should get an email! Congratulations, you did it!



### Extending the website

Now try extending the website on your own. Here are some things that you can try to figure out how to do:

- Make the message input field a full textarea. This is so people can write a long message.
- Add some styling to your contact form. Learn about other properties/attributes that can help you do that.
- Do some validation. What if they didn't type an email in for the email? That means the "from" address would be wrong and the function would fail. Validate the address.
- Redirect to a "thank you" page

