import { FC, ReactNode, useMemo } from "react";
import { Avatar as AntAvatar, AvatarProps } from "antd";
import random from "lodash/random";

const colorList = [
  { color: "#9284F0", bgColor: "#EDEBFF" },
  { color: "#52CC93", bgColor: "#E1F7EB" },
  { color: "#7DADFA", bgColor: "#EBF6FF" },
];

/** 获取第一个字符 */
function getFirstChar(str: string) {
  if (Number(str.codePointAt(0)) > 0xffff) {
    return str.slice(0, 2);
  } else {
    return str?.[0];
  }
}

function getMeta(target: ReactNode) {
  if (typeof target === "string") {
    const code = target.codePointAt(0) || 0;
    return {
      ...colorList[code % colorList.length],
      children: getFirstChar(target),
    };
  } else {
    return { ...colorList[random(0, 2)], children: target };
  }
}

export const Avatar: FC<AvatarProps> = (props) => {
  const result = useMemo(
    () =>
      props.src
        ? ({} as { color: string; bgColor: string; children: ReactNode })
        : getMeta(props.children),
    [props.children, props.src]
  );

  return props.src ? (
    <AntAvatar size={32} {...props} />
  ) : (
    <AntAvatar
      size={32}
      {...props}
      style={{
        fontSize: 14,
        fontWeight: "normal",
        color: result.color,
        backgroundColor: result.bgColor,
        ...props.style,
      }}
    >
      {result.children}
    </AntAvatar>
  );
};
