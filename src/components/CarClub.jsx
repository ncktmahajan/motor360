import React from "react";
import CarIcon from '../assets/carclub.svg'; 
import BikeIcon from '../assets/bike.svg';
import EventsIcon from '../assets/connect.svg';
import ConnectIcon from '../assets/connect.svg';
import ShareIcon from '../assets/share.svg';
import ExploreIcon from '../assets/explore.svg';
import SupportIcon from '../assets/support.svg';
import {
  Container,
  Title,
  Subtitle,
  CardGrid,
  CardGrids,
  Card,
  CardDescription,
  Icon,
  CardTitle,
  CardContent,
  ListItem,
} from "../styles/CarClubStyles.jsx";

function CarClub() {
  return (
    <Container>
      <Title>Car Club Community: Uniting Automotive Enthusiasts</Title>
      <Subtitle>
        Join our passionate community of car enthusiasts where four-wheeled
        adventures come to life. Connect with fellow drivers, share your
        automotive experiences, and engage with enthusiasts who share your love
        for everything automotive.
      </Subtitle>
      <CardGrid>
        <Card>
          <Icon>
            <img src={CarIcon} />
          </Icon>
          <CardTitle>Car Clubs</CardTitle>
          <CardDescription>
          Connect with fellow car enthusiasts and share your passion for automobiles.
          </CardDescription>
          <CardContent>
          <ListItem>Brand-specific communities</ListItem>
            <ListItem>Car meet organization</ListItem>
            <ListItem>Modification discussions</ListItem>
          </CardContent>
        </Card>
        <Card>
          <Icon>
          <img src={BikeIcon} />
          </Icon>
          <CardTitle>Bike Clubs</CardTitle>
          <CardDescription>
          Join dedicated motorcycle clubs based on your bike model or riding style.
          </CardDescription>
          <CardContent>
            <ListItem>Model-specific groups</ListItem>
            <ListItem>Weekend ride planning</ListItem>
            <ListItem>Maintenance tips sharing</ListItem>
          </CardContent>
        </Card>
        <Card>
          <Icon>
          <img src={EventsIcon} />
          </Icon>
          <CardTitle>Events & Meetups</CardTitle>
          <CardDescription>
          Participate in exciting events and meetups with fellow enthusiasts.
          </CardDescription>
          <CardContent>
            <ListItem>Regular meetups</ListItem>
            <ListItem>Track day events</ListItem>
            <ListItem>Road trip planning</ListItem>
          </CardContent>
        </Card>
      </CardGrid>
      <CardGrids>
        <Card>
          <Icon>
          <img src={ConnectIcon} />
          </Icon>
          <CardTitle>Connect</CardTitle>
          <CardContent>
            <li>Meet fellow car enthusiasts and share experiences</li>
          </CardContent>
        </Card>
        <Card>
          <Icon>
          <img src={ShareIcon} />
          </Icon>
          <CardTitle>Share</CardTitle>
          <CardContent>
            <li>Exchange experiences, tips, and stories with the community</li>
          </CardContent>
        </Card>
        <Card>
          <Icon>
          <img src={ExploreIcon} />
          </Icon>
          <CardTitle>Explore</CardTitle>
          <CardContent>
            <li>Discover new routes and destinations with group rides</li>
          </CardContent>
        </Card>
        <Card>
          <Icon>
          <img src={SupportIcon} />
          </Icon>
          <CardTitle>Support</CardTitle>
          <CardContent>
            <li>Get help and advice from experienced community members</li>
          </CardContent>
        </Card>
      </CardGrids>
    </Container>
  );
}

export default CarClub;