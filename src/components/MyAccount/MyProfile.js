import React from 'react';

export default function MyProfile() {
  const [language, setLanguage] = React.useState('English');
  const languages = ['Arabic', 'English'];
  return (
    <div className="rounded-lg overflow-hidden shadow-2xl">
      <div className="">
        <div className="px-3 py-3 flex  text-gray-900">
          <h1 className="text-2xl font-semibold"> General Information</h1>
          <button className="px-4 py-1 ml-auto font-semibold bg-red-600 text-gray-100 rounded">
            Edit
          </button>
        </div>
        <hr />
        <div className=" ">
          <div className="py-4 px-3 flex  text-lg  ">
            <h1 className=" font-semibold w-2/4">Full Name</h1>
            <h1 className="">John Doe</h1>
          </div>

          <div className="py-4 px-3 flex  text-lg  bg-red-100">
            <h1 className=" font-semibold w-2/4">Phone Number</h1>
            <h1 className="">+8792156875</h1>
          </div>
          <div className="py-4 px-3 flex  text-lg  ">
            <h1 className=" font-semibold w-2/4">Date of Birth</h1>
            <h1 className="">18-8-2018</h1>
          </div>
        </div>
      </div>
      <hr className="mt-2 mb-2" />
      <div className="">
        <div className="px-3 py-3 flex  text-gray-900">
          <h1 className="text-2xl font-semibold"> Security</h1>
          <button className="py-1 px-4  ml-auto font-semibold bg-red-600 text-gray-100 rounded">
            Edit
          </button>
        </div>
        <hr />
        <div className="">
          <div className="py-4 px-3 flex  text-lg ">
            <h1 className=" font-semibold w-2/4">Email Address</h1>
            <h1 className="">John@Doe.com</h1>
          </div>
          <div className="py-4 px-3 flex  text-lg  bg-red-100">
            <h1 className=" font-semibold w-2/4">Password</h1>
            <h1 className="">**********</h1>
          </div>
        </div>
      </div>
      <hr className="mt-5 mb-1" />
      <div className="">
        <div className="px-3 py-3 text-gray-900">
          <h1 className="text-2xl font-semibold"> Language Preferences</h1>
        </div>
        <hr />
        <div className="">
          <div className="py-3 px-3 flex items-center text-lg   ">
            <h1 className=" font-semibold w-2/4">Preffered Language</h1>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="form-select text-lg "
            >
              {languages.map((language, i) => {
                return <option key={i}>{language}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}