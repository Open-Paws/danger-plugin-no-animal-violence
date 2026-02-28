# danger-plugin-no-animal-violence

A [Danger.js](https://danger.systems/js/) plugin that flags speciesist language in PR diffs and suggests inclusive alternatives.

## Why?

Language shapes thought. Phrases like "kill two birds with one stone" or "beat a dead horse" normalize violence against animals. This plugin helps teams adopt inclusive language by automatically flagging these phrases during code review.

See: [Speciesist language and nonhuman animal ethics](https://doi.org/10.1007/s43681-023-00380-w)

## Install

```bash
npm install --save-dev danger-plugin-no-animal-violence
# or
yarn add --dev danger-plugin-no-animal-violence
```

## Usage

```typescript
// dangerfile.ts
import noAnimalViolence from "danger-plugin-no-animal-violence";
noAnimalViolence();
```

### Options

```typescript
noAnimalViolence({
  severity: "message", // default: "warn"
});
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `severity` | `"warn" \| "message"` | `"warn"` | Whether to use Danger's `warn()` or `message()` for reports |

## What it detects

| Phrase | Suggested alternative |
|--------|----------------------|
| kill two birds with one stone | accomplish two things at once |
| beat a dead horse | belabor the point |
| bring home the bacon | bring home the results |
| guinea pig | test subject, beta tester |
| more than one way to skin a cat | more than one way to solve this |
| let the cat out of the bag | reveal the secret |
| open a can of worms | create a complicated situation |
| wild goose chase | pointless pursuit |
| sacred cow | unquestioned belief |
| cattle vs. pets | ephemeral vs. persistent |
| canary deployment | progressive rollout |
| monkey patch | runtime patch |
| like shooting fish in a barrel | extremely easy |
| dogfooding | self-hosting, self-testing |

## How it works

The plugin scans only **added lines** in PR diffs, so existing code won't trigger warnings. When a speciesist phrase is detected, Danger posts a comment on the PR with the file, the phrase found, and suggested alternatives.

## License

MIT - [Open Paws](https://openpaws.ai)
