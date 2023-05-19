import { Card } from "flowbite-react";
import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  return (
    
<div className="md:w-[1240px] mx-auto mt-20">

<Tabs className={''} selectedIndex={selectedTab} onSelect={handleTabSelect}>
<div className="text-center">
    <h1 className="text-5xl font-bold">Category List</h1>
<h1 className="text-gray-500 my-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, iste.</h1>
</div>
      <TabList className={'flex justify-center tabs gap-9 tabs-boxed mb-10 bg-warning font-semibold '}>
        <Tab className="tab text-white" style={{ backgroundColor: selectedTab === 0 ? 'gray' : '' }}>Tab 1</Tab>
        <Tab className="tab text-white" style={{ backgroundColor: selectedTab === 1 ? 'gray' : '' }}>Tab 2</Tab>
        <Tab className="tab text-white" style={{ backgroundColor: selectedTab === 2 ? 'gray' : '' }}>Tab 3</Tab>
      </TabList>

      <TabPanel>
      <div className="grid grid-cols-1 w-11/12 md:w-auto mx-auto  md:grid-cols-3 justify-center gap-6">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686921.jpg?w=1380&t=st=1684396367~exp=1684396967~hmac=1aea70aa84d6fe5efb400583cd1a109b01c70cd53c3d841c6369e6923720f053"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-semibold">
              Price $30
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <Rating
                className="text-warning"
                placeholderRating={3.5}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />{" "}
              3.5
            </p>
            <Link to={'/details'}
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

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686921.jpg?w=1380&t=st=1684396367~exp=1684396967~hmac=1aea70aa84d6fe5efb400583cd1a109b01c70cd53c3d841c6369e6923720f053"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-semibold">
              Price $30
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <Rating
                className="text-warning"
                placeholderRating={3.5}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />{" "}
              3.5
            </p>
            <Link to={'/details'}
              
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

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686921.jpg?w=1380&t=st=1684396367~exp=1684396967~hmac=1aea70aa84d6fe5efb400583cd1a109b01c70cd53c3d841c6369e6923720f053"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-semibold">
              Price $30
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <Rating
                className="text-warning"
                placeholderRating={3.5}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />{" "}
              3.5
            </p>
            <Link to={'/details'}
              
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
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 w-11/12 md:w-auto mx-auto md:grid-cols-3 justify-center gap-6">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686921.jpg?w=1380&t=st=1684396367~exp=1684396967~hmac=1aea70aa84d6fe5efb400583cd1a109b01c70cd53c3d841c6369e6923720f053"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-semibold">
              Price $30
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <Rating
                className="text-warning"
                placeholderRating={3.5}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />{" "}
              3.5
            </p>
            <Link to={'/details'}
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

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686921.jpg?w=1380&t=st=1684396367~exp=1684396967~hmac=1aea70aa84d6fe5efb400583cd1a109b01c70cd53c3d841c6369e6923720f053"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-semibold">
              Price $30
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <Rating
                className="text-warning"
                placeholderRating={3.5}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />{" "}
              3.5
            </p>
            <Link to={'/details'}
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

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686921.jpg?w=1380&t=st=1684396367~exp=1684396967~hmac=1aea70aa84d6fe5efb400583cd1a109b01c70cd53c3d841c6369e6923720f053"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-semibold">
              Price $30
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <Rating
                className="text-warning"
                placeholderRating={3.5}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />{" "}
              3.5
            </p>
            <Link to={'/details'}
              
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
      </TabPanel>
      <TabPanel>
      <div className="grid grid-cols-1 w-11/12 md:w-auto mx-auto  md:grid-cols-3 justify-center gap-6">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686921.jpg?w=1380&t=st=1684396367~exp=1684396967~hmac=1aea70aa84d6fe5efb400583cd1a109b01c70cd53c3d841c6369e6923720f053"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-semibold">
              Price $30
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <Rating
                className="text-warning"
                placeholderRating={3.5}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />{" "}
              3.5
            </p>
            <Link to={'/details'}
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

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686921.jpg?w=1380&t=st=1684396367~exp=1684396967~hmac=1aea70aa84d6fe5efb400583cd1a109b01c70cd53c3d841c6369e6923720f053"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-semibold">
              Price $30
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <Rating
                className="text-warning"
                placeholderRating={3.5}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />{" "}
              3.5
            </p>
            <Link to={'/details'}
              
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

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686921.jpg?w=1380&t=st=1684396367~exp=1684396967~hmac=1aea70aa84d6fe5efb400583cd1a109b01c70cd53c3d841c6369e6923720f053"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 font-semibold">
              Price $30
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <Rating
                className="text-warning"
                placeholderRating={3.5}
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar />}
                fullSymbol={<FaStar />}
              />{" "}
              3.5
            </p>
            <Link to={'/details'}
              
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
      </TabPanel>
    </Tabs>

</div>

  );
};

export default Category;
