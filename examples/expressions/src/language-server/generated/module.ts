/******************************************************************************
 * This file was generated by langium-cli 0.4.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumGeneratedSharedServices, LangiumSharedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { ExpressionsAstReflection } from './ast';
import { ExpressionsGrammar } from './grammar';

export const ExpressionsLanguageMetaData: LanguageMetaData = {
    languageId: 'expressions',
    fileExtensions: ['.expressions'],
    caseInsensitive: false
};

export const ExpressionsGeneratedSharedModule: Module<LangiumSharedServices, LangiumGeneratedSharedServices> = {
    AstReflection: () => new ExpressionsAstReflection()
};

export const ExpressionsGeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => ExpressionsGrammar(),
    LanguageMetaData: () => ExpressionsLanguageMetaData,
    parser: {}
};
