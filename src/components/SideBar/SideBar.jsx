import React, {useState, useEffect} from 'react'
import Logo from '../../assets/images/maranatha_logo.png'
import LinksComponent from './Links/Links.jsx'
import {sideLinks} from '../../constants/index.js'
import {Link, Route, Switch} from 'react-router-dom'
import ContentWrapper from '../ContentWrapper/ContentWrapper.jsx'
import MainCard from '../ContentWrapper/Main/MainCard/MainCard.jsx'
import ProductContentWrapper from '../ProductContentWrapper/ProductContentWrapper'
import Error404 from '../Error404.jsx'

function SideBar() {

	const [userInfo, setUserInfo] = useState({});
	const [productInfo, setProductInfo] = useState({data: [], meta: {}});
	const [lastProductInfo, setLastProductInfo] = useState({});

	async function fetchData (endpoint, setS) {

		const fetchApi = await fetch(endpoint);
		const data = await fetchApi.json();
		setS(data);
	};

	useEffect( e => {

		fetchData('/api/product/', setProductInfo);
		fetchData('/api/user/', setUserInfo);

	}, []);

	useEffect( e => {
		if (productInfo.data.length > 0) {

			fetchData(productInfo.data[productInfo.data.length -1].detail , setLastProductInfo)
		}
	}, [productInfo]);

    return (
		<>
			<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

				<Link className="sidebar-brand d-flex align-items-center justify-content-center w-100 h-auto p-0" to="/" >
					<div className="sidebar-brand-icon">
						<img className="w-50" src={Logo} alt="Digital House"/>
					</div>
				</Link>

				<hr className="sidebar-divider my-0"/>

				<LinksComponent name={sideLinks[0].name} liClass={sideLinks[0].liClass} linkClass={sideLinks[0].linkClass} iconClass={sideLinks[0].iconClass} path={sideLinks[0].path}/>

				<hr className="sidebar-divider"/>

				<div className="sidebar-heading">Actions</div>

				{sideLinks.map((row, i) => {
					if (i === 0) return ''
					
					return 	<LinksComponent name={row.name} liClass={row.liClass} linkClass={row.linkClass} iconClass={row.iconClass} path={row.path} key={row.name + i}/> 
				})}

				<hr className="sidebar-divider d-none d-md-block"/>
			</ul>

			<Switch>
				<Route path="/" exact>
					<ContentWrapper users={userInfo} products={productInfo} lastProduct={lastProductInfo}/>
				</Route>
				<Route path="/last" exact>
					<MainCard/>
				</Route>
				<Route path="/genres" exact>
					<MainCard/>
				</Route>
				<Route path="/products" exact>
					<ProductContentWrapper products={productInfo}/>
				</Route>
				<Route component={Error404} />
			</Switch>
		</>
    )
};

export default SideBar