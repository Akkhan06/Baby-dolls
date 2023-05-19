import React from "react";

const Team = () => {
  return (
    //  <div className="w-full mx-auto">
    //    <div className="mt-20">
    //       <h1 className="text-5xl font-bold text-center border-b-2 pb-9">Out Client say</h1>
    //       <div className="my-7 grid grid-cols-1 md:grid-cols-3 md:w-[1240px] mx-auto">
    //     <div className="card w-96 bg-base-100 shadow-xl">
    //       <figure>
    //         <img
    //           src="https://img.freepik.com/free-photo/close-up-executive-with-white-shirt-blue-suit_1139-135.jpg?w=1380&t=st=1684410425~exp=1684411025~hmac=405b92a9a8528f19d756e31fd2cf1e02dd6684d480e0bbf7f87d0b4fb05a048b"
    //           alt="Shoes"
    //           className="md:h-80"
    //         />
    //       </figure>
    //       <div className="card-body h-32">
    //         <h2 className="card-title">
    //           Name
    //           <div className="badge badge-secondary">NEW</div>
    //         </h2>
    //         <p>If a dog chews shoes whose shoes does he choose?</p>
    //         <div className="card-actions justify-end">
    //           <div className="badge badge-outline">Fashion</div>
    //           <div className="badge badge-outline">Products</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card w-96 bg-base-100 shadow-xl my-3">
    //       <figure>
    //         <img
    //           src="https://img.freepik.com/free-photo/close-up-shot-adorable-dark-skinned-females-with-confident-look-has-curly-hair-ponders-about-something-african-american-woman-has-rest-against-cafe-interior_273609-2383.jpg?w=1380&t=st=1684410354~exp=1684410954~hmac=8374f025d52e1dfeb8c43ef6c84fa36ef2c6d017de25b30f47cece04936cc6a9"
    //           alt="Shoes"
    //           className="md:h-80"
    //         />
    //       </figure>
    //       <div className="card-body h-32">
    //         <h2 className="card-title">
    //           Name
    //           <div className="badge badge-secondary">NEW</div>
    //         </h2>
    //         <p>If a dog chews shoes whose shoes does he choose?</p>
    //         <div className="card-actions justify-end">
    //           <div className="badge badge-outline">Fashion</div>
    //           <div className="badge badge-outline">Products</div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="card w-96 bg-base-100 shadow-xl">
    //       <figure>
    //         <img
    //           src="https://img.freepik.com/free-photo/close-up-portrait-attractive-unshaved-dark-skinned-man-with-afro-hairstyle-smiling-expressing-happiness-while-sitting-park-enjoying-nice-weather-listening-music_176420-19804.jpg?w=1380&t=st=1684410316~exp=1684410916~hmac=2871effde7c87869adab978b4ac91d208318c4fad8d32be42f8cd31895c365b4"
    //           alt="Shoes"
    //           className="md:h-80"
    //         />
    //       </figure>
    //       <div className="card-body h-32">
    //         <h2 className="card-title">
    //           Name
    //           <div className="badge badge-secondary">NEW</div>
    //         </h2>
    //         <p>If a dog chews shoes whose shoes does he choose?</p>
    //         <div className="card-actions justify-end">
    //           <div className="badge badge-outline">Fashion</div>
    //           <div className="badge badge-outline">Products</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   </div>
    //  </div>

    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 text-lg text-center font-normal pb-3">
            Our clients say
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Review of our Products by clients
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Andres Berlin
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Chief Executive Officer
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    The CEO's role in raising a company's corporate IQ is to
                    establish an atmosphere that promotes knowledge sharing and
                    collaboration.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Silene Tokyo
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Product Design Head
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    The emphasis on innovation and technology in our companies
                    has resulted in a few of them establishing global benchmarks
                    in product design and development.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                      alt
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <div className="font-bold text-3xl text-center pb-1">
                    Johnson Stone
                  </div>
                  <p className="text-gray-800 text-sm text-center">
                    Manager Development
                  </p>
                  <p className="text-center text-gray-600 text-base pt-3 font-normal">
                    Our services encompass the assessment and repair of property
                    damage caused by water, fire, smoke, or mold. We can also be
                    a part of the restoration.
                  </p>
                  <div className="w-full flex justify-center pt-5 pb-5">
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-5">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
