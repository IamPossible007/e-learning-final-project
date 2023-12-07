import { Paper, Text, Title, Button, rem } from "@mantine/core";
import styled from "@emotion/styled";

const CardWrapper = styled(Paper)`
  height: ${rem(440)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-size: cover;
  background-position: center;
`;

const TitleText = styled(Title)`
  font-family: ${({ theme }) => `Greycliff CF, ${theme.fontFamily}`};
  font-weight: 900;
  color: ${({ theme }) => theme.white};
  line-height: 1.2;
  font-size: ${rem(32)};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const CategoryText = styled(Text)`
  color: ${({ theme }) => theme.white};
  opacity: 0.7;
  font-weight: 700;
  text-transform: uppercase;
`;

function ImageCard({ image, title, category }) {
  return (
    <CardWrapper
      shadow='md'
      p='xl'
      radius='md'
      sx={{ backgroundImage: `url(${image})` }}
    >
      <div>
        <CategoryText size='xs'>{category}</CategoryText>
        <TitleText order={3}>{title}</TitleText>
      </div>
      <Button variant='white' color='dark'>
        Read More
      </Button>
    </CardWrapper>
  );
}

export default ImageCard;
