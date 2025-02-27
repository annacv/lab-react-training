import React, { Component } from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="challenge">
          <h2>IdCard</h2>
          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg" />
        </section>

        <section className="challenge">
          <h2>Greetings</h2>
          <Greetings lang='de'>
            <p className="boxed-text">Hallo Ludwig</p>
          </Greetings>
        </section>

        <section className="challenge">
          <h2>Random</h2>
          <div className="boxed-text"><Random min={1} max={6} /></div>
          <div className="boxed-text"><Random min={1} max={100} /></div>
        </section>

        <section className="challenge">
          <h2>Box Color</h2>
          <div className="boxes-container">
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />
          </div>
        </section>

        <section className="challenge">
          <h2>Credit Card</h2>
          <div className="credit-cards">
            <CreditCard
              type="Visa"
              number="0123456789018845"
              expirationMonth={3}
              expirationYear={2021}
              bank="BNP"
              owner="Maxence Bouret"
              bgColor="#11aa99"
              color="white"
            />
            <CreditCard
              type="Master Card"
              number="0123456789010995"
              expirationMonth={3}
              expirationYear={2021}
              bank="N26"
              owner="Maxence Bouret"
              bgColor="#eeeeee"
              color="#222222"
            />
            <CreditCard
              type="Visa"
              number="0123456789016984"
              expirationMonth={12}
              expirationYear={2019}
              bank="Name of the Bank"
              owner="Firstname Lastname"
              bgColor="#ddbb55"
              color="white"
            />
          </div>
        </section>
        <section className="challenge">
          <h2>Rating</h2>
          <Rating children='0' />
          <Rating children='1.49' />
          <Rating children='1.5' />
          <Rating children='3' />
          <Rating children='4' />
          <Rating children='5' />
        </section>
        <section className="challenge">
          <h2>Driver Card</h2>
          <DriverCard
            name='Travis Kalanick'
            image='https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428'
            children='4.2'
            car={{
              model: 'Toyota Corolla Altis',
              licensePlate: 'CO42DE'
            }}
            className='driver-card'
          />
          <DriverCard
            name='Dara Khosrowshahi'
            image='https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg'
            children='4.9'
            car={{
              model: 'Audi A3',
              licensePlate: 'BE33ER'
            }}
            className='driver-card'
          />
        </section>
        <section className="challenge">
          <h2>Like Button</h2>
          <div className="buttons-container">
            <LikeButton />
            <LikeButton />
          </div>
        </section>
        <section className="challenge"></section>
      </div>
    );
  }
}

export default App;


