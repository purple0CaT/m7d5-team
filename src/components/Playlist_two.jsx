import { Row, ListGroup  } from "react-bootstrap";
import { connect } from "react-redux"
import {playlist_two_remove_Action} from "../redux/action/user.js"
import {ImBin2} from "react-icons/im"


const read = state => ({
  Playlisttwo: state.user.playlist2
})

const write = (dispatch) => ({
    removefromplaylisttwo: (obj) => {
        dispatch(playlist_two_remove_Action(obj))
    }
})

const Playlist2 = ({Playlisttwo, removefromplaylisttwo}) => {
    return(
        <>
       <div className="col-12 col-md-9 offset-md-3 mainPage">
        <Row className="mb-3">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <div>TRENDING</div>
            <div>PODCAST</div>
            <div>MOODS AND GENRES</div>
            <div>NEW RELEASES</div>
            <div>DISCOVER</div>
          </div>
        </Row>

        {Playlisttwo.map((L,i) => <Row key={i}>
        <ListGroup horizontal>
          <ListGroup.Item>
            <img src={L.cover} alt="some" style={{height: '100px', width: '100px'}} />
          </ListGroup.Item>
          <ListGroup.Item>{L.title}</ListGroup.Item>
          <ListGroup.Item>{L.nb_tracks}</ListGroup.Item>
          <ListGroup.Item>horizontally!</ListGroup.Item>
          <ListGroup.Item onClick={e => removefromplaylisttwo(L)}> <ImBin2 style={{color:"red"}}/></ListGroup.Item>
        </ListGroup>
      </Row>
      )}
        </div>
        </>
    )
}

export default connect(read, write)(Playlist2);