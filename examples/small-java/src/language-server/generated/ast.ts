/******************************************************************************
 * This file was generated by langium-cli 0.4.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { AstNode, AstReflection, Reference, ReferenceInfo, isAstNode, TypeMetaData } from 'langium';

export type SJExpression = SJAssignment | SJBoolConstant | SJIntConstant | SJMemberSelection | SJNew | SJNull | SJStringConstant | SJSuper | SJSymbolRef | SJThis;

export const SJExpression = 'SJExpression';

export function isSJExpression(item: unknown): item is SJExpression {
    return reflection.isInstance(item, SJExpression);
}

export type SJMember = SJField | SJMethod;

export const SJMember = 'SJMember';

export function isSJMember(item: unknown): item is SJMember {
    return reflection.isInstance(item, SJMember);
}

export type SJNamedElement = SJClass | SJMember | SJSymbol;

export const SJNamedElement = 'SJNamedElement';

export function isSJNamedElement(item: unknown): item is SJNamedElement {
    return reflection.isInstance(item, SJNamedElement);
}

export type SJStatement = SJExpression | SJIfStatement | SJReturn | SJVariableDeclaration;

export const SJStatement = 'SJStatement';

export function isSJStatement(item: unknown): item is SJStatement {
    return reflection.isInstance(item, SJStatement);
}

export type SJSymbol = SJParameter | SJVariableDeclaration;

export const SJSymbol = 'SJSymbol';

export function isSJSymbol(item: unknown): item is SJSymbol {
    return reflection.isInstance(item, SJSymbol);
}

export interface SJAssignment extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    left: SJExpression
    right: SJExpression
}

export const SJAssignment = 'SJAssignment';

export function isSJAssignment(item: unknown): item is SJAssignment {
    return reflection.isInstance(item, SJAssignment);
}

export interface SJBlock extends AstNode {
    readonly $container: SJIfStatement | SJMethod;
    statements: Array<SJStatement>
}

export const SJBlock = 'SJBlock';

export function isSJBlock(item: unknown): item is SJBlock {
    return reflection.isInstance(item, SJBlock);
}

export interface SJBoolConstant extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    value: 'false' | 'true'
}

export const SJBoolConstant = 'SJBoolConstant';

export function isSJBoolConstant(item: unknown): item is SJBoolConstant {
    return reflection.isInstance(item, SJBoolConstant);
}

export interface SJClass extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    members: Array<SJMember>
    name: string
    superClass?: Reference<SJClass>
}

export const SJClass = 'SJClass';

export function isSJClass(item: unknown): item is SJClass {
    return reflection.isInstance(item, SJClass);
}

export interface SJField extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    name: string
    type: Reference<SJClass>
}

export const SJField = 'SJField';

export function isSJField(item: unknown): item is SJField {
    return reflection.isInstance(item, SJField);
}

export interface SJIfStatement extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    elseBlock?: SJBlock
    expression: SJExpression
    thenBlock: SJBlock
}

export const SJIfStatement = 'SJIfStatement';

export function isSJIfStatement(item: unknown): item is SJIfStatement {
    return reflection.isInstance(item, SJIfStatement);
}

export interface SJIntConstant extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    value: number
}

export const SJIntConstant = 'SJIntConstant';

export function isSJIntConstant(item: unknown): item is SJIntConstant {
    return reflection.isInstance(item, SJIntConstant);
}

export interface SJMemberSelection extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    args: Array<SJExpression>
    member: Reference<SJMember>
    methodInvocation: boolean
    receiver: SJExpression
}

export const SJMemberSelection = 'SJMemberSelection';

export function isSJMemberSelection(item: unknown): item is SJMemberSelection {
    return reflection.isInstance(item, SJMemberSelection);
}

export interface SJMethod extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    body: SJBlock
    name: string
    params: Array<SJParameter>
    type: Reference<SJClass>
}

export const SJMethod = 'SJMethod';

export function isSJMethod(item: unknown): item is SJMethod {
    return reflection.isInstance(item, SJMethod);
}

export interface SJNew extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    type: Reference<SJClass>
}

export const SJNew = 'SJNew';

export function isSJNew(item: unknown): item is SJNew {
    return reflection.isInstance(item, SJNew);
}

export interface SJNull extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
}

export const SJNull = 'SJNull';

export function isSJNull(item: unknown): item is SJNull {
    return reflection.isInstance(item, SJNull);
}

export interface SJParameter extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    name: string
    type: Reference<SJClass>
}

export const SJParameter = 'SJParameter';

export function isSJParameter(item: unknown): item is SJParameter {
    return reflection.isInstance(item, SJParameter);
}

export interface SJProgram extends AstNode {
    classes: Array<SJClass>
}

export const SJProgram = 'SJProgram';

export function isSJProgram(item: unknown): item is SJProgram {
    return reflection.isInstance(item, SJProgram);
}

export interface SJReturn extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    expression: SJExpression
}

export const SJReturn = 'SJReturn';

export function isSJReturn(item: unknown): item is SJReturn {
    return reflection.isInstance(item, SJReturn);
}

export interface SJStringConstant extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    value: string
}

export const SJStringConstant = 'SJStringConstant';

export function isSJStringConstant(item: unknown): item is SJStringConstant {
    return reflection.isInstance(item, SJStringConstant);
}

export interface SJSuper extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
}

export const SJSuper = 'SJSuper';

export function isSJSuper(item: unknown): item is SJSuper {
    return reflection.isInstance(item, SJSuper);
}

export interface SJSymbolRef extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    symbol: Reference<SJSymbol>
}

export const SJSymbolRef = 'SJSymbolRef';

export function isSJSymbolRef(item: unknown): item is SJSymbolRef {
    return reflection.isInstance(item, SJSymbolRef);
}

export interface SJThis extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
}

export const SJThis = 'SJThis';

export function isSJThis(item: unknown): item is SJThis {
    return reflection.isInstance(item, SJThis);
}

export interface SJVariableDeclaration extends AstNode {
    readonly $container: SJAssignment | SJBlock | SJClass | SJIfStatement | SJMemberSelection | SJMethod | SJProgram | SJReturn | SJVariableDeclaration;
    expression: SJExpression
    name: string
    type: Reference<SJClass>
}

export const SJVariableDeclaration = 'SJVariableDeclaration';

export function isSJVariableDeclaration(item: unknown): item is SJVariableDeclaration {
    return reflection.isInstance(item, SJVariableDeclaration);
}

export type SmallJavaAstType = 'SJAssignment' | 'SJBlock' | 'SJBoolConstant' | 'SJClass' | 'SJExpression' | 'SJField' | 'SJIfStatement' | 'SJIntConstant' | 'SJMember' | 'SJMemberSelection' | 'SJMethod' | 'SJNamedElement' | 'SJNew' | 'SJNull' | 'SJParameter' | 'SJProgram' | 'SJReturn' | 'SJStatement' | 'SJStringConstant' | 'SJSuper' | 'SJSymbol' | 'SJSymbolRef' | 'SJThis' | 'SJVariableDeclaration';

export class SmallJavaAstReflection implements AstReflection {

    getAllTypes(): string[] {
        return ['SJAssignment', 'SJBlock', 'SJBoolConstant', 'SJClass', 'SJExpression', 'SJField', 'SJIfStatement', 'SJIntConstant', 'SJMember', 'SJMemberSelection', 'SJMethod', 'SJNamedElement', 'SJNew', 'SJNull', 'SJParameter', 'SJProgram', 'SJReturn', 'SJStatement', 'SJStringConstant', 'SJSuper', 'SJSymbol', 'SJSymbolRef', 'SJThis', 'SJVariableDeclaration'];
    }

    isInstance(node: unknown, type: string): boolean {
        return isAstNode(node) && this.isSubtype(node.$type, type);
    }

    isSubtype(subtype: string, supertype: string): boolean {
        if (subtype === supertype) {
            return true;
        }
        switch (subtype) {
            case SJAssignment:
            case SJBoolConstant:
            case SJIntConstant:
            case SJMemberSelection:
            case SJNew:
            case SJNull:
            case SJStringConstant:
            case SJSuper:
            case SJSymbolRef:
            case SJThis: {
                return this.isSubtype(SJExpression, supertype);
            }
            case SJClass:
            case SJMember:
            case SJSymbol: {
                return this.isSubtype(SJNamedElement, supertype);
            }
            case SJField:
            case SJMethod: {
                return this.isSubtype(SJMember, supertype);
            }
            case SJIfStatement:
            case SJReturn:
            case SJExpression: {
                return this.isSubtype(SJStatement, supertype);
            }
            case SJParameter: {
                return this.isSubtype(SJSymbol, supertype);
            }
            case SJVariableDeclaration: {
                return this.isSubtype(SJStatement, supertype) || this.isSubtype(SJSymbol, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'SJClass:superClass': {
                return SJClass;
            }
            case 'SJField:type': {
                return SJClass;
            }
            case 'SJMemberSelection:member': {
                return SJMember;
            }
            case 'SJMethod:type': {
                return SJClass;
            }
            case 'SJNew:type': {
                return SJClass;
            }
            case 'SJParameter:type': {
                return SJClass;
            }
            case 'SJSymbolRef:symbol': {
                return SJSymbol;
            }
            case 'SJVariableDeclaration:type': {
                return SJClass;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'SJBlock': {
                return {
                    name: 'SJBlock',
                    mandatory: [
                        { name: 'statements', type: 'array' }
                    ]
                };
            }
            case 'SJClass': {
                return {
                    name: 'SJClass',
                    mandatory: [
                        { name: 'members', type: 'array' }
                    ]
                };
            }
            case 'SJMemberSelection': {
                return {
                    name: 'SJMemberSelection',
                    mandatory: [
                        { name: 'args', type: 'array' },
                        { name: 'methodInvocation', type: 'boolean' }
                    ]
                };
            }
            case 'SJMethod': {
                return {
                    name: 'SJMethod',
                    mandatory: [
                        { name: 'params', type: 'array' }
                    ]
                };
            }
            case 'SJProgram': {
                return {
                    name: 'SJProgram',
                    mandatory: [
                        { name: 'classes', type: 'array' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    mandatory: []
                };
            }
        }
    }
}

export const reflection = new SmallJavaAstReflection();
