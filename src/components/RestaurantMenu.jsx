import { Link, useParams } from 'react-router-dom'
import { Restaurant_Img_Url } from '../constants'
import "../../index.css"
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';



function RestaurantMenu() {
  let { resId } = useParams();
  const [restaurant, recommendedDishes] = useRestaurantMenu(resId);
  
  const dispatch = useDispatch()
  
  return (
  <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

    <div href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 my-4">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`${Restaurant_Img_Url}${restaurant?.cloudinaryImageId}`} alt=""/>
      <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{restaurant?.name}</h5>
          <p className="mb-3 font-normal text-gray-700 ">{restaurant?.cuisines}</p>
          <p className="mb-3 font-normal text-gray-700 ">{restaurant?.avgRating} | {restaurant?.sla?.slaString} | {restaurant?.costForTwoMessage}</p>
      </div>
    </div>

      <div className="container flex flex-wrap justify-between">
        {recommendedDishes?.map((elem, index) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow m-4" key={index}>
          <a href="#">
              <img className="rounded-t-lg" src={`${Restaurant_Img_Url}${elem?.card?.info?.imageId}`} alt="" />
          </a>
          <div className="p-5">
              <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{elem?.card?.info?.name}</h5>
                  <h3>₹{elem?.card?.info?.price}</h3>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {elem?.card?.info?.ratings?.aggregatedRating?.rating}
                  </p>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{elem?.card?.info?.description}</p>
              <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => dispatch(addItem(elem))}
              >
                  ADD
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </Link>
          </div>
      </div>
        ))}
      </div>

      
          
  </div>
  )
}

export default RestaurantMenu