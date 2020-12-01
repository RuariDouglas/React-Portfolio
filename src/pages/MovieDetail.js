import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

// ANIMATIONS
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

import ScrollTop from "../components/scrollTop";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  // We use this extract the movie based on the url
  const [movie, setMovie] = useState(null);

  // USEEFFECT
  /* As soon as the component mounts. When we click on a movie, it's to load that movies specific information. So the useEffect is going to run as soon as the component mounts. */

  useEffect(() => {
    //1. Here we find out which movie we are on, we compare the the captured url against the array of movies and filter a match
    //2. Then we update our state.
    //3. Lastly, we tell the useEffect to run everytime movies or url updates
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    /* Because our useEffect runs immediately, we don't want to render the page until we have the data we need to render the components correctly. In this case we need to  identify whch data to render based on the filter function we use above.

    So by Wrapping our components in curly brackets and adding some logic, we can tell te app to render only if 'movie' is true and not null as we set for the default state. > {movie && (...)}
    */
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="Movie" />
          </ImageDisplay>
          <ScrollTop />
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)``;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
    margin: 2rem;
  }
`;

const StyledAward = styled.div`
  padding: 5rem;

  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    height: 0.5rem;
    margin: 1rem 0;
    background-color: #23d997;
  }
  p {
    padding: 2rem 0;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

// AWARD COMPONENT
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

export default MovieDetail;
