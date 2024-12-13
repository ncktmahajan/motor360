import React from 'react';
import Shield from '../assets/shield.svg'
import Leaf from '../assets/leaf.svg'
import Email from '../assets/email.svg'
import WhatsApp from '../assets/whatsapp.svg'
import {
  Section,
  Container,
  ContentWrapper,
  LeftContent,
  CardsContainer,
  Card,
  Icon,
  CardTitle,
  CardDescription,
  RightContent,
  Header,
  Form,
  Input,
  AddButton,
  Example,
  CustomNotificationCard,
  RemindersSection,
  ReminderCardsContainer,
  ReminderCard,
  PReminderCard,
  ReminderIcon,
  ReminderTitle,
  ReminderDescription,
  NotificationOptions,
  NotificationOption,
  SetUpButton,
} from '../styles/AddVehicletyle';

const AddVehicleSection = () => {
  return (
    <>
    <Section>
      <Container>
        <ContentWrapper>
          {/* Left Side: Header and Form */}
          <LeftContent>
            <Header>
              <h2>Add Multiple Family Vehicles with Ease</h2>
              <p>
                Efficiently manage your family's vehicle fleet through our streamlined dashboard.
                Our intuitive platform simplifies the process of adding, tracking, and organizing
                multiple vehicles, providing comprehensive oversight of registrations, maintenance
                schedules, and essential documentation - all in one centralized location.
              </p>
            </Header>
            <Form>
              <h3>Add Multiple Vehicles</h3>
              <p>Vehicle Registration Numbers</p>
              <Input type="text" placeholder="Enter registration number" />
              <AddButton>
                Add Vehicle <span>+</span>
              </AddButton>
              <Example>Example: DL01AB1234</Example>
            </Form>
          </LeftContent>

          {/* Right Side: Cards */}
          <RightContent>
            <CardsContainer>
              <Card>
                <Icon />
                <div>
                  <CardTitle>Family Vehicle Management</CardTitle>
                  <CardDescription>
                    Seamlessly manage all your family vehicles under one account with personalized access controls.
                  </CardDescription>
                </div>
              </Card>
              <Card>
                <Icon />
                <div>
                  <CardTitle>Secure Vehicle Access</CardTitle>
                  <CardDescription>
                    Enhanced security with last 4 digits verification required to add vehicles to your garage, ensuring authorized access only.
                  </CardDescription>
                </div>
              </Card>
            </CardsContainer>
          </RightContent>
        </ContentWrapper>
        </Container>
        </Section>

           {/* Reminders Section */}
           <RemindersSection>
        <h2>Never Miss Important Due Dates</h2>
        <p>
          Stay ahead with smart reminders for insurance renewals and pollution certificate updates.
          Our intelligent system ensures you're always compliant and up-to-date.
        </p>
        <ReminderCardsContainer>
          <ReminderCard>
            <ReminderIcon>
            <img src={Shield} />
            </ReminderIcon>
            <div>
              <ReminderTitle>Insurance Reminders</ReminderTitle>
              <ReminderDescription>Never let your insurance lapse.</ReminderDescription>
            </div>
          </ReminderCard>
          <PReminderCard>
            <ReminderIcon>
                <img src={Leaf} />
            </ReminderIcon>
            <div>
              <ReminderTitle>PUC Alerts</ReminderTitle>
              <ReminderDescription>Stay environmentally compliant.</ReminderDescription>
            </div>
          </PReminderCard>
        </ReminderCardsContainer>
        <CustomNotificationCard>
          <h2>Customize Your Notifications</h2>
          <div className="notification-options">
            <NotificationOption>
              <ReminderIcon>
                <img src={Email} />
              </ReminderIcon>
              <div>
                <ReminderTitle>Email Updates</ReminderTitle>
                <ReminderDescription>
                  Detailed information and documentation in your inbox.
                </ReminderDescription>
              </div>
            </NotificationOption>
            <NotificationOption>
              <ReminderIcon>
                <img src={WhatsApp} />
              </ReminderIcon>
              <div>
                <ReminderTitle>WhatsApp Notifications</ReminderTitle>
                <ReminderDescription>
                  Instant updates and reminders via WhatsApp.
                </ReminderDescription>
              </div>
            </NotificationOption>
          </div>
        </CustomNotificationCard>
        <SetUpButton>Set Up Reminders Now</SetUpButton>
      </RemindersSection>
        </>
  );
};

export default AddVehicleSection;
