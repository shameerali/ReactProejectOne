import React from 'react';
import hoemCss from './HomeComponent.module.css'

const Home = ()=>{
	return(
<div>
<h2>Home componets </h2>
<button className={hoemCss.loginBtn}> Login</button>
<button>LogOut</button>
</div>
		)
}

export default Home;