/**
 *
 * About
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { Container, Typography } from '@material-ui/core';
import PaperWrapper from '../../components/PaperWrapper/Loadable';

export function About() {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta name="description" content="Description of About" />
      </Helmet>
      <Container maxWidth="md">
        <PaperWrapper>
          <Typography component="h1" variant="h5">
            Giới thiệu
          </Typography>
          <div style={{ backgroundColor: 'white' }}>
            <h2 style={{ color: '#188C18' }}>
              CÔNG TY CỔ PHẦN CÔNG NGHỆ MEKONG
            </h2>
            <p>
              <strong>Địa chỉ:</strong> 102/4A đường 17, khu phố 3, Phường Linh
              Chiểu, Quận Thủ Đức, TP Hồ Chí Minh.
            </p>
            <p>
              <strong>Số điện thoại:</strong> 0888 001 200
            </p>
            <p>
              <strong>Mail:</strong> info@homeskeys.net
            </p>
            <p>
              <strong>Web:</strong>
              <a href="http://homeskeys.net/"> homeskeys.net</a>
            </p>
          </div>
          <div style={{ height: '200px', width: '100%' }}>
            <iframe
              src="https://maps.google.com/maps?q=102/4A đường 17, khu phố 3, Phường Linh
              Chiểu, Quận Thủ Đức, TP Hồ Chí Minh&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              frameborder="0"
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        </PaperWrapper>
      </Container>
    </div>
  );
}

About.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(About);
