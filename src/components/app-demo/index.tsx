import { Component, h, Prop } from "@stencil/core"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { App } from "../App"

@Component({
	tag: "smoothly-app-demo",
})
export class SmoothlyAppDemo {
	@Prop() baseUrl: string
	render() {
		return (
			<App label="Smoothly Demo" user="Test AB" responsive>
				{/* <a slot="nav-start" href="display">
					Display
				</a>
				<a slot="nav-start" href="https://google.com">
					External
				</a> */}
				<span slot="header">
					<smoothly-picker
						label="Select Merchant"
						style={{ width: "500px" }}
						labelSetting="hide"
						empty-menu-label="Sorry, we're out of options."
						max-height="58px"
						multiple={true}
						options={[
							{ name: "Big Dog", value: "dog", aliases: ["WOFF"] },
							{ name: "Cat Stevens", value: "cat", aliases: ["moew"] },
							{ name: "Noble Pig", value: "pig" },
							{ name: "Turtle Wax", value: "turtle" },
							{ name: "Spider Man", value: "spider" },
							{ name: "Phoenix Order Long Wooord", value: "phoenix" },
							{ name: "Horse Back", value: "horse" },
							{ name: "Unicorn Horn", value: "unicorn" },
							{ name: "Talking Parrot Parrot", value: "parrot" },
							{ name: "Hidden Dragon", value: "dragon" },
							{ name: "Scary Kraken", value: "kraken" },
						]}></smoothly-picker>
				</span>
				{/* <smoothly-trigger slot="nav-end" type="link" name="logout">
					<smoothly-icon toolTip={"Log out"} name="log-out" size="medium"></smoothly-icon>
				</smoothly-trigger>
				<smoothly-room path="">
					<smoothly-input type="text">Default</smoothly-input>
				</smoothly-room> */}
				<smoothly-room path="input" label="Input" responsive>
					<smoothly-input-demo />
				</smoothly-room>
				{/* <smoothly-room path="display" label="Display" icon="eye-outline">
					<smoothly-display-demo />
				</smoothly-room>
				<smoothly-room path="table" label="Table">
					<smoothly-table-demo />
				</smoothly-room>
				<smoothly-room path="select" label="Select">
					<smoothly-select-demo />
				</smoothly-room>
				<smoothly-room path="icon" label="Icon">
					<smoothly-icon-demo />
				</smoothly-room>
				<smoothly-room path="old" label="Old" to="select"></smoothly-room> */}
			</App>
		)
	}
}
