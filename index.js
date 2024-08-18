export default function FlipAnimate(
    elementList,
    options = {
        duration: 600,
        easing: "ease",
    }
) {
    this.elements = Array.from(elementList);
    this.options = options;
    this.firstPosition = [];
    this.lastPosition = [];
    this.first();
}
FlipAnimate.prototype.play = function () {
    this.last();
    this.invert();
};
FlipAnimate.prototype.first = function () {
    this.firstPosition = this.getPosition();
};

FlipAnimate.prototype.last = function () {
    this.lastPosition = this.getPosition();
};

FlipAnimate.prototype.getPosition = function () {
    return this.elements.map((el, index) => el.getBoundingClientRect());
};
FlipAnimate.prototype.invert = function () {
    const diff = this.firstPosition.map((first, index) => {
        const last = this.lastPosition[index];
        return {
            left: first.left - last.left,
            top: first.top - last.top,
            width: first.width - last.width,
            height: first.height - last.height,
        };
    });

    this.elements.forEach((ele, index) => {
        const { left, top, width, height } = diff[index];
        ele.animate(
            [
                {
                    transform: `translate3d(${left}px, ${top}px, 0) `,
                },
                { transform: `translate3d(0, 0, 0) scale(1, 1)` },
            ],
            {
                ...this.options,
            }
        );
    });
};
