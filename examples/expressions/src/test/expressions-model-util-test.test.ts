import { parseHelper } from 'langium/test';
import { ExpressionsModel, Plus, VariableRef } from '../language-server/generated/ast';
import { createExpressionsServices } from '../language-server/expressions-module';
import { isDefinedBefore } from '../util/expressions-model-util';
import { EmptyFileSystem } from 'langium';

const services = createExpressionsServices(EmptyFileSystem).Expressions;
const helper = parseHelper<ExpressionsModel>(services);

describe('Model Utility Class: isDefinedBefore(from,to)', () => {
    it('should return true for valid reference', async () => {
        const text =`
        var  i = 0  // (0)
		eval i + 10 // (1)
        `; 

        const parse = await helper(text);
        const elements = parse.parseResult.value.elements;
		const from =  elements[0];
		const to   = (elements[1].expression as Plus).left as VariableRef;
		expect(isDefinedBefore(from, to)).toBe(true);
	});

	it('should return false for invalid forward reference', async () => {
        const text =`
		eval i + 10 // (0)
        var  i = 0  // (1)
		`; 

        const parse = await helper(text);
        const elements = parse.parseResult.value.elements;
		const from =  elements[1];
		const to   = (elements[0].expression as Plus).left as VariableRef;
		expect(isDefinedBefore(from, to)).toBe(false);
	});
});