import ReactECharts from 'echarts-for-react';
import { EChartOption } from 'echarts';
import CommonCard from '../CommonCard';
import './index.css';

const TatalUsers: React.FC = () => {
  const option: EChartOption = {
    grid: { left: 0, right: 0, top: 0, bottom: 0 },
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: {
      type: 'category',
      show: false,
    },
    series: [
      {
        type: 'bar',
        stack: '总量',
        data: [100],
        barWidth: 10,
        itemStyle: {
          color: '#45c946',
        },
      },
      {
        type: 'bar',
        stack: '总量',
        data: [250],
        itemStyle: {
          color: '#eee',
        },
      },
      {
        type: 'custom',
        stack: '总量',
        data: [100],
        renderItem: (params: any, api: any) => {
          const value = api.value(0);
          const endPoint = api.coord([value, 0]);
          return {
            type: 'group',
            position: endPoint,
            children: [
              {
                type: 'path',
                shape: {
                  d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                  x: -5,
                  y: -20,
                  width: 10,
                  height: 10,
                  layout: 'cover',
                },
                style: {
                  fill: '#45c946',
                },
              },
              {
                type: 'path',
                shape: {
                  d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                  x: -5,
                  y: 10,
                  width: 10,
                  height: 10,
                  layout: 'cover',
                },
                style: {
                  fill: '#45c946',
                },
              },
            ],
          };
        },
      },
    ],
  };

  const footer = () => (
    <div className="total-users-footer">
      <span>日同比</span>
      <span className="emphasis">8.73%</span>
      <div className="increase" />
      <span className="month">月同比</span>
      <span className="emphasis">35.91%</span>
      <div className="decrease" />
    </div>
  );

  return (
    <CommonCard
      title="累计用户数"
      value="1,087,503"
      chart={<ReactECharts option={option} />}
      footer={footer()}
    />
  );
};

export default TatalUsers;
