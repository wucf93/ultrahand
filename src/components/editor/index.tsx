import { FC, useEffect, useRef, useState } from "react";
import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import { Annotation, EditorState } from "@codemirror/state";
import { linter } from "@codemirror/lint";
import { json, jsonParseLinter } from "@codemirror/lang-json";
import { defaultThemeOption, githubLight } from "./theme";
import cx from "classnames";
import styles from "./style.module.less";

import type { BaseProps } from "../base";

interface CodeMirrorProps extends BaseProps {
  value?: string;
  onChange?: (value: CodeMirrorProps["value"]) => void;
}

const External = Annotation.define<boolean>();

export const CodeMirror: FC<CodeMirrorProps> = (props) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<EditorView>();

  /** value 改变触发 */
  useEffect(() => {
    const currentValue = view?.state?.doc.toString() || "";

    if (props.value !== currentValue) {
      view?.dispatch({
        changes: {
          from: 0,
          to: currentValue.length,
          insert: props.value || "",
        },
        annotations: [External.of(true)],
      });
    }
  }, [props.value, view]);

  /** 监听doc */
  const onUpdate = EditorView.updateListener.of((v) => {
    if (v.docChanged) {
      props.onChange?.(v.state.doc.toString());
    }
  });

  useEffect(() => {
    if (!editorRef?.current) return;

    const state = EditorState.create({
      extensions: [
        linter(jsonParseLinter()),
        basicSetup,
        defaultThemeOption,
        githubLight,
        json(),
        onUpdate,
      ],
    });

    const view = new EditorView({ state, parent: editorRef.current });
    setView(view);

    return () => {
      console.log("destory");
      view?.destroy();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={editorRef}
      className={cx(styles["fedh-code"], props.className)}
      style={props.style}
    />
  );
};
