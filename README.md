# Simple Comment Header

[![Tests](https://github.com/koalafr/simple-comment-header/actions/workflows/test.yml/badge.svg)](https://github.com/koalafr/simple-comment-header/blob/main/LICENSE)
[![License](https://img.shields.io/github/license/koalafr/simple-comment-header)](https://github.com/koalafr/simple-comment-header/actions/workflows/test.yml)
[![version](https://img.shields.io/github/package-json/v/koalafr/simple-comment-header)](https://github.com/koalafr/simple-comment-header/releases)
[![updated](https://img.shields.io/visual-studio-marketplace/last-updated/frenchkoala.simple-comment-header)](https://marketplace.visualstudio.com/items?itemName=frenchkoala.simple-comment-header)

Simple Comment Header writes a simple comment header to the current window with some useful information.

> \> Insert Comment Header

![Insert Comment Header](https://github.com/koalafr/simple-comment-header/raw/main/img/prev.png)

## Features

Writes a comment header containing the user name, the current date and the file name.

Options to show or hide file name and creation date.

It should not insert headers on files starting with comments.

It DOES NOT update headers based on the settings, you must delete the header and run the command again.

Notifications:

![Notifications](https://github.com/koalafr/simple-comment-header/raw/main/img/notifs.png)

**Supports:**

- C
- C++
- CSS
- Javascript
- Java (untested)
- PHP (untested)
- Swift (untested)
- Any language that uses `/* */` for comments

_Will not function correctly with other programming language, work in progress_

## Usage

### Keyboard

- Shortcut

| key               | command               |
| ----------------- | --------------------- |
| `Shift + Alt + C` | Insert comment header |

### Command Palette

| Command                 | Effect                |
| ----------------------- | --------------------- |
| `Insert Comment Header` | Insert Comment Header |
| `comhead`               | Insert Comment Header |

Example:

![Commands](https://github.com/koalafr/simple-comment-header/raw/main/img/cmd.png)

> `Insert Comment Header` and `comhead` are equivalent.

## Configuration

- `myheader.userName`: Username displayed in the header comment. **Default: User name**
- `myheader.showDate`: If enabled, adds creation date. **Default: true**
- `myheader.showFileName`: If enabled, add current file name. **Default: true**
- `myheader.showNotifs`: If enabled, displays a _Notification_ when creating a header and a _Warning_ if the header has already been created. **Default: true**

## Testing

### CI

[Automated testing via github actions workflows](https://github.com/koalafr/simple-comment-header/actions/workflows/test.yml)

### CLI

- Install nodejs and dependencies
- `npm install`
- Run tests
- `npm run test`

You can use `vsce` to package and test your changes. [vsce doc](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)

## Contributing

nocode: Feel free to open an issue to discuss features, requests, questions ...

code: Fork + Issue (why, what) + PR (tested if possible) + Documentation

Thanks !

## License

[MIT](LICENSE)

## Release Notes

[ChangeLog](CHANGELOG.md)
