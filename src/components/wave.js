import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const cache1 = [];
const cache2 = [];
var u = navigator.userAgent;
const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
const devicePixelRatio = window.devicePixelRatio || 1;
// 线条粗细和 html 的 data-dpr 属性相关
const lineWidthRatio =
    parseInt(window.document.documentElement.getAttribute("data-dpr"), 10) ||
    (isIOS ? devicePixelRatio : 1);

class Wave extends PureComponent {
    static propTypes = {
        waveCount: PropTypes.number,
        primaryLineWidth: PropTypes.number,
        otherLineWidth: PropTypes.number,
        frequency: PropTypes.number,
        idleAmplitude: PropTypes.number,
        phaseShift: PropTypes.number,
        color: PropTypes.string
    };

    static defaultProps = {
        waveCount: 12,
        primaryLineWidth: 3,
        otherLineWidth: 1,
        frequency: 1.8,
        idleAmplitude: 0.5,
        phaseShift: -0.03,
        color: "#1d466b"
    };

    phase = 0;

    amplitude = 0.2;

    componentDidMount() {
        const canvas = this.canvasDOM;
        const ctx = canvas.getContext("2d");
        // 高清屏处理
        if (devicePixelRatio >= 2) {
            const oldWidth = canvas.width;
            const oldHeight = canvas.height;
            canvas.width = oldWidth * devicePixelRatio;
            canvas.height = oldHeight * devicePixelRatio;
            canvas.style.width = `${oldWidth}px`;
            canvas.style.height = `${oldHeight}px`;
            ctx.translate(-0.5, -0.5);
        }

        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;

        this.ctx = ctx;
        this.ctx.strokeStyle = this.props.color;

        // set requestAnimationFrame
        this.timer = requestAnimationFrame(this.renderWave);
    }

    componentWillUnmount() {
        // clear requestAnimationFrame
        cancelAnimationFrame(this.timer);
    }

    setCanvas = canvasDOM => {
        this.canvasDOM = canvasDOM;
    };

    getDeltaY(x) {
        if (typeof cache1[x] !== "number") {
            cache1[x] =
                this.props.idleAmplitude *
                (-((x / (this.canvasWidth / 2) - 1) ** 2) + 1) *
                -this.canvasHeight;
        }
        if (typeof cache2[x] !== "number") {
            cache2[x] = 2 * Math.PI * (x / this.canvasWidth) * this.props.frequency;
        }

        return cache1[x] * Math.sin(cache2[x] + this.phase);
    }

    update = () => {
        const { phaseShift } = this.props;
        // Optimized update strategy.
        this.phase = (this.phase + phaseShift) % (Math.PI * 2);
    };

    renderWave = () => {
        const { waveCount, primaryLineWidth, otherLineWidth } = this.props;
        const ctx = this.ctx;

        // do update
        this.update();
        // without -1, stroke style will not work on coolpad Android 4.2
        ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight - 1);

        // draw primary curve
        const points = [];
        ctx.beginPath();
        for (let x = 0; x <= this.canvasWidth; x++) {
            const dy = this.getDeltaY(x);
            const y = Math.floor(dy + this.canvasHeight / 2);
            if (x === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            points[x] = dy;
        }
        ctx.lineWidth = primaryLineWidth * lineWidthRatio;
        ctx.globalAlpha = 1;
        ctx.stroke();

        // draw other curves
        ctx.lineWidth = otherLineWidth * lineWidthRatio;
        for (let i = 1; i < waveCount; i++) {
            const indexPercent = i / waveCount;
            const progress = 1 - indexPercent;

            ctx.beginPath();
            for (let x = 0; x <= this.canvasWidth; x++) {
                // Shift the last wave's amplitude to make it lower than current level.
                const y = Math.floor(points[x] * progress + this.canvasHeight / 2);
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.globalAlpha = 1.0 - indexPercent ** 2;
            ctx.stroke();
        }

        this.timer = requestAnimationFrame(this.renderWave);
    };

    render() {
        const {
            waveCount,
            primaryLineWidth,
            otherLineWidth,
            frequency,
            idleAmplitude,
            phaseShift,
            color,
            ...props
        } = this.props;
        const width = window.innerWidth;
        const height = Math.round(120 * (width / 750));

        return (
            <canvas
                className="wave"
                ref={this.setCanvas}
                width={width}
                height={height}
                {...props}
            />
        );
    }
}

export default Wave;
