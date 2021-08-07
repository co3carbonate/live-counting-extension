import { FORMAT_STORAGE, FormatFunc, FormatStorage } from "./format-storage";
import { UPDATE_EVENTS } from "../events/update-events";
import { parseBody } from "../utils/number-extraction";

export class StandardizeNumberFormat {
	private formatStorage: FormatStorage;
	private formatFunc: FormatFunc;
	private enabled = false;

	// TODO: Import Options instead when those are ported to typescript
	constructor(Options: any) {
		this.formatStorage = FORMAT_STORAGE;
		const self = this;

		Options.addSelect({
			help: "Standardizes the number count in each message to a format of your choice. Also removes special formatting on the number.",
			label: "STANDARDIZE FORMAT",
			onchange: function() {
				self.formatFunc = self.formatStorage.getFormat(this.val());
				self.enabled = this.val() != "Disabled";
			},
			options: this.formatStorage.getAllFormats(),
			section: "Advanced",
		});

		UPDATE_EVENTS.addListener("new", data => {
			if(!this.enabled)return;
			const bodyNode = data.bodyNode;
			const { number, numberOriginalFormat } = parseBody(bodyNode.text());
			const numberString = number === null ? "" : number.toString();
			if(numberString.length === 0)return;
			const newHTML = bodyNode.html().replace(numberOriginalFormat, this.formatFunc(numberString));
			bodyNode.html(newHTML);
		});
	}
}
