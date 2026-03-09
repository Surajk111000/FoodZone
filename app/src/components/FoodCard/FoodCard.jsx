import styled from "styled-components";
import { BASE_URL } from "../../constants";
import { colors } from "../../styles/GlobalStyles";

const FoodCard = ({ name, image, text, price }) => {
  return (
    <Card>
      <ImageContainer>
        <FoodImage src={BASE_URL + image} alt={name} loading="lazy" />
        <PriceTag>${price.toFixed(2)}</PriceTag>
      </ImageContainer>
      <InfoContainer>
        <h3>{name}</h3>
        <p>{text}</p>
        <AddButton>Add to Cart</AddButton>
      </InfoContainer>
    </Card>
  );
};

export default FoodCard;

const Card = styled.div`
  background: linear-gradient(
    135deg,
    rgba(165, 239, 255, 0.1) 0%,
    rgba(110, 191, 244, 0.05) 50%,
    rgba(70, 144, 213, 0) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 67, 67, 0.3);
    box-shadow: 0 12px 40px rgba(255, 67, 67, 0.2);
  }

  @media (max-width: 768px) {
    width: 100% !important;
    max-width: 350px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
`;

const FoodImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const PriceTag = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, ${colors.primary} 0%, #ff6b6b 100%);
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
  box-shadow: 0 4px 15px rgba(255, 67, 67, 0.4);
`;

const InfoContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;

  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }

  p {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    flex: 1;
    line-height: 1.4;
  }
`;

const AddButton = styled.button`
  background: linear-gradient(135deg, ${colors.primary} 0%, #ff6b6b 100%);
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s ease;
  margin-top: 8px;

  &:hover {
    box-shadow: 0 4px 15px rgba(255, 67, 67, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
