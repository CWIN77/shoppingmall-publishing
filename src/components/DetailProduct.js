import styled from 'styled-components'

const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: 18px;
  color: #333333;
  padding:16px;
`
const DetailImg = styled.img`
  width:100%;
  height:auto;
`

function DetailProduct() {
  return (
    <Container>
      <Title>상품 상세 설명</Title>
      <DetailImg src="https://always-bucket-dev.s3.us-west-1.amazonaws.com/5ccc50f9-9684-42e0-a250-737685bb47ad_original.jpg"/>
      <DetailImg src="https://always-bucket-dev.s3.us-west-1.amazonaws.com/2fcc7270-5bc1-4140-a726-6da7da6a5f91_original.jpg"/>
      <DetailImg src="https://always-bucket-dev.s3.us-west-1.amazonaws.com/71fe07cf-990f-483a-a914-98203c9fb16d_original.jpg"/>
      <DetailImg src="https://always-bucket-dev.s3.us-west-1.amazonaws.com/d67738b7-9e96-4e79-ab97-53442938e386_original.jpg"/>
    </Container>
  )
}

export default DetailProduct
