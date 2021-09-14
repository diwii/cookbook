class Target {
    constructor(subjectElement, targetElement) {
        this.subjects = [];
        this.subjects.push(subjectElement);

        this.domNode = targetElement;
        this.x = targetElement.style.left;
        this.y = targetElement.style.top;
        this.width = targetElement.style.width;
        this.height = targetElement.style.height;

        // window.addEventListener("dragging-shape", (event) => {
        //     console.log(event.detail.target);
        // });
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

            // const draggingEvent = new CustomEvent("dragging-shape", {detail: {target: this.domNode}});
            // window.dispatchEvent(draggingEvent);
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

class Circle extends Shape {
    constructor() {
        super();
        this.radius = 1;
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

const rectangle = new Rectangle;
rectangle.width = 100;
rectangle.height = 100;
rectangle.color.hex = "#00A36C";
rectangle.render();

// const target = new Target(rectangle.domNode);

// rectangle.domNode.addEventListener("mouseover", function() {
//     console.log("hover on target");
// });

const rectangle2 = new Rectangle;
rectangle2.width = 100;
rectangle2.height = 100;
rectangle2.color.hex = "#a8003d";
rectangle2.render();

// const heart = newHeart();

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
}

const heart = new Heart({
    width: 100,
    height: 100,
    texture: new Texture("texture/heart.svg")
});

heart.target = new Target(heart.domNode, rectangle.domNode);

console.log(heart);
heart.render();

// setTimeout(() => {
//     rectangle.domNode.style.height = `${window.innerHeight - 50}px`;
//     rectangle.domNode.style.top = "20px";
//     rectangle.domNode.style.left = "20px";

//     setTimeout(() => {
//         rectangle.domNode.style.width = "100%";
//     }, 1000);
// }, 1000);

// setInterval(() => {
//     if (rectangle.state) {
//         rectangle.state = null;
//         rectangle.x = 10;
//         rectangle.y = 10;
//         rectangle.color.hex = "#00A36C";
//         rectangle.render();
//     } else {
//         rectangle.state = 1;
//         rectangle.x = 20;
//         rectangle.y = 20;
//         rectangle.color.hex = "#a8003d";
//         rectangle.render();
//     }
// }, 500);






// console.log(rectangle);
const element = rectangle.domNode;
