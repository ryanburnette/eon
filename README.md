# Arc

> Why is the sky red? Why are stop signs round? Is it weird that Luke kissed his
> sister in Star Trek?

This is Arc. Arc is a Hugo theme with styles based on Bulma. Hopefully it will
be the last website I ever build.

## Pet Peeves

- It is bad to have a partial where there an unequal number of opening and
  closing tags.
- Break things up into tiny, logical, well-defined pieces. Use what works.
  Override what doesn't work.

## Global Dependencies

Install this stuff before you try to use Arc.

- Hugo
- Node.js
  - [Prettier](https://prettier.io/)
  - [JSHint](https://github.com/jshint/jshint)
  - [hash-assets](https://git.ryanburnette.com/ryanburnette/hash-assets)
  - [html-remove-empty-lines](https://git.ryanburnette.com/ryanburnette/html-remove-empty-lines)
  - [PurgeCSS](https://purgecss.com/)
- [walkdo](https://git.ryanburnette.com/ryanburnette/walkdo)

Consider using [Webinstall.dev](https://webinstall.dev) for Hugo and Node.js.
Node.js comes with NPM which will be used to install the Node.js global
dependencies. For walkdo, you'll have to download the binary from the project
page and put it in your path.

Here are some install commands for convenience.

```bash
curl https://webinstall.dev/hugo | bash
curl https://webinstall.dev/node@lts | bash
```

```bash
npm install -g npm prettier jshint @ryanburnette/hash-assets @ryanburnette/html-remove-empty-lines
```

```bash
curl https://git.ryanburnette.com/attachments/1c1d163e-df71-4a2c-b373-86ec8dbcef61 --output walkdo.tar.gz
tar zxf walkdo.tar.gz
chmod +x walkdo
rm walkdo.tar.gz
mv walkdo ~/bin
```

## Build

### Modifying Hugo Dist

What's up with all these global dependencies for the build process? Why are you
running Prettier on the dist HTML? Wait, you're grooming the output? Yes, that's
right. I understand there are several reasons someone might not like that. You
don't have to do it if you don't want to. It's just something I like to do.

## Development

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

### Hugo Gotcha

You can't have HTML comments in Hugo layouts, so you won't want Prettier running
on those files. You must create a `.prettierignore` in the root of your project
and ignore any layout files.

```
# .prettierignore
layouts/**/*.html
themes/arc/layouts/**/*.html
```

## Configuration

### Meta Redirect

Set the `redirect` param to the new URL in front-matter to set a meta redirect
on that page.
