import COLORS from "../data/rate-limit-view-colors.json";

interface RateLimitColors {
	negative: string,
	positive: string[]
}

const RATE_LIMIT_COLORS: RateLimitColors = COLORS;
const RATE_LIMIT = 333;
const COLOR_INTERVALL = 20;
const COLOR_MAX_MS = RATE_LIMIT_COLORS.positive.length * COLOR_INTERVALL;

export class RateLimitView {
	constructor(Elements: any, Options: any) {
		Elements.$body.attr("data-RateLimitView", "Disabled");
		$("<span id=ratelim class=ratelimit>RL: <span id=rate></span></span>").insertBefore(".CANT_REPLY");
		$(".ratelimit").css({
			background: "transparent",
			display: "none",
			float: "right",
			"font-size": "smaller",
			"margin-left": "10px",
			"margin-top": "5px",
		});
		this.initOptions(Elements, Options);
	}

	initOptions(Elements: any, Options: any): void {
		let oldtime = Date.now();
		let newtime = Date.now();
		let bgColor = "";
		let fontColor = "";
		let isDelta = false;
		let isEnabled = false;
		let didInit = false;
		Options.addSelect({
			default: 0,
			help: "Rate limit viewer by post. Not real, just estimate lol",
			label: "RATE LIMIT VIEW",
			onchange: function() {
				const val = this.val();
				Elements.$body.attr("data-RateLimitView", val);

				if(val == "Normal" || val == "Delta") {
					$(".ratelimit").css("display", "initial");
					$(".help-toggle").css("display", "none");
					isEnabled = true;
				}
				if(val == "Disabled") {
					$(".ratelimit").css("display", "none");
					$(".help-toggle").css("display", "initial");
					isEnabled = false;
				}
				isDelta = val == "Delta";
				if(didInit)return;

				$("#new-update-form .save-button button").on("click", function() {
					// Set times in any case to ensure correct values after turning it on
					oldtime = newtime;
					newtime = Date.now();
					if(!isEnabled)return;
					// Compute relevant time differences
					const selfReplyTime = newtime - oldtime;
					const delta = selfReplyTime - RATE_LIMIT;
					// Set Background Color
					if(delta < 0) {
						bgColor = RATE_LIMIT_COLORS.negative;
					} else if (delta < COLOR_MAX_MS) {
						const index = Math.floor(delta / COLOR_INTERVALL);
						bgColor = RATE_LIMIT_COLORS.positive[index];
					} else {
						bgColor = "transparent";
					}
					// Set Font Color
					fontColor = delta < COLOR_MAX_MS ? "#000" : "";
					// Update UI
					const value = isDelta ? delta : selfReplyTime;
					$("#rate").text(value + "ms");
					$(".bottom-area").css("background", bgColor);
					$(".bottom-area").css("color", fontColor);
				});
				didInit = true;
			},
			options: ["Disabled", "Normal", "Delta"],
			section: "Advanced 2",
		});
	}
}
