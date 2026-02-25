import { DangerDSLType } from "danger";

declare const danger: DangerDSLType;
declare function warn(message: string): void;
declare function message(message: string): void;

interface SpeciesismOptions {
  severity?: "warn" | "message";
}

interface Pattern {
  regex: RegExp;
  phrase: string;
  alternatives: string[];
}

const PATTERNS: Pattern[] = [
  { regex: /kill two birds with one stone/gi, phrase: "kill two birds with one stone", alternatives: ["accomplish two things at once"] },
  { regex: /beat(ing)? a dead horse/gi, phrase: "beat a dead horse", alternatives: ["belabor the point"] },
  { regex: /bring(ing)? home the bacon/gi, phrase: "bring home the bacon", alternatives: ["bring home the results"] },
  { regex: /guinea pig/gi, phrase: "guinea pig", alternatives: ["test subject", "beta tester"] },
  { regex: /more than one way to skin a cat/gi, phrase: "more than one way to skin a cat", alternatives: ["more than one way to solve this"] },
  { regex: /let(ting)? the cat out of the bag/gi, phrase: "let the cat out of the bag", alternatives: ["reveal the secret"] },
  { regex: /open(ing|ed)? a can of worms/gi, phrase: "open a can of worms", alternatives: ["create a complicated situation"] },
  { regex: /wild goose chase/gi, phrase: "wild goose chase", alternatives: ["pointless pursuit"] },
  { regex: /sacred cows?/gi, phrase: "sacred cow", alternatives: ["unquestioned belief"] },
  { regex: /cattle vs\.? pets/gi, phrase: "cattle vs. pets", alternatives: ["ephemeral vs. persistent"] },
  { regex: /canary (deployment|release)/gi, phrase: "canary deployment", alternatives: ["progressive rollout"] },
  { regex: /monkey[- ]?patch/gi, phrase: "monkey patch", alternatives: ["runtime patch"] },
  { regex: /like shooting fish in a barrel/gi, phrase: "like shooting fish in a barrel", alternatives: ["extremely easy"] },
  { regex: /dogfood(ing)?/gi, phrase: "dogfooding", alternatives: ["self-hosting", "self-testing"] },
];

export default function speciesism(options: SpeciesismOptions = {}) {
  const report = options.severity === "message" ? message : warn;
  const modifiedFiles = danger.git.modified_files.concat(danger.git.created_files);

  for (const file of modifiedFiles) {
    const diff = danger.git.diffForFile(file);
    if (!diff) continue;

    diff.then((result) => {
      if (!result) return;
      const added = result.added;

      for (const pattern of PATTERNS) {
        if (pattern.regex.test(added)) {
          report(
            `**${file}**: Found "${pattern.phrase}". ` +
            `Consider: ${pattern.alternatives.map(a => `"${a}"`).join(" or ")}. ` +
            `[Why?](https://doi.org/10.1007/s43681-023-00380-w)`
          );
          pattern.regex.lastIndex = 0;
        }
      }
    });
  }
}
