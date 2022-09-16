// import { AstNode, DefaultDocumentSymbolProvider, LangiumDocument, MaybePromise, streamContents } from "langium";
import { DefaultDocumentSymbolProvider } from "langium";
// import { DocumentSymbol, SymbolKind } from "vscode";
import { HelloWorldServices } from './hello-world-module';

export class HelloWorldDocumentSymbolProvider extends DefaultDocumentSymbolProvider {

    constructor(services: HelloWorldServices) {
        super(services);
    }

    // getSymbols(document: LangiumDocument): MaybePromise<DocumentSymbol[]> {
    //     return this.getSymbol(document, document.parseResult.value);
    // }

    // protected getSymbol(document: LangiumDocument, astNode: AstNode): DocumentSymbol[] {
    //     const node = astNode.$cstNode;
    //     const nameNode = this.nameProvider.getNameNode(astNode);
    //     if (nameNode && node) {
    //         const name = this.nameProvider.getName(astNode);
    //         return [{
    //             kind: this.getSymbolKind(astNode.$type),
    //             name: name ?? nameNode.text,
    //             range: node.range,
    //             selectionRange: nameNode.range,
    //             children: this.getChildSymbols(document, astNode)
    //         }];
    //     } else {
    //         return this.getChildSymbols(document, astNode) || [];
    //     }
    // }

    // protected getChildSymbols(document: LangiumDocument, astNode: AstNode): DocumentSymbol[] | undefined {
    //     const children: DocumentSymbol[] = [];

    //     for (const child of streamContents(astNode)) {
    //         const result = this.getSymbol(document, child);
    //         children.push(...result);
    //     }
    //     if (children.length > 0) {
    //         return children;
    //     }
    //     return undefined;
    // }

    // protected getSymbolKind(type: string): SymbolKind {
    //     return SymbolKind.Field;
    // }
}