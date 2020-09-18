# Arc

> Why is the sky red? Why are stop signs round? Is it weird that Luke kissed
> his sister in Star Trek?

This is Arc. Arc is a Hugo theme with styles based on Bulma. Hopefully it will
be the last website I ever build.

## Pet Peeves

- It is bad to have a partial where there an unequal number of opening and
  closing tags.
- Break things up into tiny, logical, well-defined pieces. Use what works.
  Override what doesn't work.

## Dependencies

Install this stuff before you try to use Arc.

- Hugo
- Node.js
- walkdo https://git.ryanburnette.com/ryanburnette/walkdo

Consider using [Webinstall.dev](https://webinstall.dev) for Hugo and Node.js.
For walkdo, you'll have to download the binary from the project page and put it
in your path.

## Assets

The theme contains assets as well as webpack build steps.


### Development

Run webpack in watch mode during development.

```bash
(cd themes/arc; scripts/assets-watch)
```

Consider using a development script like the example found in
`scripts/development` when you have multiple processes to spin during
development.

### Production Build

```
(cd themes/arc; scripts/assets-build)
```

### Purge CSS

TODO

### Hash Assets

```
(cd themes/arc; scripts/dist-hash)
```

### Prettier

Why run prettier on your production assets? Well, maybe you shouldn't, but I
like to.

```bash
(cd themes/arc; scripts/dist-prettier)
```

### Remove Empty Lines

```bash
(cd themes/arc; scripts/dist-remove-empty-lines)
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
