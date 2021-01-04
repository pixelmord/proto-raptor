# Proto Raptor - A NextJS template for rapid prototyping

As all boilerplates, starterkits are, this is very opinionated and flexible at the same time.

## Features

### Developer tooling

- [x] eslint
- [x] jest
- [x] prettier
- [x] cypress
- [x] local https
- [x] husky
- [x] lint-staged
- [] deploy to vercel button
- [x] commit linter
- [x] semantic release
- [] hygen templates

### i18n

- [x] i18n with next-translate configured for en, de

### SEO

- [] NextSEO pre-configured
- [] Sane defaults for meta tags not included in NextSEO
- [] JSON-LD for articles and website

## Content from MD files

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.
