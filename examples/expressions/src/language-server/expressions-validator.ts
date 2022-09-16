import { AstNode, getContainerOfType, ValidationAcceptor, ValidationChecks, ValidationRegistry } from 'langium';
import { ExpressionsAstType, isVariable, VariableRef } from './generated/ast';
import type { ExpressionsServices } from './expressions-module';
import { isDefinedBefore } from '../util/expressions-model-util';

/**
 * Registry for validation checks.
 */
export class ExpressionsValidationRegistry extends ValidationRegistry {
    constructor(services: ExpressionsServices) {
        super(services);
        const validator = services.validation.ExpressionsValidator;
        const checks: ValidationChecks<ExpressionsAstType> = {
            VariableRef: validator.checkForwardReference
        };
        this.register(checks, validator);
    }
}

export namespace IssueCodes {
    export const ForwardReference = 'forward-reference';
}

/**
 * Implementation of custom validations.
 */
export class ExpressionsValidator {
    checkForwardReference(varRef: VariableRef, accept: ValidationAcceptor): void {
        let parent: AstNode | undefined = getContainerOfType(varRef, isVariable);
        
        if (!parent) {
            parent = varRef;
        }

        const variable = varRef.variable.ref;
        if (variable) {
            if ( parent === variable || !isDefinedBefore(variable, varRef) ) {
                accept(
                    'error',
                    'variable forward reference not allowed.',
                    {
                        node: varRef,
                        property: 'variable',
                        code: IssueCodes.ForwardReference
                    }
                );
            } 
        }
    }
}
