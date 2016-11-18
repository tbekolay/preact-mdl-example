preact-mdl-example
====

An example using [preact](https://github.com/developit/preact),
[preact-router](https://github.com/developit/preact-router),
and [preact-mdl](https://github.com/developit/preact-mdl)
with TypeScript and Webpack.

Note that this current relies on development version of
preact-router and preact-mdl,
as the built-in type definitions have not yet been released.

Installation
----

1. `git clone https://github.com/tbekolay/preact-mdl-example.git`
2. `cd preact-mdl-example`
3. `npm install`


Usage
----

For development, I recommend using

```bash
npm run debug
```

and navigating to <http://localhost:8080/>.
The page will automatically be reloaded if
any of the files change.

To build files that can be statically hosted, do

```bash
npm run build
```

The created files will be placed in the `dist` folder.

License
----

MIT
