import CommonCard from '../CommonCard';
import './index.css';

const TotalSales = () => {
  const chart = () => (
    <div className="compare-wrapper">
      <div className="compare">
        <span>日同比</span>
        <span className="emphasis">7.33%</span>
        <div className="increase"></div>
      </div>
      <div className="compare">
        <span>月同比</span>
        <span className="emphasis">7.33%</span>
        <div className="decrease"></div>
      </div>
    </div>
  );

  const footer = () => (
    <>
      <span>昨日销售额</span>
      <span className="emphasis">￥30,000,000</span>
    </>
  );

  return (
    <CommonCard
      title="累计销售额"
      value="¥ 37,072,334"
      chart={chart()}
      footer={footer()}
    />
  );
};

export default TotalSales;
