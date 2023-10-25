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

// const domain = "http://localhost";
const domain = "https://www.ciistacna.com";
export const directory = {
  events: {
    topics: {
      get: (id) => `${domain}/api/v1/events/${id}/topics`,
    },
    gallery: {
      get: (type = null) =>
        `${domain}/api/v1/events/gallery${type != null ? "?type=" + type : ""}`,
    },
    one: (id) => ({
      src: `${domain}/api/v2/event/${id}`,
      reservation: {
        ciis: (type) => `${domain}/api/v2/event/${id}/reservation/ciis?type=${type}`,
      },
    }),
  },
  user: {
    src: `${domain}/api/v2/user`,
    inscription: `${domain}/api/v2/user/inscription`,
  },
  taller: {
    src: `${domain}/api/v2/taller`,
    one: (id) => ({
      src: `${domain}/api/v2/taller/${id}`,
      participant: `${domain}/api/v2/taller/${id}/participant`,
    }),
  },
  session: {
    src: `${domain}/api/v2/session`,
  },
  inscription: {
    src: `${domain}/api/v2/inscription`,
    ciis: (type) => `${domain}/api/v2/inscription/ciis?type=${type}`,
  },
};
