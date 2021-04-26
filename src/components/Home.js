import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { selectUserName } from "../features/user/userSlice";
import ImgSlider from "./ImgSlider";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  return (
    <Container>
      <ImgSlider />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
