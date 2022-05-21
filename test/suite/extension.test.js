const assert = require('assert');
const vscode = require('vscode');

// TODO: test notifications and options -> issue: these tests are not independent

const publisher = "frenchkoala"
const identifier = "simple-comment-header";
const command = "comh";

suite('simple-comment-header extension test suite', async () => {
	vscode.window.showInformationMessage('Starting all basic tests.');
	test('should install extension', async () => {
		const ext = vscode.extensions.getExtension(`${publisher}.${identifier}`);
		assert.notStrictEqual(ext, null, `${identifier} should not be null`);
		const doc = await vscode.workspace.openTextDocument();
		await vscode.window.showTextDocument(doc);
	});
	test('should insert default header', async () => {
		const editor = vscode.window.activeTextEditor;
		assert.notStrictEqual(editor, null, "editor should not be null");
		const success = await vscode.commands.executeCommand(`${identifier}.${command}`);
		assert.equal(success, true, `${identifier} should return true`);
		testLineContains(0, "/*");
	});
	test('should contain default header options', async () => {
		const editor = vscode.window.activeTextEditor;
		assert.notStrictEqual(editor, null, "editor should not be null");
		testLineContains(1, "User name");
		const dateString = new Date(Date.now()).toLocaleDateString();
		testLineContains(2, "Created");
		testLineContains(2, dateString);
		testLineContains(3, "Untitled");
	});
	test('should not insert default header if first line is a comment', async () => {
		const editor = vscode.window.activeTextEditor;
		assert.notStrictEqual(editor, null, "editor should not be null");
		let success = await vscode.commands.executeCommand(`${identifier}.${command}`);
		assert.equal(success, false, `${identifier} should return false`);
	});
});

function testLineContains(lineNum, text) {
	const editor = vscode.window.activeTextEditor;
	const notFound = -1;
	assert.notStrictEqual(editor, null, "editor should not be null");
	assert.notStrictEqual(editor.document, null, "document should not be null");
	assert.strictEqual(lineNum < editor.document.lineCount, true,
		`${lineNum} should be lesser than line count ${editor.document.lineCount}`);
	let testedLine = editor.document.lineAt(lineNum).text;
	assert.notStrictEqual(testedLine.indexOf(text), notFound, `${testedLine} should contain ${text}`);
}
