# TechStudio Hugo Theme

This is the TechStudio Hugo theme. It's built for our needs, so it might not
meet yours.

## Core Concepts

- It's bad to have a partial where there an unequal number of opening and
  closing tags.
- Break things up into tiny, logical, well-defined pieces so it's easy to
  override or use what you need.

## Assets

The theme contains assets as well as webpack build steps.

### Development

Run webpack in watch mode during development.

```
npx webpack --watch --config webpack.development.js
```

Consider using a development script like the example found in
`scripts/development` when you have multiple processes to spin during
development.

### Production Build

```
npx webpack --config webpack.production.js
```

### Customize

You can copy the webpack configuration files down to your own project, as well
as create a main.scss and main.js in your own project's respective directories.
Include the theme partials, copy partials down and edit them, or override them.

## Configuration

### Meta Redirect

Set the `redirect` param to the new URL in front-matter to set a meta redirect
on that page.
