# danger-plugin-no-animal-violence

> Status: **Active Development** — v0.1.0, actively maintained, pattern dictionary auto-generated from [project-compassionate-code](https://github.com/Open-Paws/project-compassionate-code).

A [Danger.js](https://danger.systems/js/) plugin that scans PR diffs for speciesist language and suggests inclusive alternatives. Part of the [Open Paws](https://github.com/Open-Paws) no-animal-violence tooling suite.

**Ecosystem:** [semgrep](https://github.com/Open-Paws/semgrep-rules-no-animal-violence) · [eslint](https://github.com/Open-Paws/eslint-plugin-no-animal-violence) · [vale](https://github.com/Open-Paws/vale-no-animal-violence) · [vscode](https://github.com/Open-Paws/vscode-no-animal-violence) · [pre-commit](https://github.com/Open-Paws/no-animal-violence-pre-commit) · [github-action](https://github.com/Open-Paws/no-animal-violence-action) · [reviewdog](https://github.com/Open-Paws/reviewdog-no-animal-violence) · **danger** (this repo)

---

## What is Danger?

[Danger.js](https://danger.systems/js/) is a code review automation tool that runs in CI and posts comments on pull requests. You write rules in a `Dangerfile` (JavaScript or TypeScript); Danger evaluates them against the PR context — diff, metadata, checks — and surfaces results as PR comments, warnings, or failures.

This plugin extends Danger with one specific rule: scan the lines added in a PR diff for speciesist language and report any matches with suggested alternatives.

---

## Why speciesist language?

Language shapes thought. Phrases like "wild goose chase" or "livestock" treat animals as instruments or property, normalising that framing in codebases used by millions of developers. This plugin helps teams gradually adopt inclusive, precise language through low-friction PR feedback.

See: [Speciesist language and nonhuman animal ethics](https://doi.org/10.1007/s43681-023-00380-w)

---

## Install

```bash
npm install --save-dev danger-plugin-no-animal-violence
# or
yarn add --dev danger-plugin-no-animal-violence
```

**Peer dependency:** `danger >= 10.0.0`

---

## Usage

Add one import to your `Dangerfile`:

```typescript
// dangerfile.ts
import noAnimalViolence from "danger-plugin-no-animal-violence";

noAnimalViolence();
```

Or with options:

```typescript
noAnimalViolence({
  severity: "message", // default: "warn"
});
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `severity` | `"warn" \| "message"` | `"warn"` | `"warn"` uses Danger's `warn()` (yellow); `"message"` uses `message()` (blue, non-blocking) |

---

## What it detects

The plugin checks **only added lines** (`+` lines in the diff), so existing code never triggers false positives. It covers 65+ patterns across four categories:

### Idioms that reference animal harm

| Phrase | Suggested alternatives |
|--------|----------------------|
| kill two birds with one stone | accomplish two things at once · solve two problems with one action |
| beat a dead horse | belabor the point · repeat unnecessarily |
| more than one way to skin a cat | more than one way to solve this · multiple approaches available |
| wild goose chase | futile search · pointless pursuit |
| like shooting fish in a barrel | trivially easy · effortless |
| like lambs to the slaughter | without resistance · blindly following |
| curiosity killed the cat | curiosity backfired · curiosity led to trouble |
| like a chicken with its head cut off | in a panic · in complete disarray |
| sacrificial lamb | expendable person · person set up to fail |
| sitting duck | easy target · vulnerable target |

### Industry euphemisms for animal exploitation

| Phrase | Suggested alternatives |
|--------|----------------------|
| livestock | farmed animals · animals raised for food |
| poultry | farmed birds · chickens |
| processing plant / facility | slaughterhouse |
| humane slaughter | slaughter · killed |
| depopulation | mass killing · killed en masse |
| gestation crate | pregnancy cage |
| farrowing crate | birthing cage |
| battery cage | small wire cage · confined cage |
| spent hen | discarded hen · hen killed after egg production declines |
| broiler | chicken raised for meat |

### Tech-specific idioms

| Phrase | Suggested alternatives |
|--------|----------------------|
| cattle vs. pets | ephemeral vs. persistent |
| dogfooding | self-hosting · using internally |
| canary in a coal mine | early warning signal · leading indicator |
| canary deployment | progressive rollout |
| monkey patch | runtime patch |
| code monkey | developer · programmer |
| master/slave | primary/replica · leader/follower |
| whitelist/blacklist | allowlist/denylist |
| herding cats | coordinating independent contributors |
| dead cat bounce | temporary rebound · false recovery |

### General idioms with animal references

| Phrase | Suggested alternatives |
|--------|----------------------|
| sacred cow | unquestioned belief · untouchable topic |
| guinea pig | test subject · early adopter |
| scapegoat | blame target · wrongly blamed |
| red herring | distraction · false lead |
| bigger fish to fry | more important matters to address |
| put out to pasture | retire · phase out · sunset |

---

## Example PR comment output

When a match is found, Danger posts a comment like:

> **src/utils/retry.ts**: Found "wild goose chase". Consider: "futile search" or "pointless pursuit" or "fool's errand". [Why?](https://doi.org/10.1007/s43681-023-00380-w)

The comment includes:
- The file where the phrase was found
- The exact phrase matched
- Two or three concrete alternatives
- A link to the research on speciesist language

---

## How it works

```
PR opened / updated
       │
       ▼
Danger reads git diff
       │
       ▼
Plugin iterates modified + created files
       │
       ▼
For each file: fetch diff via danger.git.diffForFile()
       │
       ▼
Scan only the `added` lines (new content only)
       │
       ▼
Test each of 65+ regex patterns against added text
       │
       ▼
Match found → call warn() or message() with file,
              phrase, alternatives, and research link
```

The plugin scans only added lines — code that already existed before the PR is never flagged. This keeps feedback actionable and avoids overwhelming teams with historical issues.

---

## Relationship to canonical no-animal-violence rules

The pattern dictionary in `src/index.ts` is **auto-generated** from [project-compassionate-code](https://github.com/Open-Paws/project-compassionate-code). The canonical rule set lives in [no-animal-violence](https://github.com/Open-Paws/no-animal-violence).

Do not manually edit the pattern array. Pattern additions and changes go through the generation pipeline — this ensures consistency across the entire tooling suite (semgrep, eslint, vale, pre-commit, and this plugin).

### Other tools in the suite

| Tool | Best for |
|------|----------|
| [no-animal-violence-action](https://github.com/Open-Paws/no-animal-violence-action) | Teams without Danger.js — lowest barrier |
| [reviewdog-no-animal-violence](https://github.com/Open-Paws/reviewdog-no-animal-violence) | reviewdog-based PR annotation |
| [eslint-plugin-no-animal-violence](https://github.com/Open-Paws/eslint-plugin-no-animal-violence) | JavaScript/TypeScript linting in editor + CI |
| [semgrep-rules-no-animal-violence](https://github.com/Open-Paws/semgrep-rules-no-animal-violence) | Multi-language static analysis |
| [vscode-no-animal-violence](https://github.com/Open-Paws/vscode-no-animal-violence) | In-editor highlighting |
| [vale-no-animal-violence](https://github.com/Open-Paws/vale-no-animal-violence) | Prose / documentation linting |
| **danger-plugin-no-animal-violence** | Teams already using Danger.js for PR automation |

---

## Contributing

1. Do not edit the pattern array in `src/index.ts` directly — patterns are auto-generated.
2. To add or change patterns, open an issue or PR against [no-animal-violence](https://github.com/Open-Paws/no-animal-violence).
3. For plugin behaviour (severity options, output format, diff scanning logic), PRs are welcome here.
4. Run `npm run build` before pushing; verify `dist/` compiles cleanly.
5. Run `npx tsc --noEmit` to typecheck without emitting.
6. Run `npm test` to execute the test suite.

---

## License

MIT — [Open Paws](https://openpaws.ai)
