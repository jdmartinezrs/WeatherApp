import React, { useState, useEffect } from 'react';
import background from '../../public/storage/images/background.png';

const TopField = () => {
  const [City, setCity] = useState("Leticia");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchingWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=cac8c85072cf4893a3952959242210&q=${City}&lang=es`
        );
        if (!response.ok) {
          throw new Error("Error al obtener los datos del clima");
        }
        const data = await response.json();
        setWeatherData(data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchingWeather(); 
  }, [City]);

  if (loading) return <p className='text-witheY'></p>;
  if (error) return <p className='text-red-500'>{error}</p>;

  return (
    weatherData && (
      <section
        className='bg-lilaL h-[50vh] rounded-b-[50px]'
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center -113px',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='flex justify-between'>
          <p className='text-witheY pt-[40px] pl-[20px]'>
            {weatherData.location.name}, {weatherData.location.region}
          </p>
          <img
            src='../../public/storage/images/search_white.png'
            alt='Ícono'
            className='mr-2 w-5 h-5 mt-[45px] mr-[30px]'
          />
        </div>

        <div className='flex'>
          <p className='text-witheY text-6xl font-regular pt-[45px] pl-[20px] w-[100vh]'>
            {weatherData.current.temp_c}°
          </p>
          <p className='text-witheY absolute pt-[135px] left-[55px] text-sm'>
           Feels like {weatherData.current.feelslike_c}°
          </p>

          <div className='flex-col'>
          <img
  src={`http:${weatherData.current.condition.icon}`}
  alt='Ícono'
className='w-32 h-24 mt-[15px] mr-[70px]'
/>

<p className='text-witheY text-sm pt-[4px] pr-[45px]'>
  {weatherData.current.condition.text}
</p>

          </div>
        </div>

        <div className='flex justify-between items-end p-[25px] pt-[70px] text-sm'>
          <p className='text-witheY  text-sm'>{weatherData.location.localtime}</p>
          <div>
          <p className='text-witheY text-sm'>IsDay{weatherData.current.is_day}°</p>

            
          </div>
        </div>
      </section>
    )
  );
};

export default TopField;