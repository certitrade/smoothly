import { Component, Prop, Element, Event, EventEmitter, Listen, Method } from "@stencil/core"
import { Color } from "../../Color"
import { Trigger } from "../../Trigger"

@Component({
	tag: "smoothly-dialog",
	styleUrl: "style.css",
	scoped: true,
})
export class SmoothlyDialog {
	@Prop({ reflectToAttr: true }) color: Color | undefined
	@Prop({ mutable: true, reflectToAttr: true }) open: boolean = true
	@Prop({ reflectToAttr: true}) closable: boolean = false
	@Listen("trigger")
	TriggerListener(event: CustomEvent<Trigger>) {
		if (Trigger.is(event.detail) && event.detail.name == "close")
			this.open = false
	}
	hostData() {
		return {
			style: {
				display: this.open ? "block" : "none",
			},
		}
	}
	render() {
		return [
			<main>
				{ this.closable ? <smoothly-trigger color="primary" fill="clear" name="close">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
					<path d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z"/>
				</svg>
				</smoothly-trigger> : [] }
				<slot></slot>
			</main>,
		]
	}
}
//
