class Vector {
    constructor(x, y, color = "black") {
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = x;
        this.y2 = y;
        this.color = color;
    }

    length() {
        return Math.sqrt(
            Math.pow(this.x2, 2) + Math.pow(this.y2, 2)
        );
    }
}

function vec2(x, y) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const vector = new Vector(x, y);

    line.setAttribute("x1", vector.x1);
    line.setAttribute("y1", vector.y1);
    line.setAttribute("x2", vector.x2);
    line.setAttribute("y2", vector.y2);
    line.setAttribute("stroke", vector.color);

    canvas.appendChild(line);

    return vector;
}

const canvas = document.getElementById("canvas");
const max = canvas.dataset.maxPoint;
const min = max * -1;

function grid() {
    for (let i = min+10; i < max; i+=10) {
        const verticalLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        verticalLine.setAttribute("x1", i);
        verticalLine.setAttribute("y1", min);
        verticalLine.setAttribute("x2", i);
        verticalLine.setAttribute("y2", max);
        verticalLine.setAttribute("stroke", "RGBA(62,101,80,0.05)");

        const horizontalLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
        horizontalLine.setAttribute("x1", min);
        horizontalLine.setAttribute("y1", i);
        horizontalLine.setAttribute("x2", max);
        horizontalLine.setAttribute("y2", i);
        horizontalLine.setAttribute("stroke", "RGBA(62,101,80,0.05)");
    
        canvas.appendChild(verticalLine);
        canvas.appendChild(horizontalLine);
    }
}

function vector(x, y, color = "black") {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    const vector = {
        x1: 0,
        y1: 0,
        x2: x,
        y2: y,
        color: color,
        element: line
    }

    line.setAttribute("x1", vector.x1);
    line.setAttribute("y1", vector.y1);
    line.setAttribute("x2", vector.x2);
    line.setAttribute("y2", vector.y2);
    line.setAttribute("stroke", color);

    canvas.appendChild(line);

    return vector;
}

const point = document.createElementNS("http://www.w3.org/2000/svg", "circle");

grid();

// vector(40, max, "red");
const vector1 = vec2(4, 4);
console.log(vector1.length());
