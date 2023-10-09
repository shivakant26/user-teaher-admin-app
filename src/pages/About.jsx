import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../redux-saga/action";
import { Container } from "react-bootstrap";

const About = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state?.crudReducer);

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  return (
    <div>
      <Container>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <div>
            <div className="main-page">
              {
                data?.map((item,index)=>{
                  return(
                    <p className="info" key={index}>{item.title}</p>
                  )
                })
              }
            </div>
          </div>
        </>
      )}
      </Container>
    </div>
  );
};

export default About;
