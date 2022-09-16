import { expectError, expectNoIssues, validationHelper, ValidationResult } from 'langium/test';
import { Model } from '../language-server/generated/ast';
import { createHelloWorldServices } from '../language-server/hello-world-module';
import { EmptyFileSystem } from 'langium';

const services = createHelloWorldServices(EmptyFileSystem).HelloWorld;
const validate = validationHelper<Model>(services);

describe('Validator Test: Valid Declaration', () => {
    const text=`
    person Bob
    Hello Bob!
    `;

    let validationResult: ValidationResult<Model>;

    beforeAll(async () => {
        validationResult = await validate(text);
        console.log(validationResult);
    });

    it.skip('Find no issues in valid declarations', () => {
        expectNoIssues(validationResult);
    });
});

describe('Validator Test: Invalid Declaration', () => {
    const text=`
    CONTAINER-START
  fluffycontainer
  BOX-START
    fluffybox
    BALL-START
      fluffyball
    BALL-END
    BALL-START
      anotherball
    BALL-END
    CUBE-START
      fluffycube
    CUBE-END
  BOX-END
  BOX-START
    anotherbox
    BALL-START
      anotherball
    BALL-END
    CUBE-START
      anothercube
    CUBE-END
  BOX-END
  CRATE-START
    fluffycrate
    BALL-START
      fluffyball
    BALL-END
    BALL-START
      anotherball
    BALL-END
    CUBE-START
      fluffycube
    CUBE-END
  CRATE-END
  BUCKET-START
    fluffybucket
    BALL-START
      fluffyball
    BALL-END
    BALL-START
      anotherball
    BALL-END
    CUBE-START
      fluffycube
    CUBE-END
  BUCKET-END
CONTAINER-END
    `;

    let validationResult: ValidationResult<Model>;

    beforeAll(async () => {
        validationResult = await validate(text);
        console.log(validationResult);
    });

    it.skip('Detect uncapitalized names', () => {
        const mark = validationResult.document.textDocument.getText().indexOf('bob');
        expectError(validationResult, "Person name should start with a capital.",
        {
            offset: mark,
            length: 2
        });
    });

});