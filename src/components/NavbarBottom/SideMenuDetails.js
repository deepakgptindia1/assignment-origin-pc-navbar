import React from 'react'

function SubSubSideMenu({name , category, h, w, d, src, cost , emi, govt }) {
    return (
        <>  
            {
                govt?(
                    <div className="sub-sidemenu-details">
                        <div className="details-top">
                            <h2>{name}</h2>
                            
                            
                        </div>
                        <img src={src} alt="laptop"/>
                        <div className="details-bottom">
                            <h2>{cost}</h2>
                            
                            <div className="details-bottom-button">
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                ):(
                    <div className="sub-sidemenu-details">
                        <div className="details-top">
                            <h2>{name}</h2>
                            <h2>{category}</h2>
                            <p>{h}"(H) x {w}"(W)x {d}"(D)</p>
                        </div>
                        <img src={src} alt="laptop"/>
                        <div className="details-bottom">
                            <h2>Strating at: ${cost}</h2>
                            <h2>or as low as ${emi}/month<i className="fas fa-info-circle"></i></h2>
                            <div className="details-bottom-button">
                                <button className="button-red">CONFIGURE</button>
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </>
    )
}

export default SubSubSideMenu
