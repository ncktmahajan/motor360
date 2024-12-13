import React from 'react';
import {
  Container,
  LeftSection,
  RightSection,
  Title,
  Subtitle,
  List,
  ListItem,
  ButtonGroup,
  AppStoreButton,
  PlayStoreButton,
  NotificationForm,
  Input,
  NotifyButton,
  PlaceholderImage,
  ButtonIcon,
} from '../styles/Download360Styles';

const App = () => {
  return (
    <Container>
      <LeftSection>
        <Title>Get Started with Motor360 Today</Title>
        <Subtitle>
          Download the Motor360 app now and take control of your vehicle
          management. Available for both iOS and Android devices.
        </Subtitle>
        <List>
          <ListItem>
            Easy vehicle registration and management
          </ListItem>
          <ListItem>
            Smart reminders for insurance and PUC
          </ListItem>
          <ListItem>
            Real-time challan tracking and updates
          </ListItem>
          <ListItem>
            Intelligent service management system
          </ListItem>
        </List>
        <ButtonGroup>
          <AppStoreButton>
            <ButtonIcon className="app-store-icon" />
            <div>
            <small>Coming Soon on</small>
              <strong>App Store</strong>
             
            </div>
          </AppStoreButton>
          <PlayStoreButton>
            <ButtonIcon className="play-store-icon" />
            <div>
            <small>Coming Soon on</small>
              <strong>Play Store</strong>
              
            </div>
          </PlayStoreButton>
        </ButtonGroup>
        <NotificationForm>
  <div className="form-box">
    <h3>Get Notified on Launch</h3>
    <div className="inline-input">
      <Input type="email" placeholder="Enter your email" />
      <NotifyButton>Notify Me!</NotifyButton>
    </div>
  </div>
</NotificationForm>
      </LeftSection>
      <RightSection>
        <PlaceholderImage>Image Unavailable</PlaceholderImage>
      </RightSection>
    </Container>
  );
};

export default App;
