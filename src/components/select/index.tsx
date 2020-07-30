// tslint:disable-next-line: no-implicit-dependencies
import { Component, Event, EventEmitter, Prop, h } from "@stencil/core"

@Component({
	tag: "smoothly-select",
	styleUrl: "style.css",
	scoped: true,
})
export class SmoothlySelect {
	@Prop() identifier: string
	private selectElement?: HTMLSelectElement
	@Prop({ mutable: true }) value: string
	@Event() selectionChanged!: EventEmitter<{ identifier: string, value: string }>
	optionSelected() {
		if (this.selectElement)
			this.selectionChanged.emit({ identifier: this.identifier, value: this.value = this.selectElement.value })
	}
	componentDidLoad() {
		if (this.selectElement)
		this.value = this.selectElement?.value
		console.log(this.value)
	}

	render() {
		return [
			<select ref={ e => this.selectElement = e } id={ this.identifier } onChange={ () => this.optionSelected() }>
				<slot></slot>
			</select>
		]
	}
}
