import React from "react";

interface NotchDividerProps {
  /** Background color behind the SVG (default: black) */
  bgColor?: string;
  /** Fill color for the wave path (default: #ff6a00) */
  fillColor?: string;
  /** Optional height of the SVG (default: 50px) */
  height?: number;
  /** Hide on small screens (default: true) */
  hideOnSmall?: boolean;
}

export const NotchDivider: React.FC<NotchDividerProps> = ({
  bgColor = "black",
  fillColor = "#ff6a00",
  height = 50,
  hideOnSmall = true,
}) => {
  return (
    <div
      className={`${hideOnSmall ? "max-sm:hidden" : ""}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1500 99"
        preserveAspectRatio="none"
        style={{ width: "100%", height }}
      >
        <path
          d="M0 0H200C240 0 267 100 300 100H1200C1240 100 1265.3333 0 1300 0H1440"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};
export const NotchDivider2: React.FC<NotchDividerProps> = ({
  bgColor = "black",
  fillColor = "#ff6a00",
  height = 50,
  hideOnSmall = true,
}) => {
  return (
    <div
      className={`${hideOnSmall ? "max-sm:hidden" : ""}`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        viewBox="0 0 1500 99"
        preserveAspectRatio="none"
        style={{ width: "100%", height }}
      >
        <path
          d="M0 0M0 100 200 100C240 100 267 0 300 0L1200 0C1240 0 1265.3333 100 1300 100H1440"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};


