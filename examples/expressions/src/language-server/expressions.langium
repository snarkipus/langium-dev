grammar Expressions

entry ExpressionsModel:
	elements += AbstractElement*
;

AbstractElement:
	Variable | EvalExpression
;

Variable:
	'var' name=ID '=' expression=Expression
;

EvalExpression:
	'eval' expression=Expression
;

Expression: Or;

Or infers Expression:
	And ({infer Or.left=current} "||" right=And)*
;

And infers Expression:
	Equality ({infer And.left=current} "&&" right=Equality)*
;

Equality infers Expression:
	Comparison ({infer Equality.left=current} op=("=="|"!=") right=Comparison)*
;

Comparison infers Expression:
	PlusOrMinus ({infer Comparison.left=current} op=(">="|"<="|">"|"<") right=PlusOrMinus)*
;

PlusOrMinus infers Expression:	
	MulOrDiv (
		({infer Plus.left=current} '+' | {infer Minus.left=current} '-') right=MulOrDiv
	)*
;

MulOrDiv infers Expression:
	Primary (
		({infer MulOrDiv.left=current} op=('*'|'/')) right=Primary
	)*
;

Primary infers Expression:
	'(' Expression ')'
	| {infer Not} "!" expression=Primary
	| Atomic
;

Atomic infers Expression:
	  {infer IntConstant    } value=INT
	| {infer StringConstant } value=STRING
	| {infer BoolConstant   } value=('true'|'false')
	| {infer VariableRef    } variable=[Variable]
;

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal STRING: /"[^"]*"|'[^']*'/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
