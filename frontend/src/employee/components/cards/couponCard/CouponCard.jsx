import React from 'react';
import './CouponCard.scss';
import coupon from '../../../../assets/images/coupon.png';

const CouponCard = ({ status }) => {
  return (
    <>
      <section className={`coupon-container ${status}`}>
        <section className="coupon-left">
          <img src={coupon} alt="coupon" />
        </section>
        <section className="coupon-right">
          <h2>Coupon Received</h2>
          {status === 'redeemed' && (
            <span className="status-label redeemed">REDEEMED</span>
          )}
          {status === 'expired' && (
            <span className="status-label expired">EXPIRED</span>
          )}
        </section>
      </section>
    </>
  );
};

export default CouponCard;
