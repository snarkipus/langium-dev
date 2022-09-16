import { parseHelper } from 'langium/test';
import { ExpressionsTypeComputer, ExpressionsType } from '../util/expressions-type-computer';
import { createExpressionsServices } from '../language-server/expressions-module';
import { EmptyFileSystem } from 'langium';
import { ExpressionsModel, Expression } from '../language-server/generated/ast';

const services = createExpressionsServices(EmptyFileSystem).Expressions;
const helper = parseHelper<ExpressionsModel>(services);

describe('Expressions Type Computer', () => {

    it('computes: integer constants', async () => {
        await assertEvalType('10', ExpressionsTypeComputer.INT_TYPE);
    });

    it('computes: string constants', async () => {
        await assertEvalType('"foo"', ExpressionsTypeComputer.STRING_TYPE);
    });

    it('computes: boolean constants', async () => {
        await assertEvalType('true', ExpressionsTypeComputer.BOOL_TYPE);
    });

    it('computes: NOT expressions', async () => {
        await assertEvalType('!true', ExpressionsTypeComputer.BOOL_TYPE);
    });

    it('computes: multiplication expressions', async () => {
        await assertEvalType('1 * 2', ExpressionsTypeComputer.INT_TYPE);
    });

    it('computes: division expressions', async () => {
        await assertEvalType('1 / 2', ExpressionsTypeComputer.INT_TYPE);
    });

    it('computes: minus expressions', async () => {
        await assertEvalType('1 - 2', ExpressionsTypeComputer.INT_TYPE);
    });

    it('computes: comparison expressions', async () => {
        await assertEvalType('1 < 2', ExpressionsTypeComputer.BOOL_TYPE);
    });

    it('computes: equality expressions', async () => {
        await assertEvalType('1 == 2', ExpressionsTypeComputer.BOOL_TYPE);
    });

    it('computes: AND expressions', async () => {
        await assertEvalType('true && true', ExpressionsTypeComputer.BOOL_TYPE);
    });

    it('computes: OR expressions', async () => {
        await assertEvalType('true || true', ExpressionsTypeComputer.BOOL_TYPE);
    });

    it('computes: numeric addition', async () => {
        await assertEvalType('1 + 2', ExpressionsTypeComputer.INT_TYPE);
    });

    it('computes: string addition', async () => {
        await assertEvalType('"a" + "b"', ExpressionsTypeComputer.STRING_TYPE);
    });

    it('computes: number and string addition', async () => {
        await assertEvalType('"a" + 2', ExpressionsTypeComputer.STRING_TYPE);
    });

    it('computes: variable references', async () => {
        await assertType('var i = 0 eval i', ExpressionsTypeComputer.INT_TYPE);
    })

    const assertEvalType = async (
        input: string,
        expectedType: ExpressionsType
        ) => {
            await assertType(`eval ` + input, expectedType);
        }

    const assertType = async (
        input: string | Expression,
        expectedType: ExpressionsType
        ) => {
            if (typeof input === 'string') {
                let parse = await helper(input);
                const elements = parse.parseResult.value.elements;
                assertType(elements[elements.length - 1].expression, expectedType);
            } else {
                expect(ExpressionsTypeComputer.typeFor(input)).toBe(expectedType);    
            }
        }
});