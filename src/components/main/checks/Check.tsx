import React from "react";

type Props = {
  name: string;
  status: "Normal" | "Applied" | "Awaiting";
};

const Check = (props: Props) => {
  return (
    <div className="check" style={{ border: "1px solid red" }}>
      <div className="container" style={{ display: "flex" }}>
        <img
          src="checkmark.svg"
          alt=""
          style={{
            width: "24px",
            filter:
              "invert(70%) sepia(16%) saturate(632%) hue-rotate(196deg) brightness(87%) contrast(86%)",
          }}
        />
        <div
          style={{
            color: "#9499C3",
            padding: "10px",
          }}
        >
          {props.name}
        </div>
      </div>
      <div
        style={{
          color: "#9499C3",
          opacity: "50%",
        }}
      >
        {props.status}
      </div>
    </div>
  );
};

export default Check;
