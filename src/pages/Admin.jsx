import React, { useState, useEffect } from 'react';
import ordersStore from '../store/ordersStore';

const Admin = () => {
    const [newId, setNewId] = useState('');
    const cooking = ordersStore((state) => state.cooking);
    const done = ordersStore((state) => state.done);
    const setCooking = ordersStore((state) => state.setCooking);
    const setDone = ordersStore((state) => state.setDone);
    const removeCooking = (id) => {
        ordersStore.setState((state) => ({
            cooking: state.cooking.filter((order) => order.id !== id),
        }));
    };
    const removeDone = (id) => {
        ordersStore.setState((state) => ({
            done: state.done.filter((order) => order.id !== id),
        }));
    };
    const moveToDone = (order) => {
        setDone(order);
        removeCooking(order.id);
    };

    return (
        <div className='admin' style={{ padding: '20px' }}>
            <h2>Добавить заказ</h2>

            <div className='admin__neworder' style={{ marginBottom: '20px' }}>
                <input
                    placeholder="ID"
                    value={newId}
                    onChange={(e) => setNewId(e.target.value)}
                />
                <button onClick={() => setCooking({ id: newId })}>Добавить</button>
            </div>

            <h3>Готовится</h3>
            <ul className='admin__cooking'>
                {cooking.length === 0 && <li>Нет заказов в готовке</li>}
                {cooking.map((order) => (
                    <li key={order.id}>
                        №{order.id}
                        <button onClick={() => moveToDone(order)}>✅ Готово</button>
                        <button onClick={() => removeCooking(order.id)}>🗑 Удалить</button>
                    </li>
                ))}
            </ul>

            <h3>Готово</h3>
            <ul className='admin__done'>
                {done.length === 0 && <li>Нет готовых заказов</li>}
                {done.map((order) => (
                    <li key={order.id}>№{order.id}
                    <button onClick={() => removeDone(order.id)}>🗑 Удалить</button></li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;
