import { useEffect, useState } from "react";

export type CursorHover = "none" | "link" | "button" | "image" | "text";

export type CursorState = {
  x: number;
  y: number;
  hovering: CursorHover;
  label: string;
  visible: boolean;
};

export function useGlobalCursor() {
  const [state, setState] = useState<CursorState>({
    x: -100,
    y: -100,
    hovering: "none",
    label: "",
    visible: false,
  });

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let hovering: CursorHover = "none";
      let label = "";

      const interactive = target.closest<HTMLElement>(
        "a, button, [data-cursor], input, textarea, select"
      );

      if (interactive) {
        const forcedLabel = interactive.getAttribute("data-cursor-label");
        const tag = interactive.tagName.toLowerCase();

        if (forcedLabel) {
          hovering = "image";
          label = forcedLabel;
        } else if (tag === "a" || tag === "button") {
          hovering = "link";
        } else if (tag === "input" || tag === "textarea" || tag === "select") {
          hovering = "text";
        } else {
          hovering = "button";
        }
      } else if (target.closest("p, h1, h2, h3, h4, span")) {
        hovering = "text";
      }

      setState({ x: e.clientX, y: e.clientY, hovering, label, visible: true });
    };

    const onLeave = () => setState((s) => ({ ...s, visible: false }));
    const onEnter = () => setState((s) => ({ ...s, visible: true }));

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return state;
}