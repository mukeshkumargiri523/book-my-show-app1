import React from "react";

export function NextArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ color:'red' }}
        onclick={props.onclick}
      ></div>
    </>
  );
}
export function PrevArrow(props) {
  return (
    <>
      <div
        className={props.className}
        style={{ ...props.style }}
        onclick={props.onclick}
      ></div>
    </>
  );
}
