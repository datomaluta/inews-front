export const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " წლის წინ";
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " თვის წინ";
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " დღის წინ";
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " საათის წინ";
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " წუთის წინ";
  }

  if (seconds < 10) return "ახლახანს";

  return Math.floor(seconds) + " წამის წინ";
};
