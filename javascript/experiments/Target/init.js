class Target {
    constructor(target, aimer) {
        this.aimer = aimer;
        this.domNode = target.domNode;

        const isColliding = this.isColliding.bind(this);
        const onTarget = this.onTarget.bind(this);
        const offTarget = this.offTarget.bind(this);

        // this.aimer.domNode.addEventListener("dragging-shape", function(event){
        //     if (isColliding() && !aimer.isOnTarget) {
        //         onTarget();
        //         return;
        //     }

        //     offTarget();
        // });

        this.aimer.domNode.addEventListener("shape-released", function(event) {
            if (isColliding()) {
                onTarget();
                return;
            }

            offTarget();
        })
    }

    _inRange(num, start, end) {
        return num >= start && num <= end;
    }

    isColliding() {
        let targetBounds = this.domNode.getBoundingClientRect();
        let aimerBounds = this.aimer.domNode.getBoundingClientRect();

        let rightCollision = this._inRange(aimerBounds.right, targetBounds.left, targetBounds.right);
        let leftCollision = this._inRange(aimerBounds.left, targetBounds.left, targetBounds.right);
        let topCollision = this._inRange(aimerBounds.top, targetBounds.top, targetBounds.bottom);
        let bottomCollision = this._inRange(aimerBounds.bottom, targetBounds.top, targetBounds.bottom);

        if (rightCollision && topCollision
            || rightCollision && bottomCollision
            || leftCollision && topCollision
            || leftCollision && bottomCollision) {
            return true
        }

        return false;
    }

    onTarget() {
        this.aimer.cancelMouseDrag();
        this.aimer.isOnTarget = true;
        // this.aimer.domNode.style.zIndex = "2";
        this.aimer.domNode.style.top = this.domNode.style.top;
        this.aimer.domNode.style.left = this.domNode.style.left;
        // console.log(this.aimer.mouseDrag);
    }

    offTarget() {

        // this.aimer.domNode.style.zIndex = "1";
    }
}

class Shape {
    constructor() {
        this.toggled = [];

        this.domNode = document.createElement("div");
        this.domTarget = document.body;

        this._setDraggable();
    }

    _setDraggable() {
        const mouseDrag = this.mouseDrag.bind(this);
        const mouseDown = this.mouseDown.bind(this);
        const mouseUp = this.mouseUp.bind(this);

        this.domNode.addEventListener("mousedown", (event) => {
            mouseDown();
            document.addEventListener('mousemove', mouseDrag);
        });

        this.domNode.addEventListener("mouseup", (event) => {
            mouseUp();
            document.removeEventListener('mousemove', mouseDrag);
        });

        this.domNode.addEventListener("touchstart", (event) => {
            mouseDown();
            document.addEventListener('touchmove', mouseDrag);
        });

        this.domNode.addEventListener("touchend", (event) => {
            mouseUp();
            document.removeEventListener('touchmove', mouseDrag);
        });

        this.cancelMouseDrag = () => {
            document.removeEventListener("mousemove", mouseDrag);
            document.removeEventListener("touchmove", mouseDrag);
        }
    }

    mouseDrag(event) {
        let clientY = (event instanceof TouchEvent) ? event.touches[0].clientY : event.clientY;
        let clientX = (event instanceof TouchEvent) ? event.touches[0].clientX : event.clientX;
        
        // Move element to mouse
        this.domNode.style.top = `${clientY - this.getHeight() / 4}px`;
        this.domNode.style.left = `${clientX - this.getWidth() / 4}px`;

        const draggingEvent = new CustomEvent("dragging-shape", {detail: {target: this.domNode}});
        this.domNode.dispatchEvent(draggingEvent);
    }

    // cancelMouseDrag() {
    //     this.domNode
    // }

    mouseDown(event) {
        this.toggleStyle('transition');
        this.toggleStyle('zIndex');
        this.domNode.style.zIndex = "9999";
    }

    mouseUp(event) {
        this.toggleStyle('transition');
        this.toggleStyle('zIndex');

        const shapeReleasedEvent = new Event("shape-released");
        this.domNode.dispatchEvent(shapeReleasedEvent);
    }

    render() {
        this.domNode.style.position = "absolute";
        this.domNode.style.zIndex = "1";

        this.domTarget.appendChild(this.domNode);
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

    getHeight() {
        return this.domNode.offsetHeight;
    }

    getWidth() {
        return this.domNode.offsetWidth;
    }
}

const rectangle = new Shape;
rectangle.domNode.style.width = "100px";
rectangle.domNode.style.height = "100px";
rectangle.domNode.style.transition = ".5s";
rectangle.domNode.style.backgroundColor = "#00A36C";
rectangle.render();

rectangle.domNode.style.zIndex = "2";


const mark = new Shape;
mark.render(); // Render first before getWidth() / getHeight()
mark.domNode.style.width = "100px";
mark.domNode.style.height = "100px";
mark.domNode.style.left = window.innerWidth / 2 - (mark.getWidth() / 2) + "px";
mark.domNode.style.top = window.innerHeight / 2 - (mark.getHeight() / 2) + "px";
mark.domNode.style.backgroundColor = "red";

rectangle.target = new Target(mark, rectangle);
