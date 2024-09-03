import React, { useState } from 'react';
import img1 from '../asset/productImages/vegetables.jpg';
import img2 from '../asset/productImages/fruits.jpg';
import img3 from '../asset/productImages/egg.jpg';
import img4 from '../asset/productImages/Chicken.jpg';

const MarketPrice = () => {
  const [vegetableData, setVegetableData] = useState({ name: '', city: '', date: '', price: null });
  const [fruitData, setFruitData] = useState({ name: '', city: '', date: '', price: null });
  const [eggData, setEggData] = useState({ city: '', date: '', price: null });
  const [chickenData, setChickenData] = useState({ city: '', date: '', price: null });

  const fetchPrice = async (endpoint, data, setData) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (result.success) {
        setData(prevState => ({ ...prevState, price: result.data }));
      } else {
        setData(prevState => ({ ...prevState, price: 'Price not found' }));
      }
    } catch (error) {
      console.error('Error fetching price:', error);
      setData(prevState => ({ ...prevState, price: 'Error fetching price' }));
    }
  };

  const handleGetVegetablePrice = () => {
    fetchPrice('http://localhost:5200/api/v1/user/vegetables/price', { pname: vegetableData.name, city: vegetableData.city, dated: vegetableData.date }, setVegetableData);
  };

  const handleGetFruitPrice = () => {
    fetchPrice('http://localhost:5200/api/v1/user/fruit/price', { fname: fruitData.name, city: fruitData.city, dated: fruitData.date }, setFruitData);
  };

  const handleGetEggPrice = () => {
    fetchPrice('http://localhost:5200/api/v1/user/eggs/price', { city: eggData.city, dated: eggData.date }, setEggData);
  };

  const handleGetChickenPrice = () => {
    fetchPrice('http://localhost:5200/api/v1/user/chicken/price', { city: chickenData.city, dated: chickenData.date }, setChickenData);
  };

  return (
    <div className='flex flex-wrap bg-green-50 ml-[10%] w-[80%] justify-center items-center font-mono'>
      <div className='w-[420px] bg-rose-500 m-8 rounded-lg'>
        <div id="img" className='m-2 h-[250px] object-cover rounded-lg overflow-hidden'>
          <img className='rounded-lg' src={img1} alt="Vegetables" />
        </div>
        <div id="title" className='w-full mt-6 text-center text-[25px] font-semibold'>
          Vegetables
        </div>
        <div id="inp" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <input
            className='w-[90%] h-full rounded-lg p-4'
            placeholder='Enter City'
            type="text"
            value={vegetableData.city}
            onChange={(e) => setVegetableData({ ...vegetableData, city: e.target.value })}
          />
        </div>
        <div id="inp" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <input
            className='w-[90%] h-full rounded-lg p-4'
            placeholder='Enter vegetable name'
            type="text"
            value={vegetableData.name}
            onChange={(e) => setVegetableData({ ...vegetableData, name: e.target.value })}
          />
        </div>
        <div id="inp" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <input
            className='w-[90%] h-full rounded-lg p-4'
            placeholder='YYYY-MM-DD'
            type="text"
            value={vegetableData.date}
            onChange={(e) => setVegetableData({ ...vegetableData, date: e.target.value })}
          />
        </div>
        <div id="btn" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <button
            className='w-[50%] text-center bg-lime-500 rounded-lg h-[35px]'
            onClick={handleGetVegetablePrice}
          >
            Get Price
          </button>
        </div>
        <div className=''>
          <hr className='w-[96%] m-[2%] mt-4 mb-4 divide-black' />
        </div>
        <div id="price" className='w-full mb-4'>
          <h2 className='w-full text-center font-medium'>
            {vegetableData.price ? `Rs ${vegetableData.price} per Kg` : 'Price will be shown here'}
          </h2>
        </div>
      </div>

      <div className='w-[420px]  bg-rose-500 rounded-lg m-6'>
        <div id="img" className='m-2 h-[250px] object-cover overflow-hidden rounded-lg'>
          <img src={img2} alt="Fruits" />
        </div>
        <div id="title" className='w-full text-center text-[25px] font-semibold'>
          Fruits
        </div>
        <div id="inp" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <input
            className='w-[90%] h-full rounded-lg p-4'
            placeholder='Enter City'
            type="text"
            value={fruitData.city}
            onChange={(e) => setFruitData({ ...fruitData, city: e.target.value })}
          />
        </div>
        <div id="inp" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <input
            className='w-[90%] h-full rounded-lg p-4'
            placeholder='Enter Fruit name'
            type="text"
            value={fruitData.name}
            onChange={(e) => setFruitData({ ...fruitData, name: e.target.value })}
          />
        </div>
        <div id="inp" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <input
            className='w-[90%] h-full rounded-lg p-4'
            placeholder='YYYY-MM-DD'
            type="text"
            value={fruitData.date}
            onChange={(e) => setFruitData({ ...fruitData, date: e.target.value })}
          />
        </div>
        <div id="btn" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <button
            className='w-[50%] text-center bg-lime-500 rounded-lg h-[35px]'
            onClick={handleGetFruitPrice}
          >
            Get Price
          </button>
        </div>
        <hr className='w-[96%] m-[2%] mt-4 mb-4' />
        <div id="price" className='w-full mb-4'>
          <h2 className='w-full text-center font-medium'>
            {fruitData.price ? `Rs ${fruitData.price} per Kg` : 'Price will be shown here'}
          </h2>
        </div>
      </div>

      <div className='w-[420px] bg-rose-500 rounded-lg m-6'>
        <div id="img" className='m-2 h-[250px] object-cover rounded-lg overflow-hidden'>
          <img src={img3} alt="Eggs" />
        </div>
        <div id="title" className='w-full text-center text-[25px] font-semibold'>
          Eggs
        </div>
        <div id="inp" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <input
            className='w-[90%] h-full rounded-lg p-4'
            placeholder='Enter City'
            type="text"
            value={eggData.city}
            onChange={(e) => setEggData({ ...eggData, city: e.target.value })}
          />
        </div>
        <div id="inp" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <input
            className='w-[90%] h-full rounded-lg p-4'
            placeholder='YYYY-MM-DD'
            type="text"
            value={eggData.date}
            onChange={(e) => setEggData({ ...eggData, date: e.target.value })}
          />
        </div>
        <div id="btn" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <button
            className='w-[50%] text-center bg-lime-500 rounded-lg h-[35px]'
            onClick={handleGetEggPrice}
          >
            Get Price
          </button>
        </div>
        <hr className='w-[96%] m-[2%] mt-4 mb-4' />
        <div id="price" className='w-full mb-4'>
          <h2 className='w-full text-center font-medium'>
            {eggData.price ? `Rs ${eggData.price} per dozen` : 'Price will be shown here'}
          </h2>
        </div>
      </div>

      <div className='w-[420px] bg-rose-500 rounded-lg m-6'>
        <div id="img" className='m-2 h-[250px] object-cover rounded-lg overflow-hidden'>
          <img src={img4} alt="Chicken" />
        </div>
        <div id="title" className='w-full text-center text-[25px] font-semibold'>
          Chicken
        </div>
        <div id="inp" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <input
            className='w-[90%] h-full rounded-lg p-4'
            placeholder='Enter City'
            type="text"
            value={chickenData.city}
            onChange={(e) => setChickenData({ ...chickenData, city: e.target.value })}
          />
        </div>
        <div id="inp" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <input
            className='w-[90%] h-full rounded-lg p-4'
            placeholder='YYYY-MM-DD'
            type="text"
            value={chickenData.date}
            onChange={(e) => setChickenData({ ...chickenData, date: e.target.value })}
          />
        </div>
        <div id="btn" className='w-full text-center rounded-lg h-[35px] mt-2'>
          <button
            className='w-[50%] text-center bg-lime-500 rounded-lg h-[35px]'
            onClick={handleGetChickenPrice}
          >
            Get Price
          </button>
        </div>
        <hr className='w-[96%] m-[2%] mt-4 mb-4' />
        <div id="price" className='w-full mb-4'>
          <h2 className='w-full text-center font-medium'>
            {chickenData.price ? `Rs ${chickenData.price} per Kg` : 'Price will be shown here'}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MarketPrice;
