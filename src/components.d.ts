/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Color, Expand, Fill, Message, Notice, OptionType, Trigger } from "./model";
import { Direction, Type } from "tidily";
import { CountryCode, Currency, DateTime } from "isoly";
export namespace Components {
    interface SmoothlyAccordion {
        "value"?: string;
    }
    interface SmoothlyAccordionItem {
        "brand"?: string | string[];
        "name": string;
        "open"?: boolean;
    }
    interface SmoothlyApp {
        "color": Color;
    }
    interface SmoothlyAppDemo {
        "baseUrl": string;
    }
    interface SmoothlyCheckbox {
        "disabled": boolean;
        "selectAll": boolean;
        "selected": boolean;
    }
    interface SmoothlyDialog {
        "closable": boolean;
        "color": Color | undefined;
        "header": string | undefined;
        "open": boolean;
    }
    interface SmoothlyDisplay {
        "country"?: CountryCode.Alpha2;
        "currency"?: Currency;
        "type": Type;
        "value"?: any;
    }
    interface SmoothlyDisplayAmount {
        "amount": number | string;
        "currency": Currency;
    }
    interface SmoothlyDisplayDateTime {
        "datetime": DateTime;
    }
    interface SmoothlyDisplayDemo {
    }
    interface SmoothlyFrame {
        "name": string;
        "origin": string | undefined;
        "send": (message: string | Message<any>, content?: Trigger | any) => Promise<void>;
        "url": string;
    }
    interface SmoothlyIcon {
        "color": Color;
        "fill": Fill;
        "name"?: string;
        "size": "small" | "medium" | "large";
        "toolTip"?: string;
    }
    interface SmoothlyIconDemo {
    }
    interface SmoothlyInput {
        "autocomplete": boolean;
        "currency"?: Currency;
        "disabled": boolean;
        "maxLength": number;
        "minLength": number;
        "name": string;
        "pattern": RegExp | undefined;
        "placeholder": string | undefined;
        "required": boolean;
        "setKeepFocusOnReRender": (keepFocus: boolean) => Promise<void>;
        "setSelectionRange": (start: number, end: number, direction?: Direction | undefined) => Promise<void>;
        "type": string;
        "value": any;
    }
    interface SmoothlyInputDemo {
    }
    interface SmoothlyMenuOptions {
        "emptyMenuLabel": string;
        "filterOptions": (keyword: string, excludeValues?: string[]) => Promise<void>;
        "getHighlighted": () => Promise<OptionType | undefined>;
        "maxMenuHeight": "inherit";
        "moveHighlight": (step: number) => Promise<void>;
        "optionStyle": any;
        "options": OptionType[];
        "order": boolean;
        "setHighlight": (newIndex: number | string, scrollToHighlight?: boolean) => Promise<void>;
    }
    interface SmoothlyNotification {
        "notice": Notice;
    }
    interface SmoothlyNotifier {
    }
    interface SmoothlyOption {
        "aliases": string;
        "dataHighlight": boolean;
        "name": string;
        "value": string;
    }
    interface SmoothlyPicker {
        "emptyMenuLabel": string;
        "label": string;
        "labelSetting": "hide" | "default";
        "maxHeight": string;
        "maxMenuHeight": "inherit";
        "multiple": boolean;
        "optionStyle": any;
        "options": OptionType[];
        "selections": OptionType[];
    }
    interface SmoothlyPopup {
        "direction": "up" | "down";
        "visible": boolean;
    }
    interface SmoothlyRadio {
        "checked": boolean;
        "name": string;
        "tabIndex": number;
        "value": string;
    }
    interface SmoothlyRadioGroup {
        "orientation"?: "horizontal" | "vertical";
    }
    interface SmoothlyReorder {
    }
    interface SmoothlyRoom {
        "icon"?: string;
        "label"?: string;
        "path": string;
        "responsive"?: true;
        "to"?: string;
    }
    interface SmoothlySelect {
        "background"?: string;
        "identifier": string;
        "value": string;
    }
    interface SmoothlySelectDemo {
    }
    interface SmoothlySpinner {
        "active": boolean;
    }
    interface SmoothlySubmit {
        "color"?: Color;
        "disabled": boolean;
        "expand"?: Expand;
        "fill"?: Fill;
        "prevent"?: boolean;
        "processing": boolean;
        "submit": () => Promise<boolean>;
    }
    interface SmoothlyTable {
    }
    interface SmoothlyTableCell {
    }
    interface SmoothlyTableDemo {
    }
    interface SmoothlyTableExpandableCell {
        "align": "left" | "center" | "right";
        "open": boolean;
    }
    interface SmoothlyTableExpandableRow {
    }
    interface SmoothlyTableHeader {
        "name": string;
        "sortDirection"?: "ascending" | "descending";
    }
    interface SmoothlyTableRow {
    }
    interface SmoothlyTrigger {
        "color": Color | undefined;
        "disabled": boolean;
        "expand": Expand;
        "fill": Fill;
        "name": string;
        "responsive"?: true;
        "type": "link" | "button";
        "value"?: any;
    }
    interface SmoothlyTriggerSink {
        "context"?: Window;
        "destination": string;
        "filter"?: string;
    }
    interface SmoothlyTriggerSource {
        "listen": string;
    }
    interface SmoothlyTuple {
        "tuple": [string, string];
    }
    interface SmoothlyUrlencoded {
        "data": string;
    }
    interface SmoothlyUserMenu {
        "isOpen": boolean;
        "responsive"?: true;
        "userName": string;
    }
}
declare global {
    interface HTMLSmoothlyAccordionElement extends Components.SmoothlyAccordion, HTMLStencilElement {
    }
    var HTMLSmoothlyAccordionElement: {
        prototype: HTMLSmoothlyAccordionElement;
        new (): HTMLSmoothlyAccordionElement;
    };
    interface HTMLSmoothlyAccordionItemElement extends Components.SmoothlyAccordionItem, HTMLStencilElement {
    }
    var HTMLSmoothlyAccordionItemElement: {
        prototype: HTMLSmoothlyAccordionItemElement;
        new (): HTMLSmoothlyAccordionItemElement;
    };
    interface HTMLSmoothlyAppElement extends Components.SmoothlyApp, HTMLStencilElement {
    }
    var HTMLSmoothlyAppElement: {
        prototype: HTMLSmoothlyAppElement;
        new (): HTMLSmoothlyAppElement;
    };
    interface HTMLSmoothlyAppDemoElement extends Components.SmoothlyAppDemo, HTMLStencilElement {
    }
    var HTMLSmoothlyAppDemoElement: {
        prototype: HTMLSmoothlyAppDemoElement;
        new (): HTMLSmoothlyAppDemoElement;
    };
    interface HTMLSmoothlyCheckboxElement extends Components.SmoothlyCheckbox, HTMLStencilElement {
    }
    var HTMLSmoothlyCheckboxElement: {
        prototype: HTMLSmoothlyCheckboxElement;
        new (): HTMLSmoothlyCheckboxElement;
    };
    interface HTMLSmoothlyDialogElement extends Components.SmoothlyDialog, HTMLStencilElement {
    }
    var HTMLSmoothlyDialogElement: {
        prototype: HTMLSmoothlyDialogElement;
        new (): HTMLSmoothlyDialogElement;
    };
    interface HTMLSmoothlyDisplayElement extends Components.SmoothlyDisplay, HTMLStencilElement {
    }
    var HTMLSmoothlyDisplayElement: {
        prototype: HTMLSmoothlyDisplayElement;
        new (): HTMLSmoothlyDisplayElement;
    };
    interface HTMLSmoothlyDisplayAmountElement extends Components.SmoothlyDisplayAmount, HTMLStencilElement {
    }
    var HTMLSmoothlyDisplayAmountElement: {
        prototype: HTMLSmoothlyDisplayAmountElement;
        new (): HTMLSmoothlyDisplayAmountElement;
    };
    interface HTMLSmoothlyDisplayDateTimeElement extends Components.SmoothlyDisplayDateTime, HTMLStencilElement {
    }
    var HTMLSmoothlyDisplayDateTimeElement: {
        prototype: HTMLSmoothlyDisplayDateTimeElement;
        new (): HTMLSmoothlyDisplayDateTimeElement;
    };
    interface HTMLSmoothlyDisplayDemoElement extends Components.SmoothlyDisplayDemo, HTMLStencilElement {
    }
    var HTMLSmoothlyDisplayDemoElement: {
        prototype: HTMLSmoothlyDisplayDemoElement;
        new (): HTMLSmoothlyDisplayDemoElement;
    };
    interface HTMLSmoothlyFrameElement extends Components.SmoothlyFrame, HTMLStencilElement {
    }
    var HTMLSmoothlyFrameElement: {
        prototype: HTMLSmoothlyFrameElement;
        new (): HTMLSmoothlyFrameElement;
    };
    interface HTMLSmoothlyIconElement extends Components.SmoothlyIcon, HTMLStencilElement {
    }
    var HTMLSmoothlyIconElement: {
        prototype: HTMLSmoothlyIconElement;
        new (): HTMLSmoothlyIconElement;
    };
    interface HTMLSmoothlyIconDemoElement extends Components.SmoothlyIconDemo, HTMLStencilElement {
    }
    var HTMLSmoothlyIconDemoElement: {
        prototype: HTMLSmoothlyIconDemoElement;
        new (): HTMLSmoothlyIconDemoElement;
    };
    interface HTMLSmoothlyInputElement extends Components.SmoothlyInput, HTMLStencilElement {
    }
    var HTMLSmoothlyInputElement: {
        prototype: HTMLSmoothlyInputElement;
        new (): HTMLSmoothlyInputElement;
    };
    interface HTMLSmoothlyInputDemoElement extends Components.SmoothlyInputDemo, HTMLStencilElement {
    }
    var HTMLSmoothlyInputDemoElement: {
        prototype: HTMLSmoothlyInputDemoElement;
        new (): HTMLSmoothlyInputDemoElement;
    };
    interface HTMLSmoothlyMenuOptionsElement extends Components.SmoothlyMenuOptions, HTMLStencilElement {
    }
    var HTMLSmoothlyMenuOptionsElement: {
        prototype: HTMLSmoothlyMenuOptionsElement;
        new (): HTMLSmoothlyMenuOptionsElement;
    };
    interface HTMLSmoothlyNotificationElement extends Components.SmoothlyNotification, HTMLStencilElement {
    }
    var HTMLSmoothlyNotificationElement: {
        prototype: HTMLSmoothlyNotificationElement;
        new (): HTMLSmoothlyNotificationElement;
    };
    interface HTMLSmoothlyNotifierElement extends Components.SmoothlyNotifier, HTMLStencilElement {
    }
    var HTMLSmoothlyNotifierElement: {
        prototype: HTMLSmoothlyNotifierElement;
        new (): HTMLSmoothlyNotifierElement;
    };
    interface HTMLSmoothlyOptionElement extends Components.SmoothlyOption, HTMLStencilElement {
    }
    var HTMLSmoothlyOptionElement: {
        prototype: HTMLSmoothlyOptionElement;
        new (): HTMLSmoothlyOptionElement;
    };
    interface HTMLSmoothlyPickerElement extends Components.SmoothlyPicker, HTMLStencilElement {
    }
    var HTMLSmoothlyPickerElement: {
        prototype: HTMLSmoothlyPickerElement;
        new (): HTMLSmoothlyPickerElement;
    };
    interface HTMLSmoothlyPopupElement extends Components.SmoothlyPopup, HTMLStencilElement {
    }
    var HTMLSmoothlyPopupElement: {
        prototype: HTMLSmoothlyPopupElement;
        new (): HTMLSmoothlyPopupElement;
    };
    interface HTMLSmoothlyRadioElement extends Components.SmoothlyRadio, HTMLStencilElement {
    }
    var HTMLSmoothlyRadioElement: {
        prototype: HTMLSmoothlyRadioElement;
        new (): HTMLSmoothlyRadioElement;
    };
    interface HTMLSmoothlyRadioGroupElement extends Components.SmoothlyRadioGroup, HTMLStencilElement {
    }
    var HTMLSmoothlyRadioGroupElement: {
        prototype: HTMLSmoothlyRadioGroupElement;
        new (): HTMLSmoothlyRadioGroupElement;
    };
    interface HTMLSmoothlyReorderElement extends Components.SmoothlyReorder, HTMLStencilElement {
    }
    var HTMLSmoothlyReorderElement: {
        prototype: HTMLSmoothlyReorderElement;
        new (): HTMLSmoothlyReorderElement;
    };
    interface HTMLSmoothlyRoomElement extends Components.SmoothlyRoom, HTMLStencilElement {
    }
    var HTMLSmoothlyRoomElement: {
        prototype: HTMLSmoothlyRoomElement;
        new (): HTMLSmoothlyRoomElement;
    };
    interface HTMLSmoothlySelectElement extends Components.SmoothlySelect, HTMLStencilElement {
    }
    var HTMLSmoothlySelectElement: {
        prototype: HTMLSmoothlySelectElement;
        new (): HTMLSmoothlySelectElement;
    };
    interface HTMLSmoothlySelectDemoElement extends Components.SmoothlySelectDemo, HTMLStencilElement {
    }
    var HTMLSmoothlySelectDemoElement: {
        prototype: HTMLSmoothlySelectDemoElement;
        new (): HTMLSmoothlySelectDemoElement;
    };
    interface HTMLSmoothlySpinnerElement extends Components.SmoothlySpinner, HTMLStencilElement {
    }
    var HTMLSmoothlySpinnerElement: {
        prototype: HTMLSmoothlySpinnerElement;
        new (): HTMLSmoothlySpinnerElement;
    };
    interface HTMLSmoothlySubmitElement extends Components.SmoothlySubmit, HTMLStencilElement {
    }
    var HTMLSmoothlySubmitElement: {
        prototype: HTMLSmoothlySubmitElement;
        new (): HTMLSmoothlySubmitElement;
    };
    interface HTMLSmoothlyTableElement extends Components.SmoothlyTable, HTMLStencilElement {
    }
    var HTMLSmoothlyTableElement: {
        prototype: HTMLSmoothlyTableElement;
        new (): HTMLSmoothlyTableElement;
    };
    interface HTMLSmoothlyTableCellElement extends Components.SmoothlyTableCell, HTMLStencilElement {
    }
    var HTMLSmoothlyTableCellElement: {
        prototype: HTMLSmoothlyTableCellElement;
        new (): HTMLSmoothlyTableCellElement;
    };
    interface HTMLSmoothlyTableDemoElement extends Components.SmoothlyTableDemo, HTMLStencilElement {
    }
    var HTMLSmoothlyTableDemoElement: {
        prototype: HTMLSmoothlyTableDemoElement;
        new (): HTMLSmoothlyTableDemoElement;
    };
    interface HTMLSmoothlyTableExpandableCellElement extends Components.SmoothlyTableExpandableCell, HTMLStencilElement {
    }
    var HTMLSmoothlyTableExpandableCellElement: {
        prototype: HTMLSmoothlyTableExpandableCellElement;
        new (): HTMLSmoothlyTableExpandableCellElement;
    };
    interface HTMLSmoothlyTableExpandableRowElement extends Components.SmoothlyTableExpandableRow, HTMLStencilElement {
    }
    var HTMLSmoothlyTableExpandableRowElement: {
        prototype: HTMLSmoothlyTableExpandableRowElement;
        new (): HTMLSmoothlyTableExpandableRowElement;
    };
    interface HTMLSmoothlyTableHeaderElement extends Components.SmoothlyTableHeader, HTMLStencilElement {
    }
    var HTMLSmoothlyTableHeaderElement: {
        prototype: HTMLSmoothlyTableHeaderElement;
        new (): HTMLSmoothlyTableHeaderElement;
    };
    interface HTMLSmoothlyTableRowElement extends Components.SmoothlyTableRow, HTMLStencilElement {
    }
    var HTMLSmoothlyTableRowElement: {
        prototype: HTMLSmoothlyTableRowElement;
        new (): HTMLSmoothlyTableRowElement;
    };
    interface HTMLSmoothlyTriggerElement extends Components.SmoothlyTrigger, HTMLStencilElement {
    }
    var HTMLSmoothlyTriggerElement: {
        prototype: HTMLSmoothlyTriggerElement;
        new (): HTMLSmoothlyTriggerElement;
    };
    interface HTMLSmoothlyTriggerSinkElement extends Components.SmoothlyTriggerSink, HTMLStencilElement {
    }
    var HTMLSmoothlyTriggerSinkElement: {
        prototype: HTMLSmoothlyTriggerSinkElement;
        new (): HTMLSmoothlyTriggerSinkElement;
    };
    interface HTMLSmoothlyTriggerSourceElement extends Components.SmoothlyTriggerSource, HTMLStencilElement {
    }
    var HTMLSmoothlyTriggerSourceElement: {
        prototype: HTMLSmoothlyTriggerSourceElement;
        new (): HTMLSmoothlyTriggerSourceElement;
    };
    interface HTMLSmoothlyTupleElement extends Components.SmoothlyTuple, HTMLStencilElement {
    }
    var HTMLSmoothlyTupleElement: {
        prototype: HTMLSmoothlyTupleElement;
        new (): HTMLSmoothlyTupleElement;
    };
    interface HTMLSmoothlyUrlencodedElement extends Components.SmoothlyUrlencoded, HTMLStencilElement {
    }
    var HTMLSmoothlyUrlencodedElement: {
        prototype: HTMLSmoothlyUrlencodedElement;
        new (): HTMLSmoothlyUrlencodedElement;
    };
    interface HTMLSmoothlyUserMenuElement extends Components.SmoothlyUserMenu, HTMLStencilElement {
    }
    var HTMLSmoothlyUserMenuElement: {
        prototype: HTMLSmoothlyUserMenuElement;
        new (): HTMLSmoothlyUserMenuElement;
    };
    interface HTMLElementTagNameMap {
        "smoothly-accordion": HTMLSmoothlyAccordionElement;
        "smoothly-accordion-item": HTMLSmoothlyAccordionItemElement;
        "smoothly-app": HTMLSmoothlyAppElement;
        "smoothly-app-demo": HTMLSmoothlyAppDemoElement;
        "smoothly-checkbox": HTMLSmoothlyCheckboxElement;
        "smoothly-dialog": HTMLSmoothlyDialogElement;
        "smoothly-display": HTMLSmoothlyDisplayElement;
        "smoothly-display-amount": HTMLSmoothlyDisplayAmountElement;
        "smoothly-display-date-time": HTMLSmoothlyDisplayDateTimeElement;
        "smoothly-display-demo": HTMLSmoothlyDisplayDemoElement;
        "smoothly-frame": HTMLSmoothlyFrameElement;
        "smoothly-icon": HTMLSmoothlyIconElement;
        "smoothly-icon-demo": HTMLSmoothlyIconDemoElement;
        "smoothly-input": HTMLSmoothlyInputElement;
        "smoothly-input-demo": HTMLSmoothlyInputDemoElement;
        "smoothly-menu-options": HTMLSmoothlyMenuOptionsElement;
        "smoothly-notification": HTMLSmoothlyNotificationElement;
        "smoothly-notifier": HTMLSmoothlyNotifierElement;
        "smoothly-option": HTMLSmoothlyOptionElement;
        "smoothly-picker": HTMLSmoothlyPickerElement;
        "smoothly-popup": HTMLSmoothlyPopupElement;
        "smoothly-radio": HTMLSmoothlyRadioElement;
        "smoothly-radio-group": HTMLSmoothlyRadioGroupElement;
        "smoothly-reorder": HTMLSmoothlyReorderElement;
        "smoothly-room": HTMLSmoothlyRoomElement;
        "smoothly-select": HTMLSmoothlySelectElement;
        "smoothly-select-demo": HTMLSmoothlySelectDemoElement;
        "smoothly-spinner": HTMLSmoothlySpinnerElement;
        "smoothly-submit": HTMLSmoothlySubmitElement;
        "smoothly-table": HTMLSmoothlyTableElement;
        "smoothly-table-cell": HTMLSmoothlyTableCellElement;
        "smoothly-table-demo": HTMLSmoothlyTableDemoElement;
        "smoothly-table-expandable-cell": HTMLSmoothlyTableExpandableCellElement;
        "smoothly-table-expandable-row": HTMLSmoothlyTableExpandableRowElement;
        "smoothly-table-header": HTMLSmoothlyTableHeaderElement;
        "smoothly-table-row": HTMLSmoothlyTableRowElement;
        "smoothly-trigger": HTMLSmoothlyTriggerElement;
        "smoothly-trigger-sink": HTMLSmoothlyTriggerSinkElement;
        "smoothly-trigger-source": HTMLSmoothlyTriggerSourceElement;
        "smoothly-tuple": HTMLSmoothlyTupleElement;
        "smoothly-urlencoded": HTMLSmoothlyUrlencodedElement;
        "smoothly-user-menu": HTMLSmoothlyUserMenuElement;
    }
}
declare namespace LocalJSX {
    interface SmoothlyAccordion {
        "value"?: string;
    }
    interface SmoothlyAccordionItem {
        "brand"?: string | string[];
        "name"?: string;
        "onSmoothlyAccordionItemDidLoad"?: (event: CustomEvent<void>) => void;
        "onSmoothlyAccordionItemDidUnload"?: (event: CustomEvent<void>) => void;
        "onSmoothlyClose"?: (event: CustomEvent<{ name: string; open: boolean }>) => void;
        "onSmoothlyOpen"?: (event: CustomEvent<{ name: string; open: boolean }>) => void;
        "open"?: boolean;
    }
    interface SmoothlyApp {
        "color"?: Color;
    }
    interface SmoothlyAppDemo {
        "baseUrl"?: string;
    }
    interface SmoothlyCheckbox {
        "disabled"?: boolean;
        "onChecked"?: (event: CustomEvent<{ selected: boolean }>) => void;
        "selectAll"?: boolean;
        "selected"?: boolean;
    }
    interface SmoothlyDialog {
        "closable"?: boolean;
        "color"?: Color | undefined;
        "header"?: string | undefined;
        "open"?: boolean;
    }
    interface SmoothlyDisplay {
        "country"?: CountryCode.Alpha2;
        "currency"?: Currency;
        "type"?: Type;
        "value"?: any;
    }
    interface SmoothlyDisplayAmount {
        "amount"?: number | string;
        "currency"?: Currency;
    }
    interface SmoothlyDisplayDateTime {
        "datetime"?: DateTime;
    }
    interface SmoothlyDisplayDemo {
        "onNotice"?: (event: CustomEvent<Notice>) => void;
    }
    interface SmoothlyFrame {
        "name"?: string;
        "onMessage"?: (event: CustomEvent<Message<any>>) => void;
        "onTrigger"?: (event: CustomEvent<Trigger>) => void;
        "origin"?: string | undefined;
        "url"?: string;
    }
    interface SmoothlyIcon {
        "color"?: Color;
        "fill"?: Fill;
        "name"?: string;
        "size"?: "small" | "medium" | "large";
        "toolTip"?: string;
    }
    interface SmoothlyIconDemo {
    }
    interface SmoothlyInput {
        "autocomplete"?: boolean;
        "currency"?: Currency;
        "disabled"?: boolean;
        "maxLength"?: number;
        "minLength"?: number;
        "name"?: string;
        "onSmoothlyChanged"?: (event: CustomEvent<{ name: string; value: any }>) => void;
        "pattern"?: RegExp | undefined;
        "placeholder"?: string | undefined;
        "required"?: boolean;
        "type"?: string;
        "value"?: any;
    }
    interface SmoothlyInputDemo {
    }
    interface SmoothlyMenuOptions {
        "emptyMenuLabel"?: string;
        "maxMenuHeight"?: "inherit";
        "optionStyle"?: any;
        "options"?: OptionType[];
        "order"?: boolean;
    }
    interface SmoothlyNotification {
        "notice"?: Notice;
        "onRemove"?: (event: CustomEvent<Notice>) => void;
    }
    interface SmoothlyNotifier {
    }
    interface SmoothlyOption {
        "aliases"?: string;
        "dataHighlight"?: boolean;
        "name"?: string;
        "onOptionHover"?: (event: CustomEvent<{ value: any; name: string }>) => void;
        "onOptionSelect"?: (event: CustomEvent<{ value: any; name: string }>) => void;
        "value"?: string;
    }
    interface SmoothlyPicker {
        "emptyMenuLabel"?: string;
        "label"?: string;
        "labelSetting"?: "hide" | "default";
        "maxHeight"?: string;
        "maxMenuHeight"?: "inherit";
        "multiple"?: boolean;
        "onMenuClose"?: (event: CustomEvent<OptionType[]>) => void;
        "optionStyle"?: any;
        "options"?: OptionType[];
        "selections"?: OptionType[];
    }
    interface SmoothlyPopup {
        "direction"?: "up" | "down";
        "onPopup"?: (event: CustomEvent<boolean>) => void;
        "visible"?: boolean;
    }
    interface SmoothlyRadio {
        "checked"?: boolean;
        "name"?: string;
        "onSmoothlySelected"?: (event: CustomEvent<{ name: string; value: string }>) => void;
        "tabIndex"?: number;
        "value"?: string;
    }
    interface SmoothlyRadioGroup {
        "orientation"?: "horizontal" | "vertical";
    }
    interface SmoothlyReorder {
        "onReorder"?: (event: CustomEvent<[number, number]>) => void;
    }
    interface SmoothlyRoom {
        "icon"?: string;
        "label"?: string;
        "path"?: string;
        "responsive"?: true;
        "to"?: string;
    }
    interface SmoothlySelect {
        "background"?: string;
        "identifier"?: string;
        "onSelectionChanged"?: (event: CustomEvent<{ identifier: string; value: string }>) => void;
        "value"?: string;
    }
    interface SmoothlySelectDemo {
    }
    interface SmoothlySpinner {
        "active"?: boolean;
    }
    interface SmoothlySubmit {
        "color"?: Color;
        "disabled"?: boolean;
        "expand"?: Expand;
        "fill"?: Fill;
        "onSubmit"?: (event: CustomEvent<{ [key: string]: string }>) => void;
        "prevent"?: boolean;
        "processing"?: boolean;
    }
    interface SmoothlyTable {
        "onLoadMore"?: (event: CustomEvent<void>) => void;
    }
    interface SmoothlyTableCell {
    }
    interface SmoothlyTableDemo {
    }
    interface SmoothlyTableExpandableCell {
        "align"?: "left" | "center" | "right";
        "onExpansionLoaded"?: (event: CustomEvent<void>) => void;
        "onExpansionOpen"?: (event: CustomEvent<HTMLElement>) => void;
        "open"?: boolean;
    }
    interface SmoothlyTableExpandableRow {
    }
    interface SmoothlyTableHeader {
        "name"?: string;
        "onSort"?: (event: CustomEvent<{ property: string; direction: "ascending" | "descending" }>) => void;
        "sortDirection"?: "ascending" | "descending";
    }
    interface SmoothlyTableRow {
    }
    interface SmoothlyTrigger {
        "color"?: Color | undefined;
        "disabled"?: boolean;
        "expand"?: Expand;
        "fill"?: Fill;
        "name"?: string;
        "onTrigger"?: (event: CustomEvent<Trigger>) => void;
        "responsive"?: true;
        "type"?: "link" | "button";
        "value"?: any;
    }
    interface SmoothlyTriggerSink {
        "context"?: Window;
        "destination"?: string;
        "filter"?: string;
    }
    interface SmoothlyTriggerSource {
        "listen"?: string;
        "onMessage"?: (event: CustomEvent<Message<any>>) => void;
        "onTrigger"?: (event: CustomEvent<Trigger>) => void;
    }
    interface SmoothlyTuple {
        "tuple"?: [string, string];
    }
    interface SmoothlyUrlencoded {
        "data"?: string;
    }
    interface SmoothlyUserMenu {
        "isOpen"?: boolean;
        "onTrigger"?: (event: CustomEvent<Trigger>) => void;
        "responsive"?: true;
        "userName"?: string;
    }
    interface IntrinsicElements {
        "smoothly-accordion": SmoothlyAccordion;
        "smoothly-accordion-item": SmoothlyAccordionItem;
        "smoothly-app": SmoothlyApp;
        "smoothly-app-demo": SmoothlyAppDemo;
        "smoothly-checkbox": SmoothlyCheckbox;
        "smoothly-dialog": SmoothlyDialog;
        "smoothly-display": SmoothlyDisplay;
        "smoothly-display-amount": SmoothlyDisplayAmount;
        "smoothly-display-date-time": SmoothlyDisplayDateTime;
        "smoothly-display-demo": SmoothlyDisplayDemo;
        "smoothly-frame": SmoothlyFrame;
        "smoothly-icon": SmoothlyIcon;
        "smoothly-icon-demo": SmoothlyIconDemo;
        "smoothly-input": SmoothlyInput;
        "smoothly-input-demo": SmoothlyInputDemo;
        "smoothly-menu-options": SmoothlyMenuOptions;
        "smoothly-notification": SmoothlyNotification;
        "smoothly-notifier": SmoothlyNotifier;
        "smoothly-option": SmoothlyOption;
        "smoothly-picker": SmoothlyPicker;
        "smoothly-popup": SmoothlyPopup;
        "smoothly-radio": SmoothlyRadio;
        "smoothly-radio-group": SmoothlyRadioGroup;
        "smoothly-reorder": SmoothlyReorder;
        "smoothly-room": SmoothlyRoom;
        "smoothly-select": SmoothlySelect;
        "smoothly-select-demo": SmoothlySelectDemo;
        "smoothly-spinner": SmoothlySpinner;
        "smoothly-submit": SmoothlySubmit;
        "smoothly-table": SmoothlyTable;
        "smoothly-table-cell": SmoothlyTableCell;
        "smoothly-table-demo": SmoothlyTableDemo;
        "smoothly-table-expandable-cell": SmoothlyTableExpandableCell;
        "smoothly-table-expandable-row": SmoothlyTableExpandableRow;
        "smoothly-table-header": SmoothlyTableHeader;
        "smoothly-table-row": SmoothlyTableRow;
        "smoothly-trigger": SmoothlyTrigger;
        "smoothly-trigger-sink": SmoothlyTriggerSink;
        "smoothly-trigger-source": SmoothlyTriggerSource;
        "smoothly-tuple": SmoothlyTuple;
        "smoothly-urlencoded": SmoothlyUrlencoded;
        "smoothly-user-menu": SmoothlyUserMenu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "smoothly-accordion": LocalJSX.SmoothlyAccordion & JSXBase.HTMLAttributes<HTMLSmoothlyAccordionElement>;
            "smoothly-accordion-item": LocalJSX.SmoothlyAccordionItem & JSXBase.HTMLAttributes<HTMLSmoothlyAccordionItemElement>;
            "smoothly-app": LocalJSX.SmoothlyApp & JSXBase.HTMLAttributes<HTMLSmoothlyAppElement>;
            "smoothly-app-demo": LocalJSX.SmoothlyAppDemo & JSXBase.HTMLAttributes<HTMLSmoothlyAppDemoElement>;
            "smoothly-checkbox": LocalJSX.SmoothlyCheckbox & JSXBase.HTMLAttributes<HTMLSmoothlyCheckboxElement>;
            "smoothly-dialog": LocalJSX.SmoothlyDialog & JSXBase.HTMLAttributes<HTMLSmoothlyDialogElement>;
            "smoothly-display": LocalJSX.SmoothlyDisplay & JSXBase.HTMLAttributes<HTMLSmoothlyDisplayElement>;
            "smoothly-display-amount": LocalJSX.SmoothlyDisplayAmount & JSXBase.HTMLAttributes<HTMLSmoothlyDisplayAmountElement>;
            "smoothly-display-date-time": LocalJSX.SmoothlyDisplayDateTime & JSXBase.HTMLAttributes<HTMLSmoothlyDisplayDateTimeElement>;
            "smoothly-display-demo": LocalJSX.SmoothlyDisplayDemo & JSXBase.HTMLAttributes<HTMLSmoothlyDisplayDemoElement>;
            "smoothly-frame": LocalJSX.SmoothlyFrame & JSXBase.HTMLAttributes<HTMLSmoothlyFrameElement>;
            "smoothly-icon": LocalJSX.SmoothlyIcon & JSXBase.HTMLAttributes<HTMLSmoothlyIconElement>;
            "smoothly-icon-demo": LocalJSX.SmoothlyIconDemo & JSXBase.HTMLAttributes<HTMLSmoothlyIconDemoElement>;
            "smoothly-input": LocalJSX.SmoothlyInput & JSXBase.HTMLAttributes<HTMLSmoothlyInputElement>;
            "smoothly-input-demo": LocalJSX.SmoothlyInputDemo & JSXBase.HTMLAttributes<HTMLSmoothlyInputDemoElement>;
            "smoothly-menu-options": LocalJSX.SmoothlyMenuOptions & JSXBase.HTMLAttributes<HTMLSmoothlyMenuOptionsElement>;
            "smoothly-notification": LocalJSX.SmoothlyNotification & JSXBase.HTMLAttributes<HTMLSmoothlyNotificationElement>;
            "smoothly-notifier": LocalJSX.SmoothlyNotifier & JSXBase.HTMLAttributes<HTMLSmoothlyNotifierElement>;
            "smoothly-option": LocalJSX.SmoothlyOption & JSXBase.HTMLAttributes<HTMLSmoothlyOptionElement>;
            "smoothly-picker": LocalJSX.SmoothlyPicker & JSXBase.HTMLAttributes<HTMLSmoothlyPickerElement>;
            "smoothly-popup": LocalJSX.SmoothlyPopup & JSXBase.HTMLAttributes<HTMLSmoothlyPopupElement>;
            "smoothly-radio": LocalJSX.SmoothlyRadio & JSXBase.HTMLAttributes<HTMLSmoothlyRadioElement>;
            "smoothly-radio-group": LocalJSX.SmoothlyRadioGroup & JSXBase.HTMLAttributes<HTMLSmoothlyRadioGroupElement>;
            "smoothly-reorder": LocalJSX.SmoothlyReorder & JSXBase.HTMLAttributes<HTMLSmoothlyReorderElement>;
            "smoothly-room": LocalJSX.SmoothlyRoom & JSXBase.HTMLAttributes<HTMLSmoothlyRoomElement>;
            "smoothly-select": LocalJSX.SmoothlySelect & JSXBase.HTMLAttributes<HTMLSmoothlySelectElement>;
            "smoothly-select-demo": LocalJSX.SmoothlySelectDemo & JSXBase.HTMLAttributes<HTMLSmoothlySelectDemoElement>;
            "smoothly-spinner": LocalJSX.SmoothlySpinner & JSXBase.HTMLAttributes<HTMLSmoothlySpinnerElement>;
            "smoothly-submit": LocalJSX.SmoothlySubmit & JSXBase.HTMLAttributes<HTMLSmoothlySubmitElement>;
            "smoothly-table": LocalJSX.SmoothlyTable & JSXBase.HTMLAttributes<HTMLSmoothlyTableElement>;
            "smoothly-table-cell": LocalJSX.SmoothlyTableCell & JSXBase.HTMLAttributes<HTMLSmoothlyTableCellElement>;
            "smoothly-table-demo": LocalJSX.SmoothlyTableDemo & JSXBase.HTMLAttributes<HTMLSmoothlyTableDemoElement>;
            "smoothly-table-expandable-cell": LocalJSX.SmoothlyTableExpandableCell & JSXBase.HTMLAttributes<HTMLSmoothlyTableExpandableCellElement>;
            "smoothly-table-expandable-row": LocalJSX.SmoothlyTableExpandableRow & JSXBase.HTMLAttributes<HTMLSmoothlyTableExpandableRowElement>;
            "smoothly-table-header": LocalJSX.SmoothlyTableHeader & JSXBase.HTMLAttributes<HTMLSmoothlyTableHeaderElement>;
            "smoothly-table-row": LocalJSX.SmoothlyTableRow & JSXBase.HTMLAttributes<HTMLSmoothlyTableRowElement>;
            "smoothly-trigger": LocalJSX.SmoothlyTrigger & JSXBase.HTMLAttributes<HTMLSmoothlyTriggerElement>;
            "smoothly-trigger-sink": LocalJSX.SmoothlyTriggerSink & JSXBase.HTMLAttributes<HTMLSmoothlyTriggerSinkElement>;
            "smoothly-trigger-source": LocalJSX.SmoothlyTriggerSource & JSXBase.HTMLAttributes<HTMLSmoothlyTriggerSourceElement>;
            "smoothly-tuple": LocalJSX.SmoothlyTuple & JSXBase.HTMLAttributes<HTMLSmoothlyTupleElement>;
            "smoothly-urlencoded": LocalJSX.SmoothlyUrlencoded & JSXBase.HTMLAttributes<HTMLSmoothlyUrlencodedElement>;
            "smoothly-user-menu": LocalJSX.SmoothlyUserMenu & JSXBase.HTMLAttributes<HTMLSmoothlyUserMenuElement>;
        }
    }
}
