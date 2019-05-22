class Tool extends HTMLElement {
    constructor() {
        super();
        console.log("tool constructor");
        this._text;
    }

    connectedCallback() {
        this._text = this.getAttribute('text');
        const icon = document.createElement('span');
        icon.textContent = "(?)";
        icon.addEventListener('mouseenter', this._show);
        icon.addEventListener('mouseleave', this._hide);
        this.appendChild(icon);
    }

    _show = () => {
        this._constainer = document.createElement('div');
        this._constainer.textContent = this._text;
        this.appendChild(this._constainer);
    }

    _hide = () => {
        this.removeChild(this._constainer);
    }
}

customElements.define('my-tool', Tool);