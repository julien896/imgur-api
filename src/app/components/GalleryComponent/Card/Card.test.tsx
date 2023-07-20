import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { CardComponent } from './CardComponent';

// Functions
const mockGetImage = jest.fn();
const mockGetExtension = jest.fn().mockReturnValue('png');

// Fake data
const mockImage = 'https://www.ecured.cu/images/7/75/Imgurlogo.png';
const mockDescription = 'Example description';

// Props
const mockProps = {
  image: mockImage,
  description: mockDescription,
  getImage: mockGetImage,
  getExtension: mockGetExtension,
};

// @ts-ignore
const renderCardComponent = (props) => render(<CardComponent {...props} />);

describe('CardComponent', () => {
  it('should render image correctly', () => {
    renderCardComponent(mockProps);

    const imageElement = screen.getByAltText('Image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.tagName).toBe('IMG');
    expect(imageElement).toHaveAttribute('src', mockImage);
  });

  it('should render description correctly', () => {
    renderCardComponent(mockProps);

    const descriptionElement = screen.getByText(mockDescription);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should call getImage when clicked', () => {
    renderCardComponent(mockProps);

    const cardContainer = screen.getByTestId('card-container');
    fireEvent.click(cardContainer);

    expect(mockGetImage).toHaveBeenCalledTimes(1);
  });
});