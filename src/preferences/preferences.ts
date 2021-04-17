import { Preference, getPreferenceValue } from "./preference";

import { EventEmitter } from "events";

class PreferencesManager extends EventEmitter {
	private static readonly LOCAL_STORAGE_KEY = "live-counting-extension:preferences";

	private readonly preferences: Record<string, Preference<unknown>> = {};

	private getPreference(key: string): Preference<unknown> {
		const preference = this.preferences[key];
		if (!preference) {
			throw new Error("No such preference with key: " + key);
		}

		return preference;
	}

	get(key: string): unknown {
		const preference = this.getPreference(key);
		return getPreferenceValue(preference);
	}

	getAll(): Record<string, Preference<unknown>> {
		return this.preferences;
	}

	private setSilently(key: string, value: unknown): void {
		const preference = this.getPreference(key);
		preference.value = value;
	}

	set(key: string, value: unknown): void {
		this.setSilently(key, value);
		this.update();
	}

	register<T>(key: string, preference: Preference<T>): void {
		this.preferences[key] = preference;
	}

	registerDefaults(): void {
		return;
	}

	toJSON(): Record<string, unknown> {
		const json: Record<string, unknown> = {};

		const entries = Object.entries(this.preferences);
		for (const [ key, preference ] of entries) {
			if (typeof preference.value !== "undefined") {
				json[key] = preference.value;
			}
		}

		return json;
	}


	/**
	 * Loads overridden preferences from local storage.
	 */
	load(): void {
		const json = localStorage.getItem(PreferencesManager.LOCAL_STORAGE_KEY);

		const preferences = Object.entries(JSON.parse(json));
		for (const [ key, value ] of preferences) {
			if (typeof value !== "undefined") {
				this.setSilently(key, value);
			}
		}
	}

	/**
	 * Saves overridden preferences to local storage.
	 */
	save(): string {
		const json = JSON.stringify(this);
		localStorage.setItem(PreferencesManager.LOCAL_STORAGE_KEY, json);
		return json;
	}

	update(): void {
		this.emit("update");
		this.save();
	}
}

export const PREFERENCES = new PreferencesManager();
PREFERENCES.registerDefaults();
PREFERENCES.load();
