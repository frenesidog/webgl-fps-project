class InputManager {
    constructor() {
        this.keys = {};
        this.mouse = { x: 0, y: 0, pressed: false };
        this.pointerLockEnabled = false;
        this.init();
    }

    init() {
        window.addEventListener('keydown', (event) => this.onKeyDown(event));
        window.addEventListener('keyup', (event) => this.onKeyUp(event));
        window.addEventListener('mousemove', (event) => this.onMouseMove(event));
        window.addEventListener('mousedown', (event) => this.onMouseDown(event));
        window.addEventListener('mouseup', (event) => this.onMouseUp(event));
        document.body.addEventListener('click', () => this.requestPointerLock());
    }

    onKeyDown(event) {
        this.keys[event.code] = true;
    }

    onKeyUp(event) {
        this.keys[event.code] = false;
    }

    onMouseMove(event) {
        this.mouse.x = event.clientX;
        this.mouse.y = event.clientY;
    }

    onMouseDown(event) {
        this.mouse.pressed = true;
    }

    onMouseUp(event) {
        this.mouse.pressed = false;
    }

    requestPointerLock() {
        if (document.body.requestPointerLock) {
            document.body.requestPointerLock();
        } else if (document.body.mozRequestPointerLock) {
            document.body.mozRequestPointerLock();
        } else if (document.body.webkitRequestPointerLock) {
            document.body.webkitRequestPointerLock();
        }
        this.pointerLockEnabled = true;
    }

    update() {
        // Handle input state updates here
    }
}

export default InputManager;