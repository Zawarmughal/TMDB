import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { display } from "@mui/system";

let count = 1;
export default function LoadMore(props) {
  const [clicked, setClicked] = React.useState(false);
  const type = props.type;
  const dispatch = useDispatch();
  let ref = useRef();
  const loader = () => {
    setClicked(true);
  };
  const apiCall = (e) => {
    if (e[0].isIntersecting && clicked) {
      count = count + 1;
      dispatch({
        type: type,
        count: count,
      });
    }
  };
  useEffect(() => {
    const Observer = new IntersectionObserver(apiCall, {
      root: null,
      threshold: 0,
    });
    if (ref.current) Observer.observe(ref.current);
    return () => {
      if (ref.current) Observer.unobserve(ref.current);
    };
  }, [clicked, apiCall]);

  return (
    <>
      <Box ref={ref}></Box>
      <Button
        variant="contained"
        sx={{ width: "100%", my: 2, py: 2 }}
        onClick={loader}
      >
        Load More
      </Button>
    </>
  );
}
