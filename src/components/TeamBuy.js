import { useState,useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
`
const Tilte = styled.h1`
  padding: 16px;
  color: rgb(51, 51, 51);
  font-size: 18px;
  font-weight: bold;
`
const TeamsWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:8px 16px;
  div{
    display:flex;
    align-items: center;
  }
  h2{
    color:#999999;
    font-size: 14px;
    font-weight: 400;
    display:flex;
  }
`
const UserImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 100px;
`
const UserName = styled.h3`
  font-size: 14px;
  font-weight: 400;
  margin-left: ${(props)=>props.isComplete ? '36px' : "10px"};
`
const JoinBtn = styled.button`
  color:white;
  background-color: rgb(234, 63, 73);
  padding:8px 12px;
  margin-left: 12px;
  border-radius: 4px;
`

function TeamBuy() {
  const [time,setTime] = useState(['23','59','59','9'])
  useEffect(()=>{
    setTimeout(() => {
      const newTime = [...time]
      if(Number(newTime[3]) !== 0){
        newTime[3] = String(Number(newTime[3]) - 1)
      }else{
        newTime[3] = String(9)
        if(Number(newTime[2]) !== 0){
          newTime[2] = String(Number(newTime[2]) - 1)
        }else{
          newTime[2] = String(59)
          if(Number(newTime[1]) !== 0){
            newTime[1] = String(Number(newTime[1]) - 1)
          }else{
            newTime[1] = String(59)
            if(Number(newTime[0]) !== 0){
              newTime[0] = String(Number(newTime[0]) - 1)
            }else{
              newTime[0] = String(23)
            }
          }
        }
      }
      setTime(newTime)
    }, 100);
  },[time])

  const user = [
    {
      img:'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg',
      name:"김민수"
    },
    [
      {
        img:'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg',
        name:"김민수"
      },
      {
        img:'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg',
        name:"최춘식"
      }
    ]
  ]
  return (
    <Container>
      <Tilte>열린 팀구매 참여하기</Tilte>
      {
        user.map((data,key)=>{
          return (
            <div key={key} style={{display:'flex',flexDirection:'column'}}>
              <div style={{height:'1px',width:'calc(100% - 32px)',backgroundColor: 'rgb(224, 224, 224)',marginLeft: '16px',marginRight:'16px'}}/>
              <TeamsWrapper>
                <div>
                  {
                    data.length === undefined
                    ? <UserImg src={data.img} />
                    : (
                      <>
                        <UserImg src={data[0].img} />
                        <UserImg style={{position:'absolute',marginLeft:24,border: '2px solid rgb(255, 255, 255)'}} src={data[1].img} />
                      </>
                    )
                  }
                  <UserName isComplete={data.length !== undefined}>{data.length !== undefined ? data[0].name[0] + '..외 1명' : data.name+".."}</UserName>
                </div>
                {
                  data.length !== undefined
                  ? <h2>팀 모집 완료</h2>
                  : (
                    <div>
                      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end'}}>
                        <h2>남은 인원 <span style={{color:"rgb(234, 63, 73)"}}>1명</span></h2>
                        <h2>{time[0]}:{time[1]}:{time[2]}:{time[3]}</h2>
                      </div>
                      <JoinBtn>참여하기</JoinBtn>
                    </div>
                  )
                }
              </TeamsWrapper>
            </div>
          )
        })
      }
      <div style={{width:'100%',backgroundColor:"rgb(245, 245, 245)",height:8}}/>
    </Container>
  )
}

export default TeamBuy
