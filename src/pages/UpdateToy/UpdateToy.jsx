import React from 'react';


const UpdateToy = () => {
  const updateHandelr = event => {
    event.preventDefault()
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const about = form.about.value;

    const updateInfo = {price, quantity, about}

    fetch(`http://localhost:5000/alltoys_one/${id}`)

  }
    return (
        <div>
             <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Update you product
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
          <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Price
              </label>
              <div className="mt-2">
                <input
                  name="price"
                  type="number"
                  autoComplete="email"
                  required
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Quantity
              </label>
              <div className="mt-2">
                <input
                  
                  name="quantity"
                  type="number"
                  autoComplete="email"
                  required
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="about"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Discription
                </label>
                <textarea
                  id="about"
                  name="about"
                  required
                  className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Let the world know who you are"
                  rows={5}
                  cols={60}
                  defaultValue={""}
                />
                <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                  Character Limit: 200
                </p>
              </div>

            

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                update
              </button>
            </div>
          </form>

          
        </div>

   </div>
        </div>
        </div>
    );
};

export default UpdateToy;