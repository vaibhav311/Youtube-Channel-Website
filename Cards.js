import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my VIDEOS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/indo.jpg'
              text='INDO PAK BORDER | INDIA TO PAKISTAN | Close to India-Pakistan Border'
              path='/services'
              
            />
            <CardItem
              src='images/sidhu.jpg'
              text='I MET SIDHU MOOSE WALA  '
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/srm.jpg'
              text='SRM CAMPUS TOUR || KTR CAMPUS'
              path='/services'
            />
            <CardItem
              src='images/lounge.jpg'
              text='Vlogging in Premium Lounge GONE WRONG'
              path='/products'
            />
            <CardItem
              src='images/thar.jpg'
              text='Day-Out With New MAHINDRA THAR '
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
