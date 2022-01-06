interface Token {
	isDigitGroup: boolean,
	token: string
}

interface TokenInfo {
	tokens: Token[],
	comment: string
}

interface BodyInfo {
	comment: string,
	number: number,
	numberOriginalFormat: string,
}

/**
 * @param  {string} text Body of Text to tokenize
 * @returns TokenInfo
 */
function tokenize(text: string): TokenInfo {
	text = text.trim();
	if(text[0] == "v") {
		text = text.slice(1);
	}
	const tokens: Token[] = [];
	let token = "";
	let isDigitGroup = false;
	let index = 0;
	while(index <= text.length) {
		if(index == text.length || /[A-Za-z]/.test(text[index]) || text[index] === "\n" || /\d/.test(text[index]) != isDigitGroup) {
			if(token.length > 0) {
				tokens.push({
					isDigitGroup: isDigitGroup,
					token: token,
				});
				token = "";
			}
			isDigitGroup = !isDigitGroup;
		}
		if(index == text.length) {
			return {
				comment: null,
				tokens: tokens,
			};
		} else if (/[A-Za-z]/.test(text[index]) || text[index] === "\n" || (!isDigitGroup && token.length > 2)) {
			return {
				comment: text.slice(index),
				tokens: tokens,
			};
		}
		token += text[index];
		index++;
	}
}
/**
 * @param  {string} text Body of Text to get number from, number needs to be at the start
 * @returns BodyInfo
 */
export function parseBody(text: string): BodyInfo {
	let number = null;
	let originalNumber = null;
	let separator = null;

	if(text === "") {
		return {
			comment: null,
			number: null,
			numberOriginalFormat: null,
		};
	}

	const { tokens: numberTokens, comment } = tokenize(text);
	let tokens = numberTokens;

	if(tokens.length > 0 && !(tokens[0].isDigitGroup)) {
		tokens = tokens.slice(1);
	}
	if(tokens.length > 0 && !(tokens.at(-1).isDigitGroup)) {
		tokens = tokens.slice(0, -1);
	}

	for(let i = 1; i < tokens.length; i += 2) {
		if(separator == null) {
			separator = tokens[i].token;
		}
	}

	if(tokens.length > 0 && [null, ".", ",", ", ", " "].includes(separator)) {
		let num = "";
		for(let i = 0; i < tokens.length; i += 2) {
			num += tokens[i].token;
		}
		originalNumber = tokens.map(e=>e.token).join("");
		number = parseInt(num);
	}
	return {
		comment: comment,
		number: number,
		numberOriginalFormat: originalNumber,
	};
}
