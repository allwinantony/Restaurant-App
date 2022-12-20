import React, { useEffect } from 'react'
import { useState } from 'react'
import Restaurantcards from './Restaurantcards';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestaurantListAction from '../Actions/restaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';
 

function RestaurantList() {
    //to hold value
    const [allRestaurants,setRestaurants] = useState([]);
    //function call API to get all restaurant list from restaurant.json file
    // const getRestaurants = async()=> {
    //    await fetch('/restaurants.json')
    //     .then((data)=>{
    //         data.json()
    //         .then((result)=> {
    //           setRestaurants(result.restaurants);
    //           // console.log(result);
    //         })
    //         // console.log(data)
    //     })
    // }
    // console.log(allRestaurants);
    const dispatch = useDispatch();
    const result = useSelector(state=>state.restaurantReducer)
    console.log(result);
    const {restaurantList}=result
    useEffect(() => {
        // getRestaurants();
        dispatch(RestaurantListAction());
    },[])
  return (
    <Row>{
      restaurantList.map((item,index)=>(
        // <h1>{item.name}</h1>
        <Col sm={12} md={6} lg={4} xl={3}>
            <Restaurantcards restaurant={item}/>
        </Col>
      ))
      }
    </Row>
  )
}

export default RestaurantList