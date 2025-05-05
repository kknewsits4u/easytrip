import { useParams } from 'react-router-dom';

const CityPage = () => {
  
  const { city } = useParams();

  return (
    <div className=' flex w-full min-h-50  items-start justify-center p-8 ' >
      <h1>Welcome to {city}</h1>
    </div>
  );
};

export default CityPage;
