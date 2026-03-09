import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import { useAppContext } from "../../context/AppContext";

const FoodCard = ({ name, image, text, price, id }) => {
  const { addToCart, addToWishlist, isInWishlist } = useAppContext();
  const inWishlist = isInWishlist(id);

  const handleAddToCart = () => {
    addToCart({ id, name, image, text, price });
    alert(`✅ ${name} added to cart!`);
  };

  const handleWishlist = () => {
    addToWishlist({ id, name, image, text, price });
  };

  return (
    <Card>
      <ImageContainer>
        <FoodEmoji>{image}</FoodEmoji>
        <PriceTag>${price.toFixed(2)}</PriceTag>
        <WishlistButton
          isWishlisted={inWishlist}
          onClick={handleWishlist}
          title={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          {inWishlist ? "❤️" : "🤍"}
        </WishlistButton>
      </ImageContainer>
      <InfoContainer>
        <h3>{name}</h3>
        <p>{text}</p>
        <ButtonContainer>
          <AddButton onClick={handleAddToCart}>
            🛒 Order Now
          </AddButton>
        </ButtonContainer>
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
  border: 2px solid rgba(255, 67, 67, 0.2);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-12px) scale(1.02);
    border-color: rgba(255, 67, 67, 0.6);
    box-shadow: 0 20px 50px rgba(255, 67, 67, 0.3);
    background: linear-gradient(
      135deg,
      rgba(165, 239, 255, 0.15) 0%,
      rgba(110, 191, 244, 0.1) 50%,
      rgba(70, 144, 213, 0.05) 100%
    );
  }

  @media (max-width: 768px) {
    width: 100% !important;
    max-width: 350px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 67, 67, 0.1), rgba(255, 107, 107, 0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgba(255, 67, 67, 0.1);
`;

const FoodEmoji = styled.div`
  font-size: 90px;
  transition: transform 0.3s ease;
  filter: drop-shadow(0 4px 8px rgba(255, 67, 67, 0.3));

  ${Card}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const PriceTag = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, ${colors.primary} 0%, #ff6b6b 100%);
  color: white;
  padding: 10px 16px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 0 4px 15px rgba(255, 67, 67, 0.4);
  backdrop-filter: blur(10px);
`;

const WishlistButton = styled.button`
  position: absolute;
  top: 12px;
  left: 12px;
  background: ${props => props.isWishlisted 
    ? "linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%)"
    : "rgba(255, 255, 255, 0.2)"};
  border: 2px solid ${props => props.isWishlisted 
    ? "#ff4343"
    : "rgba(255, 255, 255, 0.3)"};
  font-size: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, #ff4343 0%, #ff6b6b 100%);
    border-color: #ff4343;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const InfoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    color: #ffffff;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    flex: 1;
    line-height: 1.5;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const AddButton = styled.button`
  flex: 1;
  background: linear-gradient(135deg, ${colors.primary} 0%, #ff6b6b 100%);
  border: none;
  color: white;
  padding: 12px 20px;
  border-radius: 14px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 67, 67, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 67, 67, 0.4);
    background: linear-gradient(135deg, #ff6b6b 0%, #ff5252 100%);
  }

  &:active {
    transform: translateY(0);
  }
`;

