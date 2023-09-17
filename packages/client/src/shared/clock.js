const Clock = () => {
  const time = new Date();

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return `${hours}:${minutes}`;
};

export default Clock;
