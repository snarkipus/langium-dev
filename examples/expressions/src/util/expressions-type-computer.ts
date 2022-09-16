import { Expression, Plus, VariableRef } from '../language-server/generated/ast';

export interface ExpressionsType {
    toString(): string;
}

export class IntType implements ExpressionsType {
    toString(): string {
        return 'int';
    }
}

export class StringType implements ExpressionsType {
    toString(): string {
        return 'string';
    }
}

export class BoolType implements ExpressionsType {
    toString(): string {
        return 'boolean';
    }
}

export class NullType implements ExpressionsType {
    toString(): string {
        return 'null';
    }
}

export class ExpressionsTypeComputer {
    public static STRING_TYPE = new StringType();
    public static INT_TYPE =    new IntType();
    public static BOOL_TYPE =   new BoolType();
    public static NULL_TYPE =   new NullType();

    public static isStringType(type: ExpressionsType): boolean {
       return type.toString() === 'string';
    }

    public static isIntType(type: ExpressionsType): boolean {
        return type.toString() === 'int';
    }

    public static isBoolType(type: ExpressionsType): boolean {
        return type.toString() === 'boolean';
    }

    public static isNullType(type: ExpressionsType): boolean {
        return type.toString() === 'null';
    }

    public static typeFor(expression: Expression): ExpressionsType {
        if (expression.$type === 'Plus') {
            const leftType = ExpressionsTypeComputer.typeFor((expression as Plus).left);
            const rightType = ExpressionsTypeComputer.typeFor((expression as Plus)?.right);
            if (ExpressionsTypeComputer.isStringType(leftType) || ExpressionsTypeComputer.isStringType(rightType)) {
                return ExpressionsTypeComputer.STRING_TYPE;
            } else {
                return ExpressionsTypeComputer.INT_TYPE;
            }
        } else if (expression.$type === 'VariableRef') {
            let variable = (expression as VariableRef).variable;
            return ExpressionsTypeComputer.typeFor(variable.ref!.expression);       
        } else {     
            switch(expression.$type) {
                case 'StringConstant':  return ExpressionsTypeComputer.STRING_TYPE;
                case 'IntConstant':     return ExpressionsTypeComputer.INT_TYPE;
                case 'BoolConstant':    return ExpressionsTypeComputer.BOOL_TYPE;
                case 'Not':             return ExpressionsTypeComputer.BOOL_TYPE;
                case 'MulOrDiv':        return ExpressionsTypeComputer.INT_TYPE;
                case 'Minus':           return ExpressionsTypeComputer.INT_TYPE;
                case 'Comparison':      return ExpressionsTypeComputer.BOOL_TYPE;
                case 'Equality':        return ExpressionsTypeComputer.BOOL_TYPE;
                case 'And':             return ExpressionsTypeComputer.BOOL_TYPE;
                case 'Or':              return ExpressionsTypeComputer.BOOL_TYPE;
                default:                return ExpressionsTypeComputer.NULL_TYPE;
            }
        }
    }
}