import { Card, Row, Col } from 'antd';
import TotalSales from '../TotalSales';
import TotalOrders from '../TotalOrders';
import TotalUsers from '../TotalUsers';
import TodayUsers from '../TodayUsers';

const index = () => {
  return (
    <Row gutter={20}>
      <Col span={6}>
        <Card hoverable bodyStyle={{ padding: 20 }}>
          <TotalSales />
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable bodyStyle={{ padding: 20 }}>
          <TotalOrders />
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable bodyStyle={{ padding: 20 }}>
          <TodayUsers />
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable bodyStyle={{ padding: 20 }}>
          <TotalUsers />
        </Card>
      </Col>
    </Row>
  );
};

export default index;
