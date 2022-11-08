import dayjs from "dayjs";

import {
  ArticleImg,
  ArticleInfo,
  Container,
  Date,
  DateAndSite,
  MoreButton,
  Site,
  Summary,
  Title
} from "./style";

function Article({ data, index }) {
  return (
    <Container>
      {index % 2 === 0 ? <ArticleImg src={data.imageUrl} /> : null}
      <ArticleInfo>
        <Title>{data.title}</Title>
        <DateAndSite>
          <Date>{dayjs(data.publishedAt).format('DD/MM/YYYY')}</Date>
          <Site>{data.newsSite}</Site>
        </DateAndSite>
        <Summary>{data.summary}</Summary>
        <MoreButton>See More</MoreButton>
      </ArticleInfo>
      {index % 2 !== 0 ? <ArticleImg src={data.imageUrl} /> : null}
    </Container>
  )
}

export default Article;