"use client";

import { useEffect, useRef } from 'react';

type Point = {
    xFactor: number;
    yFactor: number;
    phase: number;
    speed: number;
    radius: number;
    alpha: number;
};

const FALLBACK_ACCENT_COLOR = '#34d399';
const POINT_COUNT = 36;
const MAX_DEVICE_PIXEL_RATIO = 2;
const PARALLAX_EASING = 0.06;
const PARALLAX_X_STRENGTH = 0.04;
const PARALLAX_Y_STRENGTH = 0.06;

const withAlpha = (color: string, alpha: number) => {
    if (color.startsWith('#') && color.length === 7) {
        const red = Number.parseInt(color.slice(1, 3), 16);
        const green = Number.parseInt(color.slice(3, 5), 16);
        const blue = Number.parseInt(color.slice(5, 7), 16);

        return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }

    return color;
};

const createPoints = () =>
    Array.from({ length: POINT_COUNT }, (_, index) => ({
        xFactor: (index + 1) / (POINT_COUNT + 1),
        yFactor: 0.25 + Math.random() * 0.55,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 0.8,
        radius: 1.5 + Math.random() * 2.5,
        alpha: 0.18 + Math.random() * 0.42,
    } satisfies Point));

export const HeroAccentCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return undefined;
        }

        const context = canvas.getContext('2d');

        if (!context) {
            return undefined;
        }

        const points = createPoints();
        const accentColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--color-accent')
            .trim() || FALLBACK_ACCENT_COLOR;
        const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        let animationFrameId = 0;
        let width = 0;
        let height = 0;
        const pointerTarget = { x: 0, y: 0 };
        const pointerCurrent = { x: 0, y: 0 };

        const resizeCanvas = () => {
            const bounds = canvas.getBoundingClientRect();
            const devicePixelRatio = Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO);

            width = bounds.width;
            height = bounds.height;
            canvas.width = Math.max(1, Math.floor(width * devicePixelRatio));
            canvas.height = Math.max(1, Math.floor(height * devicePixelRatio));
            context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
        };

        const updatePointerTarget = (event: MouseEvent) => {
            const bounds = canvas.getBoundingClientRect();

            if (!bounds.width || !bounds.height) {
                return;
            }

            const normalizedX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
            const normalizedY = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;

            pointerTarget.x = Math.max(-1, Math.min(1, normalizedX));
            pointerTarget.y = Math.max(-1, Math.min(1, normalizedY));
        };

        const resetPointerTarget = () => {
            pointerTarget.x = 0;
            pointerTarget.y = 0;
        };

        const draw = (time: number) => {
            const normalizedTime = time / 1000;
            const verticalAmplitude = height * 0.08;
            const glowRadius = Math.max(width, height) * 0.18;
            const parallaxOffsetX = pointerCurrent.x * width * PARALLAX_X_STRENGTH;
            const parallaxOffsetY = pointerCurrent.y * height * PARALLAX_Y_STRENGTH;

            context.clearRect(0, 0, width, height);

            const radialGradient = context.createRadialGradient(
                width * 0.72 + parallaxOffsetX,
                height * 0.7 + parallaxOffsetY,
                0,
                width * 0.72 + parallaxOffsetX,
                height * 0.7 + parallaxOffsetY,
                glowRadius,
            );
            radialGradient.addColorStop(0, withAlpha(accentColor, 0.18));
            radialGradient.addColorStop(1, withAlpha(accentColor, 0));

            context.fillStyle = radialGradient;
            context.fillRect(0, 0, width, height);

            const positionedPoints = points.map((point) => ({
                x: width * (0.08 + point.xFactor * 0.84) + parallaxOffsetX * (0.35 + point.xFactor * 0.4),
                y:
                    height * point.yFactor +
                    Math.sin(normalizedTime * point.speed + point.phase) * verticalAmplitude +
                    parallaxOffsetY * (0.3 + point.yFactor * 0.35),
                radius: point.radius,
                alpha: point.alpha,
            }));

            context.lineWidth = 1;

            for (let index = 1; index < positionedPoints.length; index += 1) {
                const previousPoint = positionedPoints[index - 1];
                const currentPoint = positionedPoints[index];

                context.beginPath();
                context.moveTo(previousPoint.x, previousPoint.y);
                context.lineTo(currentPoint.x, currentPoint.y);
                context.strokeStyle = withAlpha(accentColor, 0.16);
                context.stroke();
            }

            for (const point of positionedPoints) {
                context.beginPath();
                context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
                context.fillStyle = withAlpha(accentColor, point.alpha);
                context.fill();
            }
        };

        const renderFrame = (time: number) => {
            pointerCurrent.x += (pointerTarget.x - pointerCurrent.x) * PARALLAX_EASING;
            pointerCurrent.y += (pointerTarget.y - pointerCurrent.y) * PARALLAX_EASING;
            draw(time);
            animationFrameId = window.requestAnimationFrame(renderFrame);
        };

        resizeCanvas();

        if (reduceMotionQuery.matches) {
            draw(0);
        } else {
            window.addEventListener('mousemove', updatePointerTarget);
            window.addEventListener('mouseleave', resetPointerTarget);
            window.addEventListener('blur', resetPointerTarget);
            animationFrameId = window.requestAnimationFrame(renderFrame);
        }

        const resizeObserver = new ResizeObserver(() => {
            resizeCanvas();
            draw(0);
        });

        resizeObserver.observe(canvas);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
            window.removeEventListener('mousemove', updatePointerTarget);
            window.removeEventListener('mouseleave', resetPointerTarget);
            window.removeEventListener('blur', resetPointerTarget);
            resizeObserver.disconnect();
        };
    }, []);

    return <canvas ref={canvasRef} className="hero-accent-canvas" aria-hidden="true" />;
};