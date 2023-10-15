import { useNavigation } from "@react-navigation/native";
import React from "react";
import * as Animatable from "react-native-animatable";
import Onboarding from "react-native-onboarding-swiper";
import {
  DoneButton,
  DotButtons,
  NextButton,
  SkipButton,
} from "../components/OnboardingButtons";

const OnboardingScreen = () => {
  return (
    <Onboarding
      DoneButtonComponent={DoneButton}
      SkipButtonComponent={SkipButton}
      NextButtonComponent={NextButton}
      DotComponent={DotButtons}
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Animatable.Image
              source={require("../../assets/onboardingTwo.png")}
              animation="zoomIn"
              iterationCount={1}
              className="h-80 w-80"
            />
          ),
          title: (
            <Animatable.Text
              animation="zoomIn"
              iterationCount={1}
              className="text-2xl text-gray-600 font-extrabold"
            >
              Online Parcel Booking
            </Animatable.Text>
          ),
          subtitle: (
            <Animatable.Text
              animation="zoomIn"
              iterationCount={1}
              className="text-center text-sm text-gray-500 mx-8 mt-3"
            >
              Booking Made Easy, Connecting You to the local vendors in
              Prayagraj
            </Animatable.Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: (
            <Animatable.Image
              source={require("../../assets/onboardingOne.png")}
              animation="zoomIn"
              iterationCount={1}
              className="h-80 w-80"
            />
          ),
          title: (
            <Animatable.Text
              animation="zoomIn"
              iterationCount={1}
              className="text-2xl text-gray-600 font-extrabold"
            >
              Your Parcel, Our Priority
            </Animatable.Text>
          ),
          subtitle: (
            <Animatable.Text
              animation="zoomIn"
              iterationCount={1}
              className="text-center text-sm text-gray-500 mx-8 mt-3"
            >
              Delivering Every Parcel with Trust and Reliabilty from your couch"
            </Animatable.Text>
          ),
        },
        {
          backgroundColor: "#fff",
          image: (
            <Animatable.Image
              source={require("../../assets/onboardingThree.png")}
              animation="zoomIn"
              iterationCount={1}
              className="h-80 w-80"
            />
          ),
          title: (
            <Animatable.Text
              animation="zoomIn"
              iterationCount={1}
              className="text-2xl text-gray-600 font-extrabold"
            >
              Perfect Shipments
            </Animatable.Text>
          ),
          subtitle: (
            <Animatable.Text
              animation="zoomIn"
              iterationCount={1}
              className="text-center text-sm text-gray-500 mx-8 mt-3"
            >
              Mastering Efficiency in Every Shipment, Where Precision Meets
              Excellence
            </Animatable.Text>
          ),
        },
      ]}
    />
  );
};

export default OnboardingScreen;
