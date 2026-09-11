export function executeUntrustedInput(source: string): unknown {
  return eval(source)
}
