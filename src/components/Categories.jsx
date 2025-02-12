const Categories = () => {
    const categories = [
        {
            title: "Gourmet Burgers",
            description: "Savor our handcrafted gourmet burgers made with premium ingredients, offering a perfect blend of flavors and textures."
        },
        {
            title: "Authentic Pizzas",
            description: "Indulge in our authentic, wood-fired pizzas with a crispy crust, rich sauces, and fresh toppings for a truly delicious experience."
        },
        {
            title: "Refreshing Beverages",
            description: "Quench your thirst with our wide selection of refreshing beverages, including smoothies, fresh juices, and specialty drinks."
        },
        {
            title: "Exotic Desserts",
            description: "Treat yourself to our mouthwatering desserts, crafted with the finest ingredients to satisfy your sweet cravings."
        },
        {
            title: "Healthy Salads",
            description: "Enjoy our fresh and nutritious salads, packed with vibrant greens, crunchy toppings, and flavorful dressings."
        },
        {
            title: "Seafood Specialties",
            description: "Experience the finest seafood dishes, prepared with fresh ingredients and expertly seasoned to perfection."
        }
    ];

    return (
        <div>
            <h2 className='text-orange-600 dark:text-white font-bold text-3xl md:text-5xl text-center mt-20 mb-5 md:mb-16'><div className="divider dark:divider-neutral">Categories</div></h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-10'>
                {
                    categories.map((category, index) =>
                        <div key={index} className='grid justify-center text-center border-2 rounded-xl p-10 hover:border-orange-600 transition-all duration-500 cursor-pointer group'>
                            <h1 className='text-orange-600 text-2xl font-bold'>{category.title}</h1>
                            <p className='text-gray-700 dark:text-base-100'>{category.description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;