export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
// export const OPEN_SIDE_NAV = "OPEN_SIDE_NAV";
// export const CLOSE_SIDE_NAV = "CLOSE_SIDE_NAV";


export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};


export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

// export const openSide = () => {
//   return {
//     type: OPEN_SIDE_NAV
//   }
// }

// export const closeSide = () => {
//   return {
//     type: CLOSE_SIDE_NAV
//   }
// }