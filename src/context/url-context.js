export const directory = {
  events: {
    topics: {
      get: (id) => `https://www.ciistacna.com/api/v1/events/${id}/topics`,
    },
    gallery: {
      get: (type = null) =>
        `https://www.ciistacna.com/api/v1/events/gallery${
          type != null ? "?type=" + type : ""
        }`,
    },
  },
};
