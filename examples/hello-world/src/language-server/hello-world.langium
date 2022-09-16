grammar HelloWorld

entry Model:
    ContainerBlock;

ContainerBlock:
    'CONTAINER-START'
    innerBlocks+=InnerBlock*
    'CONTAINER-END'
;

InnerBlock:
    InnerBoxBlock | InnerCrateBlock | InnerBucketBlock
;

InnerBoxBlock infers InnerBlock:
    commentBlock=InnerBlockHeader
    'BOX-NAME:' name=ID
    itemBlocks+=ItemBlock*
    'BOX-END'
;

InnerCrateBlock infers InnerBlock:
    commentBlock=InnerBlockHeader
    'CRATE-NAME:' name=ID
    itemBlocks+=ItemBlock*
    'CRATE-END'
;

InnerBucketBlock infers InnerBlock:
    'BUCKET-START'
    'BUCKET-NAME:' name=ID
    itemBlocks+=ItemBlock*
    'BUCKET-END'
;

ItemBlock:
    BallItem | CubeItem
;

BallItem infers ItemBlock:
    'BALL-START'
    name=ID
    'BALL-END'
;

CubeItem infers ItemBlock:
    'CUBE-START'
    name=ID
    'CUBE-END'
;

hidden terminal WS: /\s+/;
terminal InnerBlockHeader: /(BOX-START|CRATE-START)([\s\S]*?)(?=(BOX-NAME:|CRATE-NAME:))/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal STRING: /"[^"]*"|'[^']*'/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;