import React, { useState } from 'react';
import { NavBar } from '../navbar';

const MetarLookUp = () => {
  const [icaoCode, setIcaoCode] = useState('');
  const [metarData, setMetarData] = useState<{
    station: string;
    rawText: string;
    observationTime: string;
    latitude: string;
    longitude: string;
    temperature: string;
    dewpoint: string;
    windDirDegrees: string;
    windSpeed: string;
    visibility: string;
    altimInHg: string;
    skyConditions: { skyCover: string; cloudBase: string }[];
    flightCategory: string;
    metarType: string;
    elevation: string;
    windGust: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMetarData = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `http://localhost:8080/https://aviationweather.gov/adds/dataserver_current/httpparam?` +
          `dataSource=metars&requestType=retrieve&format=xml&hoursBeforeNow=1&mostRecent=true&` +
          `stationString=${icaoCode}`
      );

      if (response.ok) {
        const xmlData = await response.text();
        const parsedData = parseMetarData(xmlData);
        setMetarData(parsedData);
      } else {
        setError('Failed to fetch METAR data');
      }
    } catch (error) {
      console.error(error);
      setError('Failed to fetch METAR data');
    } finally {
      setLoading(false);
    }
  };

  const parseMetarData = (xmlData: string) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
    const metarElement = xmlDoc.getElementsByTagName('METAR')[0];

    const station = metarElement.getElementsByTagName('station_id')[0]?.textContent ?? '';
    const rawText = metarElement.getElementsByTagName('raw_text')[0]?.textContent ?? '';
    const observationTime = metarElement.getElementsByTagName('observation_time')[0]?.textContent ?? '';
    const latitude = metarElement.getElementsByTagName('latitude')[0]?.textContent ?? '';
    const longitude = metarElement.getElementsByTagName('longitude')[0]?.textContent ?? '';
    const temperature = metarElement.getElementsByTagName('temp_c')[0]?.textContent ?? '';
    const dewpoint = metarElement.getElementsByTagName('dewpoint_c')[0]?.textContent ?? '';
    const windDirDegrees = metarElement.getElementsByTagName('wind_dir_degrees')[0]?.textContent ?? '';
    const windSpeed = metarElement.getElementsByTagName('wind_speed_kt')[0]?.textContent ?? '';
    const visibility = metarElement.getElementsByTagName('visibility_statute_mi')[0]?.textContent ?? '';
    const altimInHg = metarElement.getElementsByTagName('altim_in_hg')[0]?.textContent ?? '';

    const skyConditionElements = metarElement.getElementsByTagName('sky_condition');
    const skyConditions = Array.from(skyConditionElements).map((element) => ({
      skyCover: element.getAttribute('sky_cover') || '',
      cloudBase: element.getAttribute('cloud_base_ft_agl') || '',
    }));

    const flightCategory = metarElement.getElementsByTagName('flight_category')[0]?.textContent ?? '';
    const metarType = metarElement.getElementsByTagName('metar_type')[0]?.textContent ?? '';
    const elevation = metarElement.getElementsByTagName('elevation_m')[0]?.textContent ?? '';
    const windGust = metarElement.getElementsByTagName('wind_gust_kt')[0]?.textContent ?? '';

    return {
      station,
      rawText,
      observationTime,
      latitude,
      longitude,
      temperature,
      dewpoint,
      windDirDegrees,
      windSpeed,
      visibility,
      altimInHg,
      skyConditions,
      flightCategory,
      metarType,
      elevation,
      windGust,
    };
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIcaoCode(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchMetarData();
  };

  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
        <form onSubmit={handleFormSubmit} style={{ marginBottom: '20px' }}>
          <label>
            ICAO Code:
            <input type="text" value={icaoCode} onChange={handleInputChange} />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Fetching...' : 'Fetch METAR Data'}
          </button>
        </form>

        {error && <div>Error: {error}</div>}

        {metarData && (
          <div>
            <h2>METAR Data for {metarData.station}</h2>
            <table style={{ borderCollapse: 'collapse' }}>
              <tbody>
              <tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Raw Text</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.rawText}</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Observation Time</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.observationTime}</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Latitude</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.latitude}</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Longitude</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.longitude}</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Temperature</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.temperature}°C</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Dewpoint</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.dewpoint}°C</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Wind Direction Degrees</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.windDirDegrees}</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Wind Speed</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.windSpeed} KT</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Visibility</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.visibility} statute miles</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Altimeter (inHg)</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.altimInHg}</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Sky Conditions</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>
    <ul>
      {metarData.skyConditions.map((condition, index) => (
        <li key={index}>
          Sky Cover: {condition.skyCover}, Cloud Base: {condition.cloudBase} ft AGL
        </li>
      ))}
    </ul>
  </td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Flight Category</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.flightCategory}</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>METAR Type</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.metarType}</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Elevation</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.elevation} m</td>
</tr>
<tr>
  <td style={{ border: '1px solid black', padding: '8px' }}>Wind Gust</td>
  <td style={{ border: '1px solid black', padding: '8px' }}>{metarData.windGust} KT</td>
</tr>
                {/* Rest of the table rows */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};


export default MetarLookUp;
