import React, { useEffect } from 'react'
import Cooking from '../components/cooking'
import Done from '../components/done'
import ordersStore from '../store/ordersStore'

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
