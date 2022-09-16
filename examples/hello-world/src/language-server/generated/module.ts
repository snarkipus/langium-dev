/******************************************************************************
 * This file was generated by langium-cli 0.4.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumGeneratedSharedServices, LangiumSharedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { HelloWorldAstReflection } from './ast';
import { HelloWorldGrammar } from './grammar';

export const HelloWorldLanguageMetaData: LanguageMetaData = {
    languageId: 'hello-world',
    fileExtensions: ['.hello'],
    caseInsensitive: false
};

export const HelloWorldGeneratedSharedModule: Module<LangiumSharedServices, LangiumGeneratedSharedServices> = {
    AstReflection: () => new HelloWorldAstReflection()
};

export const HelloWorldGeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => HelloWorldGrammar(),
    LanguageMetaData: () => HelloWorldLanguageMetaData,
    parser: {}
};