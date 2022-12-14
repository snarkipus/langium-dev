/******************************************************************************
 * This file was generated by langium-cli 0.4.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { AstNode, AstReflection, ReferenceInfo, isAstNode, TypeMetaData } from 'langium';

export type Model = ContainerBlock;

export const Model = 'Model';

export function isModel(item: unknown): item is Model {
    return reflection.isInstance(item, Model);
}

export interface ContainerBlock extends AstNode {
    innerBlocks: Array<InnerBlock>
}

export const ContainerBlock = 'ContainerBlock';

export function isContainerBlock(item: unknown): item is ContainerBlock {
    return reflection.isInstance(item, ContainerBlock);
}

export interface InnerBlock extends AstNode {
    readonly $container: ContainerBlock;
    commentBlock?: string
    itemBlocks: Array<ItemBlock>
    name: string
}

export const InnerBlock = 'InnerBlock';

export function isInnerBlock(item: unknown): item is InnerBlock {
    return reflection.isInstance(item, InnerBlock);
}

export interface ItemBlock extends AstNode {
    readonly $container: InnerBlock;
    name: string
}

export const ItemBlock = 'ItemBlock';

export function isItemBlock(item: unknown): item is ItemBlock {
    return reflection.isInstance(item, ItemBlock);
}

export type HelloWorldAstType = 'ContainerBlock' | 'InnerBlock' | 'ItemBlock' | 'Model';

export class HelloWorldAstReflection implements AstReflection {

    getAllTypes(): string[] {
        return ['ContainerBlock', 'InnerBlock', 'ItemBlock', 'Model'];
    }

    isInstance(node: unknown, type: string): boolean {
        return isAstNode(node) && this.isSubtype(node.$type, type);
    }

    isSubtype(subtype: string, supertype: string): boolean {
        if (subtype === supertype) {
            return true;
        }
        switch (subtype) {
            case ContainerBlock: {
                return this.isSubtype(Model, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'ContainerBlock': {
                return {
                    name: 'ContainerBlock',
                    mandatory: [
                        { name: 'innerBlocks', type: 'array' }
                    ]
                };
            }
            case 'InnerBlock': {
                return {
                    name: 'InnerBlock',
                    mandatory: [
                        { name: 'itemBlocks', type: 'array' }
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

export const reflection = new HelloWorldAstReflection();
