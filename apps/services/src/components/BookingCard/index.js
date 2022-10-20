/**
=========================================================
* NextJS Material Dashboard 2 PRO - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import Image from 'next/image';

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import Card from '@mui/material/Card';

import Link from '@mui/material/Link';

// NextJS Material Dashboard 2 PRO components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function BookingCard({ image, title, description, action, link, blank }) {
  return (
    <Link href={link} target={blank ? '_blank' : '_self'}>
      <Card
        sx={{
          '&:hover .card-header': {
            transform: action && 'translate3d(0, -50px, 0)',
          },
        }}
        style={{
          color: ' rgba(0, 0, 0, 0.87)',
          transition: ' box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          minWidth: '0px',
          minHeight: '340px',
          width: '80%',
          maxWidth: '500px',
          margin: '0 auto',
          overflowWrap: 'break-word',
          backgroundColor: 'rgb(255, 255, 255)',
          backgroundClip: 'border-box',
          border: ' 0px solid rgba(0, 0, 0, 0.125)',
          borderRadius: ' 0.75rem',
          boxShadow:
            ' rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem',
          overflow: 'visible',
        }}
      >
        <Box
          position="relative"
          borderRadius="lg"
          className="card-header"
          style={{
            position: 'relative',
            marginTop: '-24px !important',
            marginLeft: '16px !important',
            marginRight: '16px !important',
            opacity: '1',
            background: 'transparent',
            color: 'rgb(52, 71, 103)',
            borderRadius: '0.5rem',
            boxShadow: 'none',
            transition: 'transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1) 0s',
          }}
        >
          <Box
            borderRadius="lg"
            shadow="md"
            width="100%"
            height="100%"
            position="relative"
            zIndex={1}
          >
            {image.src ? (
              <Image
                src={image}
                alt={title}
                layout="responsive"
                size="100%"
                quality={100}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  zIndex: '1',
                  opacity: '1',
                  background: 'transparent',
                  color: 'rgb(52, 71, 103)',
                  borderRadius: '0.5rem',
                  boxShadow:
                    'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem',
                }}
              />
            ) : (
              image
            )}
          </Box>
          <Box
            borderRadius="lg"
            shadow="md"
            width="100%"
            height="100%"
            position="absolute"
            left={0}
            top="0"
            sx={{
              backgroundImage: `url(${image.src || image.props.src.src})`,
              transform: 'scale(0.94)',
              filter: 'blur(12px)',
              backgroundSize: 'cover',
            }}
          />
        </Box>
        <Box textAlign="center" pt={3} px={3}>
          <Box display="flex" justifyContent="center" alignItems="center" mt={action ? -8 : -4.25}>
            {action}
          </Box>
          <Typography variant="h5" fontWeight="regular" sx={{ mt: 2 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text" sx={{ mt: 1.5, mb: 1 }}>
            {description}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}

// Setting default values for the props of BookingCard
BookingCard.defaultProps = {
  action: true,
};

// Typechecking props for the BookingCard
BookingCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.oneOfType([PropTypes.bool, PropTypes.node]),
};

export default BookingCard;
