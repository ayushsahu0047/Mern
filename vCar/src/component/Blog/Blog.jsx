import React from 'react';

const Blog = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="italic">
            <span className="list-disc">My Gallery</span>
          </h1>
        </div>
      </div>

      {/* *************image slide*********** */}
      <div className="container mx-auto box mt-8">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ol className="carousel-indicators">
            {/* ... Your existing indicators */}
          </ol>

          <div className="carousel-inner" id="gallery" role="listbox">
            {/* ... Your existing carousel items */}
          </div>

          {/* Left and right controls */}
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      {/* ******************* end image slide************* */}
    </>
  );
};

export default Blog;
