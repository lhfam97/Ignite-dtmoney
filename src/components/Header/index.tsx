import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

import {IHeaderProps} from './@interfaces'

export function Header(props: IHeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>Nova transação</button>

      </Content>
    </Container>
  );
}
