# Personal Website

This workshop shows you how to make your own personal website. It will look
something like this:

[![](img/final_screenshot.png)][final_live_demo]

_Here's a link to the [real thing][final_live_demo] and [code][final_code]._

[final_live_demo]: https://cdn.rawgit.com/anonymous/7a5a6cc614052c8c810f/raw/9419c5a5a4a871da091a49844ffbc46f434c01c8/index.html
[final_code]: http://jsbin.com/gist/7a5a6cc614052c8c810f?html,output

**On the way, you will:**

- Use **HTML** and **CSS** to program a website.
- Setup an account on **GitHub**, **Cloud9**, and **Slack**.

**Table of contents:**

- [Setup](#setup)
- [Create The Project Folder](#create-the-project-folder)
- [Making The Site](#making-the-site)
- [Making The Site Look Nice](#making-the-site-look-nice)
- [Publishing](#publishing)
- [Sharing with the Community](#sharing-with-the-community)
- [Hacking](#hacking)

## Join Hack Club

### Sign Up for GitHub

GitHub is a website used by millions of programmers to collaborate on code.
We'll be using it for everything we make in Hack Club.

1. Open https://github.com/join in a new tab and create a new account
  - Choose a username you will be proud to show future employers (ex.
    `zachlatta` and `jonleung`).
  - Use an email that you have access to (you'll need to verify your account).
2. Open your email inbox and look for an email from GitHub. Open it and click
   the button to verify your email.
3. Open [Hack Club's repository][hack_club_repo] in a new tab and star the
   project by clicking the button that looks like this on the top right:

   ![](img/github_star.png)

[hack_club_repo]: https://gh.hackclub.com

### Create a Repository

GitHub allows us to host our website on **GitHub Pages**. We can put our website
on GitHub get a link to share it with the world.

1. On https://github.com, click the green **"+ New repository"** button.
2. Under **"Repository name"** write `USERNAME.github.io` except instead of
   writing `USERNAME`, write your actual GitHub username. So if your username is
   `alice1337`, you would write `alice1337.github.io`.
3. Click the green "Create repository" button at the bottom.
4. Copy the **"HTTPS link"** at the top. You'll use this link in the next step.

### Sign Up for Cloud9

Just like how we can use Google Drive to write and organize documents written in
English, we can use a service called **Cloud9** to write, save, and organize our
code. We'll be using Cloud9 to write all of our code in Hack Club.

1. In a new tab, open https://c9.io/.
2. In the top right hand corner, click the button that looks like this: ![](img/c9_gh_icon.png)
3. Authorize signin with GitHub.
4. If there is a popup that asks for your email, go ahead and enter it.
5. Click the gray box that says **"Create a new workspace"**.
6. Set the **"Workspace name"** to `projects`.
7. Make sure your workshop is set to **"Public"**.
8. Under **"Clone from Git or Mercurial URL"**, paste the **HTTPS Link** that
   you copied from your GitHub repository.

   > ![](img/c9_add_git_url.gif)

9. Make sure that you're using the **"Custom"** template.
10. Click the green **"Create Workspace"** button.

You should now see a screen looks something like this:

![](img/c9_signup_ide_loaded.png)

> Note: If you're waiting for a while (more than 10 seconds) and the above
> screen still doesn't load, try the following: 1. Open https://c9.io 2. Click on
> the green **"Open"** button 3. You should now see the screen shown above. If
> not, ask your facilitator for help

### Celebrate!

> ![](img/celebrate_king_kid.gif)

Congratulations, you've officially set up all of your coding tools for the
semester!

Now we're ready to start the website!

## Create the Project Folder

We'll put each project built in Hack Club in a separate folder in Cloud9.

To start, let's create a folder for our personal website:

1. On the left side of the screen, right click the `projects` folder.
2. Click **"New Folder"**.
3. Name the folder `personal_website`.

> ![](img/c9_create_personal_website_folder.gif)

## Making The Site

Create a new file in your `personal_website` folder called `index.html`.

> ![](img/c9_create_index_dot_html.gif)

### Adding Standard HTML Template

Every HTML file follows this template:

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```

Let's put this template inside of our HTML file:

1. Double click the `index.html` file you just created to open it.
2. Retype the above HTML code into your `index.html` file, like so:

> ![](img/write_html_template.gif)

### Adding to the Template

There's a lot going on in the below template. For now, let's just understand
that there are two sections in this template, the `head` and the `body`:

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- this section is called the "head" of the HTML document -->
    </head>
    <body>
        <!-- this section is called the "body" of the HTML document -->
    </body>
</html>
```

- Everything between the `<head>` and `</head>` tags is called the **head** of
  the page. `<head>` is considered an "opening tag" because it "opens" the head
  section. Since `</head>` starts with `</` (instead of just `<`), it is
  considered a "closing tag" and "closes", or indicates the end of, the head
  section.
- Similarly, everything between the `<body>` and `</body>` tags is called the
  **body** of the page. `<body>` is the opening tag and `</body>` is the closing
  tag. Together, the opening tag and the closing tag compromise the `body`
  element.
- Note: most HTML elements have an _opening tag_ and a _closing tag_. You'll
  want to get used to this pattern.

### Opening the Website Preview

Let's see what our website looks like so far:

1. First, save the file by clicking **"File"** _(on the top right)_ → **"Save"**
   (or use the shortcut **CTRL + S / Command + S**).
2. Preview what the website looks like by clicking **"Preview"** → **"Live
   Preview File"**.

> ![](img/c9_live_preview.gif)

As you can see, the page is still blank. This is because we haven't added any
**content** in the `body` section yet. Let's add some!

### Adding My Name to the Body of the HTML

Write your name in the **body** of the HTML page (between `<body>` and
`</body>`). My name is `Drizzy Drake` so that's what I will write.

> ![](img/html_add_name.gif)

Notice that that the HTML code you write is immediately updated in the preview.
That's why it's called a **"Live Preview"**.

### Adding a Description

Underneath on a new line, write one short sentence about yourself. I love my job
as a call center representative so I'm going to write `MVP hotline answerer`.

> ![](img/html_add_description.gif)

See how there's no blank line between my name and description? Adding blank
lines or spaces between your words in HTML don't show up on your website.

To add spacing and other formatting, we need to use **HTML tags**.

### Formatting the Heading with the Heading Tag

If I want `Drizzy Drake` to be a heading of my webpage, I can put it inside of
what's called a **heading tag**, like so:

```html
<h1>Drizzy Drake</h1>
```

**HTML tags**, like `h1`, tell the web browser how to interpret the text in
between the tags.

Make your name look like a heading by surrounding your name with an `h1` tag.

> Note: In Cloud9, as soon as you write `<h1>`, it knows you will eventually
> want a `<h1>`, it just adds it for you. This is known as **autocomplete**.

> ![](img/html_format_name_as_h1_tag.gif)

Similar to how `body` and `head` have both opening and closing tags, there are
two parts to the `h1` tag:

- `<h1>` is the **opening** tag
- `</h1>` is the **closing** tag. Again, the difference is the `/` before the
  tag's name

Because the browser knows to interpret anything inside of an `h1` tag as a
heading, it makes your name big and bold.

### Formatting the Description with a Paragraph Tag

Similarly to how we told the browser to treat `Drizzy Drake` as a header, I want
to tell the browser to treat `MVP hotline answerer.` as a paragraph.

1. Put your description inside of a **paragraph tag** like so:

```html
<p>MVP hotline answerer</p>
```

> ![](img/html_format_description_as_p_tag.gif)

Just like the `h1` tag, the `p` tag also has an opening and closing tag.

### Adding An Image with the Image Tag

Now let's add a GIF to our website.

1. Open https://images.google.com in a new tab.
2. Search for anything (ex. "kittens", "doge", "pepe").
3. Tell Google Images to only show GIFs (`Search tools > Type > Animated`).

   ![](img/google_images_show_gifs.gif)

4. Click on the image you'd like to use and once it loads, right click on it and
   select `Copy image address`.

   ![](img/google_images_copy_gif_link.gif)

5. Insert this code for **image tag** just underneath of the **opening `body`
   tag**. Replace `IMAGE_LINK` with the link you just copied (hit `Ctrl+v` to
   paste, or `Command+v` if you're on a Mac).

  ```html
  <img src="IMAGE_LINK">
  ```

> ![](img/html_add_image_tag.gif)

`img` is the tag name - `img` is a **self closing tag**, meaning that there is
no closing tag (like `</img>`) - `src` is an **attribute** of the image tag that
specifies the URL of the image. It stands for "source".

Hmm, our image may be too big or too small. Luckily we have this other language
called **CSS** that can help!

## Making The Site Look Nice

**HTML** is the **content** of a page (**words**, **images**, and
**structure**).

**CSS** is the look and feel (**color**, **spacing**, and **size**).

**CSS** stands for **Cascading Style Sheet** and is sometimes referred to just
as a **style sheet** because it's a **"sheet"** that specifies all of your
**"styles"**.

Therefore, if we want to change the **size** of the image, we use **CSS**!

### Creating the CSS File

1. Right click the `personal_website` folder you had previously created.
2. Click **"New File"**.
3. Name the file `styles.css` (again, all lowercase).

Note: The `.css` extension** tells the computer to interpret this as a `css`
file (just like `.html`) - This is called an **external style sheet** because
the CSS file is **external** to the HTML file (as in the stylesheet is not
inside the HTML file)

> ![](img/css_add_css_file.gif)

### Connecting the CSS to the HTML

Although we've created a CSS file, until we explicitly tell the HTML file to use
the CSS file, it will not use it. We have to explicitly **link** the CSS file in
the HTML.

To **link** the CSS file:

1. Type the code for the **link tag** (written below), into the `head` section
   of the code.

   ```html <link rel="stylesheet" href="styles.css"> ```

> ![](img/css_add_link_tag.gif)

Notes: - `link` is the tag name - `link` tags always belong in the `head` of the
HTML document - `link` is a **self closing tag** like `img` - `href` is an
**attribute** of the link tag and specifies the location of the CSS file. It
stands for **hypertext reference** - `rel` is an **attribute** that tells the
browser to interpret the linked file as a **stylesheet**.

### Using CSS to Resize the Image

Now that we linked our CSS file to our HTML file, let's write some CSS to resize
the image.

1. Double click `styles.css` to open it.
2. Add the below CSS code to resize the image by typing the following code into
   the CSS file. Make sure to save after doing this. If you don't see anything
   change after saving, try refreshing your page.

    ```css
    img {
        width: 200px;
    }
    ```

Yay! Our image got resized!

> ![](img/css_img_width.gif)

#### Understanding The CSS

If we were to translate the code into English, this would say:

> Select every `img` tag on the page and set the **width** to `200px`.

_`px` stands for **pixels**, a unit of size on your screen._

### Centering the Body

Now to center everything on the page:

```css
body {
    text-align: center;
}
```

Now everything should be centered on the page.

If we were to translate the code into English, this would say:

> Select every `body` tag on this HTML page and set the **alignment** of the
> **text** within the body tag to be **centered**.

Because everything is in the **body** tag, everything is centered.

### Changing the Font

Finally let's change the font of the page to `Arial`.

Add another **CSS attribute** to the `body` **selector** so that your CSS code
for your `body` looks like this:

  ```css
  body {
      text-align: center;
      font-family: "Arial";
  }
  ```

> ![](img/css_font_family_arial.gif) Not all computers have the same fonts on
> them. To figure out what fonts most computers have on them, you can Google
> ["web safe fonts"](https://www.google.com/#q=web+safe+fonts).

### Celebrate!

![](img/celebrate_harry_potter.gif)

W0000t! You've successfully added the CSS to this web page!

Now to share your creation with the world.

## Publishing

Right now we can only see our website on our own computer. Let's get a link that
we can share with anyone on the internet!

1. Open the terminal by pressing `alt + t` on the keyboard at the same time.
   Type in the following commands, pressing enter between each one:
  - `git add --all`
  - `git commit -m "Initial commit"`
  - `git push`
2. GitHub will now ask you for your username and password.
  - Go ahead and enter your username and press enter.
  - Enter your password and press enter. _The characters won't show up on the
    screen because the password is hidden. Just keep typing._
3. Now try to view your website by going to
   `USERNAME.github.io/personal_website` (make sure to replace `USERNAME` with
   your actual GitHub username).

#### Celebrate!

![](img/celebrate_rush_hour.gif)

Yes! Your website is now public on the internet!

## Sharing with the Community

Now that you have finished building your website

1. In a new tab, open and follow [these directions][slack] to signup for our
   Slack.
2. Join your club's channel by asking your club leader for the name of the
   channel.
3. Post the link to your website in your club's channel.
4. Then, post the link to the
   [`#shipit`](https://starthackclub.slack.com/messages/shipit) channel to
   share it with everyone!

[slack]: ../../SLACK.md

### Additional Resources

Here are some additional resources that you can use to learn more about HTML &
CSS.

| Resource                                                                | Pros                                                                                   | Cons                                                                            |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| [HTML Dog](http://www.htmldog.com/guides/html/beginner/)                | Very beginner focused. If you're not sure which one of these to choose, pick this one. | Isn't too rich in content.                                                      |
| [Free Code Camp](http://www.freecodecamp.com/map)                       | Interactive and very methodical.                                                       | Not made for you to learn to make something that you want to show your friends. |
| [Team Tree House](https://teamtreehouse.com/library/html/introduction/) | Their videos are extremely comprehensive and thorough.                                  | It takes a _very_ long time to get through and are very passive.                |
