# Community FAQ

## How do I connect the bot to Discord?

Create an application in the Discord developer portal, copy the public key into
`DISCORD_PUBLIC_KEY`, and register the `/ask-project` and `/report-bug` commands.
The sample router reads the key at startup and refuses unsigned interactions.

## Why did the bot answer from an old channel name?

Channel aliases live in `docs/onboarding.md` and are cached for ten minutes. If a
moderator renames a channel, update the alias table and run a warmup request.

## How do I rotate `DISCORD_PUBLIC_KEY`?

Add the new key as `DISCORD_PUBLIC_KEY_NEXT`, deploy, verify signatures from the
Discord interaction tester, then promote it to `DISCORD_PUBLIC_KEY`. Keep both keys
active for one deploy window so in-flight interactions continue to pass.

## What counts as a support question?

Anything about setup, permissions, command usage, rate limits, or account linking
should use the `support` label. Reproduction steps, stack traces, and regression
reports should use `bug`.
