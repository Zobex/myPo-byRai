// export function slideInFromLeft(delay: number) {
//   return {
//     hidden: { x: -100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         delay: delay,
//         duration: 0.5,
//       },
//     },
//   };
// }

// export function slideInFromRight(delay: number) {
//   return {
//     hidden: { x: 100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         delay: delay,
//         duration: 0.5,
//       },
//     },
//   };
// }

export const slideInFromTop = {
  Hidden: {
    opacity: 0,
    y: -50,
  },
  Visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

export function slideInFromLeft(delay: number) {
  return {
    Hidden: { x: -100, opacity: 0 },
    Visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    Hidden: { x: 100, opacity: 0 },
    Visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}
