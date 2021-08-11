import React,{useState} from 'react'
import './index.css';
import SubSideMenu from './SubSideMenu';
import SideMenuDetails from './SideMenuDetails'

function NavbarBottom() {
    const [show, setShow] =useState(false);
    const deskArr1=[
        {name:"COMPARE ALL"},
        {name:"CHRONOS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/new-chronos.png", cost:"2000", emi:"48.12"},
        {name:"NEURON",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/neuron.png", cost:"2000", emi:"48.12"},
        {name:"MILLENNIUM",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/millennium-5000d.png", cost:"2000", emi:"48.12"},
        {name:"GENISIS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/genesis-7000-series.png", cost:"2000", emi:"48.12"}];
    
        const deskArr2=[
            {name:"COMPARE ALL"},
            {name:"S-CLASS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/s-class-menu.png", cost:"2000", emi:"48.12"},
            {name:"S-CLASS Cam Link Pro",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/s-class-cam-link-pro.png", cost:"2000", emi:"48.12"},
            {name:"M-CLASS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/m-class.png", cost:"2000", emi:"48.12"},
            {name:"L-CLASS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/l-class-5000-7000-series.png", cost:"2000", emi:"48.12"},
            {name:"L-CLASS-STUDIO",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/l-class-studio-2.png", cost:"2000", emi:"48.12"},
            {name:"R-CLASS",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/r-class.png", cost:"2000", emi:"48.12"}

        ];

        const lapArr1=[
            {name:"COMPARE ALL"},
            {name:"EVO15-S (20-Series)",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/evo15-s-special-offer.png", cost:"2000", emi:"48.12"},
            {name:"EVO15-S (30-Series)",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/new-eon17-x.png", cost:"2000", emi:"48.12"},
            {name:"EVO17-S (30-Series)",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/evo15-s-special-offer.png", cost:"2000", emi:"48.12"},
            {name:"EON17-X (20-Series)",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/new-eon17-x.png", cost:"2000", emi:"48.12"},
            {name:"EON17-X (30-Series)",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/evo15-s-special-offer.png", cost:"2000", emi:"48.12"}
            

        ];

        const lapArr2=[
            {name:"COMPARE ALL"},
            {name:"NT-15i",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/nt-15i.png", cost:"2000", emi:"48.12"},
            {name:"NT-15 (20-Series)",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/nt-15-special-offer.png", cost:"2000", emi:"48.12"},
            {name:"NT-15 (30-Series)",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/nt-15i.png", cost:"2000", emi:"48.12"},
            {name:"NT-17 (30-Series)",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/nt-15-special-offer.png", cost:"2000", emi:"48.12"},
            {name:"Ns-17 (20-Series)",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/nt-15i.png", cost:"2000", emi:"48.12"},
            {name:"Ns-17 (30-Series)",laptop_name:"EVO15-S (20-Series)", category:"Thin and Light", h:"0.77", w:"14.03", d:"9.3", src:"https://cdn.originpc.com/img/menu/nt-15-special-offer.png", cost:"2000", emi:"48.12"}

            

        ];

    const onClickHandler=(event)=>{
        event.preventDefault();
        event.stopPropagation();
        setShow(!show);
    }
    
    return (
        <>
            <div className="navbar-bottom">
                <div className="navbar-bottom-container">
                    <ul className="container-left">
                        <li className="hamburger" onClick={(e)=>onClickHandler(e)}><i class="fas fa-bars"></i></li>
                        <li className="brand-logo">
                            <img src="https://cdn.originpc.com/img/origin-logo.svg" alt="brand"/>
                        </li>
                        <ul className={`${show?`show`:``} menu-item`} >
                            <li ><div className="icon">DESKTOPS <i className=" fas fa-sort-down"></i></div>
                                <div class="dropdown">
                                    <ul>
                                        <li>
                                            Gaming Desktop
                                            <i className="fas fa-caret-right"></i>
                                            <SubSideMenu name={deskArr1} />
                                        </li>
                                        <li>
                                            Workstation Desktop
                                            <i className="fas fa-caret-right"></i>

                                            <SubSideMenu name={deskArr2} />
                                        </li>
                                        <li className="govt">
                                            Government & Corporate
                                            <i className="fas fa-caret-right"></i>

                                            <SideMenuDetails govt name="Government & Corporate Business Development" src="https://cdn.originpc.com/img/menu/business-2.png" cost="Learn About ORIGIN PC Professional Workstations and Contact the Dedicated ORIGIN PC Government and Corporate Sales Team."/>

                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li ><div className="icon">LAPTOPS<i className=" fas fa-sort-down"></i></div>
                                <div class="dropdown">
                                    <ul>
                                        <li>
                                            Gaming Laptop
                                            <i className="fas fa-caret-right"></i>

                                            <SubSideMenu name={lapArr1} />
                                        </li>
                                        <li>
                                            Workstation Laptop
                                            <i className="fas fa-caret-right"></i>

                                            <SubSideMenu name={lapArr2} />
                                        </li>
                                        <li className="govt">
                                            Government & Corporate
                                            <i className="fas fa-caret-right"></i>

                                            <SideMenuDetails govt name="Government & Corporate Business Development" src="https://cdn.originpc.com/img/menu/business-2.png" cost="Learn About ORIGIN PC Professional Workstations and Contact the Dedicated ORIGIN PC Government and Corporate Sales Team."/>

                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li >ACCESSORIES</li>
                            <li className=" highlight">SPECIAL OFFERS</li>
                            <li ><div className="icon">REVIEWS<i className=" fas fa-sort-down"></i></div>
                                <div className="dropdown">
                                    <ul>
                                        <li>
                                            News
                                        </li>
                                        <li>
                                            Testimonials
                                        </li>
                                        
                                    </ul>
                                </div>
                            </li>
                            <li ><div className="icon">MORE<i className=" fas fa-sort-down"></i></div>
                            <div className="dropdown">
                                <ul>
                                    <li>
                                        Custom Design
                                    </li>
                                    <li>
                                        PCs for Creators
                                    </li>
                                    <li>
                                        Support
                                    </li>
                                    <li>
                                        Blog
                                    </li>
                                    <li className="govt">
                                        Company
                                        <i className="fas fa-caret-right"></i>
                                        
                                        <SubSideMenu last5 name={[{name:" About"},{name:"Contacts"},{name:"Careers"}]}/>    
                                    </li>
                                    <li className="govt">
                                        Community
                                        <i className="fas fa-caret-right"></i>

                                        <SubSideMenu last6 name={[{name:"Affiliates"},{name:"Blog"},{name:"ORIGINPCFamily"},{name:"Twitch Prime"}]}/>    
                                    </li>
                                </ul>
                            </div>
                        </li>
                        </ul>

                    </ul>
                    <ul className="container-right">
                        <li><i className="fas fa-search"></i></li>
                        <li><span className="signIn">Sign In</span><i className="fas fa-user"></i></li>
                        <li><i className="fas fa-shopping-cart"></i></li>
                    </ul>
                    
                </div>
                
            </div>
            
        </>
    )
}

export default NavbarBottom


// asdfasdfasdfasdfasdfasdfasdf