import styled from 'styled-components'
import kakao from '../img/kakao.png'
import {ReactComponent as Svg_arrow} from '../img/arrow.svg'

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
`
const KakaoAsk = styled.button`
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #333333;
  margin:8px 16px;
  padding:8px;
  height:40px;
  border: 1px solid rgb(224, 224, 224);
`
const KakaoImg = styled.img`
  width:24px;
  height:24px;
  margin-right: 6px;
`
const Explane = styled.button`
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`
const Tilte = styled.h1`
  color: rgb(51, 51, 51);
  font-size: 18px;
  font-weight: bold;
`

function AskProduct() {
  return (
    <Container>
      <KakaoAsk><KakaoImg src={kakao}/>카카오톡으로 1:1 문의하기</KakaoAsk>
      <div style={{width:'100%',backgroundColor:"rgb(245, 245, 245)",height:8}}/>
      <Explane>
        <Tilte>배송/교환/반품 정책</Tilte>
        <Svg_arrow width={18} height={18} fill="#BFBFBF" />
      </Explane>
      <div style={{width:'100%',backgroundColor:"rgb(245, 245, 245)",height:8}}/>
    </Container>
  )
}

export default AskProduct
