import { parseHelper } from 'langium/test';
import * as ast from '../language-server/generated/ast';
import { createExpressionsServices } from '../language-server/expressions-module';
import { EmptyFileSystem } from 'langium';

const services = createExpressionsServices(EmptyFileSystem).Expressions;
const helper = parseHelper<ast.ExpressionsModel>(services);


describe('Expressions Parser', () => {

    it('should parse: IntConstant', async () => {
        const parse = await helper("eval 10");
        expect(parse.parseResult.value.elements.length).not.toBe(0);
    });

    it('should parse: StringConstant', async () => {
        const parse = await helper("eval 'a string'");
        expect(parse.parseResult.value.elements.length).not.toBe(0);
    });

    it('should parse: BoolConstant', async () => {
        const parse = await helper("eval true");
        expect(parse.parseResult.value.elements.length).not.toBe(0);
    });

    it('should parse: Variable', async () => {
        const parse = await helper("var i = 10");
        expect(parse.parseResult.value.elements.length).not.toBe(0);
    });

    it('should parse: VariableReference', async () => {
        const text=`
        var i = 10
        eval i`;
        const parse = await helper(text);
        const elements = parse.parseResult.value.elements;
        expect((elements[elements.length - 1].expression as ast.VariableRef).variable.ref?.name).toBe('i');
    });

    it('should parse: associative addition', async () => {
        const input    = `10 + 5 + 1 + 2`;
        const expected = `(((10 + 5) + 1) + 2)`;
        expect(await assertRepr(input)).toBe(expected);
    });

    it('should parse: parentheses', async () => {
        const parsed = await helper("eval (10)");
        expect(10).toEqual((parsed.parseResult.value.elements[0].expression as ast.IntConstant).value);
    });

    it('should parse: addition with parentheses', async () => {
        const input = "( 10 + 5 ) + ( 1 + 2 )";
        const expected = "((10 + 5) + (1 + 2))";
        expect(await assertRepr(input)).toBe(expected);
    });

    it('should parse: addition and subtraction', async () => {
        const input    = `10 + 5 - 1 - 2`;
        const expected = `(((10 + 5) - 1) - 2)`;
        expect(await assertRepr(input)).toBe(expected);
    });

    it('should parse: Mult & Div', async() => {
        const input    = `10 * 5 / 1 * 2`;
        const expected = `(((10 * 5) / 1) * 2)`;
        expect(await assertRepr(input)).toBe(expected);
    });

    it('should parse: Mult/Div Precedence', async () => {
        const input    = `10 + 5 * 2 - 5 / 1`;
        const expected = `((10 + (5 * 2)) - (5 / 1))`;
        expect(await assertRepr(input)).toBe(expected);
    });

    it('should parse: Comparisons', async () => {
        const input    = `10 <= 5 < 2 > 5`;
        const expected = `(((10 <= 5) < 2) > 5)`;
        expect(await assertRepr(input)).toBe(expected);
    });

    it('should parse: Equality & Comparisons', async () => {
        const input    = `true == 5 <= 2`;
        const expected = `(true == (5 <= 2))`;
        expect(await assertRepr(input)).toBe(expected);
    });

    it('should parse: And & Or', async () => {
        const input    = `true || false && 1 < 0`;
        const expected = `(true || (false && (1 < 0)))`;
        expect(await assertRepr(input)).toBe(expected);
    });

    it('should parse: Logical Precedence', async () => {
        const input    = `!true||false&&1>(1/3+5*2)`;
        const expected = `((!true) || (false && (1 > ((1 / 3) + (5 * 2)))))`;
        expect(await assertRepr(input)).toBe(expected);
    });

    function stringRepr(e: ast.Expression): string  {
        switch (e.$type) {
            case ast.Plus:           return `(${stringRepr((e as ast.Plus).left)} + ${stringRepr((e as ast.Plus).right)})`;
            case ast.Minus:          return `(${stringRepr((e as ast.Minus).left)} - ${stringRepr((e as ast.Minus).right)})`;
            case ast.MulOrDiv:       return `(${stringRepr((e as ast.MulOrDiv).left)} ${(e as ast.MulOrDiv).op} ${stringRepr((e as ast.MulOrDiv).right)})`;
            case ast.Comparison:     return `(${stringRepr((e as ast.Comparison).left)} ${(e as ast.Comparison).op} ${stringRepr((e as ast.Comparison).right)})`;
            case ast.Equality:       return `(${stringRepr((e as ast.Equality).left)} ${(e as ast.Equality).op} ${stringRepr((e as ast.Equality).right)})`;
            case ast.Or:             return `(${stringRepr((e as ast.Or).left)} || ${stringRepr((e as ast.Or).right)})`;
            case ast.And:            return `(${stringRepr((e as ast.And).left)} && ${stringRepr((e as ast.And).right)})`;
            case ast.Not:            return `(!${stringRepr((e as ast.Not).expression)})`;
            case ast.IntConstant:    return `${(e as ast.IntConstant).value}`; 
            case ast.StringConstant: return `${(e as ast.StringConstant).value}`;
            case ast.BoolConstant:   return `${(e as ast.BoolConstant).value}`;
            case ast.VariableRef:    return `${(e as ast.VariableRef).variable.ref?.name}`;
            default:                 throw new Error(`Unknown expression type: ${e.$type}`);
        }
    }

    const assertRepr = async (input: string) => {
            const parse = await helper('eval ' + input);
            const elements = parse.parseResult.value.elements;
            return stringRepr(parse.parseResult.value.elements[elements.length - 1].expression);
    }

});