import styled from "styled-components";

function Submisions(){
    return(
        <SubmissionsContainer>
        <div className="submissions-heading-wrapper">
            <h2>Here is what others have said</h2>
            <p>Scroll left</p>
        </div>
        </SubmissionsContainer>
    )
}

// styles
const SubmissionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    /* background-color: gainsboro; */
    margin-top: 20px;
    .submissions-heading-wrapper{
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self:  center;
        h2{
            width: 300px;
        }
        p{
            font-size: 20px;
            color: #272727;
        }
    }
`



export default Submisions;