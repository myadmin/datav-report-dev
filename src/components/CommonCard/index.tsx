import './index.css';

interface CommonCardType {
  title: string;
  value: string;
  chart: React.ReactChild;
  footer: React.ReactChild;
}

function CommonCard({ title, value, chart, footer }: CommonCardType) {
  return (
    <div className="common-card">
      <div className="title">{title}</div>
      <div className="value">{value}</div>
      <div className="chart">{chart}</div>
      <div className="line" />
      <div className="total">{footer}</div>
    </div>
  );
}

export default CommonCard;
