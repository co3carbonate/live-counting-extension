import React, { PureComponent, ReactNode } from "react";

import { PREFERENCES } from "../preferences/preferences";
import { Preference } from "../preferences/preference";
import { PreferenceEditor } from "./preference-editor";

interface PreferencesEditorProps {}
interface PreferencesEditorState {
	preferences: [string, Preference<unknown>][];
}

export class PreferencesEditor extends PureComponent<PreferencesEditorProps, PreferencesEditorState> {
	constructor(props: PreferencesEditorProps) {
		super(props);

		this.state = {
			preferences: Object.entries(PREFERENCES.getAll()),
		};
		this.updatePreferences = this.updatePreferences.bind(this);
	}

	private updatePreferences(): void {
		this.setState({
			preferences: Object.entries(PREFERENCES.getAll()),
		});
	}

	componentDidMount(): void {
		PREFERENCES.addListener("update", this.updatePreferences);
	}

	componentWillUnmount(): void {
		PREFERENCES.removeListener("update", this.updatePreferences);
	}

	render(): ReactNode {
		return <div>
			<h1>
				<a href="https://github.com/co3carbonate/live-counting-extension/blob/master/README.md#readme" target="_blank">
					Live Counting Extension
				</a>
			</h1>
			<div>
				{this.state.preferences.map(([ key, preference ]) => {
					return <PreferenceEditor key={key} preferenceKey={key} preference={preference} />;
				})}
			</div>
		</div>;
	}
}
