class Cylinder {
    radius;
    height;

    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    volume() {
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }
}