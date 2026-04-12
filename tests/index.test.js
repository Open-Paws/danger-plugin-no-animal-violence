/**
 * Tests for the danger-plugin-no-animal-violence plugin.
 *
 * The plugin uses the Danger DSL global (`danger` and `warn`/`message`),
 * which is only available at Danger.js runtime. These tests stub that
 * environment to exercise the plugin's pattern-matching logic directly.
 */

const assert = require("node:assert/strict");
const { test } = require("node:test");

// Set up Danger globals before importing the plugin.
const warnings = [];
const messages = [];

global.warn = (msg) => warnings.push(msg);
global.message = (msg) => messages.push(msg);

/**
 * Create a mock Danger context for a given diff string.
 * Returns a promise-based diffForFile as the real Danger API does.
 */
function mockDanger(addedText, files = ["src/example.js"]) {
	global.danger = {
		git: {
			modified_files: files,
			created_files: [],
			diffForFile: async (_file) => ({ added: addedText, removed: "" }),
		},
	};
}

// Load the compiled plugin after globals are in place.
const noAnimalViolence = require("../dist/index.js").default;

test("plugin exports a function", () => {
	assert.equal(typeof noAnimalViolence, "function", "plugin must export a default function");
});

test("plugin flags a known speciesist phrase", async () => {
	warnings.length = 0;
	mockDanger("// TODO: wild goose chase here");
	noAnimalViolence();
	// Give async diff resolution a tick to complete.
	await new Promise((resolve) => setTimeout(resolve, 10));
	assert.ok(warnings.length > 0, "plugin must warn when a speciesist phrase is detected");
});

test("plugin does not warn on clean diff", async () => {
	warnings.length = 0;
	mockDanger("// TODO: use futile search to track this down");
	noAnimalViolence();
	await new Promise((resolve) => setTimeout(resolve, 10));
	assert.equal(warnings.length, 0, "plugin must not warn when no speciesist phrases are present");
});

test("plugin uses message severity when option is set", async () => {
	messages.length = 0;
	warnings.length = 0;
	mockDanger("// this is a wild goose chase");
	noAnimalViolence({ severity: "message" });
	await new Promise((resolve) => setTimeout(resolve, 10));
	assert.ok(messages.length > 0, "plugin must use message() when severity is 'message'");
	assert.equal(warnings.length, 0, "plugin must not call warn() when severity is 'message'");
});

test("plugin handles file with no diff gracefully", async () => {
	warnings.length = 0;
	global.danger = {
		git: {
			modified_files: ["src/nodiff.js"],
			created_files: [],
			diffForFile: async (_file) => null,
		},
	};
	noAnimalViolence();
	await new Promise((resolve) => setTimeout(resolve, 10));
	assert.equal(warnings.length, 0, "plugin must not throw when diff is null");
});
