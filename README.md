# markdown-it-status-icons

> Plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser, adding simple status icons support.

## Install

```bash
npm install markdown-it-status-icons
```

## Setup

```js
const md = require('markdown-it')();
const statusIcons = require('markdown-it-status-icons');

md.use(statusIcons);
```

## Use

To use the icons use the following syntax:

```md
/icon:(iconname)(:size)/
```

If size is not set, the default value is 24. All icons are svg graphics which allows unlimited scaling.

### Examples

```md
/icon:no/
/icon:yes:64/
```

## Icons

| slug  | icon                           |
| ----- | ------------------------------ |
| yes   | ![yes-icon](icons/yes.svg)     |
| maybe | ![maybe-icon](icons/maybe.svg) |
| no    | ![no-icon](icons/no.svg)       |

## License

[MIT](https://github.com/Marel-it/markdown-it-emoji/blob/master/LICENSE)
