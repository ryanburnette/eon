# arch

This is the arch hugo theme... a work in progress.

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
(cd themes/arch; scripts/assets-watch)
```

Consider using a development script like the example found in
`scripts/development` when you have multiple processes to spin during
development.

### Production Build

```
(cd themes/arch; scripts/assets-build)
```

### Purge CSS

TODO

### Hash Assets

```
(cd themes/arch; scripts/dist-hash)
```

### Prettier

Why run prettier on your production assets? Well, maybe you shouldn't, but I
like to.

```bash
(cd themes/arch; scripts/dist-prettier)
```

### Remove Empty Lines

```bash
(cd themes/arch; scripts/dist-remove-empty-lines)
```

### Customize

You can copy the webpack configuration files down to your own project, as well
as create a main.scss and main.js in your own project's respective directories.
Include the theme partials, copy partials down and edit them, or override them.

### Hugo Cache

The hugo cache is set to `./.hugo` for easier clearing.

```bash
rm -rf .hugo
```

Make sure `.hugo/` is in the project `.gitignore`.

## Configuration

### Meta Redirect

Set the `redirect` param to the new URL in front-matter to set a meta redirect
on that page.
