import React from 'react';
import { useQuery } from '@tanstack/react-query';
import CategoriesCard from './CategoriesCard';
import Loading from '../../../Shared/Loading/Loading';

const Categories = () => {

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://poris-computer-server.vercel.app/brands');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <h2 className='text-3xl text-blue-700 font-semibold text-center m-5'>Product Categories</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10' >
                {
                    categories.map(categori => <CategoriesCard
                        key={categori._id}
                        categori={categori}
                    ></CategoriesCard>)
                }
            </div>
        </div>

    );
};

export default Categories;