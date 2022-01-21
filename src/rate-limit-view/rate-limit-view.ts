import { RATE_LIMIT_COLORS } from "./rate-limit-colors";
import { SUBMIT_BUTTON } from "../utils/elements";
const RATE_LIMIT = 333;
const COLOR_INTERVAL = 20;
const COLOR_MAX_MS = RATE_LIMIT_COLORS.positive.length * COLOR_INTERVAL;

export class RateLimitView {
	private oldtime = Date.now();
	private newtime = Date.now();
	private isDelta = false;
	private isEnabled = false;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
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

	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
	initOptions(Options: any): void {
		/* eslint-disable-next-line @typescript-eslint/no-this-alias */
		const self = this;
		Options.addSelect({
			default: 0,
			help: "Rate limit viewer by post. Not real, just estimate lol",
			label: "RATE LIMIT VIEW",
			onchange: function() {
				const val = this.val();
				if (val == "Normal" || val == "Delta") {
					$(".ratelimit").css("display", "initial");
					$(".help-toggle").css("display", "none");
					self.isEnabled = true;
				}
				if (val == "Disabled") {
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

		SUBMIT_BUTTON.on("click", this.onSubmit.bind(this));
	}

	private onSubmit(): void {
		// Set times in any case to ensure correct values after turning it on
		this.oldtime = this.newtime;
		this.newtime = Date.now();
		if (!this.isEnabled) return;
		// Compute relevant time differences
		const selfReplyTime = this.newtime - this.oldtime;
		const delta = selfReplyTime - RATE_LIMIT;
		// Update UI
		const value = this.isDelta ? delta : selfReplyTime;
		$("#rate").text(value + "ms");
		$(".bottom-area").css({
			background: this.getBackgroundColor(delta),
			color: this.getFontColor(delta),
		});
	}

	/**
	 * Gets a rate limit view background color for a given message delta.
	 * @param delta the time delta between update submission and propagation.
	 * @returns the background color for the rate limit view
	 */
	private getBackgroundColor(delta: number): string {
		let bgColor: string;
		if (delta < 0) {
			bgColor = RATE_LIMIT_COLORS.negative;
		} else if (delta < COLOR_MAX_MS) {
			const index = Math.floor(delta / COLOR_INTERVAL);
			bgColor = RATE_LIMIT_COLORS.positive[index];
		} else {
			bgColor = "transparent";
		}
		return bgColor;
	}

	/**
	 * Gets a rate limit view font color for a given message delta.
	 * @param delta the time delta between update submission and propagation.
	 * @returns the font color for the rate limit view
	 */
	private getFontColor(delta: number): string {
		return delta < COLOR_MAX_MS ? "#000" : "";
	}
}
