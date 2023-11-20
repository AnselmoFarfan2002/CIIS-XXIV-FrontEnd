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
        ciis: (type) =>
          `${domain}/api/v2/event/${id}/reservation/ciis?type=${type}`,
      },
      attendance: (dni) =>
        `${domain}/api/v2/event/${id}/attendance?user=${dni}`,
    }),
  },
  user: {
    src: `${domain}/api/v2/user`,
    inscription: `${domain}/api/v2/user/inscription`,
    phone: `${domain}/api/v2/user/phone`,
    name: `${domain}/api/v2/user/name`,
    lastname: `${domain}/api/v2/user/lastname`,
    password: `${domain}/api/v2/user/password`,
    code: `${domain}/api/v2/user/code`,
    restore: `${domain}/api/v2/user/restore`,
  },
  speaker: {
    one: (id) => ({
      src: `${domain}/api/v2/speaker/${id}`,
    }),
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
  conference: {
    "schedule-day": (day) =>
      `${domain}/api/v2/conference/schedule-day?day=${day}`,
    one: (id) => ({
      src: `${domain}/api/v2/conference/${id}`,
      attendance: `${domain}/api/v2/conference/${id}/attendance`,
    }),
  },
};
