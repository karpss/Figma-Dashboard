/* eslint-disable */
import React from 'react';

const Cards = () => {
  return (
    <div className="main">
    <div className="main_overview">
      <div className="row">
      <div className="overview_card">
        <div className="overview_card-info">Overview one</div>
        <div className="overview_card-icon">Card</div>
        <input type="text" placeholder="Search..."/>
      </div>
      <div className="overview_card">
        <div className="overview_card-info">Overview three</div>
        <div className="overview_card-icon">Card</div>
        <button>ADD NEW SITE</button>
      </div>
      </div>
      <div className="overview_card">
        <div className="overview_card-info">Overview</div>
        <div className="overview_card-icon">Card</div>
      </div>
    </div>

    <div className="main_cards">
      <div className="card">Card1</div>
      <div className="card">Card2</div>
     
    </div>
  </div>
  )
}

export default Cards;