import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { StatsContainer, Loading, ChartsContainer } from "../../components";

const Stats = () => {
  const { showStats, isLoading, monthlyApplication } = useAppContext();

  useEffect(() => {
    showStats();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      <ChartsContainer />
    </>
  );
};

export default Stats;
