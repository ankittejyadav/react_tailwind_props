import React from "react";

function Card({ username = "AY", post = "NA" }) {
  //   console.log(props);
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="rounded"
          src="https://i.ytimg.com/vi/ZyNVApR2BwU/hqdefault.jpg"
          alt=""
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">“Hi there”</p>
          </blockquote>
          <figcaption>
            <div>{username}</div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
