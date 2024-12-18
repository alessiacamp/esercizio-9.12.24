import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Favourite = () => {
  const favourite = useSelector((state) => state.favourite);

  return (
    <div>
      {favourite.map((data, index) => (
        <Row
          key={index}
          className="mx-0 mt-3 p-3"
          style={{ border: '1px solid #00000033', borderRadius: 4 }}
        >
          <Col xs={3}>
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
          </Col>
          <Col xs={9}>
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Favourite;

