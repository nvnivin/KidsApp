import React, { useEffect, useState } from "react";

const Habits = () => {
  const categoryId = 5;
  const url = `https://cdnscript.in/demo/learnhub/wp-json/wp/v2/posts?categories=${categoryId}`;
  const [posts, setPosts] = useState([]); // State to store the fetched posts

  const getPost = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setPosts(data); // Store the fetched posts in state
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  useEffect(() => {
    getPost(); // Fetch data when the component mounts
  }, [1]); // The empty array ensures that this effect runs only once

  return (
    <div className="container">
      <div className="row">
        {posts.map((post) => {
          return (
            <div key={post.id} className="col-lg-3 col-md-6 col-sm-12 mb-4 text-center">
              <div className="card">
                <img className="card-img-top" src={post.jetpack_featured_media_url} width={200} alt={post.title.rendered} />
                <div className="card-body">
                  <h5 className="card-title">{post.title.rendered}</h5>
                  <div className="card-text" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Habits;
