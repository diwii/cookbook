class Target {
    constructor(subject, targetElement) {
        // console.log(subject);
        // this.subjects = [];
        // this.subjects.push(subject);
        this.subject = subject;

        this.domNode = targetElement.domNode;
        this.x = targetElement.domNode.style.left;
        this.y = targetElement.domNode.style.top;
        this.width = targetElement.domNode.style.width;
        this.height = targetElement.domNode.style.height;

        const onShapeDrag = this.onShapeDrag.bind(this);

        targetElement.addEventListener("dragging-shape", onShapeDrag);
    }

    onShapeDrag(event) {
        this.subject.target.y = event.detail.target.style.top;
        this.subject.target.x = event.detail.target.style.left;
    }
}

class Texture {
    constructor(url = "") {
        this.url = url;
    }

    getUrl() {
        return `url('${this.url}')`;
    }

    init(element) {
        element.style.backgroundImage = this.getUrl();
        element.style.backgroundSize = "contain";
        element.style.backgroundRepeat = "no-repeat";
    }
}

class Color {
    constructor() {
        // this.r = 0;
        // this.g = 0;
        // this.b = 0;
        // this.a = 1;
        this.hex = "";
    }
}

class Shape {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.color = new Color;
        this.texture = new Texture;
        this.isRendered = false;

        this.toggled = [];

        this.domNode = document.createElement("div");
        this.domTarget = document.body;

        this._setDraggable();
    }

    _setDraggable() {
        this.domNode.addEventListener("mousedown", (event) => {
            this.toggleStyle('zIndex');
            this.domNode.style.zIndex = "9999";
            this.toggleStyle('transition');    
            document.addEventListener('mousemove', mouseDrag);
        });

        this.domNode.addEventListener("mouseup", (event) => {
            this.toggleStyle('zIndex');
            this.toggleStyle('transition');
            document.removeEventListener('mousemove', mouseDrag);
        });
        
        const mouseDrag = (event) => {
            // Move element to mouse
            this.domNode.style.top = `${event.pageY - this.height / 4}px`;
            this.domNode.style.left = `${event.pageX - this.width / 4}px`;

            const draggingEvent = new CustomEvent("dragging-shape", {detail: {target: this.domNode}});
            this.domNode.dispatchEvent(draggingEvent);
        }
    }

    toggleStyle(propertyName) {

        if (this.toggled[propertyName]) {
            this.domNode.style[propertyName] = this.toggled[propertyName];
            this.toggled[propertyName] = null;
            return;
        }

        this.toggled[propertyName] = this.domNode.style[propertyName];
        this.domNode.style[propertyName] = "";
    }
}

class Rectangle extends Shape {
    constructor() {
        super();
        this.width = 0;
        this.height = 0;
    }

    render() {
        const px = function (num) {
            return `${num}px`;
        }

        this.domNode.style.position = "absolute";
        this.domNode.style.zIndex = "1";

        this.domNode.style.width = px(this.width);
        this.domNode.style.height = px(this.height)
        this.domNode.style.backgroundColor = this.color.hex;
        this.domNode.style.top = px(this.y);
        this.domNode.style.left = px(this.x);
        this.domNode.style.transition = ".5s";

        this.domTarget.appendChild(this.domNode);

        this.isRendered = true;
    }
}

class Heart extends Rectangle {
    constructor(options = {}) {
        super();

        console.log(options);

        for (const [key, value] of Object.entries(options)) {
            this[key] = value;
        }
    }

    render() {
        super.render();
        this.texture.init(this.domNode);
        // console.log(this);
    }

    _setDraggable() {
        super._setDraggable();
        
    }
}

const heart = new Heart({
    width: 100,
    height: 100,
    texture: new Texture ("texture/heart.svg")
})

const rectangle = new Rectangle;
rectangle.width = 100;
rectangle.height = 100;
rectangle.y = window.innerHeight / 2 - (rectangle.width / 2);
rectangle.x = window.innerWidth / 2 - (rectangle.height / 2);
rectangle.color.hex = "#00A36C";

heart.render();
rectangle.render();
heart.target = new Target(heart, rectangle);
