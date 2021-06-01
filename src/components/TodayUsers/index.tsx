import ReactECharts from 'echarts-for-react';
import CommonCard from '../CommonCard';

const TodayUsers: React.FC = () => {
  const option = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderWidth: 0,
      textStyle: {
        color: '#fff',
      },
      formatter: (params: any) => {
        const { name, marker, value } = params[0];
        return `${name} <br /> ${marker} 直接访问: ${value}`;
      },
    },
    xAxis: {
      type: 'category',
      data: [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
      ],
      show: false,
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        type: 'bar',
        data: [
          410,
          82,
          200,
          334,
          390,
          330,
          220,
          150,
          82,
          200,
          134,
          290,
          330,
          150,
        ],
        barWidth: '60%',
      },
    ],
    grid: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  };

  const footer = () => (
    <>
      <span>退货率 </span>
      <span className="emphasis">5.14%</span>
    </>
  );

  return (
    <CommonCard
      title="今日交易用户数"
      value="81,014"
      chart={<ReactECharts option={option} />}
      footer={footer()}
    />
  );
};

export default TodayUsers;
