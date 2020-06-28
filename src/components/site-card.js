import React from "react"

const SiteCard = ({ src, name, desc }) => {
  return (
    <div className="flex justify-center max-w-full mb-10 mx-10">
      <div className="card">
        <a
          className="flex flex-wrap no-underline hover:no-underline"
          href="https://brittneypostma.github.io/robofriends-hooks-rtk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full">
            <img
              src={src}
              alt={name}
              className="h-64 w-full object-cover object-top shadow-md"
            />
            <article className="p-6">
              <h2 className="w-full font-bold text-xl text-dark-purple">
                {name}
              </h2>
              <p className="text-gray-800 font-serif text-base">{desc}</p>
            </article>
          </div>
        </a>
      </div>
    </div>
  )
}

export default SiteCard
