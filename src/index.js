import { DateTime } from "luxon";

// const now = DateTime.now();
// console.log(now);
// const now2 = DateTime.local();
// console.log(now2);
// const nowUTC = DateTime.utc();
// console.log(nowUTC);

// const now = DateTime.now();
// console.log(now.year);
// console.log(now.month);
// console.log(now.day);
// const {year, month, day} = now;

// const nowLA = DateTime.now().setZone("America/Los_Angeles");
// console.log(nowLA);

// const now = DateTime.now();
// const now2 = now.plus({days: 2, hours: 1});
// console.log(now)
// console.log(now2)

// const now = DateTime.now();
// console.log(now.toFormat("dd MM yyyy"));
// console.log(now.toISO());

// const ISOdate = "2025-06-02T10:09:43.217+02:00";
// const date = new DateTime(ISOdate);
// console.log(date);

import { getCurrentWeatherByCity } from "./weatherApi.js";

const weaterData = await getCurrentWeatherByCity("Veldenz");
console.log(weaterData);
console.log(`Temperature in Veldenz now: ${weaterData.current.temperature}`);
