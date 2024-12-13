import React from 'react';
import Total from '../assets/Total.svg';
import Reload from '../assets/reload.svg';
import History from '../assets/history.svg';
import Link from '../assets/Link.svg'
import Tick from '../assets/tick.svg'
import {
  Container,
  Header,
  InfoContainer,
  InfoCard,
  InlineTextWrapper,
  IconWrapper,
  TextWrapper,
  BackgroundBox,
  SubBox,
  DropdownBox,
  FeaturesContainer,
  FeatureCard,
  CTAButton,
} from '../styles/TrackingStyle';

const TrafficChallanPage = () => {
  return (
    <Container>
      <Header>
        <h1>Track and Monitor Traffic Challans</h1>
        <p>
          Stay informed about pending traffic challans with real-time updates from government databases. We provide instant access to your challan history and payment status.
        </p>
      </Header>

      <InfoContainer>
        {/* Total Pending Challans Card */}
        <InfoCard>
          <BackgroundBox>
            <InlineTextWrapper>
              <IconWrapper size="3rem">
                <img src={Total} alt="Total Icon" />
              </IconWrapper>
              <TextWrapper>
                <h2>Total Pending Challans</h2>
                <p>Last updated: Today</p>
              </TextWrapper>
              <h3 style={{ marginLeft: 'auto' }}>₹0</h3>
            </InlineTextWrapper>
          </BackgroundBox>

          {/* Dropdown with background */}
          <DropdownBox>
            <label htmlFor="vehicle">Select Vehicle</label>
            <select id="vehicle">
              <option>All Vehicles</option>
              <option>Car 1</option>
              <option>Car 2</option>
            </select>
          </DropdownBox>
        </InfoCard>

        {/* Recent History Card */}
        <InfoCard>
          <h2>Recent History</h2>
          <SubBox>
            <InlineTextWrapper>
              <IconWrapper size="1.3rem">
                <img src={Tick} />
              </IconWrapper>
              <TextWrapper>
                <h3>No pending challans</h3>
                <p>All clear!</p>
              </TextWrapper>
            </InlineTextWrapper>
          </SubBox>
        </InfoCard>
      </InfoContainer>

      <FeaturesContainer>
        {/* Real-Time Updates */}
        <FeatureCard>
          <InlineTextWrapper>
            <IconWrapper size="3rem">
                <img src= {Reload} />
            </IconWrapper>
            <TextWrapper>
              <h2>Real-Time Updates</h2>
              <p>Get instant notifications when new challans are issued to your vehicles.</p>
            </TextWrapper>
          </InlineTextWrapper>
        </FeatureCard>

        {/* Complete History */}
        <FeatureCard>
          <InlineTextWrapper>
            <IconWrapper size="3rem">
            <img src= {History} />
            </IconWrapper>
            <TextWrapper>
              <h2>Complete History</h2>
              <p>Access your complete challan history with detailed information.</p>
            </TextWrapper>
          </InlineTextWrapper>
        </FeatureCard>

        {/* Direct Payment Links */}
        <FeatureCard>
          <InlineTextWrapper>
            <IconWrapper size="3rem">
            <img src= {Link} />
            </IconWrapper>
            <TextWrapper>
              <h2>Direct Payment Links</h2>
              <p>Quick access to official government payment portals.</p>
            </TextWrapper>
          </InlineTextWrapper>
        </FeatureCard>
      </FeaturesContainer>

      <CTAButton>Check Your Challans</CTAButton>
    </Container>
  );
};

export default TrafficChallanPage;