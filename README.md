# gmusic-mini-player.js
[![Build Status](https://travis-ci.org/MarshallOfSound/gmusic-mini-player.js.svg?branch=master)](https://travis-ci.org/gmusic-utils/gmusic-theme.js)
[![GitHub release](https://img.shields.io/github/tag/MarshallOfSound/gmusic-mini-player.js.svg)]()
[![Code Climate](https://img.shields.io/codeclimate/github/MarshallOfSound/gmusic-mini-player.js.svg)]()
[![GitHub license](https://img.shields.io/github/license/MarshallOfSound/gmusic-mini-player.js.svg)]()

Browser-side JS library for transforming [Google Music][] into a mini player.

[Google Music]: https://play.google.com/music/

This was built as part of [Google Play Music Desktop Player][], a C# wrapper around [Google Music][].  It was extracted to allow other to make better use of it.

`gmusic-mini-player.js` is not created by, affiliated with, or supported by Google Inc.

[Google Play Music Desktop Player]: https://github.com/MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL-
[Google Music]: https://play.google.com/music/listen

![](https://www.samuel.ninja/img/gpmdp_screen.gif)

## Getting Started
### npm
Install the module with: `npm install gmusic-mini-player.js`.  This module extends on the code utility library `gmusic.js`
so you must include that first.

Once installed, add it to your HTML and access it via `(new window.GMusic(window)).miniPlayer`.

```html
<script src="node_modules/gmusic-mini-player.js/dist/gmusic-mini-player.min.js"></script>
<script>
  window.GPM = new window.GMusic(window); // Our Google Music API
  window.GPM.mini // Our mini player controller
</script>
```

### Vanilla
If you are not using a package manager, download the latest script at:

https://raw.githubusercontent.com/MarshallOfSound/gmusic-mini-player.js/master/dist/gmusic-mini-player.min.js

Then, add it to your HTML and access it via `window.GMusicTheme`.

```html
<script src="gmusic-mini-player.min.js"></script>
<script>
  window.GPM = new window.GMusic(window); // Our Google Music API
  window.GPM.mini // Our mini player controller
</script>
```

## Documentation
`gmusic-theme.js` exposes a new section under `GMusic.js`

### `GMusic.mini`

#### `enable()`
Enables mini player mode

#### `disable()`
Disabled mini player mode

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via `npm run lint` and test via `npm test`.

### Testing
Currently there is no testing framework.  How do we test a theming library????
