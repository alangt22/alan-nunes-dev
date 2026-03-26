export default {
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blink: {
          "0%, 50%, 100%": { opacity: "1" },
          "25%, 75%": { opacity: "0" },
        },
      },
    },
  },
};