import React from 'react'
import Logo from '../../assets/images/logo-DH.png'
import LinksComponent from './Links/Links.jsx'
import {sideLinks} from '../../constants/index.js'
import {Link, Route, Switch} from 'react-router-dom'
import ContentWrapper from '../ContentWrapper/ContentWrapper.jsx'
import TableMain from '../ContentWrapper/Main/TableMain/TableMain.jsx'
import MainRight from '../ContentWrapper/Main/MainRight/MainRight.jsx'
import MainLeft from '../ContentWrapper/Main/MainLeft/MainLeft.jsx'
import Error404 from '../Error404.jsx'

function SideBar() {

    return (
		<>
			<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

				<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/" >
					<div className="sidebar-brand-icon">
						<img className="w-100" src={Logo} alt="Digital House"/>
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
					<ContentWrapper/>
				</Route>
				<Route path="/last" exact>
					<MainLeft/>
				</Route>
				<Route path="/genres" exact>
					<MainRight/>
				</Route>
				<Route path="/movies" exact>
					<TableMain/>
				</Route>
				<Route component={Error404} />
			</Switch>
		</>
    )
};

export default SideBar