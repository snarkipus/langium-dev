
// import { AstNodeDescription, DefaultAstNodeDescriptionProvider, interruptAndCheck, LangiumDocument, LangiumServices, streamAllContents } from 'langium';
// import { CancellationToken } from 'vscode-languageserver';
// import { DefaultNameProvider } from 'langium';
// // import {  } from './generated/ast';

// export class SmallJavaIndex {

//     getResourceDescription(o: )
// }

// class SmallJavaIndex {

// 	def getVisibleExternalClassesDescriptions(EObject o) {
// 		val allVisibleClasses =
// 			o.getVisibleClassesDescriptions
// 		val allExportedClasses =
// 			o.getExportedClassesEObjectDescriptions
// 		val difference = allVisibleClasses.toSet
// 		difference.removeAll(allExportedClasses.toSet)
// 		return difference.toMap[qualifiedName]
// 	}

// 	def getVisibleClassesDescriptions(EObject o) {
// 		o.getVisibleEObjectDescriptions(SmallJavaPackage.eINSTANCE.SJClass)
// 	}

// 	def getVisibleEObjectDescriptions(EObject o, EClass type) {
// 		o.getVisibleContainers.map [ container |
// 			container.getExportedObjectsByType(type)
// 		].flatten
// 	}

// 	def getVisibleContainers(EObject o) {
// 		val index = rdp.getResourceDescriptions(o.eResource)
// 		val rd = index.getResourceDescription(o.eResource.URI)
// 		cm.getVisibleContainers(rd, index)
// 	}

// 	def getResourceDescription(EObject o) {
// 		val index = rdp.getResourceDescriptions(o.eResource)
// 		index.getResourceDescription(o.eResource.URI)
// 	}

// 	def getExportedEObjectDescriptions(EObject o) {
// 		o.getResourceDescription.getExportedObjects
// 	}

// 	def getExportedClassesEObjectDescriptions(EObject o) {
// 		o.getResourceDescription.getExportedObjectsByType(SmallJavaPackage.eINSTANCE.SJClass)
// 	}

// }