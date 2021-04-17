import { ChangeEvent, Component, ReactNode } from "react";
import { Preference, getPreferenceValue } from "../preferences/preference";

import { PREFERENCES } from "../preferences/preferences";

interface PreferenceEditorProps {
	preferenceKey: string;
	preference: Preference<unknown>;
}
interface PreferenceEditorState {}

export class PreferenceEditor extends Component<PreferenceEditorProps, PreferenceEditorState> {
	constructor(props: PreferenceEditorProps) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	private onChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void {
		if ("checked" in event.target) {
			PREFERENCES.set(this.props.preferenceKey, event.target.checked);
			return;
		}
		PREFERENCES.set(this.props.preferenceKey, event.target.value);
	}

	private renderControl(): ReactNode {
		const type = typeof this.props.preference.defaultValue;
		if (type === "string") {
			const value = getPreferenceValue(this.props.preference) as string;
			if (Array.isArray(this.props.preference.options)) {
				return <select value={value} onChange={this.onChange}>
					{this.props.preference.options.map(option => {
						return <option key={option.value as string} value={option.value as string}>
							{option.label || option.value}
						</option>;
					})}
				</select>;
			} else {
				return <input value={value} onChange={this.onChange} />;
			}
		} else if (type === "boolean") {
			return <input type="checkbox" checked={getPreferenceValue(this.props.preference) as boolean} onChange={this.onChange} />;
		}
	}

	private getSuffixedLabel(): string {
		const label = this.props.preference.label || this.props.preferenceKey;
		return label + ": ";
	}

	render(): ReactNode {
		return <div>
			<label>
				<span>
					{this.getSuffixedLabel()}
				</span>
				{this.renderControl()}
			</label>
		</div>;
	}
}
