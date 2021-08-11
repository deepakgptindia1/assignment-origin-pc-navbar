import React from 'react'
import SideMenuDetails from './SideMenuDetails'

const SubSideMenu=({name,laptop_name,category, h, w, d, src, cost, emi, last5, last6})=> {
    // console.log(props)
    const renderLi=()=>{
        return name.map((item)=>{
            return (
                <li key={item.name}>
                    {item.name}{
                    item.laptop_name?<SideMenuDetails name={item.laptop_name} category={item.category} h={item.h} w={item.w} d={item.d} src={item.src} cost={item.cost} emi={item.emi}/>:null
                    
                    }
                </li>
            )
        })
    }
    // console.log(renderLi());

    return (
        <>
            <div className={`sub-sidemenu ${last5?`last5`:``} ${last6?`last6`:``}`}>
                <ul>
                    { renderLi() }
                    {/* <li>
                        Gaming Desktop
                       <SideMenuDetails name="EVO15-S (20-Series)" category="Thin and Light" h="0.77" w="14.03" d="9.3" src="https://cdn.originpc.com/img/menu/evo15-s-special-offer.png" cost="2000" emi="48.12"/>
                    </li>
                    <li>
                        Gaming Desktop
                    </li>
                    <li>
                        Gaming Desktop
                    </li> */}
                </ul>
            </div>
        </>
    )
}

export default SubSideMenu
