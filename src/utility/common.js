export const getData = async (path) => {
  const data = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => response.json());
  return data;
};

export const formatDate = (date) => {
  if (date == "Present") return "Present";
  if (date) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      timeZone: "UTC",
      year: "2-digit",
      month: "long",
    });
    return formattedDate;
  }
  return "";
};
