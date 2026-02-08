class Shader {
    constructor(gl, vertexSource, fragmentSource) {
        this.gl = gl;
        this.vertexShader = this.compileShader(gl.VERTEX_SHADER, vertexSource);
        this.fragmentShader = this.compileShader(gl.FRAGMENT_SHADER, fragmentSource);
        this.program = this.createProgram();
    }

    compileShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);

        if (this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            return shader;
        } else {
            console.error('Shader compilation error:', this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
        }
    }

    createProgram() {
        const program = this.gl.createProgram();
        this.gl.attachShader(program, this.vertexShader);
        this.gl.attachShader(program, this.fragmentShader);
        this.gl.linkProgram(program);

        if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
            console.error('Program linking error:', this.gl.getProgramInfoLog(program));
            return null;
        }

        return program;
    }

    use() {
        this.gl.useProgram(this.program);
    }

    setUniform(name, value) {
        const location = this.gl.getUniformLocation(this.program, name);
        if (typeof value === 'number') {
            this.gl.uniform1f(location, value);
        }
        // Add more uniform types as needed (e.g., vec3, mat4, etc.)
    }
}

export default Shader;