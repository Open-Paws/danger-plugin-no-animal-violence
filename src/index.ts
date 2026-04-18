// AUTO-GENERATED from Open-Paws/no-animal-violence. Do not edit directly.
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
  { regex: new RegExp("kill\\s+two\\s+birds\\s+with\\s+one\\s+stone", "gi"), phrase: "kill two birds with one stone", alternatives: ["accomplish two things at once","solve two problems with one action","hit two targets with one shot"] },
  { regex: new RegExp("beat(ing)?\\s+a\\s+dead\\s+horse", "gi"), phrase: "beat a dead horse", alternatives: ["belabor the point","go over old ground","repeat unnecessarily"] },
  { regex: new RegExp("(?:more\\s+than\\s+one|many|other)\\s+ways?\\s+to\\s+skin\\s+a\\s+cat", "gi"), phrase: "more than one way to skin a cat", alternatives: ["more than one way to solve this","multiple approaches available","several ways to accomplish this"] },
  { regex: new RegExp("let\\s+the\\s+cat\\s+out\\s+of\\s+the\\s+bag", "gi"), phrase: "let the cat out of the bag", alternatives: ["reveal the secret","disclose prematurely","let it slip"] },
  { regex: new RegExp("open(ing)?\\s+a\\s+can\\s+of\\s+worms", "gi"), phrase: "open a can of worms", alternatives: ["create a complicated situation","uncover hidden problems","open Pandora's box"] },
  { regex: new RegExp("wild\\s+goose\\s+chase", "gi"), phrase: "wild goose chase", alternatives: ["futile search","pointless pursuit","fool's errand"] },
  { regex: new RegExp("like\\s+shooting\\s+fish\\s+in\\s+a\\s+barrel", "gi"), phrase: "like shooting fish in a barrel", alternatives: ["trivially easy","like taking candy from a baby","effortless"] },
  { regex: new RegExp("flog(ging)?\\s+a\\s+dead\\s+horse", "gi"), phrase: "flog a dead horse", alternatives: ["belabor the point","waste effort on a settled matter","repeat unnecessarily"] },
  { regex: new RegExp("bigger\\s+fish\\s+to\\s+fry", "gi"), phrase: "there are bigger fish to fry", alternatives: ["more important matters to address","higher priorities","bigger issues at hand"] },
  { regex: new RegExp("guinea\\s+pig", "gi"), phrase: "guinea pig", alternatives: ["test subject","first to try","early adopter"] },
  { regex: new RegExp("hold\\s+your\\s+horses", "gi"), phrase: "hold your horses", alternatives: ["wait a moment","slow down","be patient"] },
  { regex: new RegExp("the\\s+elephant\\s+in\\s+the\\s+room", "gi"), phrase: "the elephant in the room", alternatives: ["the obvious issue","the unaddressed problem"] },
  { regex: new RegExp("straight\\s+from\\s+the\\s+horse'?s\\s+mouth", "gi"), phrase: "straight from the horse's mouth", alternatives: ["directly from the source","firsthand","from the authority"] },
  { regex: new RegExp("(?:bring(?:ing|s)?|brought)\\s+home\\s+the\\s+bacon", "gi"), phrase: "bring home the bacon", alternatives: ["bring home the results","earn a living","win the prize"] },
  { regex: new RegExp("(?:take|taking|took)\\s+the\\s+bull\\s+by\\s+the\\s+horns", "gi"), phrase: "take the bull by the horns", alternatives: ["face the challenge head-on","tackle the problem directly","seize the opportunity"] },
  { regex: new RegExp("like\\s+lambs?\\s+to\\s+(the\\s+)?slaughter", "gi"), phrase: "like lambs to the slaughter", alternatives: ["without resistance","blindly following","unknowingly walking into danger"] },
  { regex: new RegExp("no\\s+room\\s+to\\s+swing\\s+a\\s+cat", "gi"), phrase: "no room to swing a cat", alternatives: ["very cramped","extremely tight space","barely any room"] },
  { regex: new RegExp("red\\s+herring", "gi"), phrase: "red herring", alternatives: ["distraction","false lead","misleading clue"] },
  { regex: new RegExp("curiosity\\s+killed\\s+the\\s+cat", "gi"), phrase: "curiosity killed the cat", alternatives: ["curiosity backfired","being nosy caused trouble","curiosity led to trouble"] },
  { regex: new RegExp("like\\s+a\\s+chicken\\s+with\\s+(its|their)\\s+head\\s+cut\\s+off", "gi"), phrase: "like a chicken with its head cut off", alternatives: ["in a panic","running around chaotically","in complete disarray"] },
  { regex: new RegExp("(your|their|his|her)\\s+goose\\s+is\\s+cooked", "gi"), phrase: "your goose is cooked", alternatives: ["you're in trouble","your fate is sealed","it's over for you"] },
  { regex: new RegExp("throw(ing|n)?\\s+\\w+\\s+to\\s+the\\s+wolves", "gi"), phrase: "throw someone to the wolves", alternatives: ["abandon to criticism","leave to face hostility alone","sacrifice someone"] },
  { regex: new RegExp("hook,?\\s+line,?\\s+and\\s+sinker", "gi"), phrase: "hook, line, and sinker", alternatives: ["completely","without question","fell for it entirely"] },
  { regex: new RegExp("clip(ping|ped)?\\s+(\\w+('s)?\\s+)?wings", "gi"), phrase: "clip someone's wings", alternatives: ["restrict someone's freedom","limit someone's options","hold someone back"] },
  { regex: new RegExp("(the\\s+)?straw\\s+that\\s+broke\\s+the\\s+camel'?s\\s+back", "gi"), phrase: "the straw that broke the camel's back", alternatives: ["the tipping point","the breaking point","the final provocation"] },
  { regex: new RegExp("bird\\s+in\\s+(the|a)\\s+hand\\s+(is\\s+)?worth\\s+two\\s+in\\s+the\\s+bush", "gi"), phrase: "a bird in the hand is worth two in the bush", alternatives: ["a sure thing beats a possibility","certainty over speculation"] },
  { regex: new RegExp("eat(ing)?\\s+crow", "gi"), phrase: "eat crow", alternatives: ["admit being wrong","swallow one's pride","accept humiliation"] },
  { regex: new RegExp("fight(ing)?\\s+like\\s+cats\\s+and\\s+dogs", "gi"), phrase: "fight like cats and dogs", alternatives: ["constantly argue","clash frequently","have constant conflict"] },
  { regex: new RegExp("(?:take|taking|took)\\s+the\\s+bait", "gi"), phrase: "take the bait", alternatives: ["fall for it","be lured in","be deceived"] },
  { regex: new RegExp("don'?t\\s+count\\s+your\\s+chickens", "gi"), phrase: "don't count your chickens before they hatch", alternatives: ["don't assume success prematurely","wait for confirmed results","don't get ahead of yourself"] },
  { regex: new RegExp("livestock", "gi"), phrase: "livestock", alternatives: ["farmed animals","animals raised for food"] },
  { regex: new RegExp("poultry", "gi"), phrase: "poultry", alternatives: ["farmed birds","chickens","chickens and turkeys"] },
  { regex: new RegExp("gestation crates?", "gi"), phrase: "gestation crate", alternatives: ["pregnancy cage","pregnancy cages"] },
  { regex: new RegExp("depopulat(ion|ed|ing)", "gi"), phrase: "depopulation", alternatives: ["mass killing","killed en masse","killing en masse"] },
  { regex: new RegExp("processing (plants?|facilit(y|ies))", "gi"), phrase: "processing plant", alternatives: ["slaughterhouse","slaughterhouses"] },
  { regex: new RegExp("farrowing crates?", "gi"), phrase: "farrowing crate", alternatives: ["birthing cage","birthing cages"] },
  { regex: new RegExp("battery cages?", "gi"), phrase: "battery cage", alternatives: ["small wire cage","small wire cages","confined cage","confined cages"] },
  { regex: new RegExp("spent hens?", "gi"), phrase: "spent hen", alternatives: ["discarded hen","discarded hens","hen killed after egg production declines"] },
  { regex: new RegExp("(humane(ly)? (slaughter(ed)?|kill(ing|ed)))", "gi"), phrase: "humane slaughter", alternatives: ["slaughter","slaughtered","killing","killed"] },
  { regex: new RegExp("broilers?", "gi"), phrase: "broiler", alternatives: ["chicken raised for meat","chickens raised for meat","meat chicken","meat chickens"] },
  { regex: new RegExp("don'?t\\s+be\\s+a\\s+chicken", "gi"), phrase: "don't be a chicken", alternatives: ["don't hesitate","be brave","go for it"] },
  { regex: new RegExp("(code|memory|resource)\\s+pig", "gi"), phrase: "pig", alternatives: ["resource-intensive","bloated","heavy consumer"] },
  { regex: new RegExp("cowboy\\s+cod(ing|er)", "gi"), phrase: "cowboy coding", alternatives: ["undisciplined coding","ad-hoc development","code without process"] },
  { regex: new RegExp("code\\s+monkeys?", "gi"), phrase: "code monkey", alternatives: ["developer","programmer","engineer"] },
  { regex: new RegExp("badger(ed|ing|s)?", "gi"), phrase: "badger someone", alternatives: ["pester","pressure","harass"] },
  { regex: new RegExp("ferret(ed|ing)?\\s+out", "gi"), phrase: "ferret out", alternatives: ["uncover","discover","dig up"] },
  { regex: new RegExp("cattle\\s+(vs?\\.?|versus)\\s+pets?", "gi"), phrase: "cattle vs. pets", alternatives: ["ephemeral vs. persistent","disposable vs. unique","numbered vs. named"] },
  { regex: new RegExp("pet\\s+project", "gi"), phrase: "pet project", alternatives: ["side project","passion project"] },
  { regex: new RegExp("canary\\s+in\\s+(a|the)\\s+coal\\s+mine", "gi"), phrase: "canary in a coal mine", alternatives: ["early warning signal","leading indicator","sentinel"] },
  { regex: new RegExp("dog\\s?food(ing)?", "gi"), phrase: "dogfooding", alternatives: ["self-hosting","eating your own cooking","using internally"] },
  { regex: new RegExp("herding\\s+cats", "gi"), phrase: "herding cats", alternatives: ["coordinating independent contributors","managing a distributed effort","organizing chaos"] },
  { regex: new RegExp("fishing\\s+expedition", "gi"), phrase: "go on a fishing expedition", alternatives: ["exploratory investigation","unfocused search","speculative inquiry"] },
  { regex: new RegExp("sacred\\s+cows?", "gi"), phrase: "sacred cow", alternatives: ["unquestioned belief","untouchable topic","protected assumption"] },
  { regex: new RegExp("scapegoat(ed|ing|s)?", "gi"), phrase: "scapegoat", alternatives: ["blame target","fall person","wrongly blamed"] },
  { regex: new RegExp("rat\\s+race", "gi"), phrase: "rat race", alternatives: ["daily grind","competitive treadmill","endless hustle"] },
  { regex: new RegExp("dead[\\s_-]?cat[\\s_-]?bounce", "gi"), phrase: "dead cat bounce", alternatives: ["temporary rebound","false recovery","brief uptick"] },
  { regex: new RegExp("dog[\\s-]eat[\\s-]dog", "gi"), phrase: "dog-eat-dog", alternatives: ["ruthlessly competitive","cutthroat","fiercely competitive"] },
  { regex: new RegExp("whack[\\s-]a[\\s-]mole", "gi"), phrase: "whack-a-mole", alternatives: ["recurring problem","endless loop","unwinnable game"] },
  { regex: new RegExp("cash\\s+cows?", "gi"), phrase: "cash cow", alternatives: ["profit center","reliable revenue source","money maker"] },
  { regex: new RegExp("sacrificial\\s+lambs?", "gi"), phrase: "sacrificial lamb", alternatives: ["expendable person","person set up to fail","someone sacrificed for others"] },
  { regex: new RegExp("sitting\\s+ducks?", "gi"), phrase: "sitting duck", alternatives: ["easy target","vulnerable target","exposed"] },
  { regex: new RegExp("open\\s+season", "gi"), phrase: "open season", alternatives: ["free-for-all","unrestricted criticism","no holds barred"] },
  { regex: new RegExp("put(ting)?\\s+(\\w+\\s+)?out\\s+to\\s+pasture", "gi"), phrase: "put out to pasture", alternatives: ["retire","phase out","sunset"] },
  { regex: new RegExp("dead\\s+ducks?", "gi"), phrase: "dead duck", alternatives: ["lost cause","doomed effort","foregone conclusion"] },
  { regex: new RegExp("kill\\s+(the\\s+)?process", "gi"), phrase: "kill process", alternatives: ["terminate the process","stop the process","end the process"] },
  { regex: new RegExp("kill\\s+(the\\s+)?server", "gi"), phrase: "kill the server", alternatives: ["stop the server","shut down the server","terminate the server"] },
  { regex: new RegExp("nuke\\s+(it|the|this|that|everything)", "gi"), phrase: "nuke", alternatives: ["delete completely","wipe clean","remove entirely"] },
  { regex: new RegExp("abort(ed|ing)?", "gi"), phrase: "abort", alternatives: ["cancel","stop","halt"] },
  { regex: new RegExp("cull(ed|ing|s)?", "gi"), phrase: "cull", alternatives: ["remove","prune","trim","filter out"] },
  { regex: new RegExp("(master|slave)", "gi"), phrase: "master/slave", alternatives: ["primary/replica","leader/follower","controller/worker"] },
  { regex: new RegExp("(white|black)list", "gi"), phrase: "whitelist/blacklist", alternatives: ["allowlist/denylist","permit list/block list","inclusion list/exclusion list"] },
  { regex: new RegExp("grandfather(ed|ing)?", "gi"), phrase: "grandfathered", alternatives: ["legacy","exempt","pre-existing"] },
  { regex: new RegExp("veal", "gi"), phrase: "veal", alternatives: ["calf flesh","flesh from calves"] },
  { regex: new RegExp("lame[\\s-]duck", "gi"), phrase: "lame duck", alternatives: ["outgoing","transitional","ineffective"] },
];

export default async function noAnimalViolence(options: NoAnimalViolenceOptions = {}) {
  const report = options.severity === "message" ? message : warn;
  const modifiedFiles = danger.git.modified_files.concat(danger.git.created_files);

  const diffs = await Promise.all(modifiedFiles.map(f => danger.git.diffForFile(f)));
  for (let i = 0; i < modifiedFiles.length; i++) {
    const result = diffs[i];
    if (!result) continue;
    const file = modifiedFiles[i];
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
  }
}
