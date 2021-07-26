# Reduced test case for gatsby-remark-images-contentful

The markdown in `./src/markdown/test.md` contains an error, where accidentally an image was used instead of an anchor tag. Now `gatsby-remark-images-contentful` tries to optimize the `.zip` file but fails because the file type is unsupported by Sharp.

## The problem

There is no stack trace leading back to the offending piece of markdown or any indication where the error originated from.

```
❯ npm run develop

> repro-gatsby-img-failure@1.0.0 develop
> gatsby develop

success open and validate gatsby-configs, load plugins - 0.593s
success onPreInit - 0.026s
info One or more of your plugins have changed since the last
time you ran Gatsby. As
a precaution, we're deleting your site's cache to ensure
there's no stale data.
success initialize cache - 0.056s
success copy gatsby files - 0.073s
success Compiling Gatsby Functions - 0.264s
success onPreBootstrap - 0.276s
success createSchemaCustomization - 0.053s
success Checking for changed pages - 0.001s
success source and transform nodes - 0.117s
success building schema - 0.547s
success createPages - 0.001s
success createPagesStatefully - 0.066s
info Total nodes: 33, SitePage nodes: 4 (use --verbose for
breakdown)
success Checking for changed pages - 0.002s
success update schema - 0.075s
success write out redirect data - 0.007s
success onPostBootstrap - 0.003s
info bootstrap finished - 4.110s
success onPreExtractQueries - 0.001s
success extract queries from components - 0.299s
success write out requires - 0.006s

 ERROR

Input buffer contains unsupported image format



  Error: Input buffer contains unsupported image format

not finished run page queries - 10.025s

npm ERR! code 1
npm ERR! path /Users/bart.veneman/www/sandbox/gatsby-repro-img-failure
npm ERR! command failed
npm ERR! command sh -c gatsby develop

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/bart.veneman/.npm/_logs/2021-07-26T12_47_47_287Z-debug.log
```

## Desired solution

A clear stack trace leading back to the markdown or AST containing the troublesome image.
