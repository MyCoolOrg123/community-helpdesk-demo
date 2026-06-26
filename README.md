# Community Helpdesk

Community Helpdesk keeps public community channels organized by routing support
questions, onboarding requests, bug reports, and release notes to the right source
of truth.

## What lives here

- `docs/faq.md` covers setup, permission, and key-rotation guidance.
- `docs/onboarding.md` explains channels, roles, and first contribution steps.
- `src/router.ts` maps incoming community reports to labels and source paths.
- `CHANGELOG.md` and `releases/` track shipped work and weekly recap notes.

## Maintainer workflow

1. Keep public docs current before changing channel names or command behavior.
2. Route support questions to `support` and reproducible regressions to `bug`.
3. Use release recap notes to prepare the weekly `#announcements` update.
