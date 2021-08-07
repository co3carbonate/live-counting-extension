import COLORS from "../data/rate-limit-view-colors.json";

interface RateLimitColors {
	negative: string,
	positive: string[]
}

const RATE_LIMIT_COLORS: RateLimitColors = COLORS;
const RATE_LIMIT = 333;
const COLOR_INTERVAL = 20;
const COLOR_MAX_MS = RATE_LIMIT_COLORS.positive.length * COLOR_INTERVAL;

export class RateLimitView {
	static oldtime = Date.now();
	static newtime = Date.now();
	static bgColor = "";
	static fontColor = "";
	static isDelta = false;
	static isEnabled = false;

	constructor(Options: any) {
		$("<span id=ratelim class=ratelimit>RL: <span id=rate></span></span>").insertBefore(".CANT_REPLY");
		$(".ratelimit").css({
			background: "transparent",
			display: "none",
			float: "right",
			"font-size": "smaller",
			"margin-left": "10px",
			"margin-top": "5px",
		});
		this.initOptions(Options);
	}

	initOptions(Options: any): void {
		Options.addSelect({
			default: 0,
			help: "Rate limit viewer by post. Not real, just estimate lol",
			label: "RATE LIMIT VIEW",
			onchange: RateLimitView.onChange.call(this),
			options: ["Disabled", "Normal", "Delta"],
			section: "Advanced 2",
		});

		$("#new-update-form .save-button button").on("click", RateLimitView.onMakeUpdate);
	}

	private static onChange(): void {
		const val = this.val();
		if(val == "Normal" || val == "Delta") {
			$(".ratelimit").css("display", "initial");
			$(".help-toggle").css("display", "none");
			RateLimitView.isEnabled = true;
		}
		if(val == "Disabled") {
			$(".ratelimit").css("display", "none");
			$(".help-toggle").css("display", "initial");
			$(".bottom-area").css("background", "transparent");
			$(".bottom-area").css("color", "");
			RateLimitView.isEnabled = false;
		}
		RateLimitView.isDelta = val == "Delta";
	}

	private static onMakeUpdate(): void {
		// Set times in any case to ensure correct values after turning it on
		RateLimitView.oldtime = RateLimitView.newtime;
		RateLimitView.newtime = Date.now();
		if(!RateLimitView.isEnabled)return;
		// Compute relevant time differences
		const selfReplyTime = RateLimitView.newtime - RateLimitView.oldtime;
		const delta = selfReplyTime - RATE_LIMIT;
		// Set Background Color
		if(delta < 0) {
			RateLimitView.bgColor = RATE_LIMIT_COLORS.negative;
		} else if (delta < COLOR_MAX_MS) {
			const index = Math.floor(delta / COLOR_INTERVAL);
			RateLimitView.bgColor = RATE_LIMIT_COLORS.positive[index];
		} else {
			RateLimitView.bgColor = "transparent";
		}
		// Set Font Color
		RateLimitView.fontColor = delta < COLOR_MAX_MS ? "#000" : "";
		// Update UI
		const value = RateLimitView.isDelta ? delta : selfReplyTime;
		$("#rate").text(value + "ms");
		$(".bottom-area").css("background", RateLimitView.bgColor);
		$(".bottom-area").css("color", RateLimitView.fontColor);
	}
}
