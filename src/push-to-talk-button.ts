import el from './push-to-talk-button.svelte';

if (!customElements.get("push-to-talk-button")) {
    customElements.define("push-to-talk-button", el as any as CustomElementConstructor);
}
