import styled from 'styled-components' 
import AppDownload from '../components/AppDownload'
import MainProduct from '../components/MainProduct'
import BuyProduct from '../components/BuyProduct'
import TeamBuy from '../components/TeamBuy'
import ReviewProduct from '../components/ReviewProduct'
import RelateProduct from '../components/RelateProduct'
import DetailProduct from '../components/DetailProduct'
import AskProduct from '../components/AskProduct'
import RecommendProduct from '../components/RecommendProduct'
import Maker from '../components/Maker'

const Container = styled.div`
  width:100%;
  min-height:100%;
  padding-bottom: 64px;
` 

function Home() {
  return (
    <Container>
      {/* 앱다운로드 */}   <AppDownload/>
      {/* 상품구매 */}     <BuyProduct/>
      {/* 메인상품 */}     <MainProduct/>
      {/* 팀구매 */}       <TeamBuy/>
      {/* 구매후기 */}     <ReviewProduct/>
      {/* 관련상품 */}     <RelateProduct/>
      {/* 상세설명 */}     <DetailProduct/>
      {/* 문의 */}         <AskProduct/>
      {/* 추천상품 */}     <RecommendProduct/>
      {/* 사업자정보 */}   <Maker/>
    </Container>
  )
}

export default Home
