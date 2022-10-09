import Container from '../shared/Container/Container';
import { StyledWrapper } from './styles';

const Header = () => {
	return (
    <StyledWrapper>
      <Container>
        <div className="main-header-section">
          <h1 data-aos="fade-down" data-aos-duration="1100">
            Happy Birthday <br /> Sharon
          </h1>
          <p data-aos="fade-up" data-aos-duration="1100">
            you are an amazing person and it's a pleasure being your friend.
          </p>
          <p data-aos="fade-up" data-aos-duration="1100">
            So, this is me giving you 28 reasons why you are special!
          </p>
        </div>
      </Container>
    </StyledWrapper>
  );
};

export default Header;
