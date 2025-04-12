import ordersStore from '../store/ordersStore';

const Cooking = () => {
    const cooking = ordersStore((state) => state.cooking);

    return (
        <div className='main__item'>
            <h1>Готовится</h1>
            <div className="main__item-orders">
                {cooking.map((item, idx) => (
                    <p key={idx}>{item.id}</p>
                ))}
            </div>
        </div>
    );
};

export default Cooking;
