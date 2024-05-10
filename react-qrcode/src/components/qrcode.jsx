/* eslint-disable react/prop-types */
import { QRCodeSVG } from "qrcode.react";

export const QRCode = ({ url }) => {
  return (
    <QRCodeSVG
      style={{
        margin: "20px",
        borderRadius: "0.5rem",
        display: "inline-block",
      }}
      value={url}
      size={120}
      bgColor={"#FFF"}
      fgColor={"#000"}
      level={"H"}
      includeMargin={false}
      imageSettings={{
        src: "/vite.svg",
        x: undefined,
        y: undefined,
        height: 24,
        width: 24,
        excavate: true,
      }}
    />
  );
};
