import React, { useState, useEffect } from 'react';

// components 👉
import Order from './Order';
import { db } from '../Firebase/firebase';
import { useStateValue } from '../State_provider/State_provider';


function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="Orders">
      <h1 className='Orders_title'>Your Orders</h1>
      <div className="Orders_order">
        {orders?.map((order) => (
          <Order order={order}/>
        ))}
      </div>
    </div>
  );
}

export default Orders;