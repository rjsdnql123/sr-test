import { LeftImageWrapper, MainImage } from './LeftImage.style';
import image from '../../assets/mainImage.png'


function LeftImage() {
  return (
    <LeftImageWrapper>
      <MainImage src={image} alt="placeholder" />
    </LeftImageWrapper>
  );
}
export default LeftImage;
