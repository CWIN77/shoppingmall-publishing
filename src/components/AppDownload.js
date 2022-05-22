import styled from 'styled-components' 
import logo from '../img/logo.png'
import {ReactComponent as Svg_arrow} from '../img/arrow.svg'

const Container = styled.a`
  width:calc(100% - 32px);
  display:flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: white;
  z-index:10;
  top:0px;
`
const Logo = styled.img`
  width:56px;
  height:56px;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  align-items: flex-start;
  justify-content: flex-start;
`
const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: rgb(51, 51, 51);
`
const SubTitle = styled.h3`
  font-size: 12px;
  font-weight: 400;
  color: rgb(189, 189, 189);
`
const DownloadBtn = styled.button`
  height:32px;
  padding:2px;
  padding-left: 0px;
  border-radius: 4px; 
  display: flex;  
  border: 1.5px solid rgb(234, 63, 73);
  justify-content: center; 
  align-items: center;
  color: rgb(234, 63, 73); 
  font-size: 14px; 
  background-color: rgb(255, 255, 255);
`
const DownloadBtnText = styled.h2`
  margin-left: 8px; 
  margin-right: 2px;
  font-size: 14px;
`
function AppDownload() {
  return (
    <Container href='https://apps.apple.com/us/app/%EC%98%AC%EC%9B%A8%EC%9D%B4%EC%A6%88-alwayz/id1576633335'>
      <div style={{display:'flex'}}>
        <Logo src={logo} />
        <TitleContainer>
          <Title>조건없이 모든 상품</Title>
          <Title>무료배송!</Title>
          <SubTitle>앱으로 더 많은 상품과 혜택받기</SubTitle>
        </TitleContainer>
      </div>
      <DownloadBtn>
        <DownloadBtnText>앱 다운 받기</DownloadBtnText>
        <Svg_arrow width={12} height={12} fill="rgb(234, 63, 73)" />
      </DownloadBtn>
    </Container>
  )
}

export default AppDownload
