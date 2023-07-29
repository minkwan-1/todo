import React, { forwardRef } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo, completeTodo } from "../redux/todosSlice";
import { logo } from "../images";
import CardComponent from "../components/CardComponent";

// image area
const ImageWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  height: 1000px;
  position: relative;
`;

const Image = styled.div`
  height: 85%;
  width: 100%;
  background-image: url("https://kormedi.com/wp-content/uploads/2021/10/211025_02_01-580x410.jpg");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const OverlayTitle = styled.p`
  position: absolute;
  color: white;
  top: 40%;
  left: 8%;
  font-size: 50px;
  font-weight: bolder;
`;

const OverlaySubtitle = styled.p`
  position: absolute;
  color: white;
  top: 50%;
  left: 8%;
  font-size: 50px;
  font-weight: bolder;
`;
// add list area
const Wrapper = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  height: 1000px;
  padding: 0px 12px;
`;

const SectionTitle = styled.h1`
  font-weight: bolder;
  font-size: 70px;
  margin: 0;
`;

const AddTaskInput = styled.input`
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const AddTaskButton = styled.button`
  padding: 20px 30px;
  background-color: #c07848;
  font-weight: bolder;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 100px;
  cursor: pointer;
  width: 40%;
  &:hover {
    opacity: 0.7;
  }
`;

// recent area
const RecentWrapper = styled.div`
  background-color: #f1e3d9;
`;

const TodoArea = styled.div`
  flex: 1;
  padding: 20px;
`;

const TodoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  /* padding: 15px; */
`;

const TodoTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  border-bottom: 6px solid #c07848;
`;

const TodoSubtitle = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TodoDescription = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const TodoImageArea = styled.div`
  flex: 1;
`;

const RecentTodoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const RecentTodoButton = styled.button`
  padding: 10px 20px;
  background-color: #c07848;
  font-weight: bolder;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
  width: 40%;
  &:hover {
    opacity: 0.7;
  }
`;

const HomePage = forwardRef((props, ref) => {
  const inputArray = ["Title", "Subtitle", "Desc"];
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.todos);
  const incompleteTodos = todo.filter((item) => item.isDone === false);
  const completedTodos = todo.filter((item) => item.isDone === true);

  const [inputValue, setInputValue] = useState({
    Title: "",
    Subtitle: "",
    Desc: "",
    isDone: false,
    id: Date.now(),
  });
  const handleInputValue = (event) => {
    const { value, name } = event?.target;
    setInputValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleAddClick = () => {
    dispatch(addTodo(inputValue));
    setInputValue({
      Title: "",
      Subtitle: "",
      Desc: "",
      isDone: false,
      id: Date.now(),
    });
  };
  const mostRecentTodo = todo.length > 0 && todo[todo.length - 1];

  const handleDeleteClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleCompleteClick = (id) => {
    dispatch(completeTodo(id));
  };

  console.log({ inputValue });
  return (
    <>
      {/* image area */}
      <ImageWrapper ref={(el) => (ref.current[0] = el)}>
        <Image />
        <OverlayTitle>JUST DO IT :</OverlayTitle>
        <OverlaySubtitle>Tiny Changes, Remarkable Result!</OverlaySubtitle>
      </ImageWrapper>
      {/* add list area */}
      <Wrapper
        ref={(el) => (ref.current[1] = el)}
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SectionTitle style={{ marginBottom: "100px" }}>
          ADD TASK ✍️
        </SectionTitle>
        {inputArray?.map((elem, idx) => (
          <AddTaskInput
            key={idx}
            name={elem}
            value={inputValue?.[elem]}
            onChange={handleInputValue}
            placeholder={`Add your ${elem}!`}
          />
        ))}
        <AddTaskButton onClick={handleAddClick}>ADD</AddTaskButton>
      </Wrapper>
      {/* recent list area */}
      <RecentWrapper ref={(el) => (ref.current[2] = el)}>
        <SectionTitle style={{ textAlign: "center", padding: "100px" }}>
          Recent Todo 🔔
        </SectionTitle>
        {mostRecentTodo ? (
          <Wrapper
            style={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // backgroundColor: "#f1e3d9",
              height: "auto",
              padding: "0 0 100px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                // height: "30%",
                border: "none",
                boxShadow: "0px 10px 8px #999",
                borderRadius: "20px",
                backgroundColor: "#fff",
                overflow: "hidden",
              }}
            >
              <TodoArea>
                <TodoContent>
                  <TodoTitle>{mostRecentTodo?.Title}</TodoTitle>
                  <TodoSubtitle>{mostRecentTodo?.Subtitle}</TodoSubtitle>
                  <TodoDescription>{mostRecentTodo?.Desc}</TodoDescription>

                  <RecentTodoButton
                    onClick={() => handleDeleteClick(mostRecentTodo?.id)}
                  >
                    X
                  </RecentTodoButton>
                  <RecentTodoButton
                    onClick={() => handleCompleteClick(mostRecentTodo?.id)}
                  >
                    O
                  </RecentTodoButton>
                </TodoContent>
              </TodoArea>
              <TodoImageArea>
                <RecentTodoImage src={logo} alt="Recent Todo Image" />
              </TodoImageArea>
            </div>
          </Wrapper>
        ) : (
          <Wrapper
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f1e3d9",
            }}
          >
            <p style={{ fontSize: "40px", fontWeight: "bolder" }}>
              "Please add a task"
            </p>
          </Wrapper>
        )}
      </RecentWrapper>
      {/* all list area */}
      <Wrapper
        ref={(el) => (ref.current[3] = el)}
        style={{
          flexDirection: "column",
          height: "1500px",
          maxWidth: "1400px",
        }}
      >
        {/* incomplete */}
        <SectionTitle style={{ textAlign: "center", padding: "100px" }}>
          Incomplete 🔥
        </SectionTitle>

        {/* card container */}
        <div
          style={{
            display: "flex",
            columnGap: "30px",
            overflowX: "auto",
            padding: "15px 0px",
          }}
        >
          {incompleteTodos.length === 0 ? (
            <div
              style={{
                width: "100%",
                minHeight: "400px",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontWeight: "bolder", fontSize: "40px" }}>
                "There are no incompleted tasks yet."
              </p>
            </div>
          ) : (
            incompleteTodos?.map((item) => (
              <CardComponent
                item={item}
                handleDeleteClick={handleDeleteClick}
                handleCompleteClick={handleCompleteClick}
              />
            ))
          )}
        </div>

        {/* complete */}
        <SectionTitle style={{ textAlign: "center", padding: "100px" }}>
          Complete 👏
        </SectionTitle>

        {/* card container */}
        <div
          style={{
            display: "flex",
            columnGap: "30px",
            overflowX: "auto",
            padding: "15px 0px",
          }}
        >
          {completedTodos.length === 0 ? (
            <div
              style={{
                width: "100%",
                minHeight: "400px",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontWeight: "bolder", fontSize: "40px" }}>
                "There are no completed tasks yet."
              </p>
            </div>
          ) : (
            completedTodos?.map((item) => (
              <CardComponent
                item={item}
                handleDeleteClick={handleDeleteClick}
                handleCompleteClick={handleCompleteClick}
                completeCard={true}
              />
            ))
          )}
        </div>
      </Wrapper>
    </>
  );
});

export default HomePage;
