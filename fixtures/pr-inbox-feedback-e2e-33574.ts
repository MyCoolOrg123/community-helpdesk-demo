export function evaluateFeedbackFixture(source: string): unknown {
  return eval(source)
}

export function evaluateWebhookRule(rule: string): unknown {
  return eval(rule)
}
