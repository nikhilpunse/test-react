import React from 'react'

const Card = (props) => {
  return (
    <div className=" w-[250px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-6 mx-4 ">
        <a href="#">
            <img className="rounded-t-lg" src={props.imgsrc} alt=""/>
        </a>
        <div className="p-2">
            <a href="#">
                <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            </a>
            
            <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center border-2 border-blue-700  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
    </div>
  )
}

export default Card