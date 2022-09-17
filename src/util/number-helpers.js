export function tryParseInt(intString, defaultValue = 0) {
  if (typeof intString === "number") {
    if (isNaN(intString)) return defaultValue;
    return intString;
  }

  let intNum;

  try {
    intNum = parseInt(intString);
    if (isNaN(intNum)) intNum = defaultValue;
  } catch {
    intNum = defaultValue;
  }

  return intNum;
}

// turns integer into comma splitted string
// ex: 123456 => 123,456
export function numberFormat(n) {
  return new Intl.NumberFormat("en-US").format(n);
}

export function array2ToString(n) {
  return n.join("");
}

// returns an array with 2 values based on its abbreviation
// ex: 123456 => [123, "k"]
export function abbreviateNumber(n) {
  if (n < 1e3) return [tryParseInt(n).toFixed(1), ""];
  if (n >= 1e3 && n < 1e6) return [+(n / 1e3).toFixed(1), "k"];
  if (n >= 1e6 && n < 1e9) return [+(n / 1e6).toFixed(1), "m"];
  if (n >= 1e9 && n < 1e12) return [+(n / 1e9).toFixed(1), "b"];
  if (n >= 1e12) return [+(n / 1e12).toFixed(1), "t"];
}

// takes milliseconds in numbers and returns string with minutes:seconds
// ex: 60000 => 01:00
export function millisToMinutesAndSeconds(millis) {
  const hoursmillis = millis % (60 * 60 * 1000);
  const minutes = Math.floor(hoursmillis / (60 * 1000));
  const minutesmillis = millis % (60 * 1000);
  const sec = Math.floor(minutesmillis / 1000);

  return String(minutes).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
}

export function millisToHourMinuteSeconds(millis) {
  const daysmillis = millis % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysmillis / (60 * 60 * 1000));
  const hoursmillis = millis % (60 * 60 * 1000);
  const minutes = Math.floor(hoursmillis / (60 * 1000));
  const minutesmillis = millis % (60 * 1000);
  const sec = Math.floor(minutesmillis / 1000);
  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(sec).padStart(2, "0")
  );
}
