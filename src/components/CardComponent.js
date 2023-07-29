import React from "react";
import { styled } from "styled-components";

const CardContainer = styled.div`
  width: 500px;
  min-width: 500px;
  border-radius: 16px;
  box-shadow: 0px 10px 8px #999;
  display: flex;
  flex-direction: column;
  margin: 8px;
  background-color: white;
  justify-content: center;

  max-height: 400px;
  overflow-y: auto;
`;

const CardComponentImage = styled.img`
  width: 100%;
`;

const CardButton = styled.button`
  text-align: center;
  width: 200px;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  background-color: #c07848;
  color: white;
  text-decoration: none;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const CardComponent = ({
  item,
  handleDeleteClick = () => {},
  handleCompleteClick = () => {},
  completeCard = false,
}) => {
  return (
    <CardContainer key={item.id}>
      {/* <CardComponentImageContainer> */}
      <CardComponentImage src="https://picsum.photos/id/201/300/200" />
      {/* </CardComponentImageContainer> */}

      <h3
        style={{
          textAlign: "center",
          color: "#c07848",
          fontWeight: "bolder",
          fontSize: "25px",
        }}
      >
        {item?.Title}
      </h3>
      <p style={{ textAlign: "center" }}>{item?.Subtitle}</p>
      <p style={{ textAlign: "center" }}>{item?.Desc}</p>

      <div
        style={{ display: "flex", columnGap: "8px", justifyContent: "center" }}
      >
        <CardButton onClick={() => handleDeleteClick(item?.id)}>X</CardButton>
        {completeCard ? null : (
          <CardButton onClick={() => handleCompleteClick(item?.id)}>
            O
          </CardButton>
        )}
      </div>
    </CardContainer>
  );
};

export default CardComponent;
