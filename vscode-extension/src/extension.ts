import * as vscode from 'vscode';

// TODO(@@dd): externalize extension config
const DELAY = 100; // delay in ms until a render can be cancelled on subsequent document changes

// called by vscode on activation event, see package.json "activationEvents"
export function activate(context: vscode.ExtensionContext): void {

	// define decoration type
	const decorationType = vscode.window.createTextEditorDecorationType(decorationRenderOptions());

	// creates a cancelable decorator that delays the update
	const decorator = cancelableDecorator((editor) => editor.setDecorations(decorationType, createDecorations(editor.document)));

	// initiate first decoration
	decorator();

	// register editor & document change listeners
	vscode.window.onDidChangeActiveTextEditor(() => decorator(), null, context.subscriptions);
	vscode.workspace.onDidChangeTextDocument(() => decorator(), null, context.subscriptions);
}

// internal type definitions
type Decorator = (editor: vscode.TextEditor) => void;
type CancelableDecorator = () => void;
type TimeoutID = ReturnType<typeof setTimeout>; // NodeJS.Timer (node) or number (browser)

// adds the ability to cancel decoration requests
function cancelableDecorator(decorator: Decorator, delay: number = 500): CancelableDecorator {
	let timeout: TimeoutID | undefined; // works for window.setTimeout() & NodeJS
	return () => {
		const editor = vscode.window.activeTextEditor;
		timeout && clearTimeout(timeout);
		timeout = editor && setTimeout(() => decorator(editor), DELAY);
	};
}

// scans the document for decoratable regions and returns decorated ranges
function createDecorations(document: vscode.TextDocument): vscode.DecorationOptions[] {
	// TODO(@@dd): change implementation
	const regEx = /(\S+)`([^`]*)`/g; // TODO(@@dd): consider comments, strings and string substitutions
	const text = document.getText();
	const decorations: vscode.DecorationOptions[] = [];
	let match: RegExpExecArray | null;
	while ((match = regEx.exec(text))) {
		const name = match[1];
		const nameIndex = match.index;
		if (isSmartTemplate(name, nameIndex)) {
			const text = match[2];
			const textIndex = nameIndex + name.length + 1;
			decorateText(document, decorations, text, textIndex);
		}
	}
	return decorations;
}

// TODO(@@dd): replace this heuristic with a proper grammar
function decorateText(document: vscode.TextDocument, decorations: vscode.DecorationOptions[], text: string, textIndex: number): void {
	const indentation = findIndentation(text);
	const regEx = /[^\r?\n]+/g;
	let match: RegExpExecArray | null;
	while ((match = regEx.exec(text))) {
		const startIndex = textIndex + match.index;
		const startPos = document.positionAt(startIndex + indentation);
		const endPos = document.positionAt(startIndex + match[0].trimRight().length);
		if (startPos.isBefore(endPos)) {
			const range = new vscode.Range(startPos, endPos);
			decorations.push({ range });
		}
	}
}

 // TODO(@@dd): find bug
function findIndentation(text: string): number {
    const indents = text.split(/[\r?\n]/g).map(line => line.trimRight()).filter(line => line.length > 0).map(line => line.search(/\S|$/));
    const min = indents.length === 0 ? 0 : Math.min(...indents); // min(...[]) = min() = Infinity
    return Math.max(0, min);
}

function isSmartTemplate(name: string, index: number): boolean {
	// TODO(@@dd): check if symbol(name)'s type resolves to smart template
	return name === "indent" && index !== -1;
}

// styling of a decorated range
function decorationRenderOptions(): vscode.DecorationRenderOptions {
	return { // TODO(@@dd): externalize extension config
		overviewRulerLane: vscode.OverviewRulerLane.Right,
		light: {
			backgroundColor: 'rgba(0, 0, 0, 0.13)',
			overviewRulerColor: 'rgba(0, 0, 0, 0.13)'
		},
		dark: {
			backgroundColor: 'rgba(255, 255, 255, 0.13)',
			overviewRulerColor: 'rgba(255, 255, 255, 0.13)'
		}
	};
}