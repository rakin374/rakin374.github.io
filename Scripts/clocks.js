

/**
 * Generates a list of city times based on predefined time zones.
 * 
 * @function pentaclocks
 * @returns {Array<Object>} An array of objects, each containing a city name and its corresponding local time.
 */


console.log(viewTimes);
function pentaclocks() {
    const cityTimeZones = {
        NYC: 'America/New_York',
        London: 'Europe/London',
        Dhaka: 'Asia/Dhaka',
        Seoul: 'Asia/Seoul',
        Alaska: 'America/Anchorage'
    };

    const cityTimes = [];
    for (const [city, timeZone] of Object.entries(cityTimeZones)) {
        cityTimes.push({ city, time: getLocalTime(city, timeZone) });
    }

    return cityTimes;
}

/**
 * Retrieves the local time for a specified city and time zone.
 *
 * @function
 * @param {string} city - The name of the city for which the local time is being retrieved.
 * @param {string} timeZone - The IANA time zone identifier (e.g., "America/New_York", "Europe/London").
 * @returns {string} The formatted local time in "HH:mm:ss" (24-hour format), or an error message if the time zone is invalid.
 * 
 * @example
 * // Get the local time for New York
 * const time = getLocalTime('New York', 'America/New_York');
 * console.log(time); // Output: "14:30:45" (example output, depends on current time)
 * 
 * @throws {RangeError} If the provided time zone is invalid.
 */
function getLocalTime(city, timeZone) {
    try {
        const options = { timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        return formatter.format(new Date());
    } catch (error) {
        console.error(`Error getting local time for ${city}:`, error);
        return 'Invalid time zone';
    }
}