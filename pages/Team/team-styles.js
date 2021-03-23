import styled from "styled-components";

export const screen={
    xs: "576px",
    sm:"768px",
    md: "992px",
    lg: "1199px",
  };

export const Container = styled.div`
  display:block;
  justify-content:center;
  align-items:center;
`;

export const DisplayGrid = styled.div`
    padding:1rem;
    display: grid;
    width:97%;
    overflow-x: hidden;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap:2rem;
    @media (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding:.8rem;
    }
    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        padding: .5rem;
    }
`;
export const Profile=styled.div`
    display:flex;
`;
export const Card=styled.span`
    display:flex;
    width: fit-content;
    height: fit-content;
    max-width:315px;
    //border: 3px solid #102E46;
`;
export const Social=styled.span`
   display:flex;
   margin-left:.6rem;
   flex-direction:column;
   align-self:flex-end;
   font-size:1.4rem;
   color:dark-blue;
`;
export const Heading=styled.div`
    font-size:3rem; 
    color:#102E46;
    padding-bottom:2rem;
    text-align:center;
    font-weight:bold;
    font-family:san-serif;
`;
export const Details=styled.div`
    color:grey;
    font-size:1.1rem;
    display:flex;
    flex-direction:column;
    align-self:left;
    width:100%;
    font-family:roboto;
    @media (max-width: 576px) {
      width:100%; 
    }
`;
export const Name=styled.p`
font-weight:bold;
color: #102E46;
margin-block-start: 1em;
margin-block-end: 0em;
font-size:20px;
@media (max-width: 576px){
font-size:17px;}
`;
export const Job=styled.p`
margin-block-start: 0em;
margin-block-end: 0em;
color: #102E46;
font-size:15px;
@media (max-width: 576px){
font-size:15px;}
`;
export const LineB=styled.div`
    height:9.9rem;
    background:"#0000CD";
    width:"3px" ;
    marginTop:".6rem";
    marginLeft:".6rem"; 
    @media (max-width: 576px) {
        height:7rem;
    }
`;
export const Img=styled.div`
    -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0);
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0);
    border: 3px solid #102E46;
    position: relative;
`;

export const DescriptionContent=styled.p`
    font-size:1.25rem;
    margin-top:0.15rem;
    display:flex;
    justify-content:center;
`;


export const Description=styled.span`
    position: absolute;
    opacity:60%;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.6);
    font-family: "Quicksand" ,sans-serif;
    color:#ffffff;
    font-weight:bold;
    display:flex;
    flex-direction: column;
    justify-content:center;
    backdrop-filter:blur(3px);
    opacity:0;
    transition: opacity 0.75s;
    
    p${DescriptionContent}{
        transform: translateY(30px);
        transition: transform 0.75s;
    }
    
    :hover{
        opacity:1;

        p${DescriptionContent}{
            transform: translateY(0px);
        }
    }
`;