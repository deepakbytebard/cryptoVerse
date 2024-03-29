import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from ".";

import { useGetCryptosQuery } from "../Services/cryptoApi";
import Loader from "./Loader";

const { Title } = Typography;
const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <h2 className="home-title">Top 10 Cryptocurrencies in the World</h2>
        <h2 className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </h2>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <h2 className="home-title">Latest Crypto News</h2>
        <h2 className="show-more">
          <Link to="/news">Show More</Link>
        </h2>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
