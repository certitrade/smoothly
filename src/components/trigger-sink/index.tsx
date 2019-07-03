import { Component, Listen, Prop, h } from "@stencil/core"
import { Message, Trigger } from "smoothly-model"

@Component({
	tag: "smoothly-trigger-sink",
	styleUrl: "style.css",
	scoped: true,
})
export class SmoothlyTriggerSink {
	@Prop() context?: Window
	@Prop() destination: string
	@Prop() filter?: string
	filtersValue?: string[]
	get filters(): string[] {
		if (!this.filtersValue)
			this.filtersValue = this.filter ? this.filter.split(" ") : []
		return this.filtersValue
	}
	@Listen("trigger")
	TriggerListener(event: CustomEvent<Trigger>) {
		console.log("trigger-sink", event, this.filters)
		if (Trigger.is(event.detail) && this.filters.some(f => f == event.detail.name)) {
			Message.send(this.destination, event.detail, this.context || window)
			event.preventDefault()
			event.stopPropagation()
		}
	}
	render() {
		return <slot></slot>
	}
}
