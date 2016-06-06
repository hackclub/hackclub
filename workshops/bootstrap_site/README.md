# Bootstrap Site

In this workshop, we're going to build a similar website to what we started in [Personal Website](../personal_website/README.md). We'll be introducing a tool called [Bootstrap](https://v4-alpha.getbootstrap.com/), which is a set of pre-written CSS that makes it super easy to build complex and professional looking sites.

Here are some that your fellow Hack Clubbers have made:

- asdf
- asdf
- asdf

Hundreds of thousands of websites, including http://www.nba.com/, https://www.lyft.com/, and https://www.nasa.gov/, are built on Bootstrap. Check out https://expo.getbootstrap.com/ for more examples.

Let's get started.

## 1) Set-up

### Creating Files

Go to your Cloud9 dashboard, and open your projects workspace by clicking "Open". Once you're in your workspace:

- Create new folder (right-click `projects` in your sidebar and choose `New Folder`, name it `bootstrap`)
- Create `index.html` (right-click `bootstrap` folder and choose `New File`, name it `index.html`)

### Priming `index.html`

- Double-click `index.html` to open, and type in the following base template:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

- In this workshop we will be using Bootstrap. It's an ordinary CSS file that can be found at https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css, so we'll include it by adding this line to the **head** (between `<head>` and `</head>`): **Please type everything except the URL and the thing beginning with "sha...," and copy and pastte the URL and "sha..."**

  ```html
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">
  </head>
  ```

- We'll also need the things that Bootstrap depends on, and we'll put these in `<script>` tags inside the **body** (between `<body>` and `</body>`): **Please type everything except the URLs and the thing beginning with "sha...," and copy and paste the URLS and "sha..."**

  ```html
  <body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.1/js/tether.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
  </body>
  ```

- Lastly, we need to make our `index.html` file compatible with Bootstrap.
  First, let's specify our language to be English by modifying our existing `<html>` tag. We'll add `lang="en"`, like so:

  ```html
  <html lang="en">
  ```

  And secondly, let's add some settings into our head: **Please type everything except the URLs and the thing beginning with "sha...," and copy and paste the URL and "sha..."**

  ```html
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">
  </head>
  ```

- Now, let's save `index.html` by pressing `CTRL+s` / `Command+s`, and open up Live Preview in C9 by going to `Preview` > `Live Preview`.

## 2) Personalizing our website

- We are now ready to start customizing our website. Let's add a title in the **head**, under the meta tags:

  ```html
  <title>Prophet Orpheus</title>
  ```

  You can name your website anything you want.

- We'll also add some content in the **body**, above the script tags:

  ```html
  <h1>Prophet Orpheus</h1>
  <p>Hi! I'm Prophet Orpheus, Hack Club's dinosaur mascot. I'm a big fan of building things with code.</p>
  ```

- Save `index.html` and refresh Live Preview (if necessary) to see your progress.

## 3) Bootstrap

We'll be adding a few Bootstrap components, which are pre-built interface parts and styles that really highlight the flexibility of Bootstrap. We'll add a [Jumbotron](http://getbootstrap.com/components/#jumbotron), which is a large area on the page that holds text, [a multi-column space for text](http://getbootstrap.com/css/#grid), and a [navbar](http://getbootstrap.com/components/#navbar), which will allow users to go to different pages on the website.

### Upgrading to a Jumbotron

- Let's incorporate it into our site by modifying our **body**. We'll wrap our existing content in the necessary `<div>` tags, like so:

  ```html
  <div class="jumbotron">
    <div class="container">
      <h1>prophet orpheus</h1>
      <p>hi! i'm prophet orpheus, hack club's dinosaur mascot. i'm a big fan of building things with code.</p>
    </div>
  </div>
  ```

- Save and check out the new thing on your page in Live Preview!

### Styling with Bootstrap

- Bootstrap offers preset styles. We can use some by adding the classes `display-3` and `lead` to our existing elements:

  ```html
  <̶h̶1̶>̶p̶r̶o̶p̶h̶e̶t̶ ̶o̶r̶p̶h̶e̶u̶s̶<̶/̶h̶1̶>̶
  <h1 class="display-3">prophet orpheus</h1>
  <̶p̶>̶h̶i̶!̶ ̶i̶'̶m̶ ̶p̶r̶o̶p̶h̶e̶t̶ ̶o̶r̶p̶h̶e̶u̶s̶,̶ ̶h̶a̶c̶k̶ ̶c̶l̶u̶b̶'̶s̶ ̶d̶i̶n̶o̶s̶a̶u̶r̶ ̶m̶a̶s̶c̶o̶t̶.̶ ̶i̶'̶m̶ ̶a̶ ̶b̶i̶g̶ ̶f̶a̶n̶ ̶o̶f̶ ̶b̶u̶i̶l̶d̶i̶n̶g̶ ̶t̶h̶i̶n̶g̶s̶ ̶w̶i̶t̶h̶ ̶c̶o̶d̶e̶.̶<̶/̶p̶>̶
  <p class="lead">hi! i'm prophet orpheus, hack club's dinosaur mascot. i'm a big fan of building things with code.</p>
  ```

- Save and check out the updated styling in Live Preview!

## 4) Leveraging Other Bootstrap Features

### Adding a navigation Bar

- A navigation bar will be handy for our website.
- Type this inside the **body**, above the code for the jumbotron:

  ```html
  <nav class="navbar navbar-full navbar-dark bg-inverse">
    <a class="navbar-brand" href="index.html">Prophet Orpheus</a>
    <div class="nav navbar-nav">
      <a class="nav-item nav-link" href="index.html">Home</a>
      <a class="nav-item nav-link" href="contact_me.html">Contact Me</a>
    </div>
  </nav>
  ```

- Save and check out the new navigation bar in Live Preview!

### Customizing Navigation Bar

- Let's move the navigation bar to the right. Bootstrap makes this easy with the `pull-xs-right` class. We'll add this to the existing line:

  ```html
  <̶d̶i̶v̶ ̶c̶l̶a̶s̶s̶=̶"̶n̶a̶v̶ ̶n̶a̶v̶b̶a̶r̶-̶n̶a̶v̶"̶>̶
  <div class="nav navbar-nav pull-xs-right">
  ```

- Save and check out the updated styling in Live Preview!

## 5) Adding More Elements

- Let's add more content to our site. Type the following in the **body**, after the jumbotron:

  ```html
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h2>Dinosaurs Rule</h2>
        <p>I'm a firm believer that dinosaurs are the best species and will never go extinct. You can add as much text as you'd like in this section.</p>
      </div>
      <div class="col-md-4">
        <h2>I Rule</h2>
        <p>By the transitive property, since dinosaurs rule, I rule. You can add as much text as you'd like in this section.</p>
      </div>
      <div class="col-md-4">
        <h2>You Rule</h2>
        <p>You, humble visitor. You rule for checking out my site. Thank you. You can add as much text as you'd like in this section.</p>
      </div>
    </div>
  </div>
  ```

  As you can see, Bootstrap makes it easy to format text in columns. Save to check it out in Live Preview.

## 6) Establishing Our Presence

- We'll add a copyright at the bottom. Type this in the **body** right before the script tags:

  ```html
  <hr>
  <footer>
    <p>© Prophet Orpheus</p>
  </footer>
  ```

## 7) Creating a "Contact Me" Page

- Since we have a menu option for contact, let's create a destination for that option. We will create a new page to hold contact details.
  Right-click the `bootstrap` folder in the sidebar, select `New File`, and name it `contact_me.html`.
- Then double-click the file to open, and type this base template (you'll recognize it from our `index.html`):

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta http-equiv="x-ua-compatible" content="ie=edge">

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css" integrity="sha384-y3tfxAZXuh4HwSYylfB+J125MxIs6mR5FOHamPBG064zB+AFeWH94NdvaCBm8qnd" crossorigin="anonymous">
    </head>
    <body>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.1/js/tether.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/js/bootstrap.min.js" integrity="sha384-vZ2WRJMwsjRMW/8U7i6PWi6AlO1L79snBrmgiDpgIWJ82z8eA5lenwvxbMV1PAh7" crossorigin="anonymous"></script>
    </body>
  </html>
  ```

- Save and go to `Preview` > `Live Preview` to preview `contact_me.html`.

- We'll also add a title to the "Contact Me" page, which we will place in the **head**, under the meta tags:

  ```html
  <title>Contact Me | Prophet Orpheus</title>
  ```

- Now we'll add our navigation bar to the **body** (above the script tags):

  ```html
  <nav class="navbar navbar-full navbar-dark bg-inverse">
    <a class="navbar-brand" href="index.html">Prophet Orpheus</a>
    <div class="nav navbar-nav pull-xs-right">
      <a class="nav-item nav-link" href="index.html">Home</a>
      <a class="nav-item nav-link" href="contact_me.html">Contact Me</a>
    </div>
  </nav>
  ```

  It looks just like the one from `index.html`.

- We'll also add a jumbotron under the navigation bar, to keep things consistent. Add this in **body** underneath the code for the navbar:

  ```html
  <div class="jumbotron">
    <div class="container">
      <h1>Contact Me</h1>
      <p>Want to get in touch with me? I love making new friends.</p>
    </div>
  </div>
  ```

- And we'll add an email so that we can be contacted. Let's type this in **body**, directly after the jumbotron code:

  ```html
  <div class="container">
    <p>You can reach me anytime at <a href="mailto:orpheus@hackclub.com">orpheus@hackclub.com</a>.</p>
  </div>
  ```

  There! Now others will be able to contact us using the "Contact Me" page.

## 8) Publishing and Sharing

Now that we are done creating our site, let's publish it! Make sure all of your files are saved.

In Cloud9, open the terminal by pressing `alt+t` and type the following commands, ending each by pressing <ENTER>:

- `git add --all`
- `git commit -m "Bootstrap website"`
- `git push`

After that, you should see a prompt for your username and password (hidden characters). Once you finish that, your Bootstrap site will be live at `USERNAME.github.io/bootstrap` (with your username instead of "USERNAME")!!

## 9) In Closing

Did you rejoice at how easy it was to put together elements on your page, and how they seemed to pop into place after every save+refresh? No additional styling was needed! That is the beauty of Bootstrap, and other CSS frameworks like it.

There are [many, many more elements](http://getbootstrap.com/components/) that Bootstrap provides, so grab [the documentation](http://getbootstrap.com/) and start building masterpieces from these base blocks!
