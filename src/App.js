import React, { useRef } from "react";
import PageContainer from "./layout/common/PageContainer";
import HomePage from "./pages/HomePage";

function App() {
  const ref = useRef([]);

  const scrollClick = (index) => {
    ref.current[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageContainer scrollClick={scrollClick}>
      <HomePage ref={ref} />
    </PageContainer>
  );
}

export default App;
