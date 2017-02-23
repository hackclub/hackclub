_This document has been adapted from
https://github.com/carwin/markdown-styleguide._

-------------------------------------------------------------------------------

# Markdown Styleguide

This document contains formatting standards Hack Club uses for creating
readable, consistent files using Markdown.

**Table of Contents**

- [Markdown Style Guidelines](#markdown-styleguide)
  - [General conventions](#general-conventions)
  - [Headings](#headings)
  - [Lists](#lists)
  - [Code](#code)
  - [Keyboard Input](#keyboard-input)
  - [Tables](#tables)
  - [Horizontal rules](#horizontal-rules)

## General Conventions

- Denote **bold** text using the asterisk format `**bold text**`.
- Denote _italic_ text using the underscore format: `_emphasized text_`.
- Force a linebreak by ending a line with two spaces, no more.
- Quote marks (`>`) should be on all quoted lines, not just the beginning of a
  quote.

## Headings

- Headers must use the `atx-style` with no closing `#` character `# Big heading`.
- Include a space between the `#` and the text of the header `# Good heading`
  `#Bad heading`.
- Headers must be preceded and followed by a blank line except at the beginning
  of a file.
- Headers must follow the
  [titlecase capitalization](http://www.grammar-monster.com/lessons/capital_letters_title_case.htm)
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

## Keyboard Input

Keyboard input should be denoted with the [`<kbd>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd). Multiple keys pressed at once should be delimited by a `+` with no spaces.

```
Now we'll save (with shortcut: <kbd>Ctrl+s</kbd> / <kbd>Cmd+s</kbd>) and open
Live Preview.
```

Keys should be in title case, unless they are individual letters.

| Key               | Humanized Name |
| -----------       | -------------- |
| <kbd>Ctrl</kdb>   | Control        |
| <kbd>Alt</kdb>    | Alt            |
| <kbd>Shift</kdb>  | Shift          |
| <kbd>Enter</kdb>  | Enter          |
| <kbd>s</kdb>      | s              |
| <kbd>Alt+F4</kdb> | Alt F4         |

## Tables

Tables should follow the following example's format:

```
| Clubs                 | Leaders   | Cities          |
| --------------------- | --------- | --------------- |
| Fictional High School | Jenny Doe | Los Angeles     |
| Academy of the Arts   | Ben Doe   | San Francisco   |
| ACME High School      | Mary Doe  | New York        |
```

## Horizontal rules

Use hyphens for horizontal rules. Horizontal rules should span 3 characters and
must be preceded and followed by a blank line, unless at the beginning or end of
a file.

```
Lorem ipsum dolor sit amet.

---

Sed congue iaculis.
```
