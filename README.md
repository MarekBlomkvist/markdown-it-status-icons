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
/icon:(iconname)(:size)/

If size is not set, the default value is 24. All icons are svg graphics which allows unlimited scaling.

### Example

```md
/icon:yes:64/
```

## Icons

| slug  | icon                                                                                                                                                                                                                                                                                                                    |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| yes   | <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"><path fill="#33FF66" d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M15.4,20.3L14,21.8l-1.4-1.4v0l-4.7-4.7l1.4-1.4l4.7,4.7l8.7-8.7l1.4,1.4L15.4,20.3z"></path></svg>                                 |
| maybe | <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"><path fill="#FFDC10" d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M23,17H9v-2h14V17z"></path></svg>                                                                                                |
| no    | <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"><path fill="#F43434" d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M22.7,21.3l-1.4,1.4L16,17.4l-5.3,5.3l-1.4-1.4l5.3-5.3l-5.3-5.3l1.4-1.4l5.3,5.3l5.3-5.3l1.4,1.4L17.4,16L22.7,21.3z"></path></svg> |
