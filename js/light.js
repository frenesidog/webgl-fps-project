class Light {
    constructor(position, color, intensity) {
        this.position = position; // position as a Vector3
        this.color = color; // color as a Vector3
        this.intensity = intensity; // light intensity
        this.orbitRadius = 5; // radius for orbital movement
        this.orbitSpeed = 0.01; // speed of orbital movement
        this.angle = 0; // current angle for orbital movement
    }

    update() {
        // Update the position for orbital movement
        this.angle += this.orbitSpeed;
        this.position.x = this.orbitRadius * Math.cos(this.angle);
        this.position.z = this.orbitRadius * Math.sin(this.angle);
    }

    getLightData() {
        return {
            position: this.position,
            color: this.color,
            intensity: this.intensity
        };
    }
}