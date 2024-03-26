import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import customerReviews from '../data/review'; 

function HomeMainSection() {
    const [randomReviews, setRandomReviews] = useState([]);

    useEffect(() => {
        const randomReviews = getRandomReviews(2);
        setRandomReviews(randomReviews);
    }, []);

    function getRandomReviews(count) {
        const shuffled = customerReviews.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    return (
        <div className="home-main-section">
            <section>
                <h2>About Us</h2>
                <p>
                    Welcome to our online store! Learn more about our story and commitment to your satisfaction. We are passionate about providing exceptional customer service.
                </p>
                <Link to="/products">
                    <button>Shop Now</button>
                </Link>
            </section>
            <section>
                <h2>Reviews from Customers</h2>
                {randomReviews.map((review, index) => (
                    <div key={index}>
                        <p>{review.customerName}</p>
                        <p>{review.reviewContent}</p>
                        <div>{"★".repeat(review.stars)}</div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default HomeMainSection;
