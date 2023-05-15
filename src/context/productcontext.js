// import {createContext,useContext} from 'react';
// import Productapi from '../api/productapi'

// const AppContext = createContext();


// we can import through link also no need to create folder
// const API = Productapi;


// const AppProvider = ({children}) =>{
// 	return <AppContext.Provider value={{myName:"Bhavin"}}>{children}</AppContext.Provider>
// };


// //custom hook to create a global

// const useProductContext = () =>{
// 	return useContext(AppContext);
// }


// export {AppProvider,AppContext,useProductContext};


// import {createContext,useContext,useEffect} from 'react';
// import Productapi from '../api/productapi'
// import axios from 'axios';
// const AppContext = createContext();


// //we can import through link also no need to create folder
// const API = "https://api.pujakaitem.com/api/products";
// // const Ap = Productapi;
// // console.log(Ap)

// const AppProvider = ({children}) =>{
// 	const getProducts = async(url) =>{
// 		const res = await axios.get(url);
// 		console.log("file product context js and line number 39",res)
// 		const products = await res.data;
// 		console.log("product context.js line number 41",products)
// 	}


// 	useEffect(() =>{
// 		getProducts(API);
// 	},[]);
// 	return <AppContext.Provider value={{myName:"Bhavin"}}>{children}</AppContext.Provider>
// };


// //custom hook to create a global

// const useProductContext = () =>{
// 	return useContext(AppContext);
// }


// export {AppProvider,AppContext,useProductContext};









// import {createContext,useContext,useEffect,useReducer} from 'react';
// import Productapi from '../api/productapi'
// import axios from 'axios';
// import reducer from '../reducer/productReducer';



// const AppContext = createContext();

// //we can import through link also no need to create folder
// const API = "https://api.pujakaitem.com/api/products";
// // const Ap = Productapi;
// // console.log(Ap)

// const AppProvider = ({children}) =>{
// 	//now we are creating reducer to store and get the data
// 	const initialState = {
// 		isLoading:false,
// 		isError:false,
// 		products:[],
// 		featureProducts:[], 
// 	}

// 	const [state,dispatch] = useReducer(reducer,initialState);


// 	const getProducts = async(url) =>{
// 		dispatch({type:"SET_LOADING"})
// 		try{
// 			const res = await axios.get(url);
// 			console.log("file product context js and line number 39",res)
// 			const products = await res.data;
// 			console.log("product context.js line number 41",products)
// 			dispatch({type:"SET_API_DATA",payload:products});
// 		}catch(error){
// 			dispatch({type:"API_ERROR"})
// 		}
// 	}


// 	useEffect(() =>{
// 		getProducts(API);
// 	},[]);
// 	return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
// };


// //custom hook to create a global

// const useProductContext = () =>{
// 	return useContext(AppContext);
// }


// export {AppProvider,AppContext,useProductContext};













import {createContext,useContext,useEffect,useReducer} from 'react';
import Productapi from '../api/productapi'
import axios from 'axios';
import productReducer from '../reducer/productReducer';



const AppContext = createContext();

//we can import through link also no need to create folder
const API = "https://api.pujakaitem.com/api/products";
// const Ap = Productapi;
// console.log(Ap)

const AppProvider = ({children}) =>{
	//now we are creating reducer to store and get the data
	const initialState = {
		isLoading:false,
		isError:false,
		products:[],
		featureProducts:[], 
		isSingleLoading:false,
		singleProduct:{},
	}

	const [state,dispatch] = useReducer(productReducer,initialState);


	const getProducts = async(url) =>{
		dispatch({type:"SET_LOADING"})
		try{
			const res = await axios.get(url);
			console.log("file product context js and line number 39",res)
			const products = await res.data;
			console.log("product context.js line number 41",products)
			dispatch({type:"SET_API_DATA",payload:products});
		}catch(error){
			dispatch({type:"API_ERROR"})
		}
	}







// my second api call for 2nd product


const getSingleProduct = async(url)=>{
	dispatch({type:"SET_SINGLE_LOADING"})
	try{
		const res = await axios.get(url);
		const singleProduct = await res.data;
		dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});



	}catch(error){
		dispatch({type:"SET_SINGLE_ERROR"})

	}
}












	useEffect(() =>{
		getProducts(API);
	},[]);
	return <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>
};


//custom hook to create a global

const useProductContext = () =>{
	return useContext(AppContext);
}


export {AppProvider,AppContext,useProductContext};
