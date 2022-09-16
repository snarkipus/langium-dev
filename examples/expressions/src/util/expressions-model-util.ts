import { AstNode, getDocument } from "langium";

export function isDefinedBefore(from: AstNode, to: AstNode): boolean {
        const fromDocument = getDocument(from);
        const toDocument   = getDocument(to);
        
        // In case a variable from another document is referenced (might be illegal?)
        if (fromDocument !== toDocument) {
            return false;
        }

        // If there is no CST for either 'from' or 'to' (i.e. doesn't exist)
        if (!from.$cstNode || !to.$cstNode) {
            return false;
        }

        const fromPosition  = from.$cstNode.offset;
        const toPosition    = to.$cstNode.offset;
        return fromPosition < toPosition;
}