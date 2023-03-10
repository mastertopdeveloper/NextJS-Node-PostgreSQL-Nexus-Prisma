import { TemplateFlavor } from '@lumina/api'
import { ScriptQuery } from '../src/Script'

export const T15: ScriptQuery = {
  id: 15,
  flavor: TemplateFlavor.T15,
  video: null,
  request: {
    customer: {
      id: 22,
    },
  },
  order: {
    id: 20,
  },
  layers: {
    soundTrack: {
      type: 'audio',
      fieldType: 'audio',
      scriptVariable: 'Soundtrack',
      id: '2771',
    },
    bgColor: {
      type: 'data',
      property: 'Effects.Fill.Color',
      composition: '_control',
      fieldType: 'color',
      description: 'Background color for slides.',
      scriptVariable: 'Background Color',
      value: '#3d445f',
    },
    primaryTextColor: {
      type: 'data',
      property: 'Effects.Fill.Color',
      composition: '_control',
      fieldType: 'color',
      description: 'Used for tag line and job position text.',
      scriptVariable: 'Job title and tag line',
      value: '#000000',
    },
    secondaryTextColor: {
      type: 'data',
      property: 'Effects.Fill.Color',
      composition: '_control',
      fieldType: 'color',
      description: 'Used for recruiter name, call to action, email, and phone.',
      scriptVariable: 'Name, Email, Phone, CTA',
      value: '#0e6178',
    },
    brandColor1: {
      type: 'data',
      property: 'Effects.Fill.Color',
      composition: '_control',
      fieldType: 'color',
      description: 'Main Bubbles',
      scriptVariable: 'Main bubbles',
      value: '#4223a8',
    },
    brandColor2: {
      type: 'data',
      property: 'Effects.Fill.Color',
      composition: '_control',
      fieldType: 'color',
      description: 'Secondary bubbles.',
      scriptVariable: 'Secondary bubbles',
      value: '#070a55',
    },
    logo: {
      type: 'image',
      fieldType: 'image',
      scriptVariable: 'Logo',
      id: '1062',
    },
    coverPhoto: {
      type: 'image',
      fieldType: 'image',
      scriptVariable: 'Logo',
      id: '1553',
    },
    tagLine: {
      type: 'data',
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 11,
      scriptVariable: 'We???re Hiring!',
      value: 'We???re Hiring!',
    },
    position: {
      type: 'data',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'text',
      maxLength: 24,
      scriptVariable: 'Position',
      value: 'Rat trainer and care keeper',
    },
    location: {
      type: 'data',
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 26,
      scriptVariable: 'Location',
      value: 'Portland OR',
    },
    titleTwo: {
      type: 'data',
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 16,
      scriptVariable: 'Title Two',
      value: 'Benefits ',
    },
    lineOne: {
      type: 'data',
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 70,
      scriptVariable: 'Line one',
      value: 'Eat food whenever you want to ',
    },
    lineTwo: {
      type: 'data',
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 70,
      scriptVariable: 'Line Two',
      value: 'We will give everyone a million dollars a week for 2 years ',
    },
    lineThree: {
      type: 'data',
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 70,
      scriptVariable: 'Line three',
      value:
        'Bring your Rat to work, we want all rats all the time. Predators to rats please do not bring in. THings will get messy ',
    },
  },
}
