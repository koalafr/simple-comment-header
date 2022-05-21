const vscode = require("vscode");
const CHAR_NEW_LINE = "\n";
const CHAR_TAB = "\t";

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log("simple-comment-header is active");
  let disposable = vscode.commands.registerCommand(
    "simple-comment-header.comh",
    function () {
      const editor = vscode.window.activeTextEditor;
      if (editor) return startCommentHeader(editor);
      return false;
    }
  );
  context.subscriptions.push(disposable);
}
exports.activate = activate;

function ShowNotifications() {
  return vscode.workspace.getConfiguration("simple-comment-header").showNotifs;
}

function getFileName() {
  var tmp = vscode.window.activeTextEditor.document.fileName
    .split("\\")
    .reverse();
  return tmp[0];
}

function getUserName() {
  return vscode.workspace.getConfiguration("simple-comment-header").userName;
}

function getCurrentDate() {
  return new Date(Date.now()).toLocaleDateString();
}

function startCommentHeader(editor) {
  /* init */
  var pos = editor.document.positionAt(0);
  var firstLine = editor.document.lineAt(0);
  var openLine = "/*" + CHAR_NEW_LINE;
  var userNameLine = "**" + CHAR_TAB + getUserName() + CHAR_NEW_LINE;
  var DateLine = "";
  var fileNameLine = "";
  var closeLine = "*/" + CHAR_NEW_LINE + CHAR_NEW_LINE;

  /* if already comment on first line, don't add a header */
  if (firstLine.text === "/*") {
    console.log("Header file already created.");
    /* Show Notifications */
    if (ShowNotifications())
      vscode.window.showWarningMessage("Header file already created.");
    return false;
  }

  /* if showDate */
  if (vscode.workspace.getConfiguration("simple-comment-header").showDate) {
    DateLine =
      "**" + CHAR_TAB + "Created" + CHAR_TAB + getCurrentDate() + CHAR_NEW_LINE;
  }
  /* if showFileName */
  if (vscode.workspace.getConfiguration("simple-comment-header").showFileName) {
    fileNameLine = "**" + CHAR_TAB + getFileName() + CHAR_NEW_LINE;
  }
  /* Create header */
  var headerComment =
    openLine + userNameLine + DateLine + fileNameLine + closeLine;
  /* Insert header */
  editor.edit((editBuilder) => {
    editBuilder.insert(pos, headerComment);
  });
  console.log("Header file created for " + getFileName());
  /* Show Notifications */
  if (ShowNotifications())
    vscode.window.showInformationMessage(
      "Header file created for " + getFileName()
    );
    return true;
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
