import React from "react";
import { useAppContext } from "../context/appContext";
import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from "react-icons/fa";

import StatsItem from "./StatsItem";
import Wrapper from "../assets/wrappers/StatsContainer";

const StatsContainer = () => {
  const { stats } = useAppContext();

  const defaultStats = [
    {
      title: "pending application",
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bcg: "#fcefc7",
    },
    {
      title: "interview sheduled",
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffaaaa",
    },
  ];
  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatsItem ket={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default StatsContainer;
