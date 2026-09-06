export function evaluateUntrustedExpression(expression: string): unknown {
	return eval(expression)
}
