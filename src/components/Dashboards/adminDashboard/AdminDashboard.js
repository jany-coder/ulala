import React from 'react';


const AdminDashboard = () => {
    return (
        <>
  <div className="flex flex-col md:flex-row">
    <div className="bg-gray-50 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
      <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
        <ul className="list-reset flex md:flex-row  py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
          <li className="mr-3 ">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
            >
              <i className="fas fa-tasks pr-0 md:pr-3" />
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Tasks
              </span>
            </a>
          </li>
          <li className="mr-3">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
            >
              <i className="fa fa-envelope pr-0 md:pr-3" />
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Messages
              </span>
            </a>
          </li>
          <li className="mr-3">
            <a
              href="#"
              className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-blue-600"
            >
              <i className="fas fa-chart-area pr-0 md:pr-3 text-blue-600" />
              <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:text-white block md:inline-block">
                Analytics
              </span>
            </a>
          </li>
          <li className="mr-3">
            <a
              href="#"
              className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500"
            >
              <i className="fa fa-wallet pr-0 md:pr-3" />
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Payments
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
      <div className="bg-gray-50 pt-3">
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
          <h3 className="font-bold pl-2">Analytics</h3>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/*Metric Card*/}
          <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-green-600">
                  <i className="fa fa-wallet fa-2x fa-inverse" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-600">
                  Total Revenue
                </h5>
                <h3 className="font-bold text-3xl">
                  $3249{" "}
                  <span className="text-green-500">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/*Metric Card*/}
          <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-pink-600">
                  <i className="fas fa-users fa-2x fa-inverse" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-600">
                  Total Users
                </h5>
                <h3 className="font-bold text-3xl">
                  249{" "}
                  <span className="text-pink-500">
                    <i className="fas fa-exchange-alt" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/*Metric Card*/}
          <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-yellow-600">
                  <i className="fas fa-user-plus fa-2x fa-inverse" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-600">New Users</h5>
                <h3 className="font-bold text-3xl">
                  2{" "}
                  <span className="text-yellow-600">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/*Metric Card*/}
          <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-blue-600">
                  <i className="fas fa-server fa-2x fa-inverse" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-600">
                  Server Uptime
                </h5>
                <h3 className="font-bold text-3xl">152 days</h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/*Metric Card*/}
          <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-indigo-600">
                  <i className="fas fa-tasks fa-2x fa-inverse" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-600">
                  To Do List
                </h5>
                <h3 className="font-bold text-3xl">7 tasks</h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
          {/*Metric Card*/}
          <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-red-600">
                  <i className="fas fa-inbox fa-2x fa-inverse" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-600">Issues</h5>
                <h3 className="font-bold text-3xl">
                  3{" "}
                  <span className="text-red-500">
                    <i className="fas fa-caret-up" />
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/*/Metric Card*/}
        </div>
      </div>
      <div className="flex flex-row flex-wrap flex-grow mt-2">
      </div>
    </div>
  </div>
</>

    );
};

export default AdminDashboard;