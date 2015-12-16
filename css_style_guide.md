_This styleguide has been adapted from
https://google.github.io/styleguide/htmlcssguide.xml._

-------------------------------------------------------------------------------

# CSS Guidelines

This is a collection of CSS guidelines that Hack Club workshops should follow to
stay consistent.

**Capitalization** Use only lowercase.

**80 characters wide** Where possible, limit lines to 80 characters wide.

**Indentation** CSS should use 2 spaces per level of indentation.

**Multi-line CSS**
CSS rules should always be multiple lines to reduce merge conflicts.

_Example:_

_Correct:_

```css
.icon {
  width: 16px;
}
```

_Incorrect:_

```css
.icon {width: 16px;}
```

**Single Line Comments**
Single line comments should be encased in `/*` and `*/`. Comments follow regular
indentation practices.

_Example:_ `/* Header */`

**Multi-line Comments**
Multi-line comments should be encased in an opening (`/*`) and closing (`*/`)
comment. Comments follow regular indentation.

_Example:_

```css
p {
  /*
  The following lines are rules that apply to the 'p' selector. Each rule is
  paired with a value after the colon.
  */
  margin: 1em;
  padding: 2em;
  color: white;
  background-color: blue;
}
```

**Declaration Block Separation**
Declarations blocks should include a space between the CSS selector and opening
bracket. There should be no newline between the selector and the opening bracket.

_Example:_

_Correct:_

```css
/* Recommended */
#video {
  margin-top: 1em;
}
```

_Incorrect:_

```css
/* missing space */
#video{
  margin-top: 1em;
}

/* unnecessary line break */
#video
{
  margin-top: 1em;
}
```
