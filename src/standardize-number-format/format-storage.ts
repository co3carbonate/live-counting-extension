export interface FormatFunc {
	(input: string): string
}

interface FormatFunctions {
	[funcName: string]: FormatFunc
}

/**
 * @param  {string} str Number
 * @param  {string} char Character to use as Delimiter
 * @returns {string} Formatted Number (ex. 1,234,567)
 */
const delimit = function(str: string, char: string): string {
	return str.replace(/\B(?=(\d{3})+(?!\d))/g, char);
};

export class FormatStorage {
	private formatFunctions: FormatFunctions = {};
	private formatList: string[] = [];

	addFormat(name: string, func: FormatFunc): void {
		if(!this.formatList.includes(name)) {
			this.formatFunctions[name] = func;
			this.formatList.push(name);
		}
	}

	getFormat(name: string): FormatFunc {
		if(this.formatList.includes(name)) {
			return this.formatFunctions[name];
		} else {
			return str => str;
		}
	}

	getAllFormats(): string[] {
		return this.formatList;
	}
}

export const FORMAT_STORAGE = new FormatStorage();
FORMAT_STORAGE.addFormat("Disabled", str => str);
FORMAT_STORAGE.addFormat("Spaces", str => delimit(str, " "));
FORMAT_STORAGE.addFormat("Periods", str => delimit(str, "."));
FORMAT_STORAGE.addFormat("Commas", str => delimit(str, ","));
FORMAT_STORAGE.addFormat("CommaSpaces", str => delimit(str, ", "));
FORMAT_STORAGE.addFormat("None", str => delimit(str, ""));
