# Simple Comment Header

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

## License

[MIT](LICENSE)

## Release Notes

[ChangeLog](CHANGELOG.md)
