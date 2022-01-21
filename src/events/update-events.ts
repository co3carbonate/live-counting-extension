import { EventEmitter } from "node:events";
import { UPDATES_ELEMENT } from "../utils/elements";

export interface UpdateInfo {
	author: string;
	authorNode: JQuery<HTMLElement>;
	bodyNode: JQuery<HTMLElement>;
	hrefNode: JQuery<HTMLElement>;
	node: JQuery<Node | NodeList>;
}

class UpdateEvents extends EventEmitter {
	private readonly observer: MutationObserver;

	constructor() {
		super();

		this.handleMutations = this.handleMutations.bind(this);
		this.observer = new MutationObserver(this.handleMutations);
	}

	/**
	 * Emits an `all` event for each existing update.
	 */
	handleExisting(): void {
		$(".liveupdate").each((index, element) => {
			const info = UpdateEvents.getUpdateInfo($(element));
			this.emit("all", info);
		});
	}

	handleMutations(mutations: MutationRecord[]): void {
		// Loop through MutationRecords and call the functions in various arrays based on .type
		// (Honestly the MutationRecord[] usually only contains one, but whatever)
		for (const mutation of mutations) {
			// Addition / removal of child elements
			// Executes loadedNew(), loadedOld(), deleted() functions accordingly
			if (mutation.type === "childList") {
				this.handleChildListMutation(mutation);
			} else if (mutation.type === "attributes") {
				this.handleAttributesMutation(mutation);
			}
		}
	}

	handleChildListMutation(mutation: MutationRecord): void {
		const addedNodes = $(mutation.addedNodes).filter(".liveupdate");
		addedNodes.each((index, element) => {
			const node = $(element);

			// Ignore preview messages (remove submission lag)
			if (node.hasClass("preview")) {
				return;
			}

			const info = UpdateEvents.getUpdateInfo(node);
			this.emit("all", info);

			// Determine whether the inserted update is new or loaded
			// This is based on whether it was inserted at the top or the bottom
			if (node.index() === 0) {
				this.emit("new", info);
			} else {
				this.emit("loaded", info);
			}
		});
	}

	handleAttributesMutation(mutation: MutationRecord): void {
		const node = $(mutation.target);
		if (!(mutation.oldValue && node.attr("class"))) {
			return;
		}

		const oldClasses = mutation.oldValue.split(" ");
		const newClasses = node.attr("class").split(" ");

		// Ensure the node has the 'liveupdate' class
		if (!node.hasClass("liveupdate")) {
			return;
		}

		// Check if the update gained the 'stricken' class
		if (!oldClasses.includes("stricken") && newClasses.includes("stricken")) {
			this.emit("stricken", UpdateEvents.getUpdateInfo(node));
		}
	}

	/**
	 * Starts observing for DOM mutations.
	 */
	observe() {
		this.observer.observe(UPDATES_ELEMENT.get(0), {
			attributeFilter: [
				"class",
			],
			attributeOldValue: true,
			// Observe for change in the 'class' attribute value
			attributes: true,
			// Observe for insertion / removal of children updates
			childList: true,
			// Observe for these changes (particularly attributes changes) in descendants
			subtree: true,
		});
	}

	/**
	 * Parses update info from a DOM node.
	 * @param node the node of the update
	 * @returns the update info
	 */
	static getUpdateInfo(node: JQuery<Node | NodeList>): UpdateInfo {
		const info: UpdateInfo = {
			author: node.find(".body > .author").text(),
			authorNode: node.find(".body > .author"),
			bodyNode: node.find(".body > .md"),
			hrefNode: node.find(".body > .md > p > em > a"),
			node,
		};

		// Remove prefix from author username
		if (info.author) {
			info.author = info.author.trim().replace("/u/", "");
		}

		return info;
	}
}

export const UPDATE_EVENTS = new UpdateEvents();
UPDATE_EVENTS.observe();
