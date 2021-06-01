import ReactECharts from 'echarts-for-react';
import CommonCard from '../CommonCard';

const TotalOrders: React.FC = () => {
  const option = {
    xAxis: {
      type: 'category',
      show: false,
      boundaryGap: false,
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        type: 'line',
        data: [
          620,
          432,
          220,
          534,
          790,
          430,
          220,
          320,
          532,
          320,
          834,
          690,
          530,
          220,
          620,
        ],
        areaStyle: {
          color: 'purple',
        },
        lineStyle: {
          width: 0,
        },
        itemStyle: {
          opacity: 0,
        },
        smooth: true,
      },
    ],
    grid: { top: 0, right: 0, bottom: 0, left: 0 },
  };

  const footer = () => (
    <>
      <span>昨日订单量</span>
      <span className="emphasis">2,000,000</span>
    </>
  );

  return (
    <CommonCard
      title="累计订单量"
      value="2,152,347"
      chart={<ReactECharts option={option} />}
      footer={footer()}
    />
  );
};

export default TotalOrders;
