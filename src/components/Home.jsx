import React from 'react';
import Car from '../assets/car.svg';
import Notification from '../assets/notification.svg';
import Receipt from '../assets/receipt.svg';
import Maintenance from '../assets/maintenance.svg';
import {
  HomeContainer,
  HeroSection,
  LeftContent,
  RightContent,
  Title,
  Subtitle,
  PlaceholderImage,
  PanelContainer,
  PanelHeading,
  CardGrid,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
  WhyChooseSection,
  WhyChooseHeading,
  WhyChooseCard,
  WhyChooseTitle,
  CTAButton,
} from '../styles/HomeStyles';

const HomePage = () => {
  return (
    <>
    {/*Hero Section*/}
      <HomeContainer>
        <HeroSection>
          <RightContent>
            <Title>Your All-in-One Vehicle Management Solution</Title>
            <Subtitle>
              Easily manage every aspect of your vehicle in one convenient place. From keeping track of insurance details and traffic challans to receiving timely reminders for service and updating your pollution certificates, Motor360 has you covered.
            </Subtitle>
          </RightContent>
          <LeftContent>
            <PlaceholderImage>Image Unavailable</PlaceholderImage>
          </LeftContent>
        </HeroSection>
      </HomeContainer>

  {/*WhyChoose Section*/}
      <PanelContainer>
        <PanelHeading>
        <h2>Your Virtual Garage at Your Fingertips</h2>
        <p>
          Discover a smarter way to manage your vehicles! Motor360 is your go-to place for keeping your ride ready for the road. From fetching your vehicle details to sending timely reminders to checking your challans, we’ve got your back. Whether you’re a biker or a car enthusiast, Motor360 takes the stress out of car ownership so you can focus on the journey.
        </p>
        </PanelHeading>

        <CardGrid>
          <Card>
            <CardIcon>
            <img src={Car} />
            </CardIcon>
            <CardTitle>Vehicle Registration</CardTitle>
            <CardDescription>
              Effortlessly add your vehicles using registration numbers and access verified government data instantly.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon>
              <img src={Notification} />
            </CardIcon>
            <CardTitle>Smart Reminders</CardTitle>
            <CardDescription>
              Never miss important dates with automated reminders for insurance renewal and pollution certificate expiry.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon>
              <img src={Receipt} />
            </CardIcon>
            <CardTitle>Challan Tracking</CardTitle>
            <CardDescription>
              Stay informed about any pending challans with real-time updates from government databases.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon>
              <img src={Maintenance} />
            </CardIcon>
            <CardTitle>Service Management</CardTitle>
            <CardDescription>
              Track service history and receive timely maintenance reminders based on smart calculations.
            </CardDescription>
          </Card>
        </CardGrid>

        <WhyChooseSection>
        <WhyChooseHeading>
        <h2>Why Choose Motor360?</h2>
        </WhyChooseHeading>
          <WhyChooseCard>
            <WhyChooseTitle>Convenience at Your Fingertips</WhyChooseTitle>
            <p>Access all your car’s information in one place.</p>
          </WhyChooseCard>
          <WhyChooseCard>
            <WhyChooseTitle>Peace of Mind</WhyChooseTitle>
            <p>Never worry about missing important timelines.</p>
          </WhyChooseCard>
          <WhyChooseCard>
            <WhyChooseTitle>Expert Insights</WhyChooseTitle>
            <p>Stay informed about your car’s health and maintenance needs.</p>
          </WhyChooseCard>
        </WhyChooseSection>

        <CTAButton>Get Started Now</CTAButton>
      </PanelContainer>

      
    </>
  );
};

export default HomePage;
