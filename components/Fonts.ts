import localFont from "next/font/local";

export const myFont = localFont({
  src: [
    {
      path: "../fonts/Swiss721BT-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Swiss721BT-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Swiss721BT-Italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});
