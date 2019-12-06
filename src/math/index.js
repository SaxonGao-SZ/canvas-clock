export const rnd = function (max = 2048, toString = 0) {
  const val = Math.floor(Math.random() * max);
  if (toString === 0) {
    return val;
  }
  return val.toString(toString)
}

export const rndColor = function () {
  return ['#', rnd(255, 16), rnd(255, 16), rnd(255, 16)].join('');
}

export const rounding = function (float, rank = 100) {
  return Math.round(float * rank) / rank;
}

export const angleBySecond = function () {
  let dt = new Date();
  let circl = 2 * Math.PI;
  let second = dt.getSeconds();
  let ms = dt.getMilliseconds();
  let fSec = second * 1000 + ms;
  let r = circl * (fSec / 60000);
  return rounding(r, 1000);
}
export const angleByMinute = function () {
  let dt = new Date();
  let circl = 2 * Math.PI;
  let munite = dt.getMinutes();
  let r = circl * (munite * 60 / 3600);
  return rounding(r, 1000);
}
export const angleByHour24 = function () {
  let dt = new Date();
  let circl = 2 * Math.PI;
  let hour = dt.getHours();
  let r = circl * (hour * 3600 / 86400);
  return rounding(r, 1000);
}
export const angleByHour12 = function () {
  let dt = new Date();
  let circl = 2 * Math.PI;
  let hour = dt.getHours();
  let r = circl * (hour * 3600 / 43200);
  return rounding(r, 1000);
}