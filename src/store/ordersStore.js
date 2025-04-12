import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useOrdersStore = create(
    persist(
        (set) => ({
            cooking: [],
            done: [],
            setCooking: (order) => {
                set((state) => ({
                    cooking: [...state.cooking, order],
                }));
            },
            setDone: (order) => {
                set((state) => ({
                    done: [...state.done, order],
                }));
            },
        }),
        {
            name: 'orders-storage',
            onRehydrateStorage: () => (state) => {
            },
        }
    )
);

if (typeof window !== 'undefined') {
    window.addEventListener('storage', (event) => {
        if (event.key === 'orders-storage') {
            const newState = JSON.parse(event.newValue)?.state;
            if (newState) {
                useOrdersStore.setState(newState);
            }
        }
    });
}

export default useOrdersStore;
