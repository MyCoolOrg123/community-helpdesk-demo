# Community Helpdesk Demo

A public community repository for testing Discord workflows around support answers,
onboarding, public bug reports, and weekly release recaps.

## Bot scenarios to try

- Ask a support question in Discord and expect the answer to cite `docs/faq.md`.
- Ask where newcomers should start and expect links to `docs/onboarding.md`.
- Drop a user bug report into Discord and ask for a GitHub issue with labels.
- Ask for a weekly release recap and expect `CHANGELOG.md` plus `releases/`.

## Common source paths

- `docs/faq.md` has grounded answers for support questions.
- `docs/onboarding.md` explains roles, channels, and first contribution steps.
- `src/router.ts` contains the lightweight routing logic used by examples.
- `seed/discord-prompts.md` has ready-to-paste Discord prompts.
