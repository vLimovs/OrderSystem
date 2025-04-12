import React, { useEffect } from 'react'
import ordersStore from '../store/ordersStore'
import Done from '../components/done';
import Cooking from '../components/cooking';

const Monitoring = () => {
    const cooking = ordersStore((state) => state.cooking);

    return (
        <main className="main">
            <Cooking />
            <Done />
        </main>
    );
}

export default Monitoring
