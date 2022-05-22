import styled from 'styled-components'
import badge from '../img/badge.png'
import fullStar from '../img/fullStar.png'
import halfStar from '../img/halfStar.png'

const Container = styled.div`
  width:100%;
  min-height: 100%;
  padding-top: 73.24px;
  display:flex;
  flex-direction: column;
` 
const MainImg = styled.img`
  width:100%;
  height:auto;
`
const Badge = styled.img`
  display:flex;
  position: absolute;
  width:64px;
  height: 64px;
  left:12px;
  top:12px;
`
const Page = styled.h4`
  position: absolute;
  border-radius: 100px;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.533);
  font-size: 12px;
  font-weight: 500;
  padding: 4px;
  padding-left: 12px;
  padding-right: 12px;
  bottom:16px;
  right:16px;
`
const Information = styled.div`
  display:flex;
  justify-content: space-between; 
  margin-top: 10px; 
  padding-left: 16px;
  padding-right: 16px;
  *{
    font-size: 16px;
  }
`
const MainPrice = styled.h2`
  font-size: 20px;
  color: rgb(234, 63, 73);
`
const BeforePrice = styled.h2`
  text-decoration-line: line-through; 
  color: rgb(153, 153, 153); 
  font-weight: normal;
  margin-left: 4px;
`
const StarIcon = styled.img`
  width:20px;
  height:20px;
`
const TagWarrper = styled.div`
  display:flex;
  align-items: flex-start;
  padding-left: 16px; 
  padding-top: 6px;
`
const Tag = styled.div`
  background-color: ${(props) => props ? props.backgroundColor : 'red'};
  border-radius: 4px;
  color:white;
  padding-right: 8px; 
  padding-left: 8px;
  height: 28px;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  font-weight: bold;
`
const Title = styled.h1`
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: 400;
`
const Description = styled.div`
  margin-left: 16px;
  color: rgb(51, 51, 51);
  font-size: 16px;
  margin-top: 8px;
`


function MainProduct() {
  const productImgSrc = 'https://always-bucket-dev.s3.us-west-1.amazonaws.com/3b48a889-b860-4d94-bd40-44090fa896de_original.jpg'
  return (
    <Container>
      <div style={{position:'relative'}}>
        <Badge src={badge}></Badge>
        <Page>1/1</Page>
        <MainImg src={productImgSrc} />
      </div>

      <Information>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div style={{display:'flex'}}>
            <h2 style={{color:'rgb(102, 102, 102)'}}>53%</h2>
            <BeforePrice>14,900원</BeforePrice>
          </div>
          <MainPrice>6,996원</MainPrice>
        </div>
        <div style={{display:'flex',alingItems:'center'}}>
          <StarIcon src={fullStar}/>
          <StarIcon src={fullStar}/>
          <StarIcon src={fullStar}/>
          <StarIcon src={fullStar}/>
          <StarIcon src={halfStar}/>
          <h4 style={{fontSize:14,fontWeight:'bold'}}>(8504)</h4>
        </div>
      </Information>

      <TagWarrper>
        <Tag backgroundColor="rgb(236, 146, 150)">2인 팀구매</Tag>
        <Tag backgroundColor="rgb(189, 189, 189)">무료 배송</Tag>
        <Tag backgroundColor="rgb(248, 196, 84)">국내 최저가</Tag>
      </TagWarrper>

      <Title>[천연펄프] 숨 소프트블랙 두루마리 (3겹) 30m * 30롤</Title>

      <div style={{height:'1px',width:'calc(100% - 32px)',backgroundColor: 'rgb(224, 224, 224)',marginLeft: '16px',marginRight:'16px'}}/>
      
      <Description>팀구매 결제 후 24시간 내 1명 모집</Description>
      <Description>실패 시 재도전 혹은 결제 취소 가능</Description>
      <Description>롯데택배, 3일 소요</Description>

      <div style={{width:'100%',backgroundColor:"rgb(245, 245, 245)",height:8,marginTop:12}}/>
    </Container>
  )
}

export default MainProduct
