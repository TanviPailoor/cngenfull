import React from 'react';
import './Referral.scss';
import { CouponCard, CompletedTask, PendingTask } from '../../../components';
import clients from '../../../../assets/images/clients.png';
const Referral = () => {
  const coupons = [
    { status: 'received' },
    { status: 'redeemed' },
    { status: 'expired' },
  ];
  const filteredCoupons = coupons.filter(
    (coupon) =>
      coupon.status === 'received' ||
      coupon.status === 'redeemed' ||
      coupon.status === 'expired'
  );
  return (
    <>
      <section className="referral-container">
        <section className="refer-child">
          <section className="refer-one">
            <section className="refer-one-up">
              <h2>Coupon Overview</h2>
              <p>Tuesday, 23/05/2024 10:02 AM</p>
            </section>
            <section className="refer-one-down">
              <section className="refer-card">
                <CompletedTask />
              </section>
              <section className="refer-card">
                <PendingTask />
              </section>
            </section>
          </section>
          <section className="refer-two">
            <section className="refer-two-up">
              <h2>Referral Code</h2>
              <div className="refer-code">
                <h3>gtj73c</h3>
              </div>
            </section>
            <section className="refer-two-mid">
              <section className="refer-two-mid-left">
                <h2>Clients Invited</h2>
                <div className="clients-invited">
                  <h3>12</h3>
                </div>
              </section>
              <section className="refer-two-mid-right">
                <img src={clients} alt="clients" />
              </section>
            </section>
            <section className="refer-two-down">
              <section>
                <h2>Coupons Earned</h2>
                <p>Tuesday, 23/05/2024 10:02 AM</p>
              </section>
              <div className="coupons-earned">
                <h3>16</h3>
              </div>
            </section>
          </section>
          <section className="refer-three">
            {filteredCoupons.map((coupon, index) => (
              <CouponCard key={index} status={coupon.status} />
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default Referral;
