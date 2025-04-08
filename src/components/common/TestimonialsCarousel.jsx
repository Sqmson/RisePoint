import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  IconButton,
} from '@mui/material';
import {
  ArrowForward,
  ArrowBack,
  FormatQuote,
} from '@mui/icons-material';

const TestimonialsCarousel = ({ testimonials }) => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Box sx={{ position: 'relative', px: 6 }}>
      <IconButton
        onClick={() => sliderRef?.slickPrev()}
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ArrowBack />
      </IconButton>

      <Slider ref={setSliderRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ p: 2 }}>
            <Card sx={{ height: '100%', position: 'relative' }}>
              <CardContent>
                <FormatQuote
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    color: 'primary.light',
                    opacity: 0.3,
                    fontSize: 40,
                  }}
                />
                <Box sx={{ pt: 4 }}>
                  <Typography variant="body1" paragraph>
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={testimonial.avatar} />
                    <Box>
                      <Typography variant="subtitle1">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 'auto' }}>
                      <Rating value={testimonial.rating} readOnly size="small" />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>

      <IconButton
        onClick={() => sliderRef?.slickNext()}
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default TestimonialsCarousel; 