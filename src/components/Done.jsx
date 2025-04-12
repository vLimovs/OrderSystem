import ordersStore from '../store/ordersStore';

const Done = () => {
    const done = ordersStore((state) => state.done);

    return (
        <div className='main__item'>
            <h1>Готово</h1>
            <div className="main__item-orders">
                {done.map((item, idx) => (
                    <p key={idx}>{item.id}</p>
                ))}
            </div>
        </div>
    );
};

export default Done;
