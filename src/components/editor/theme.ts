import { EditorView } from "@codemirror/view";
import { githubLightInit } from "@uiw/codemirror-theme-github";

export const defaultThemeOption = EditorView.theme(
    {
        "&": {
            height: "400px",
        },
        "&.cm-focused": {
            outline: "none",
        },
    },
    { dark: false }
);

export const githubLight = githubLightInit({
    settings: {
        fontFamily:
            "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;",
    },
});