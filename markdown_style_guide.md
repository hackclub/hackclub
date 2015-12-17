_This document has been adapted from
https://github.com/carwin/markdown-styleguide._

-------------------------------------------------------------------------------

# Markdown Style Guidelines

This document contains formatting standards Hack Club uses for creating
readable, consistent files using Markdown.

**Table of Contents**

- [Markdown Style Guidelines](#markdown-style-guidelines)
  - [General conventions](#general-conventions)
  - [Headings](#headings)
  - [Lists](#lists)
  - [Code](#code)
  - [Horizontal rules](#horizontal-rules)

## General Conventions

- Wrap all lines at 80 characters.
- Denote **bold** text using the asterisk format `**bold text**`.
- Denote _italic_ text using the underscore format: `_emphasized text_`.
- Force a linebreak by ending a line with two spaces, no more.
- Quote marks (`>`) should be on all quoted lines, not just the beginning of a
  quote.

## Headings

- Headers must use the `atx-style` with no closing `#` character `# Big heading`.
- Include a space between the `#` and the text of the header `# Good heading`
  `#Bad heading`.
- Headers spanning more than 80 characters should be reevaluated.
- Headers must be preceded and followed by a blank line except at the beginning
  of a file.
- Headers must follow the
  [titlecase capitalisation](http://www.grammar-monster.com/lessons/capital_letters_title_case.htm)
  scheme.

Good:

```
# Header 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam dui vel
posuere facilisis.

## Header 2

Mauris vulputate justo nisi, vitae euismod mauris euismod eu. Integer vitae
hendrerit nibh, sed porta sapien. Duis consectetur lacus id arcu consequat
aliquet.

### Code on Code

Sed congue iaculis dapibus. Morbi et tempor nisl, sed mattis quam. Morbi
porttitor pharetra urna et dictum. Integer laoreet consequat velit, ac egestas
velit accumsan non.
```

Less than ideal:

```
# Party of the West
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam dui vel
posuere facilisis.

## Header 2

Mauris vulputate justo nisi, vitae euismod mauris euismod eu. Integer vitae
hendrerit nibh, sed porta sapien. Duis consectetur lacus id arcu consequat
aliquet.
### Header 3


Sed congue iaculis dapibus. Morbi et tempor nisl, sed mattis quam. Morbi
porttitor pharetra urna et dictum. Integer laoreet consequat velit, ac egestas
velit accumsan non.
```

## Lists

- **List items** should be indented two spaces (including when working with
  ordered lists).
- **List items** should begin with a capital letter.
- Lists must be preceded and followed by a blank line.
- Unordered list items should use `-` instead of `*` or `+`.

```
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

- List item 1.
- List item 2.
  - Child list item.

1. Numbered list item 1.
2. Numbered list item 2.
  - Child list item.
  - [ ] Once upon a time in a Hack Club far far away, there existed a markdown
    rule inwhich all checkbox must indent to the space after the `-`.
```

- List item lines exceeding 80 characters should, when wrapped, align vertically
  with the beginning of the preceding line's text.

```
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam dui vel
  posuere facilisis.
```

## Code

- **Inline code** must use single backticks `` `.this-is-good` ``.
  - Contents must be either **code**, a **filename** or a **shell command**.
- **Fenced code blocks** must be preceded and followed by a blank line.

        Here's an example:

        ```
        function test() {
          console.log("notice the blank line before this function?");
        }
        ```

        Let's talk about a few more things.

## Horizontal rules

Use hyphens for horizontal rules. Horizontal rules should span 80 characters and
must be preceded and followed by a blank line, unless at the beginning or end of
a file.

```
Lorem ipsum dolor sit amet.

-------------------------------------------------------------------------------

Sed congue iaculis.
```
