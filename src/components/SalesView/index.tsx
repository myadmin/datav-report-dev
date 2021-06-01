import { useState } from 'react';
import { Card, Radio, DatePicker } from 'antd';
import ReactECharts from 'echarts-for-react';
import moment from 'moment';
import locale from 'antd/es/date-picker/locale/zh_CN';
import './index.css';

const tabList = [
  {
    key: '1',
    tab: '销售额',
  },
  {
    key: '2',
    tab: '访问量',
  },
];

const SalesView = () => {
  const [active, setActive] = useState('1');
  const rankData = [
    {
      no: 1,
      name: '麦当劳',
      money: '332,234',
    },
    {
      no: 2,
      name: '麦当劳',
      money: '332,234',
    },
    {
      no: 3,
      name: '麦当劳',
      money: '332,234',
    },
    {
      no: 4,
      name: '麦当劳',
      money: '332,234',
    },
    {
      no: 5,
      name: '麦当劳',
      money: '332,234',
    },
    {
      no: 6,
      name: '麦当劳',
      money: '332,234',
    },
    {
      no: 7,
      name: '麦当劳',
      money: '332,234',
    },
    {
      no: 8,
      name: '麦当劳',
      money: '332,234',
    },
    {
      no: 9,
      name: '麦当劳',
      money: '332,234',
    },
  ];

  const barData =
    active === '1'
      ? [200, 250, 300, 350, 250, 200, 250, 300, 350, 250, 300, 250]
      : [110, 120, 90, 220, 175, 212, 192, 95, 88, 120, 250, 310];

  const option = {
    title: {
      text: '年度销售业绩数据',
      textStyle: {
        fontSize: 12,
        color: '#666',
      },
      left: 25,
      top: 20,
    },
    xAxis: {
      type: 'category',
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      axisTick: {
        alignWithLabel: true,
        lineStyle: {
          color: '#999',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#999',
        },
      },
      axisLabel: {
        color: '#333',
      },
    },
    yAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: 'dotted',
          color: '#eee',
        },
      },
    },
    series: [
      {
        type: 'bar',
        barWidth: '35%',
        data: barData,
      },
    ],
    color: ['#3398DB'],
    grid: { top: 70, right: 60, bottom: 50, left: 60 },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      borderWidth: 0,
      textStyle: {
        color: '#fff',
      },
      axisPointer: {
        type: 'shadow',
        label: {
          color: 'red',
        },
        shadowStyle: {
          color: 'rgba(0, 0, 0, .2)',
        },
      },
      formatter: (params: any) => {
        const { name, marker, value } = params[0];
        return `${name} <br /> ${marker} sales: ${value}`;
      },
    },
  };

  const radioGroup = () => (
    <div className="menu-right">
      <Radio.Group defaultValue={'a'} buttonStyle="solid">
        <Radio.Button value="a">今日</Radio.Button>
        <Radio.Button value="b">本周</Radio.Button>
        <Radio.Button value="c">本月</Radio.Button>
        <Radio.Button value="d">本年</Radio.Button>
      </Radio.Group>
      <DatePicker.RangePicker
        locale={locale}
        mode={undefined}
        separator="至"
        placeholder={['开始日期', '结束日期']}
        ranges={{
          最近一周: [moment(), moment().endOf('week')],
          最近一个月: [moment().startOf('month'), moment().endOf('month')],
          最近三个月: [
            moment().subtract(2, 'month').startOf('month'),
            moment().endOf('month'),
          ],
        }}
      />
    </div>
  );

  return (
    <div className="sales-view">
      <Card
        style={{ width: '100%' }}
        hoverable
        tabList={tabList}
        activeTabKey={active}
        tabBarExtraContent={radioGroup()}
        headStyle={{ padding: '0px 30px' }}
        bodyStyle={{ padding: '0 0 20px 0' }}
        onTabChange={(key: any) => setActive(key)}
      >
        <div className="sales-view-chart-wrapper">
          <ReactECharts option={option} />
          <div className="sales-view-list">
            <div className="sales-view-title">排行榜</div>
            <div className="list-item-wrapper">
              {rankData.map((item) => (
                <div className="list-item" key={item.no}>
                  <div
                    className={
                      item.no <= 3 ? 'list-item-no top-no' : 'list-item-no'
                    }
                  >
                    {item.no}
                  </div>
                  <div className="list-item-name">{item.name}</div>
                  <div className="list-item-money">{item.money}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SalesView;
