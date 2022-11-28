import React from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ search, handleChange }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search?searchQuery=${search}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <div className="blog-heading text-start py-2 mb-4">About Me</div>
      {/* <form className="form-inline" onSubmit={handleSubmit}>
        <div className="col-12 py-3">
          <input
            type="text"
            value={search}
            className="form-control search-input"
            placeholder="Search blog"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-secondary search-btn">
          <i className="fa fa-search" />
        </button>
      </form> */}
      <div className="text-start">
        <img
          src="/images/Blog.jpg"
          style={{ width: "20rem", marginBottom: "15px" }}
          alt="user"
        ></img>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </div>
    </div>
  );
};

export default Search;
