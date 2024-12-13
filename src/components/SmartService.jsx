import React from 'react';
import {
  Container,
  Header,
  CombinedCard,
  Section,
  FormGroup,
  Input,
  Select,
  TextArea,
  Button,
  StatusContent,
  StatusItem,
  Icon,
  FeatureSection,
  FeatureCard,
  NextServiceDueBox,

} from '../styles/SmartServiceStyles';

import { ReactComponent as HistoryIcon } from '../assets/Shistory.svg';
import { ReactComponent as ReminderIcon } from '../assets/reminder.svg';
import { ReactComponent as CheckIcon } from '../assets/right.svg';


const ServiceManagement = () => {
  return (
    <>
    <Container>
      <Header>
        <h1>Smart Service Management</h1>
        <p>
          Our intelligent service management system helps you track maintenance history and receive timely service
          reminders based on your vehicle's usage patterns and manufacturer recommendations.
        </p>
      </Header>
      <CombinedCard>
        <Section>
          <h2>Update Service Details</h2>
          <FormGroup>
            <label>Last Service Date</label>
            <Input type="date" placeholder="dd-mm-yyyy" />
          </FormGroup>
          <FormGroup>
            <label>Service Type</label>
            <Select>
              <option value="regular">Regular Service</option>
              <option value="major">Major Service</option>
              <option value="minor">Minor Service</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <label>Service Info</label>
            <TextArea placeholder="Enter service details here..." />
          </FormGroup>
          <Button>Update Service Record</Button>
        </Section>
        <Section>
          <h2>Service Status</h2>
          <StatusContent>
            <NextServiceDueBox>
              <Icon>
                <CheckIcon />
              </Icon>
              <div>
                <h3>Next Service Due</h3>
                <p>In 2 months or 3,000 km</p>
              </div>
            </NextServiceDueBox>
            <div className="side-by-side">
              <StatusItem>
                <div>
                  <h3>Last Service</h3>
                  <p>15 Dec 2023</p>
                </div>
              </StatusItem>
              <StatusItem>
                <div>
                  <h3>Service Count</h3>
                  <p>4 services recorded</p>
                </div>
              </StatusItem>
            </div>
          </StatusContent>
        </Section>
      </CombinedCard>
      <FeatureSection>
        <FeatureCard>
          <Icon>
            <HistoryIcon />
          </Icon>
          <div>
            <h3>Service History</h3>
            <p>Complete maintenance history with detailed service records</p>
          </div>
        </FeatureCard>
        <FeatureCard>
          <Icon>
            <ReminderIcon />
          </Icon>
          <div>
            <h3>Timely Reminders</h3>
            <p>Never miss a service with automated notifications and reminders</p>
          </div>
        </FeatureCard>
      </FeatureSection>
    </Container>
    </>
  );
};

export default ServiceManagement;