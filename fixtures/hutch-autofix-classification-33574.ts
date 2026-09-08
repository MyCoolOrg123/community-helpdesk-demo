import { execSync } from "node:child_process"

export function runUserCommand(command: string): Buffer {
  return execSync(command)
}
