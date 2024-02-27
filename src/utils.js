export const generateUniqueId = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
};

export const getModifiedWord = (count) => {
  let word = '';
  if (count % 10 === 1 && count % 100 !== 11) {
    word = 'комментарий';
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    word = 'комментария';
  } else {
    word = 'комментариев';
  }
  return word;
};
