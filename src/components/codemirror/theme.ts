import { EditorView } from "@codemirror/view";
import { githubLightInit } from "@uiw/codemirror-theme-github";

export const defaultThemeOption = EditorView.theme(
    {
        "&": {
            height: "100%",
        },
        "&.cm-focused": {
            outline: "none",
        },
        "& .cm-gutters": {
            borderColor: '#f0f0f0'
        }
    },
    { dark: false }
);

export const githubLight = githubLightInit({
    settings: {
        fontFamily:
            "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;",
    },
});