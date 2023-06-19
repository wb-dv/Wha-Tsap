export const formatPhone = (phone) => {
  return phone
    .slice(0, 11)
    .split('')
    .map((num, i) => {
      switch (i) {
        case 0:
          return `+${num} (`;
        case 3:
          return `${num}) `;
        case 6:
        case 8:
          return `${num}-`;
        default:
          return num;
      }
    })
    .join('');
};

export const phoneToId = (phone) => `${phone}@c.us`;
