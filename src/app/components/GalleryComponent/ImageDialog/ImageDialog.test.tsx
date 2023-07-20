import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ImageDialogComponent } from './ImageDialogComponent';

describe('ImageDialogComponent', () => {
  const handleClose = jest.fn();

  const mockPost = {
    title: 'Example Title',
    ups: 106,
    downs: 55,
    score: 85,
    images: [
      { link: 'https://www.ecured.cu/images/7/75/Imgurlogo.png' },
    ],
  };

  test('renders dialog content with post details', () => {
    render(
      <ImageDialogComponent
        open={true}
        handleClose={handleClose}
        post={mockPost}
        getExtension={(link) => link.split('.').pop()}
      />
    );

    // Dialog content should be rendered with the post details
    expect(screen.getByText('Example Title')).toBeInTheDocument();
    expect(screen.getByText('106')).toBeInTheDocument(); 
    expect(screen.getByText('55')).toBeInTheDocument(); 
    expect(screen.getByText('85')).toBeInTheDocument(); 

    // Image or Video element should be rendered based on the extension
    expect(screen.getByAltText('')).toBeInTheDocument(); // For images, alt text can be empty
    expect(screen.queryByAltText('Example Title')).toBeNull(); // For videos, alt text is null
  });
});