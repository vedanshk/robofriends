import React from "react";
import Robot from "./Robot";
function Robolist({ robots }) {

  
  const renderedRobots = robots.map((robot) => (
    <Robot key={robot.id} robot={robot} />
  ));
  return <div className="flex flex-wrap items-center justify-center">{renderedRobots}</div>;
}

export default Robolist;
