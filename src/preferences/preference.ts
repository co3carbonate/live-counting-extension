export interface PreferenceOption<T> {
	label?: string;
	value: T;
}

export interface Preference<T> {
	label?: string;
	description?: string;
	defaultValue: T;
	value?: T;
	options?: PreferenceOption<T>[]
}

/**
 * Gets the value or default value of the preference.
 * @param preference The preference to get the value of.
 */
export function getPreferenceValue<T>(preference: Preference<T>): T {
	return typeof preference.value === "undefined" ? preference.defaultValue : preference.value;
}
