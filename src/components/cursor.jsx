import React, { useEffect, useState } from "react";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(true);
    const [active, setActive] = useState(false);
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const moveHandler = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setVisible(true);
        };
        const leaveHandler = () => setVisible(false);
        const enterHandler = () => setVisible(true);

        // Click effect
        const downHandler = () => setActive(true);
        const upHandler = () => setActive(false);

        // Hover effect (for links/buttons)
        const mouseOverHandler = (e) => {
            if (
                e.target.tagName === "A" ||
                e.target.tagName === "BUTTON" ||
                e.target.classList.contains("cursor-hover")
            ) {
                setHover(true);
            }
        };
        const mouseOutHandler = (e) => {
            if (
                e.target.tagName === "A" ||
                e.target.tagName === "BUTTON" ||
                e.target.classList.contains("cursor-hover")
            ) {
                setHover(false);
            }
        };

        window.addEventListener("mousemove", moveHandler);
        window.addEventListener("mouseout", leaveHandler);
        window.addEventListener("mouseenter", enterHandler);
        window.addEventListener("mousedown", downHandler);
        window.addEventListener("mouseup", upHandler);
        document.addEventListener("mouseover", mouseOverHandler);
        document.addEventListener("mouseout", mouseOutHandler);

        return () => {
            window.removeEventListener("mousemove", moveHandler);
            window.removeEventListener("mouseout", leaveHandler);
            window.removeEventListener("mouseenter", enterHandler);
            window.removeEventListener("mousedown", downHandler);
            window.removeEventListener("mouseup", upHandler);
            document.removeEventListener("mouseover", mouseOverHandler);
            document.removeEventListener("mouseout", mouseOutHandler);
        };
    }, []);

    let className = "Cursor";
    if (active) className += " active";
    if (hover) className += " hover";

    return visible ? (
        <div
            className={className}
            style={{
                position: "fixed",
                transform: "translate(-50%, -50%)",
                top: `${position.y-2}px`,
                left: `${position.x-2}px`,
                pointerEvents: "none",
                zIndex: 9999
            }}
        />
    ) : null;
}