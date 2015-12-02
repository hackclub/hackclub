# `jsbinctl`

This directory contains `jsbinctl`, our build system for the JS Bin examples in
our workshops.

Make sure you have the [`gist`](https://github.com/defunkt/gist) gem installed
before proceeding.

Here's how it works. Your workshop directory structure should look like the
following (where `how-to-make-a-plumbus` is your workshop):

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

[plumbus_prototype]: https://gist.jsbin.com/<gist_id>
```

You can get the `<gist_id>` to use in the link by running `jsbinctl upload
examples/<directory_name>`.

After you make changes to the local JS Bin example and want to update the link
in the workshop, you can run `jsbinctl update examples/plumbus_prototype` to
update all reference links to the `plumbus_prototype` example.

If you want to update all of the JS Bins example links, then run `jsbinctl
update examples/*` and it'll take care of that for you.
