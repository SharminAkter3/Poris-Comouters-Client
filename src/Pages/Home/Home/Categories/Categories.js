// import React, { useEffect, useState } from 'react';
// import CategoriesCard from './CategoriesCard';

// const Categories = () => {
//     const [categories, setCategories] = useState([]);
//     useEffect(() => {
//         fetch('categories.json')
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 setCategories(data)
//             })
//     }, [])

//     return (
//         <div>
//             <div>
//                 <h2 className='text-3xl text-blue-700 font-semibold text-center m-5'>Product Categories</h2>
//             </div>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10' >
//                 {
//                     categories.map(category => <CategoriesCard
//                         key={category._id}
//                         category={category}
//                     ></CategoriesCard>)
//                 }
//             </div>
//         </div>

//     );
// };

// export default Categories;