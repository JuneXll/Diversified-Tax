import React from 'react';
import { Container, Button} from 'react-bootstrap';
import homeCover from '../../images/homeCover.png'

const paddingTop = {
    paddingTop: 100
}

// const textAndImage = {
//     position: 'relative',
//     width: '100',
//     height: 'auto',
//     maxHeight: '300',
//     display: 'flex',
//     overflow: 'hidden',
//     objectFit: 'cover',
//     background: '#003054',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }

//   const textAndImageBox = {
//     position: 'relative',
//     width: '100',
//     height: 'auto',
//     objectFit: 'cover'
//   }

//   const textAndImageImage = {
//     width: '100',
//     maxHeight: '400',
//     height: 'auto',
//     background: 'yellow',
//     objectFit: 'cover'
//   }

//   const textAndImageBox2 = {
//     position: 'absolute',
//     left: 'calc(10% - 20px)',
//     width: '35',
//     padding: '0',
//     height: 'auto',
//     background: ''
//   }
  
//   const coverText = {
//     color: 'white',
//     letterSpacing: '5',
//     fontFamily: 'Bebas Neue, cursive',
//     lineSpacing: '3',
//   }
    
    const jumbotronCover = {
    backgroundImage: `url(${homeCover})`,
    backgroundSize: 'cover'
  }


const Home = () => {
    return (
        <div style={paddingTop}>
            <div>
                <div className="jumbotron jumbotron-fluid" style={jumbotronCover}>
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;


{/* <Card className="bg-dark text-white">
                        <Card.Img src={homeCover} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                    </Card> */}