// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "simple-comment-header" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "simple-comment-header.hcom",
    function () {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        var userName = vscode.workspace.getConfiguration(
          "simple-comment-header"
        ).userName;
        var currentDate = new Date(Date.now()).toLocaleDateString();
        var fileName = editor.document.fileName.split("\\").reverse();
        star_head_comments(editor, userName, currentDate, fileName[0]);
      }
    }
  );

  context.subscriptions.push(disposable);
}
exports.activate = activate;

function star_head_comments(editor, userName, currentDate, fileName) {
  var pos = editor.document.positionAt(0);
  var firstLine = editor.document.lineAt(0);
  console.log(firstLine);
  if (firstLine.text === "/*") {
    vscode.window.showWarningMessage("Header file already created.");
  } else {
    var mydate = "";
    if (vscode.workspace.getConfiguration("simple-comment-header").showDate) {
      mydate = "\n** Created " + currentDate;
    }
    var headerComment =
      "/*\n** " + userName + mydate + "\n** " + fileName + "\n*/\n\n";
    editor.edit((editBuilder) => {
      editBuilder.insert(pos, headerComment);
    });
    vscode.window.showInformationMessage("Header file created for " + fileName);
  }
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
