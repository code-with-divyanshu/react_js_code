import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/code-with-divyanshu`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <>
      <div className="bg-gray-500 text-white text-3xl p-4 text-center m-4">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Profile" width={300} />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(
    `https://api.github.com/users/code-with-divyanshu`
  );
  return response.json();
};
