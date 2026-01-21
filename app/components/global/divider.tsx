import type { ReactNode } from "react";

interface DividerProps {
    orientation?: "horizontal" | "vertical";
    color?: "light" | "medium" | "dark";
    spacing?: "none" | "small" | "medium" | "large";
    thickness?: "thin" | "medium" | "thick";
}

export default function Divider(props: DividerProps) {
    const orientation = props.orientation || "horizontal";
    const color = props.color || "medium";
    const spacing = props.spacing || "none";
    const thickness = props.thickness || "thin";

    const colorClasses = {
        light: "border-neutral-700",
        medium: "border-neutral-800",
        dark: "border-neutral-900"
    };

    const spacingClasses = {
        none: "",
        small: orientation === "horizontal" ? "my-2" : "mx-2",
        medium: orientation === "horizontal" ? "my-4" : "mx-4",
        large: orientation === "horizontal" ? "my-6" : "mx-6"
    };

    const thicknessClasses = {
        thin: orientation === "horizontal" ? "border-t" : "border-l",
        medium: orientation === "horizontal" ? "border-t-2" : "border-l-2",
        thick: orientation === "horizontal" ? "border-t-4" : "border-l-4"
    };

    return (
        <div className={`${thicknessClasses[thickness]} ${colorClasses[color]} ${spacingClasses[spacing]}`}></div>
    );
}
