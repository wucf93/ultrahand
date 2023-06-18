import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { basicSetup } from "codemirror";
import { EditorView, placeholder } from "@codemirror/view";
import { Annotation, EditorState, StateEffect } from "@codemirror/state";
import { linter } from "@codemirror/lint";
import langs from "./lang";
import { defaultThemeOption, githubLight } from "./theme";
import cx from "classnames";
import styles from "./style.module.less";

import type { BaseProps } from "../base";

interface CodeMirrorProps extends BaseProps {
  placeholder?: string;
  lang?: keyof typeof langs;
  linter?: boolean;
  title?: ReactNode;
  value?: string;
  readonly?: boolean;
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

  const defaultExtensions = useMemo(
    () => [basicSetup, defaultThemeOption, githubLight, onUpdate],
    [onUpdate]
  );

  useEffect(() => {
    if (!editorRef?.current) return;
    const state = EditorState.create({ extensions: defaultExtensions });
    const view = new EditorView({ state, parent: editorRef.current });
    setView(view);
    return () => {
      view?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (view) {
      const extensions = [...defaultExtensions];

      if (props.placeholder && typeof props.placeholder === "string") {
        extensions.unshift(placeholder(props.placeholder));
      }

      // 语言及Linter
      if (props.lang && langs[props.lang]) {
        const lang = langs.json;
        extensions.push(lang.lane());
        // linter
        if (props.linter === true) {
          extensions.push(linter(lang.linter()));
        }
      }

      // 只读
      if (props.readonly) {
        extensions.push(EditorState.readOnly.of(true));
        extensions.push(EditorView.editable.of(false));
      }

      view.dispatch({ effects: StateEffect.reconfigure.of(extensions) });
    }
  }, [
    view,
    props.readonly,
    props.lang,
    props.linter,
    props.placeholder,
    defaultExtensions,
  ]);

  return (
    <div
      className={cx(styles["fedh-code"], props.className)}
      style={props.style}
    >
      {/* 标题 */}
      {props.title && (
        <div className={styles["fedh-code-title"]}>{props.title}</div>
      )}

      {/* 内容 */}
      <div
        ref={editorRef}
        style={props.style}
        className={styles["fedh-code-body"]}
      />
    </div>
  );
};
