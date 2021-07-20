function Convertor(value) {
  const Billion = 10 ** 9;
  const Million = 10 ** 6;
  const Thousand = 10 ** 3;

  if (value > Billion) {
    return (value / Billion).toFixed(2) + "B";
  } else if (value > Million) {
    return (value / Million).toFixed(2) + "M";
  } else if (value > Thousand) {
    return (value / Thousand).toFixed(2) + "K";
  } else {
    return value;
  }
}

export default Convertor;
