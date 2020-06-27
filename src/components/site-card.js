import React from "react"

const SiteCard = ({ src, name, desc }) => {
  return (
    <div className="flex justify-center max-w-full mb-10 mx-10">
      <div className="bg-white w-80 overflow-hidden flex flex-col flex-grow flex-shrink text-center shadow-xl hover:shadow-2xl">
        <a
          className="flex flex-wrap no-underline hover:no-underline"
          href="https://brittneypostma.github.io/robofriends-hooks-rtk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full">
            <img
              src={src}
              alt="Robofriends Site"
              className="h-64 w-full pb-6 object-cover object-center"
            />

            <h2 className="w-full font-bold text-xl text-dark-purple px-6 flex justify-center">
              {name}
            </h2>
            <p className="text-gray-800 font-serif text-base px-6 my-3">
              {desc}
            </p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SiteCard
