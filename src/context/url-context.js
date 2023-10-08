// export const directory = {
//   events: {
//     topics: {
//       get: (id) => `https://www.ciistacna.com/api/v1/events/${id}/topics`,
//     },
//     gallery: {
//       get: (type = null) =>
//         `https://www.ciistacna.com/api/v1/events/gallery${
//           type != null ? "?type=" + type : ""
//         }`,
//     },
//   },
// };

const domain = "http://localhost";
// const domain = "";
export const directory = {
  events: {
    topics: {
      get: (id) => `${domain}/api/v1/events/${id}/topics`,
    },
    gallery: {
      get: (type = null) =>
        `${domain}/api/v1/events/gallery${type != null ? "?type=" + type : ""}`,
    },
  },
  user: {
    src: `${domain}/api/v2/user`,
  },
  session: {
    src: `${domain}/api/v2/session`,
  },
  inscription: {
    src: `${domain}/api/v2/inscription`,
    ciis: (type) => `${domain}/api/v2/inscription/ciis?type=${type}`,
  },
};
