---
name: Rails Notes
description: Personal notes app using Rails
author: "@lachlanjc"
---

<!-- TODO: Update images -->

# Rails Notes

So far we've been building one-off static webpages with HTML, CSS, and JavaScript. In this workshop, we'll be building a real notes app!

Links to a live demo and the final code below. This workshop should take around 1 hour.

[**Live Demo**](https://rails-notes-1.eilla.repl.co/)

[**Final Code**](https://replit.com/@eilla/rails-notes-1)

---

We're using a programming language called [Ruby](http://ruby-lang.org), and a framework for building web apps called [Ruby on Rails](http://rubyonrails.org). (A framework makes specific tasks with a programming language easier by including code you'll need so you don't have to write it.)

A few quick terms you should know before we get started:

- **Database:** a place for computers to store data with fast searching. There are many kinds of databases, such as MySQL, Redis, MongoDB, SQLite, and ElasticSearch. We'll be using MySQL in this workshop.
- **Backend:** the side of the website that runs on the server, saving data to the database and returning webpages.
- **Frontend:** the side of the website written in HTML, CSS, and JS that users interact with.
- **Request:** a visit to a specific URL.

<!-- Replit url -->
<!-- At the end, we'll **deploy** the app by uploading the code to a service called [Heroku](https://heroku.com), which runs servers for us without much configuration. -->

---

## Getting set up

1. Log in to [Replit](https://replit.com/).
2. Create a [new project](https://replit.com/new) with the "Rails" template.

<!-- TODO: The database that comes out of the box with Replit is MySQL. Open up `config/database.yml` and you'll be able to see the database credentials. -->

Now, let's start our app's server. Go ahead and click on the "Run" button, and you'll see a few things print in the console. It might take a few seconds for the server to start up.

![](https://cloud-oitd0ebzw-hack-club-bot.vercel.app/1rails-2.png)

Yay! You're on Rails!

---

## How Rails works

We'll get to building in just a moment! First, a quick intro on Rails.

Rails runs on your server, sitting between incoming requests and your code. It's what's called **Model-View-Controller (MVC)** framework:

A **Model** is a structured piece of data. A site like Facebook might have models for `Post` and `Comment`. In this notes app, `Note` is the model. Models have attributes (think form fields), such as `name` or `content`.

A **View** is the content of an actual webpage, like the HTML we've been writing. In Rails, your view files will not end with `.html`, but `.html.erb`. This is _embedded Ruby_: you can embed Ruby code in your webpage using special HTML tags:

```erb
<h1><%= note.name %></h1>
<div><%= note.content %></div>
```

A **Controller** connects _requests_ (like for the `/notes` page) to your _view_, usually referencing a model. A Controller has (typically several) actions, which are different ways to interact with the `Note`. Here are the standard pages:

- **index** — like your `index.html` file. This page usually lists all the items (like notes), from which you can tap to open one individually. URL: `/notes`
- **show** – a page for an individual item (like a note), shown in full detail. URL: `/notes/1`
- **new** – a page with a form for creating a new record. URL: `/notes/new`
- **edit** – a page for editing a specific record. URL: `/notes/1/edit`

Consider an incoming request for `/notes` in our app. The basic lifecycle of the request is like this:

1. **Router.** The Rails router determines what page the user is looking for. These routes are defined in `config/routes.rb`.
2. **Controller.** The routes reference controllers, like the `NotesController`, and a specific action inside that controller (in this case, `index`). Any setup code for that action is run, such as fetching the `Note` objects from the database.
3. **View.** Finally, Rails renders the view HTML for that controller action. This file is located at `app/views/notes/index.html.erb`.

That was a lot to take in! Don't worry if you don't understand it all. Let's write some code and you'll see where each of these pieces fit in.

---

## Start your app

We're building an app for keeping notes. We'll need a `Note` model, the `NotesController` so we can see our notes in our browser, and views for our controller to render. That's a lot to write, but Rails can help out!

Return to your terminal (the one in which your server is not running) and run this command: `bundle exec rails generate scaffold Note name:text content:text`

Wow! That's a lot of things. What did we just do?

- We used a Rails "generator", which creates and fills in a bunch of files so we don't have to.
- We generated a "scaffold", which includes a model, controller, views, and a few other things.
- We made a model called `Note` that has two attributes, `name` and `content`. Both of these attributes are of type `text` (you could also use `number`, `datetime`, etc).

Before seeing what Rails has put together, run `bundle exec rails db:migrate`. This will set up the `Note` model in the database.

In your preview, add `notes` to the end of the URL box, so it says `https://yourusername.repl.co/notes`, and press enter.

![](https://cloud-oitd0ebzw-hack-club-bot.vercel.app/2rails-3.png)

Here's your basic app! Click on "New Note", write in the boxes, and submit the form with the "Create Note" button. Your note has been saved in the database! Click "Back" and you'll see it in your note list. Pretty cool, right? You can edit your note or destroy (delete) it, and add more notes.

It's not required, but poke around and read some of the files Rails wrote for you. What's in your model (`app/models/note.rb`)? What about your controller (`app/controllers/notes_controller.rb`)? The views (`app/views/notes/index.html.erb`, `app/views/notes/show.html.erb`)? Read some of the code, even if you can't yet understand it all.

---

## Customizing your app

While our Notes app has some good functionality, it's not very fun to use. Let's customize it! Here are a few things you can easily change—it's all up to you.

- **Root page.** Open `config/routes.rb` and add a root URL, like this:

```rb
Rails.application.routes.draw do
  root 'notes#index'
  resources :notes
end
```

- **The page title.** You may have noticed your views aren't complete HTML files: they're just what goes inside the `<body>…</body>` HTML. There's a template for this at `app/views/layouts/application.html.erb`. Try a new title (like _Awesome Notes_) by changing what's inside `<title>…</title>` on line 4! When your refresh the page in the preview, you'll see the new title.
- **The notification messages.** After creating a new note, saving changes to a note, or deleting a note, a message notifies the user they were successful. Open `app/controllers/notes_controller.rb` and change the text inside the quotes like `notice: 'Note was…'` text (see line 28), like _We've saved your awesome note!_. Next time you run a request of that type, you'll see your new message.
- **Styling!** You already have some experience writing CSS! Open up `app/assets/stylesheets/scaffolds.scss` and add some styles.

<!-- TODO: Add some suggestions here?
import hack club theme css? watercss? -->

![](https://cloud-oitd0ebzw-hack-club-bot.vercel.app/3rails-4.png)

---

If you want, show it off on [Slack](https://hackclub.slack.com)'s `#ship` channel 🙂
