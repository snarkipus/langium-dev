import { expectError, expectNoIssues, validationHelper, ValidationResult } from 'langium/test';
import { ExpressionsModel } from '../language-server/generated/ast';
import { createExpressionsServices } from '../language-server/expressions-module';
import { EmptyFileSystem } from 'langium';

const services = createExpressionsServices(EmptyFileSystem).Expressions;
const validate = validationHelper<ExpressionsModel>(services);

describe('Validator Test: Valid Declaration', () => {
    const text=`
    var j = 10
    var i = j
    `;

    let validationResult: ValidationResult<ExpressionsModel>;

    beforeAll(async () => {
        validationResult = await validate(text);
    });

    it('Find no issues in valid declarations', () => {
        expectNoIssues(validationResult);
    });
});

describe('Validator Test: Invalid Forward Reference', () => {
    const text=`
    var i = j
    var j = 10
    `;

    let validationResult: ValidationResult<ExpressionsModel>;

    beforeAll(async () => {
        validationResult = await validate(text);
    });

    it('Assert an error with an invalid forward reference', () => {
        const rule = validationResult.document.parseResult.value.elements[0];
        expectError(validationResult, 'variable forward reference not allowed.',
        {
            node: rule,
            property: {
                name: 'expression'
            }
        });
    });
});