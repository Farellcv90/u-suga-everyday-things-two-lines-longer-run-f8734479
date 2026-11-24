import { mkdirSync, writeFileSync } from "node:fs";

const lines = [
  "A queue is a train made of people, where every carriage has to wait for the one in front before it can move.",
  "It maps the waiting in order and how one slow person holds up everyone behind, but leaves out that real trains run on rails and timetables while people in a queue can step out, change places, or just leave.",
];

const entry = lines.join("\n") + "\n";

// Gate: /output/entry.txt must be 1-400 UTF-8 characters.
if (entry.length < 1 || entry.length > 400) {
  throw new Error(
    `entry length ${entry.length} chars is outside the 1-400 char gate`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote /output/entry.txt (${entry.length} chars)`);
