import React,{useContext} from 'react';
import HeroSection from './components/HeroSection'
import {AppContext} from './context/productcontext';
import {useProductContext} from './context/productcontext';


const About = () =>{
	//const {myName} = useContext(AppContext);
const {myName} = useProductContext();

	const data = {
		name:"About My Store"
	}


	return(<>
		{myName}
<HeroSection myData = {data}/>

		</>)
}

export default About;
