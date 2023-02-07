import styled from "styled-components";
import { useState } from "react";




function Attribution() {

// functions

const [showBadge, setShowBadge] = useState(false);
console.log(showBadge)

  return (
    <AtrributionContainer>
      <svg
        width="40"
        height="40"
        viewBox="0 0 30 30"
        fill="none"
        id="icon"
        onClick={()=>setShowBadge(!showBadge)}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.5957 12.0803C19.5957 12.8722 19.3945 13.5638 18.9929 14.1544C18.6618 14.6506 18.1069 15.1884 17.3267 15.7677C16.8777 16.0751 16.5819 16.3644 16.4404 16.6362C16.2623 16.9672 16.1744 17.4631 16.1744 18.125H13.6745C13.6745 17.1209 13.7813 16.3883 13.9941 15.9275C14.2419 15.3719 14.7796 14.8105 15.6066 14.2434C15.9971 13.9478 16.2806 13.6467 16.4579 13.3395C16.6703 12.9967 16.7772 12.607 16.7772 12.1696C16.7772 11.4725 16.5698 10.9529 16.1565 10.6097C15.8262 10.3619 15.4239 10.2379 14.9512 10.2379C14.1832 10.2379 13.6276 10.4921 13.2851 11.0001C13.0369 11.378 12.9124 11.8626 12.9124 12.4532V12.4711H10.2545C10.2545 10.9229 10.7443 9.75335 11.7247 8.96141C12.552 8.30032 13.5747 7.96882 14.7914 7.96882C15.8555 7.96882 16.789 8.17589 17.5921 8.58925C18.9282 9.27497 19.5957 10.4391 19.5957 12.0803ZM27.5 15C27.5 21.9035 21.9035 27.5 15 27.5C8.09646 27.5 2.5 21.9035 2.5 15C2.5 8.09639 8.09646 2.5 15 2.5C21.9035 2.5 27.5 8.09639 27.5 15ZM25 15C25 9.48594 20.514 5 15 5C9.48601 5 5 9.48594 5 15C5 20.514 9.48601 25 15 25C20.514 25 25 20.514 25 15ZM14.9999 19.0625C14.137 19.0625 13.4374 19.762 13.4374 20.625C13.4374 21.488 14.137 22.1875 14.9999 22.1875C15.8629 22.1875 16.5624 21.488 16.5624 20.625C16.5624 19.762 15.8629 19.0625 14.9999 19.0625Z"
          fill="black"
        />
      </svg>

      <div className="content-attribution"
      style={{display:showBadge?"block":"none"}}
      >
        <p>
          This is a simple project built for fun by{" "}
          <a href="http://"> @hydedenz</a> and
          <a href="http://"> @tobiideaplpha</a>
          frontend technologies used are <a href="http://"> ReactJs</a>, <a href="http://"> framer-motion</a>and <a href="http://"> styled components</a> link to the github repository is <a href="http://"> here</a>, say NO TO SHEGE 2023, lets have fun, learn more about copyright policy <a href="http://"> here</a>. T for Tenks
        </p>
      </div>
    </AtrributionContainer>
  );
}

const AtrributionContainer = styled.div`
  /* width: 400px; */
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: right;
  #icon {
    display: block;
    align-self: center;
  }
  .content-attribution {
    padding: 20px;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #e8e8e8;
    p {
      font-size: 16px;
      font-weight: 200;
      line-height: 1.7;
    }
  }
`;

export default Attribution;
