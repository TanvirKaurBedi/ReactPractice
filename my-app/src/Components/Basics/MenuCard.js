import React from "react";
const MenuCard = ({ menuData }) => {

    return (
        <>
            <section className="main-card-container">
                {menuData.map((currentElement) => {
                    const { id, name, category, image, description } = currentElement;
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-Number">{id}</span>
                                        <span className="card-author subtle">{name}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-description subtle">
                                            {description}
                                        </span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} className="card-media"></img>

                                    <span className="card-tag subtle">Order Now</span>
                                </div>
                            </div>

                        </>
                    )
                })}
            </section>
        </>
    );
};
export default MenuCard;