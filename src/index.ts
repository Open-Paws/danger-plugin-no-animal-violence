// AUTO-GENERATED from project-compassionate-code. Do not edit directly.
import { DangerDSLType } from "danger";

declare const danger: DangerDSLType;
declare function warn(message: string): void;
declare function message(message: string): void;

interface NoAnimalViolenceOptions {
  severity?: "warn" | "message";
}

interface Pattern {
  regex: RegExp;
  phrase: string;
  alternatives: string[];
}

const PATTERNS: Pattern[] = [
  { regex: /kill\s+two\s+birds\s+with\s+one\s+stone/gi, phrase: "kill two birds with one stone", alternatives: ["accomplish two things at once", "solve two problems with one action", "hit two targets with one shot"] },
  { regex: /beat(ing)?\s+a\s+dead\s+horse/gi, phrase: "beat a dead horse", alternatives: ["belabor the point", "go over old ground", "repeat unnecessarily"] },
  { regex: /more\s+than\s+one\s+way\s+to\s+skin\s+a\s+cat/gi, phrase: "more than one way to skin a cat", alternatives: ["more than one way to solve this", "multiple approaches available", "several ways to accomplish this"] },
  { regex: /let\s+the\s+cat\s+out\s+of\s+the\s+bag/gi, phrase: "let the cat out of the bag", alternatives: ["reveal the secret", "disclose prematurely", "let it slip"] },
  { regex: /open(ing)?\s+a\s+can\s+of\s+worms/gi, phrase: "open a can of worms", alternatives: ["create a complicated situation", "uncover hidden problems", "open Pandora\u0027s box"] },
  { regex: /wild\s+goose\s+chase/gi, phrase: "wild goose chase", alternatives: ["futile search", "pointless pursuit", "fool\u0027s errand"] },
  { regex: /like\s+shooting\s+fish\s+in\s+a\s+barrel/gi, phrase: "like shooting fish in a barrel", alternatives: ["trivially easy", "like taking candy from a baby", "effortless"] },
  { regex: /flog(ging)?\s+a\s+dead\s+horse/gi, phrase: "flog a dead horse", alternatives: ["belabor the point", "waste effort on a settled matter", "repeat unnecessarily"] },
  { regex: /bigger\s+fish\s+to\s+fry/gi, phrase: "there are bigger fish to fry", alternatives: ["more important matters to address", "higher priorities", "bigger issues at hand"] },
  { regex: /guinea\s+pig/gi, phrase: "guinea pig", alternatives: ["test subject", "first to try", "early adopter"] },
  { regex: /hold\s+your\s+horses/gi, phrase: "hold your horses", alternatives: ["wait a moment", "slow down", "be patient"] },
  { regex: /the\s+elephant\s+in\s+the\s+room/gi, phrase: "the elephant in the room", alternatives: ["the obvious issue", "the unaddressed problem"] },
  { regex: /straight\s+from\s+the\s+horse'?s\s+mouth/gi, phrase: "straight from the horse's mouth", alternatives: ["directly from the source", "firsthand", "from the authority"] },
  { regex: /bring(ing)?\s+home\s+the\s+bacon/gi, phrase: "bring home the bacon", alternatives: ["bring home the results", "earn a living", "win the prize"] },
  { regex: /take?(ing|ook)?\s+the\s+bull\s+by\s+the\s+horns/gi, phrase: "take the bull by the horns", alternatives: ["face the challenge head-on", "tackle the problem directly", "seize the opportunity"] },
  { regex: /like\s+lambs?\s+to\s+(the\s+)?slaughter/gi, phrase: "like lambs to the slaughter", alternatives: ["without resistance", "blindly following", "unknowingly walking into danger"] },
  { regex: /no\s+room\s+to\s+swing\s+a\s+cat/gi, phrase: "no room to swing a cat", alternatives: ["very cramped", "extremely tight space", "barely any room"] },
  { regex: /red\s+herring/gi, phrase: "red herring", alternatives: ["distraction", "false lead", "misleading clue"] },
  { regex: /don'?t\s+be\s+a\s+chicken/gi, phrase: "don't be a chicken", alternatives: ["don\u0027t hesitate", "be brave", "go for it"] },
  { regex: /(code|memory|resource)\s+pig/gi, phrase: "pig", alternatives: ["resource-intensive", "bloated", "heavy consumer"] },
  { regex: /cowboy\s+cod(ing|er)/gi, phrase: "cowboy coding", alternatives: ["undisciplined coding", "ad-hoc development", "code without process"] },
  { regex: /code\s+monkeys?/gi, phrase: "code monkey", alternatives: ["developer", "programmer", "engineer"] },
  { regex: /cattle\s+(vs?\.?|versus)\s+pets?/gi, phrase: "cattle vs. pets", alternatives: ["ephemeral vs. persistent", "disposable vs. unique", "numbered vs. named"] },
  { regex: /pet\s+project/gi, phrase: "pet project", alternatives: ["side project", "passion project"] },
  { regex: /canary\s+in\s+(a|the)\s+coal\s+mine/gi, phrase: "canary in a coal mine", alternatives: ["early warning signal", "leading indicator", "sentinel"] },
  { regex: /dog\s?food(ing)?/gi, phrase: "dogfooding", alternatives: ["self-hosting", "eating your own cooking", "using internally"] },
  { regex: /herding\s+cats/gi, phrase: "herding cats", alternatives: ["coordinating independent contributors", "managing a distributed effort", "organizing chaos"] },
  { regex: /fishing\s+expedition/gi, phrase: "go on a fishing expedition", alternatives: ["exploratory investigation", "unfocused search", "speculative inquiry"] },
  { regex: /sacred\s+cows?/gi, phrase: "sacred cow", alternatives: ["unquestioned belief", "untouchable topic", "protected assumption"] },
  { regex: /scapegoat(ed|ing|s)?/gi, phrase: "scapegoat", alternatives: ["blame target", "fall person", "wrongly blamed"] },
  { regex: /rat\s+race/gi, phrase: "rat race", alternatives: ["daily grind", "competitive treadmill", "endless hustle"] },
  { regex: /dead[\s_-]?cat[\s_-]?bounce/gi, phrase: "dead cat bounce", alternatives: ["temporary rebound", "false recovery", "brief uptick"] },
  { regex: /dog[\s-]eat[\s-]dog/gi, phrase: "dog-eat-dog", alternatives: ["ruthlessly competitive", "cutthroat", "fiercely competitive"] },
  { regex: /whack[\s-]a[\s-]mole/gi, phrase: "whack-a-mole", alternatives: ["recurring problem", "endless loop", "unwinnable game"] },
  { regex: /kill\s+(the\s+)?process/gi, phrase: "kill process", alternatives: ["terminate the process", "stop the process", "end the process"] },
  { regex: /kill\s+(the\s+)?server/gi, phrase: "kill the server", alternatives: ["stop the server", "shut down the server", "terminate the server"] },
  { regex: /nuke\s+(it|the|this|that|everything)/gi, phrase: "nuke", alternatives: ["delete completely", "wipe clean", "remove entirely"] },
  { regex: /abort(ed|ing)?/gi, phrase: "abort", alternatives: ["cancel", "stop", "halt"] },
  { regex: /(master|slave)/gi, phrase: "master/slave", alternatives: ["primary/replica", "leader/follower", "controller/worker"] },
  { regex: /(white|black)list/gi, phrase: "whitelist/blacklist", alternatives: ["allowlist/denylist", "permit list/block list", "inclusion list/exclusion list"] },
  { regex: /grandfather(ed|ing)?/gi, phrase: "grandfathered", alternatives: ["legacy", "exempt", "pre-existing"] },
];

export default function noAnimalViolence(options: NoAnimalViolenceOptions = {}) {
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
