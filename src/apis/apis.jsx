export const getAccomodations = async () => {
  const url = `http://localhost:8080/accommodations`;
  const res = await fetch(url, { method: "get" });
  if (res) {
    return await res.json();
  } else return null;
};

export const getDescriptions = async () => {
  const url = `http://localhost:8080/descriptions`;
  const res = await fetch(url, { method: "get" });
  if (res) {
    return await res.json();
  } else return null;
};
