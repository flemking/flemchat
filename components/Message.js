import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

const Message = () => {
  const [userLoggedIn] = useAuthState(auth);
  const TypeOfMessage = user === userLoggedIn.email ? Sender : Receiver;

  return (
    <Container>
      <TypeOfMessage>
        {message.message}
        <Timestamp>
          {message.timestamp ? moment(message.timestamp).format("LT") : "..."}
        </Timestamp>
      </TypeOfMessage>
    </Container>
  );
};

export default Message;

const Container = styled.div``;

const MessageElement = styled.p`
  width: fit-content;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 18px;
  min-width: 30px;
  padding-bottom: 24px;
  position: relative;
  text-align: left;
`;

const Sender = styled(MessageElement)`
  margin-left: auto;
  background-color: #eee;
  color: white;
`;
const Receiver = styled(MessageElement)`
  margin-left: auto;
  background-color: #8224e3;
  color: white;
`;
const Timestamp = styled.span`
  color: gray;
  padding: 5px;
  font-size: 9px;
  position: absolute;
  bottom: 0;
  text-align: right;
  right: 0;
`;
