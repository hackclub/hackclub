# `jsbinctl`

This directory contains `jsbinctl`, our build system for the JS Bin examples in
our workshops.

Make sure you have the [`gist`](https://github.com/defunkt/gist) gem installed
before proceeding.

Also, every time we say `jsbinctl`, replace it with a relative path to the
`jsbinctl` script. If you're in the `workshops` directory, you'll want to
replace it with `lib/jsbinctl/jsbinctl`. If you're in the `workshops/portfolio`
directory, you'll want to replace it with `../lib/jsbinctl/jsbinctl`. If you're
modifying a workshop, make sure you're in the workshop directory (ex.
`workshops/twilio`) and use `../lib/jsbinctl/jsbinctl`.

Here's how it works. Your workshop directory structure should look like the
following (where `how_to_make_a_plumbus` is your workshop):

```
workshops/
└── how_to_make_a_plumbus
    ├── examples
    │   ├── empty_site
    │   │   ├── index.html
    │   │   └── styles.css
    │   ├── plumbus_image
    │   │   ├── index.html
    │   │   └── styles.css
    │   └── plumbus_prototype
    │       ├── index.html
    │       ├── main.js
    │       └── styles.css
    ├── it_works.md
    ├── prototyping_the_plumbus.md
    ├── README.md
    └── what_is_a_plumbus.md
```

Each directory in `examples` is an example to upload to JS Bin. You should link
to these in your workshop's Markdown as follows:

```md
Let's build a plumbus. By the end of this workshop, we're going to end up with a
plumbus that looks like [this][plumbus_prototype].

[plumbus_prototype]: https://jsbin.com/gist/206702bfb42906ab3dbf?output
```

You'll want to replace the included JS Bin link with your JS Bin URL. You can
get one by running `jsbinctl upload examples/<directory_name>` (replacing
`<directory_name>` with the name of the directory of the example to upload.)

After you make changes to the local JS Bin example and want to update the link
in the workshop, you can run `jsbinctl update examples/plumbus_prototype` to
update all reference links to the `plumbus_prototype` example.

If you want to update all of the JS Bin example links, then run `jsbinctl update
examples/*` and it'll take care of that for you.

`jsbinctl` doesn't replace the JS Bin example's query string, allowing you to
specify options like `?output` (if you only want the JS Bin to show the rendered
output) and `?html,css` (if you only want the HTML and CSS of the JS Bin to be
shown). It also will replace all reference links that _start_ with the JS Bin
example directory (so you can have multiple reference links for the same
directory). The following examples are all valid:

```md
Let's talk some more about the plumbus. [Click here][plumbus_prototype_output]
to see just our final output from this tutorial.
[Click here](plumbus_prototype_code) to see just the code (with no output). And
[click here](plumbus_prototype_js) to see just our JavaScript and rendered
output.

[plumbus_prototype_output]: https://jsbin.com/gist/206702bfb42906ab3dbf?output
[plumbus_prototype_code]: https://jsbin.com/gist/206702bfb42906ab3dbf?html,css,js
[plumbus_prototype_js]: https://jsbin.com/gist/206702bfb42906ab3dbf?js
```
