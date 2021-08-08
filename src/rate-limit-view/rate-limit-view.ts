import { RATE_LIMIT_COLORS } from "./rate-limit-colors";
const RATE_LIMIT = 333;
const COLOR_INTERVAL = 20;
const COLOR_MAX_MS = RATE_LIMIT_COLORS.positive.length * COLOR_INTERVAL;

export class RateLimitView {
	private oldtime = Date.now();
	private newtime = Date.now();
	private isDelta = false;
	private isEnabled = false;

	constructor(Options: any) {
		$("<span id=ratelim class=ratelimit>RL: <span id=rate></span></span>")
			.insertBefore(".CANT_REPLY")
			.css({
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
		const self = this;
		Options.addSelect({
			default: 0,
			help: "Rate limit viewer by post. Not real, just estimate lol",
			label: "RATE LIMIT VIEW",
			onchange: function() {
				const val = this.val();
				if(val == "Normal" || val == "Delta") {
					$(".ratelimit").css("display", "initial");
					$(".help-toggle").css("display", "none");
					self.isEnabled = true;
				}
				if(val == "Disabled") {
					$(".ratelimit").css("display", "none");
					$(".help-toggle").css("display", "initial");
					$(".bottom-area").css({
						background: "transparent",
						color: "",
					});
					self.isEnabled = false;
				}
				self.isDelta = val == "Delta";
			},
			options: ["Disabled", "Normal", "Delta"],
			section: "Advanced 2",
		});

		$("#new-update-form .save-button button").on("click", this.onMakeUpdate.bind(this));
	}

	private onMakeUpdate(): void {
		// Set times in any case to ensure correct values after turning it on
		this.oldtime = this.newtime;
		this.newtime = Date.now();
		if(!this.isEnabled)return;
		// Compute relevant time differences
		const selfReplyTime = this.newtime - this.oldtime;
		const delta = selfReplyTime - RATE_LIMIT;
		// Set Background Color
		let bgColor: string;
		if(delta < 0) {
			bgColor = RATE_LIMIT_COLORS.negative;
		} else if (delta < COLOR_MAX_MS) {
			const index = Math.floor(delta / COLOR_INTERVAL);
			bgColor = RATE_LIMIT_COLORS.positive[index];
		} else {
			bgColor = "transparent";
		}
		// Set Font Color
		const fontColor = delta < COLOR_MAX_MS ? "#000" : "";
		// Update UI
		const value = this.isDelta ? delta : selfReplyTime;
		$("#rate").text(value + "ms");
		$(".bottom-area").css({
			background: bgColor,
			color: fontColor,
		});
	}
}
