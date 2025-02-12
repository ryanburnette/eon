# [eon](https://github.com/ryanburnette/eon)

This is eon, it's a Hugo theme and custom Bulma implementation used for building
websites.

It looks a little something like this...

![eon](https://user-images.githubusercontent.com/2252601/128049346-f187bb73-8d05-47e5-8ef6-283d8517190a.png)

Here are some sites that use eon:

- [ryanburnette.com](https://ryanburnette.com)
- [persyburnette.com](https://prayersforpersy.com)
- [therootcompany.com](https://therootcompany.com)

## Features

- decent Hugo theme
- provides a decent implementation of Bulma to get you started
- provides scripts for getting the site built
- webpack asset build
- hash assets
- prettier on the dist
- remove empty lines from dist html

## Rules to live by

- Partials should never have an unequal number of opening and closing tags.
- Break things up into small, easy-to-understand, well-defined pieces. Use what
  makes sense.

## Install

First, have a look at the
[Hugo Quick Start](https://gohugo.io/getting-started/quick-start/) if you
haven't already familiarized.

You'll need Hugo installed at the very least. You'll need git. You'll need Node
16 if you're going to be building assets. See [webi](https://webinstall.dev) for
installing environmental dependencies.

Create a Hugo site and add the eon theme.

```bash
hugo new site example.com
cd example.com
git init
git submodule add https://github.com/ryanburnette/eon themes/eon
```

Get to work.

```bash
pushd ./themes/eon/
  npm ci
popd
./themes/eon/scripts/development
```

**IMPORTANT**: Both `webpack` and `hugo` will be running their servers. Check
the output message to be sure, but Hugo will probably be running on port 3000:

```txt
http://localhost:3000/
```

## Update

If you'd like to update your submodule of eon and get the latest version:

```bash
pushd ./themes/eon
  git checkout master
  git pull
popd
git add ./themes/eon
git commit -m "update eon"
git submodule init
git submodule update
```

## Configure

For the examples we assume you have a single `config.yaml` file. We're using
yaml, but Hugo has other options.

```yaml
theme: eon
```

### Meta Redirect

Set the `redirect` param to the new URL in front matter to set a meta redirect
on that page.

### Suggest Edit

If you like having an edit button on your posts for convenience, set `suggest_edit`
to the text you wish to display (you'll also need to set the `git_*` stuff in
order to construct the link).

```yaml
# config.yaml
Params:
  suggest_edit: 'Suggest Edit'
  git_branch: main
  git_host: github
  git_repo: 'https://github.com/<username>/<project>'
```

If `git_repo`, etc are set, they will also appear in the `<head>` like this:

```html
<meta name="git_repo" content="https://github.com/YOUR_USER/YOUR_REPO" />
```

### Utterances

To enable [utterances](https://github.com/utterance/utterances), set
`utterances_repo` in your site params. Utterances comments will be enabled on
all posts by default, but you can specify boolean value `utterances_default` in
your site params.

```yaml
# config.yaml
Params:
  utterances_repo: '[github_username]/[repo]'
  utterances_default: [true*|false]
```

You can override whether utterances will be displayed by default in a post's
front matter by setting a boolean value on `utterances` there. You can also
override a post's `utterances_term` by setting it in the post's front matter.

```yaml
utterances: [true|false]
utterances_term: [term]
```

### Disqus

To enable [Disqus](https://disqus.com/), set `disqus_url` in your site params.
The `disqus_url` is the `embed.js` URL found in your Disqus code in your
installation guide. Disqus comments will be enabled on all posts by default, but
you can specify boolean value `disqus_default` in your site params.

```yaml
# config.yaml
Params:
  disqus_url: 'https://[site_name].disqus.com/embed.js'
  disqus_default: [true*|false]
```

You can override whether Disqus will be displayed by default in a post's front
matter by setting a boolean value on `disqus` there. You can override a post's
Disqus url by setting `disqus_page_url` by setting it in the post's front
matter.

```yaml
disqus: [true|false]
disqus_page_url: [url]
```

## Assets

TODO write about theme assets vs project assets

### Rebuild Assets

If you change the styles and want to rebuild the css files, here's how:

```bash
npm install
pushd themes/eon/
  npm install
popd

# this script runs all the build steps, take a look at the source to customize
bash themes/eon/scripts/build
```

Running `./themes/eon/scripts/dist-purgecss` will reduce the CSS size by about
95%.

## Scripts

The scripts that are included with eon are:

- interpreted by Node.js
- intended to be called from the project directory, ie.
  `themes/eon/scripts/build` ... this may cause the relative paths of the output
  to seem strange when you're running scripts, just remember that they are
  running from the theme directory

### `assets-build`

Builds front-end assets with Webpack for production.

### `assets-watch`

Watch front-end assets and rebuild for development.

### `build`

### `dist-hash`

Run [@ryanburnette/hash-assets](https://github.com/ryanburnette/hash-assets) on
the site.

### `dist-prettier`

Run prettier on the site. It might seem weird to run Prettier on your dist, but
I like doing so.

- It allows me to keep partials organized and indented in their own context.
- It makes the dist HTML more readable.
- It helps me find errors in the dist HTML.

### `dist-purgecss`

Run purgecss on the dist.

### `dist-remove-empty-lines`

Run
[@ryanburnette/html-remove-empty-lines](https://github.com/ryanburnette/html-remove-empty-lines)
on the dist HTML.

## Notes

### Node Version

expected to run on node@18

### Hugo Cache

The hugo cache is set to `./.hugo` for easier clearing.

```bash
rm -rf .hugo
```

Make sure `.hugo/` is in the project's `.gitignore`.

### Hugo Gotcha

You can't have HTML comments in Hugo layouts, so you won't want Prettier running
on those files. You must create a `.prettierignore` in the root of your project
and ignore any layout files.

```
# .prettierignore
layouts/**/*.html
themes/eon/layouts/**/*.html
```
