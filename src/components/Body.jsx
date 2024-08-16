import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { all } from "axios";

const Body = () => {
    const [searchText, setsearchText] = useState("")

    const [allRestaurant, setAllRestaurant] = useRestaurant()
    const [filteredRestaurant, setFilteredRestaurant] = useState(allRestaurant)
    const { user, setUser } = useContext(userContext)
    
    useEffect(() => {
        setFilteredRestaurant(allRestaurant)
    }, [allRestaurant])


    const searchRrestaurant = (searchText, restaurants) => {
        const data = restaurants.filter((restaurants) => (
            restaurants.info.name.toLowerCase().includes(searchText.toLowerCase())
        ))
        setFilteredRestaurant(data)
    }

    const online = useOnline()

    if (!online) {
        return <h1>You are offline</h1>
    }

    return (
        (allRestaurant?.length === 0) ? <div className="shimmer-container"><Shimmer /></div> :
            <>
            <form 
            onSubmit={((e) => {
                e.preventDefault()
                searchRrestaurant(searchText, allRestaurant)
            })}
            className="max-w-md mx-auto my-4">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-red-900 sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-red-900 border border-red-900 rounded-lg focus:bg-gray-50 focus:ring-yellow-300 focus:border-yellow-300 " placeholder="Search"
                        value={searchText}
                        onChange={(e) => {
                            setsearchText(e.target.value)
                        }} required />
                    <button type="submit"onClick={() => {searchRrestaurant(searchText, allRestaurant)}} className="text-yellow-300 absolute end-2.5 bottom-2.5 bg-red-900 hover:bg-yellow-300 hover:text-red-900 focus:ring-4 focus:outline-none focus:ring-red-900 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                </div>
            </form>
            <div className="bg-red-800 w-full">
                <div className="p-4 flex justify-center flex-wrap">
                    {filteredRestaurant?.length === 0 ? (
                        <h1>No result found</h1>
                    ) : (
                        filteredRestaurant?.map((restaurant) => (
                            <Card props={restaurant} key={restaurant.info.id} />
                        ))
                    )}
                </div>
            </div>
            </>
    )
}

export default Body;