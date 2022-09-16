/******************************************************************************
 * This file was generated by langium-cli 0.4.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { AstNode, AstReflection, Reference, ReferenceInfo, isAstNode, TypeMetaData } from 'langium';

export type AbstractElement = EvalExpression | Variable;

export const AbstractElement = 'AbstractElement';

export function isAbstractElement(item: unknown): item is AbstractElement {
    return reflection.isInstance(item, AbstractElement);
}

export type Expression = And | BoolConstant | Comparison | Equality | IntConstant | Minus | MulOrDiv | Not | Or | Plus | StringConstant | VariableRef;

export const Expression = 'Expression';

export function isExpression(item: unknown): item is Expression {
    return reflection.isInstance(item, Expression);
}

export interface And extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    left: Expression
    right: Expression
}

export const And = 'And';

export function isAnd(item: unknown): item is And {
    return reflection.isInstance(item, And);
}

export interface BoolConstant extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    value: 'false' | 'true'
}

export const BoolConstant = 'BoolConstant';

export function isBoolConstant(item: unknown): item is BoolConstant {
    return reflection.isInstance(item, BoolConstant);
}

export interface Comparison extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    left: Expression
    op: '<' | '<=' | '>' | '>='
    right: Expression
}

export const Comparison = 'Comparison';

export function isComparison(item: unknown): item is Comparison {
    return reflection.isInstance(item, Comparison);
}

export interface Equality extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    left: Expression
    op: '!=' | '=='
    right: Expression
}

export const Equality = 'Equality';

export function isEquality(item: unknown): item is Equality {
    return reflection.isInstance(item, Equality);
}

export interface EvalExpression extends AstNode {
    readonly $container: ExpressionsModel;
    expression: Expression
}

export const EvalExpression = 'EvalExpression';

export function isEvalExpression(item: unknown): item is EvalExpression {
    return reflection.isInstance(item, EvalExpression);
}

export interface ExpressionsModel extends AstNode {
    elements: Array<AbstractElement>
}

export const ExpressionsModel = 'ExpressionsModel';

export function isExpressionsModel(item: unknown): item is ExpressionsModel {
    return reflection.isInstance(item, ExpressionsModel);
}

export interface IntConstant extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    value: number
}

export const IntConstant = 'IntConstant';

export function isIntConstant(item: unknown): item is IntConstant {
    return reflection.isInstance(item, IntConstant);
}

export interface Minus extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    left: Expression
    right: Expression
}

export const Minus = 'Minus';

export function isMinus(item: unknown): item is Minus {
    return reflection.isInstance(item, Minus);
}

export interface MulOrDiv extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    left: Expression
    op: '*' | '/'
    right: Expression
}

export const MulOrDiv = 'MulOrDiv';

export function isMulOrDiv(item: unknown): item is MulOrDiv {
    return reflection.isInstance(item, MulOrDiv);
}

export interface Not extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    expression: Expression
}

export const Not = 'Not';

export function isNot(item: unknown): item is Not {
    return reflection.isInstance(item, Not);
}

export interface Or extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    left: Expression
    right: Expression
}

export const Or = 'Or';

export function isOr(item: unknown): item is Or {
    return reflection.isInstance(item, Or);
}

export interface Plus extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    left: Expression
    right: Expression
}

export const Plus = 'Plus';

export function isPlus(item: unknown): item is Plus {
    return reflection.isInstance(item, Plus);
}

export interface StringConstant extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    value: string
}

export const StringConstant = 'StringConstant';

export function isStringConstant(item: unknown): item is StringConstant {
    return reflection.isInstance(item, StringConstant);
}

export interface Variable extends AstNode {
    readonly $container: ExpressionsModel;
    expression: Expression
    name: string
}

export const Variable = 'Variable';

export function isVariable(item: unknown): item is Variable {
    return reflection.isInstance(item, Variable);
}

export interface VariableRef extends AstNode {
    readonly $container: And | Comparison | Equality | EvalExpression | Minus | MulOrDiv | Not | Or | Plus | Variable;
    variable: Reference<Variable>
}

export const VariableRef = 'VariableRef';

export function isVariableRef(item: unknown): item is VariableRef {
    return reflection.isInstance(item, VariableRef);
}

export type ExpressionsAstType = 'AbstractElement' | 'And' | 'BoolConstant' | 'Comparison' | 'Equality' | 'EvalExpression' | 'Expression' | 'ExpressionsModel' | 'IntConstant' | 'Minus' | 'MulOrDiv' | 'Not' | 'Or' | 'Plus' | 'StringConstant' | 'Variable' | 'VariableRef';

export class ExpressionsAstReflection implements AstReflection {

    getAllTypes(): string[] {
        return ['AbstractElement', 'And', 'BoolConstant', 'Comparison', 'Equality', 'EvalExpression', 'Expression', 'ExpressionsModel', 'IntConstant', 'Minus', 'MulOrDiv', 'Not', 'Or', 'Plus', 'StringConstant', 'Variable', 'VariableRef'];
    }

    isInstance(node: unknown, type: string): boolean {
        return isAstNode(node) && this.isSubtype(node.$type, type);
    }

    isSubtype(subtype: string, supertype: string): boolean {
        if (subtype === supertype) {
            return true;
        }
        switch (subtype) {
            case And:
            case BoolConstant:
            case Comparison:
            case Equality:
            case IntConstant:
            case Minus:
            case MulOrDiv:
            case Not:
            case Or:
            case Plus:
            case StringConstant:
            case VariableRef: {
                return this.isSubtype(Expression, supertype);
            }
            case EvalExpression:
            case Variable: {
                return this.isSubtype(AbstractElement, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'VariableRef:variable': {
                return Variable;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'ExpressionsModel': {
                return {
                    name: 'ExpressionsModel',
                    mandatory: [
                        { name: 'elements', type: 'array' }
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

export const reflection = new ExpressionsAstReflection();