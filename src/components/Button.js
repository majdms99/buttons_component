import React from "react";

const Button = ({
  children,
  variant,
  disabled,
  color,
  size,
  startIcon,
  endIcon,
}) => {
  //   console.log(disabled);
  //Custom Color....
  let cusColor = `bg-default ${
    disabled ? "text-disabled_color" : "hover:bg-default_hover"
  }  shadow-dufault_shadow    `;

  if (color === "primary") {
    cusColor = `text-white bg-primary_color shadow-primary_shadow hover:bg-primary_hover   `;
  }
  if (color === "secondary") {
    cusColor = `text-white bg-secondary_color hover:bg-secondary_color_hover   `;
  }
  if (color === "default" || color === undefined) {
    cusColor = cusColor;
  }
  ////

  //Custom Variant
  if (variant === "outline") {
    cusColor = `bg-transparent text-variant border border-variant  hover:bg-variant_hover`;
  }
  if (variant === "text") {
    cusColor = `bg-transparent ${
      disabled ? "text-disabled_color" : "text-variant hover:bg-variant_hover"
    }`;
  }

  //Custom Size
  let cusSize = `min-w-[81px] min-h-[36px]`;
  if (size === "md") {
    cusSize = cusSize;
  }
  if (size === "sm") {
    cusSize = `min-w-[73px] min-h-[32px]`;
  }
  if (size === "lg") {
    cusSize = `min-w-[93px] min-h-[42px]`;
  }
  return (
    <button
      className={`text-center px-2 rounded-md  transition-all ${cusColor} ${cusSize}`}
      disabled={disabled}
    >
      <span className="flex items-center justify-center">
        {startIcon}
        {children}
        {endIcon}
      </span>
    </button>
  );
};

export default Button;
