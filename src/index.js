import React, { useState } from "react";
import ReactDOM from "react-dom";

import './index.css';
import Card from './Card';
import ChangeThemeBox from './ChangeThemeBox';

const cardsContent = [
  {
    title: 'GET STARTED IN 5 MINUTES',
    description: 'Once approved, you can use your virtual card right away. You’ll receive physical cards in 3-5 business days. Easy to start, easy to scale.',
    image: 'https://static.visiondirect.info/media/wysiwyg/Fastbanners.jpg'
  },
  {
    title: 'NO PERSONAL GUARANTEE',
    description: 'The only corporate card that doesn\'t require personal guarantees, credit scores, or security deposits from founders.',
    image: 'https://cdn.crowdfundinsider.com/wp-content/uploads/2018/06/Brex-1.jpg'
  },
  {
    title: 'ADVANCED FRAUD PROTECTION',
    description: 'You’re never liable for unauthorized transactions. We keep your account secure with 24/7 fraud monitoring, ID Theft and Purchase Protection.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZzt6PmXr-p2b1ZjWUlotpeADe0boYEPT18FURE9SfO05Xw9iD'
  }
]

const App = () => (
  <section>
    <ChangeThemeBox />
    <div className="CardListing">
      {cardsContent.map(c =>
        <Card title={c.title} description={c.description} image={c.image} />
      )}
    </div>
  </section>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
