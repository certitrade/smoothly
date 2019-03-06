import * as browser from "../browser"
import { State } from "../State"
import { KeyEvent } from "../KeyEvent"
import { Component } from "../Component"

export abstract class Type {
	get value(): string { return this.component.value }
	set value(v: string) { this.component.value = v }
	get type(): browser.Type { return browser.Type.as(this.component.type) }
	get minLength(): number { return this.component.minLength }
	get maxLength(): number { return this.component.maxLength }
	get autocomplete(): browser.Autocomplete { return this.component.autocomplete }
	get pattern(): RegExp | undefined { return this.component.pattern }
	get placeholder(): string | undefined { return this.component.placeholder }
	protected constructor(protected readonly component: Component) {
	}
	onKeyDown(event: KeyboardEvent) {
		event.preventDefault()
		const backend = event.target as HTMLInputElement
		const before = { value: this.component.value, selectionStart: backend.selectionStart || backend.value.length, selectionEnd: backend.selectionEnd || backend.value.length }
		const after = this.keyEventHandler(before, event)
		if (after.value != before.value)
			this.value = backend.value = after.value
		if (after.selectionStart != before.selectionStart)
			backend.selectionStart = after.selectionStart
		if (after.selectionEnd != before.selectionEnd)
			backend.selectionEnd = after.selectionEnd
	}
	abstract keyEventHandler(state: State, event?: KeyEvent): State
	static creators: { [type: string]: (component: Component) => Type } = {}
	static add(type: string, creator: (component: Component) => Type) {
		Type.creators[type] = creator
	}
	static create(component: Partial<Component>): Type {
		const c: Component = { value: "", type: "text", minLength: 0, maxLength: Number.POSITIVE_INFINITY, autocomplete: "on", pattern: undefined, placeholder: undefined, ...component }
		return (Type.creators[c.type] || Type.creators.text)(c)
	}
}
