import styled from 'styled-components'
import {ReactComponent as Svg_arrow} from '../img/arrow.svg'
import fullStar from '../img/fullStar.png'
import halfStar from '../img/halfStar.png'
import emptyStar from '../img/emptyStar.png'

const Container = styled.div`
  width:100%;
  display:block;
  flex-direction: column;
`
const TopWrapper = styled.div`
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
const SeeAllReview1 = styled.button`
  font-size: 16px;
  color: rgb(153, 153, 153);
`
const Grade = styled.div`
  display:flex;
  align-items: center;
  padding: 12px;
  margin: 0px 16px 12px;
  background-color: rgb(250,250,250);
  font-size: 18px;
`
const StarIcon = styled.img`
  width:${(props)=> props.imgSize ? props.imgSize : '24px'};
  height:${(props)=> props.imgSize ? props.imgSize : '24px'};
`
const Review = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-start;
`
const ReviewProfile = styled.img`
  width:24px;
  height:24px;
  border-radius: 100px;
`
const ReviewName = styled.div`
  font-size:14px;
  margin-left: 8px;
`
const ReviewImgWrapper = styled.div`
  display:flex;
  overflow: auto;
  padding-left: 16px;
  padding-bottom: 12px;
  width:calc(100% - 16px);
`
const ReviewImg = styled.img`
  width:196px;
  height:196px;
  padding-right: 16px;
`
const ReviewText = styled.h2`
  font-size: 14px;
  margin:0px 16px 12px;
  font-weight: 400;
`
const SeeAllReview2 = styled.button`
  width:calc(100% - 36px);
  margin:12px 16px;
  padding:10px 0px;
  background-color: rgb(234, 63, 73);
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: bold;
`

function ReviewProduct() {
  const reviewData = [
    {
      profile:'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg',
      name:"홍길동",
      reviewImg:[
        'https://always-bucket-dev.s3.us-west-1.amazonaws.com/fff1b0aa-d762-4af3-9a02-ccbebe78c2c3_original.jpg',
        'https://always-bucket-dev.s3.us-west-1.amazonaws.com/fef395d7-a4b9-4c71-aeb0-371c68bdfaf1_original.jpg'
      ],
      reviewText:"오늘 배송왔어요~ 생각보다 너무 괜찮네요 ㅎㅎ",
      score:[2,2,2,2,1]
    },
    {
      profile:'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg',
      name:"최춘식",
      reviewImg:[
        'https://always-bucket-dev.s3.us-west-1.amazonaws.com/fe7f5910-bfcf-4c24-b264-6a73c82fa1a8_original.jpg',
      ],
      reviewText:"",
      score:[2,2,2,2,0]
    },
    {
      profile:'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg',
      name:"김용진",
      reviewImg:[
        
      ],
      reviewText:"잘쓰겠습니다",
      score:[2,2,2,2,2]
    }
  ]
  return (
    <Container>
      <TopWrapper>
        <Tilte>구매 후기</Tilte>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <SeeAllReview1>전체보기</SeeAllReview1>
          <Svg_arrow width={14} height={14} fill="rgb(153, 153, 153)" />
        </div>
      </TopWrapper>
      <Grade>
        <StarIcon imgSize={"26px"} src={fullStar}/>
        <StarIcon imgSize={"26px"} src={fullStar}/>
        <StarIcon imgSize={"26px"} src={fullStar}/>
        <StarIcon imgSize={"26px"} src={fullStar}/>
        <StarIcon imgSize={"26px"} src={halfStar}/>
        (8,522)
      </Grade>
      <div style={{height:'1px',width:'calc(100% - 32px)',backgroundColor: 'rgb(224, 224, 224)',marginLeft: '16px',marginRight:'16px'}}/>

      {
        reviewData.map((data,key)=>{
          return (
            <Review key={key}>
              <div style={{display:'flex',alignItems:'center',padding:'12px 16px'}}>
                <ReviewProfile src={data.profile}/>
                <ReviewName>{data.name}</ReviewName>
              </div>
              <div style={{paddingLeft:16,marginBottom:12}}>
                {
                  data.score.map((score,key)=>{
                    if(score === 2) return <StarIcon imgSize={"20px"} key={key} src={fullStar}/>
                    else if(score === 1) return <StarIcon imgSize={"20px"} key={key} src={halfStar}/>
                    else if(score === 0) return <StarIcon imgSize={"20px"} key={key} src={emptyStar}/>
                  })
                }
              </div>
              {
                data.reviewImg.length > 0 &&
                <ReviewImgWrapper>
                  {
                    data.reviewImg.map((img,key)=>{
                      return <ReviewImg key={key} src={img} />
                    })
                  }
                </ReviewImgWrapper>
              }
              <ReviewText>{data.reviewText}</ReviewText>
              <div style={{height:'1px',width:'calc(100% - 32px)',backgroundColor: 'rgb(224, 224, 224)',marginLeft: '16px',marginRight:'16px'}}/>
            </Review>
          )
        })
      }
      <SeeAllReview2>8,523개 구매 후기 전체보기</SeeAllReview2>
      <div style={{width:'100%',backgroundColor:"rgb(245, 245, 245)",height:8}}/>
    </Container>
  )
}

export default ReviewProduct
