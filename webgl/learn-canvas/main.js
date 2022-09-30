import Shaders from './src/Shaders.js';

function main() {
    const shaders = new Shaders();

    let CANVAS_WIDTH = 1024;
    let CANVAS_HEIGHT = 576;

    // Create canvas element
    const canvas = document.createElement('canvas');

    // Adjust canvas dimensions
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    // Add canvas element to DOM
    document.querySelector('body').appendChild(canvas);

    // Initialize the GL context
    const gl = canvas.getContext("webgl2");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);

    window.SHADERS = shaders;
    shaders.require('vertex', 'vertex1', 'shaders/vertex.c')
        .require('fragment', 'fragment1', 'shaders/fragment.c')
        .load(() => {
            const vertexShader = gl.createShader(gl.VERTEX_SHADER);
            gl.shaderSource(vertexShader, shaders['vertex']['vertex1']);
            gl.compileShader(vertexShader);
            if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
                throw gl.getShaderInfoLog(vertexShader);
            }

            const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
            gl.shaderSource(fragmentShader, shaders['fragment']['fragment1']);
            gl.compileShader(fragmentShader);
            if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
                throw gl.getShaderInfoLog(fragmentShader);
            }

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                throw gl.getProgramInfoLog(program);
            }
            gl.useProgram(program);

            // [x, y, z]
            const vertices = [
                [-1, -1, 0],
                [1, -1, 0],
                [0.5, 1, 0],
            ];

            const vertexData = new Float32Array(vertices.flat());

            gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
            gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

            const vertexPosition = gl.getAttribLocation(program, 'vertexPosition');

            gl.enableVertexAttribArray(vertexPosition);
            gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);

            gl.drawArrays(gl.TRIANGLES, 0, vertices.length);
        });

    // shaders.load();
    // console.log(shaders);
    
}

function attachShadersToProgram () {
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, shaders['vertex']['vertex1']);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        throw gl.getShaderInfoLog(vertexShader);
    }

    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, shaders['fragment']['fragment1']);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        throw gl.getShaderInfoLog(fragmentShader);
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw gl.getProgramInfoLog(program);
    }
    gl.useProgram(program);

    // [x, y, z]
    const vertices = [
        [-1, -1, 0],
        [1, -1, 0],
        [0.5, 1, 0],
    ];

    const vertexData = new Float32Array(vertices.flat());

    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW);

    const vertexPosition = gl.getAttribLocation(program, 'vertexPosition');

    gl.enableVertexAttribArray(vertexPosition);
    gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);

    gl.drawArrays(gl.TRIANGLES, 0, vertices.length);
}



window.onload = main;
