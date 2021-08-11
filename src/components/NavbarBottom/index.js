import React,{useState} from 'react'
import './index.css';
import SubSideMenu from './SubSideMenu';
import SideMenuDetails from './SideMenuDetails'

function NavbarBottom() {
    const [show, setShow] =useState(false);
    const arr1=[
        {name:"COMPARE ALL"},
        {name:"CHRONOS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/new-chronos.png", cost:"2000", emi:"48.12"},
        {name:"NEURON",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/neuron.png", cost:"2000", emi:"48.12"},
        {name:"MILLENNIUM",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/millennium-5000d.png", cost:"2000", emi:"48.12"},
        {name:"GENISIS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/genesis-7000-series.png", cost:"2000", emi:"48.12"}];
    
        const arr2=[
            {name:"COMPARE ALL"},
            {name:"S-CLASS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/new-chronos.png", cost:"2000", emi:"48.12"},
            {name:"S-CLASS Cam Link Pro",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/neuron.png", cost:"2000", emi:"48.12"},
            {name:"M-CLASS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/millennium-5000d.png", cost:"2000", emi:"48.12"},
            {name:"L-CLASS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/genesis-7000-series.png", cost:"2000", emi:"48.12"},
            {name:"L-CLASS-STUDIO",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/genesis-7000-series.png", cost:"2000", emi:"48.12"},
            {name:"R-CLASS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/genesis-7000-series.png", cost:"2000", emi:"48.12"}

        ];

    const onClickHandler=(event)=>{
        event.preventDefault();
        event.stopPropagation();
        setShow(!show);
    }
    
    return (
        <>
            <div class="navbar-bottom">
                <div class="navbar-bottom-container">
                    <ul class="container-left">
                        <li className="hamburger" onClick={(e)=>onClickHandler(e)}><i class="fas fa-bars"></i></li>
                        <li class="brand-logo">
                            <img src="https://cdn.originpc.com/img/origin-logo.svg" alt="brand"/>
                        </li>
                        <ul className={`${show?`show`:``} menu-item`} >
                            <li ><div className="icon">DESKTOPS <i class=" fas fa-sort-down"></i></div>
                                <div class="dropdown">
                                    <ul>
                                        <li>
                                            Gaming Desktop
                                            <i class="fas fa-caret-right"></i>
                                            <SubSideMenu name={arr1} />
                                        </li>
                                        <li>
                                            Workstation Desktop
                                            <i class="fas fa-caret-right"></i>

                                            <SubSideMenu name={arr2} />
                                        </li>
                                        <li className="govt">
                                            Government & Corporate
                                            <i class="fas fa-caret-right"></i>

                                            <SideMenuDetails name="EVO15-S (20-Series)" category="Thin and Light" h="0.77" w="14.03" d="9.3" src="https://cdn.originpc.com/img/menu/business-2.png" cost="2000" emi="48.12"/>

                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li ><div className="icon">LAPTOPS<i class=" fas fa-sort-down"></i></div>
                                <div class="dropdown">
                                    <ul>
                                        <li>
                                            Gaming Desktop
                                            <i class="fas fa-caret-right"></i>

                                            <SubSideMenu name={arr1} />
                                        </li>
                                        <li>
                                            Workstation Desktop
                                            <i class="fas fa-caret-right"></i>

                                            <SubSideMenu name={arr2} />
                                        </li>
                                        <li className="govt">
                                            Government & Corporate
                                            <i class="fas fa-caret-right"></i>

                                            <SideMenuDetails name="EVO15-S (20-Series)" category="Thin and Light" h="0.77" w="14.03" d="9.3" src="https://cdn.originpc.com/img/menu/business-2.png" cost="2000" emi="48.12"/>

                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li >ACCESSORIES</li>
                            <li className="highlight">SPECIAL OFFERS</li>
                            <li ><div className="icon">REVIEWS<i class=" fas fa-sort-down"></i></div>
                                <div class="dropdown">
                                    <ul>
                                        <li>
                                            Gaming Desktop
                                        </li>
                                        <li>
                                            Workstation Desktop
                                        </li>
                                        <li className="govt">
                                            Government & Corporate

                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li ><div className="icon">MORE<i class=" fas fa-sort-down"></i></div>
                            <div class="dropdown">
                                <ul>
                                    <li>
                                        Gaming Desktop
                                    </li>
                                    <li>
                                        Workstation Desktop
                                    </li>
                                    <li>
                                        Workstation Desktop
                                    </li>
                                    <li>
                                        Workstation Desktop
                                    </li>
                                    <li className="govt">
                                        Government & Corporate
                                        <i class="fas fa-caret-right"></i>
                                        
                                        <SubSideMenu last5 name={[{name:" Gaming Desktop"},{name:" Gaming Desktop"}]}/>    
                                    </li>
                                    <li className="govt">
                                        Government & Corporate
                                        <i class="fas fa-caret-right"></i>

                                        <SubSideMenu last6 name={[{name:" Gaming Desktop"},{name:" Gaming Desktop"}]}/>    
                                    </li>
                                </ul>
                            </div>
                        </li>
                        </ul>

                    </ul>
                    <ul class="container-right">
                        <li><i class="fas fa-search"></i></li>
                        <li><span className="signIn">Sign In</span><i class="fas fa-user"></i></li>
                        <li><i class="fas fa-shopping-cart"></i></li>
                    </ul>
                    
                </div>
                
            </div>
            
        </>
    )
}

export default NavbarBottom
