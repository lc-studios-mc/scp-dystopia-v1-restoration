import { defineConfig } from "@lc-studios-js/mcpacker";
import path from "node:path";

export default defineConfig((args) => {
	/** @param {string} type */
	const getOutDir = (type) => {
		const envKey = `DEV_${type.toUpperCase()}_OUTDIR`;
		const devDir = process.env[envKey];
		if (!devDir) throw new Error(`Please set the environment variable '${envKey}' in .env file`);
		return path.resolve(devDir);
	};

	const rpHeaderUuid = "8aba7b68-9130-45b8-a906-4accfb48de1f";

	const bpManifest = {
		format_version: 2,
		header: {
			description:
				"Restoration of the v1 features is the most important step towards the full v2.0 release.",
			name: "SCP:DY v1 restoration BP",
			uuid: "531841ee-1e6f-46e1-bad7-1a77d94d70c1",
			version: [0, 0, 1],
			min_engine_version: [1, 21, 100],
		},
		modules: [
			{
				type: "data",
				uuid: "2554e852-bf3f-4504-96dd-942686d35a25",
				version: [0, 0, 1],
			},
			{
				language: "javascript",
				type: "script",
				uuid: "473d85d8-1154-4c8e-917b-3dc19c64def2",
				version: [0, 0, 1],
				entry: "scripts/main.js",
			},
		],
		dependencies: [
			{
				// Resource pack
				uuid: rpHeaderUuid,
				version: [0, 0, 1],
			},
			{
				module_name: "@minecraft/server",
				version: "2.2.0-beta",
			},
		],
	};

	const rpManifest = {
		format_version: 2,
		header: {
			description: "Resource pack.",
			name: "SCP:DY v1 restoration RP",
			uuid: rpHeaderUuid,
			version: [0, 0, 1],
			min_engine_version: [1, 21, 100],
		},
		modules: [
			{
				type: "resources",
				uuid: "770387db-57cf-4ef0-b9cb-bfc77f1e604e",
				version: [0, 0, 1],
			},
		],
	};

	/** @type {import("@lc-studios-js/mcpacker").BuildConfig} */
	const config = {
		packs: [
			{
				type: "behavior",
				name: "BP",
				srcDir: "src/bp",
				outDir: getOutDir("bp"),
				manifest: bpManifest,
				clean: true,
				watch: args.watch,
				convertJsoncToJson: true,
				convertJson5ToJson: true,
				scripts: {
					entry: "src/bp/scripts/main.ts",
					bundle: true,
					sourceMap: true,
				},
			},
			{
				type: "resource",
				name: "RP",
				srcDir: "src/rp",
				outDir: getOutDir("rp"),
				manifest: rpManifest,
				clean: true,
				watch: args.watch,
				convertJsoncToJson: true,
				convertJson5ToJson: true,
			},
		],
	};

	return config;
});
