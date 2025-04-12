import React from 'react'
import Done from '../components/Done';
import Cooking from '../components/Cooking';
import { Link } from 'react-router';

const Monitoring = () => {
    return (
        <>
        <main className="main">
            <Cooking />
            <Done />
        </main>
        <Link to={'/admin'}>admin</Link>
        </>
    );
}

export default Monitoring
