# TechStudio Hugo Theme

This is the TechStudio Hugo theme. It's built for our needs, so it might not
meet yours.

## Assets

The theme contains assets as well as webpack build steps.

### Development

```
npx webpack --config webpack.development.js
```

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
