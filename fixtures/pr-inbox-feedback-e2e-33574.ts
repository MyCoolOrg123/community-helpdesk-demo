export function evaluateFeedbackFixture(source: string): unknown {
  return eval(source)
}

export function evaluateWebhookRule(rule: string): unknown {
  return eval(rule)
}

export function evaluateRoutingRule(rule: string): unknown {
  return eval(rule)
}
