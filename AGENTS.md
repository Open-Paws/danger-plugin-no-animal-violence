# AGENTS.md — danger-plugin-no-animal-violence

## Summary

Single-module TypeScript plugin for [Danger.js](https://danger.systems/js/) that scans PR diff added lines for speciesist and animal-harm language and posts inline PR comments with inclusive alternatives. The pattern dictionary (65+ entries) is auto-generated from [project-compassionate-code](https://github.com/Open-Paws/project-compassionate-code) — do not edit it manually. Part of the Open Paws no-animal-violence tooling suite.

---

## Status

**Active Development** — v0.1.0. Desloppify strict score: 93.1% (target ≥85). Test suite added April 2026 (5 tests, Node built-in test runner). Pattern updates come through the auto-generation pipeline; plugin behaviour (options, output format, diff scanning) is the contribution surface.

**No named maintainer** as of 2026-04-02. Pattern sync pipeline from `project-compassionate-code` should be verified as active before assuming patterns are current.

### Change implications

- **Pattern array changes** → must originate from `project-compassionate-code` pipeline, not manual edits here.
- **Option interface changes** → update `NoAnimalViolenceOptions` in `src/index.ts` and the README options table.
- **Diff scanning logic changes** → verify against a live Dangerfile in a test repo before merging; the async `diffForFile()` call is the subtle part.
- **Severity behaviour changes** → update tests in `tests/index.test.js`.

---

## Key Files

| File | Role |
|------|------|
| `src/index.ts` | Plugin entry point — `PATTERNS` array, `noAnimalViolence()` export, diff scanning and reporting logic |
| `dist/index.js` | Compiled CommonJS output (generated; not checked in — run `npm run build`) |
| `dist/index.d.ts` | TypeScript declarations (generated) |
| `tests/index.test.js` | 5-test suite using Node's built-in `node:test` runner; stubs Danger globals |
| `package.json` | NPM manifest; peer dep `danger >= 10`; scripts: `build`, `test` |
| `tsconfig.json` | `target: es2018`, `module: commonjs`, `outDir: dist`, strict mode |
| `CLAUDE.md` | Project-specific AI coding instructions (architecture, org context, decisions) |

---

## Build and Test Commands

```bash
# Install dependencies
npm install

# Compile TypeScript to dist/
npm run build

# Typecheck without emitting
npx tsc --noEmit

# Run tests (requires dist/ to exist — build first)
npm test

# Quality scan
desloppify scan --path .
desloppify next
```

Tests use Node's built-in `node:test` module — no additional test framework needed.

---

## Architecture

```
src/index.ts
├── PATTERNS: Pattern[]          — 65+ { regex, phrase, alternatives[] } objects
│                                  AUTO-GENERATED — do not edit manually
├── NoAnimalViolenceOptions      — public options interface { severity? }
└── noAnimalViolence(options)    — default export
    ├── resolve report fn        — warn() or message() based on severity
    ├── collect files            — danger.git.modified_files + created_files
    └── per file:
        ├── diffForFile(file)    — async call → { added, removed }
        ├── scan added lines     — iterate PATTERNS, test regex
        └── match → report()    — file path + phrase + alternatives + research link
```

Three logical units:
1. **Pattern matching** — regex array, tested against `result.added`
2. **Diff scanning** — iterates files, calls Danger's async `diffForFile()`
3. **Reporting** — formats and dispatches via `warn()` or `message()`

The only public API surface is the default export and `NoAnimalViolenceOptions`. Everything else is internal.

---

## Integration Points

- **Danger.js runtime** — requires `danger >= 10.0.0` as a peer dependency. The plugin reads `danger.git.modified_files`, `danger.git.created_files`, and calls `danger.git.diffForFile()`.
- **project-compassionate-code** — upstream pattern generation pipeline. Changes to detection vocabulary flow from there.
- **no-animal-violence** — canonical rule dictionary that informs pattern content.
- **mcp-server-nav-language** — sibling MCP server covering the same pattern space for real-time agent-level checks (complementary tool, not a dependency).
- **CI** — plugin runs as part of `danger run` in GitHub Actions or equivalent.

---

## Safe vs. Risky Changes

### Safe
- Adding or fixing tests in `tests/index.test.js`
- Updating README.md or AGENTS.md documentation
- Adding new severity options that extend (not break) the existing `"warn" | "message"` interface
- Bumping devDependencies (TypeScript, Danger) with a full build + test pass

### Risky — proceed carefully
- Editing the `PATTERNS` array — should come from the pipeline, not manual edits; inconsistencies across the suite result
- Changing how `diffForFile()` results are consumed — async edge cases are subtle; verify with a live Danger run
- Changing the output message format — downstream tooling may parse these messages
- Changing `module` or `target` in `tsconfig.json` — can break CommonJS consumers

### Do not do
- Manually editing pattern regexes or alternatives (pipeline owns this)
- Adding a test framework dependency (Node `node:test` is sufficient and keeps the install footprint minimal)
- Logging or retaining diff content beyond the Danger run (privacy concern — diffs may contain sensitive advocacy information)

---

## TODOs

- [ ] Verify `project-compassionate-code` auto-generation pipeline is still active (no named owner since 2026-04-02)
- [ ] Expand test coverage: test each pattern category (idioms, industry euphemisms, tech idioms)
- [ ] Add mutation testing to verify test assertions actually fail when patterns break
- [ ] Consider publishing to npm under `@open-paws/danger-plugin-no-animal-violence` for discoverability
- [ ] Document integration example for GitHub Actions (full `danger run` workflow snippet)
