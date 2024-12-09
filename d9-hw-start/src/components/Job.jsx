import { Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToFavouriteAction } from '../redux/actions/index'


const Job = ({ data }) => {
  const dispatch = useDispatch()

    return(

      <Row
        className="mx-0 mt-3 p-3"
        style={{ border: '1px solid #00000033', borderRadius: 4 }}
      >
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={9}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a> <button onClick={() => dispatch(addToFavouriteAction(data))}>Aggiungi ai Preferiti</button>
        </Col>
      </Row>
    );
}

export default Job
