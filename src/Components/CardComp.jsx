import styled from "styled-components";
import FrogHead from "../resources/frog-head.png"


function Card(){
    return(
        <CardContainer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorum quisquam atque esse similique numquam distinctio, voluptatum eaque neque debitis!</p>
        <div className="card-identity">
            <img src={FrogHead} alt="this is the type of shege you are facing" className="type-shege" />
            <h4 className="username">Taylor swift</h4>
        </div>
        </CardContainer>
    )
}


// component styles

const CardContainer = styled.div`
    width: 350px;
    float: left;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 20px;
    .card-identity{
        display: flex;
        margin-top: 20px;
        width: 60%;
        align-content: center;
        align-items:center;
        justify-content: space-between;
        img{
            width: 30px;
        }
        h4{
            font-size: small;
        }
    }
`

export default Card;