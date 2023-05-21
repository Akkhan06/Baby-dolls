import React, { useEffect } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SubCard = ({x}) => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS in the component
  }, []);
    const {selername, _id, discription, productName, price, rating, email, category, quantity, image} =x
    return (
        <div data-aos="fade-up">
             <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg h-72 md:h-96 mx-auto"
              src={image}
              alt=""
            />
          </a>
          <div class="p-5 border-t">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {productName}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-semibold">
              Price ${price}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <Rating
                className="text-warning"
                placeholderRating={rating}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />{rating}
              
            </p>
            <Link to={`/details/${_id}`}
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        </div>
    );
};

export default SubCard;