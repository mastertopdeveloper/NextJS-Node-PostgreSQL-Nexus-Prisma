import { TemplateFlavor } from '@lumina/api'
import { ScriptQuery } from '../src/Script'

export const T7: ScriptQuery = {
  id: 666,
  flavor: TemplateFlavor.T7,
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
      id: '1913',
      type: 'audio',
      fieldType: 'audio',
      scriptVariable: 'Sound Track',
    },
    bgColor: {
      type: 'data',
      value: '#3f24b7',
      property: 'Effects.Fill.Color',
      fieldType: 'color',
      composition: '_control',
      description: 'Background color for slides.',
      scriptVariable: 'Main Background Color',
    },
    primaryTextColor: {
      type: 'data',
      value: '#f4ac04',
      property: 'Effects.Fill.Color',
      fieldType: 'color',
      composition: '_control',
      description: 'Used for titles and the main text on a slide.',
      scriptVariable: 'Text Color for Titles (should stand out less)',
    },
    secondaryTextColor: {
      type: 'data',
      value: '#ffffff',
      property: 'Effects.Fill.Color',
      composition: '_control',
      fieldType: 'color',
      description: 'Used for "Now Hiring", location, and attribution text.',
      scriptVariable: "We're Hiring, Location, & Attribution",
    },
    utilColor: {
      type: 'data',
      value: '#090a3f',
      property: 'Effects.Fill.Color',
      composition: '_control',
      fieldType: 'color',
      description: 'Used for highlight effect.',
      scriptVariable: 'Highlight color',
    },
    logo: {
      id: '1061',
      type: 'image',
      fieldType: 'image',
      scriptVariable: 'Logo',
    },
    highlighterImage: {
      id: '2078',
      type: 'image',
      fieldType: 'image',
      scriptVariable: 'Highlighter Image',
    },
    tagLine: {
      type: 'data',
      value: "We're Hiring",
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 17,
      scriptVariable: 'We’re Hiring!',
    },
    position: {
      type: 'data',
      value: 'Job Title Goes Here',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'textArea',
      lineLength: 18,
      maxLength: 36,
      scriptVariable: 'Position',
    },
    location: {
      type: 'data',
      value: 'Portland, OR',
      fieldType: 'text',
      property: 'Text.Source Text',
      composition: '_control',
      maxLength: 20,
      scriptVariable: 'Location',
    },
    backgroundImageOne: {
      id: '1545',
      fieldType: 'image',
      type: 'image',
      scriptVariable: '50% Left',
    },
    backgroundImageTwo: {
      id: '1539',
      fieldType: 'image',
      type: 'image',
      scriptVariable: '50% Right',
    },
    quoteOne: {
      type: 'data',
      value: '"A quote goes here that can be up to three lines long."',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'textArea',
      lineLength: 19,
      maxLength: 57,
      scriptVariable: 'Quote 1',
    },
    attributionOne: {
      type: 'data',
      value: '- Attribution One',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'text',
      maxLength: 30,
      scriptVariable: 'Attribution 1',
    },
    quoteTwo: {
      type: 'data',
      value: '"This is the second quote with the same length as the first."',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'textArea',
      lineLength: 19,
      maxLength: 57,
      scriptVariable: 'Quote 2',
    },
    attributionTwo: {
      type: 'data',
      value: '- Attribution Two',
      property: 'Text.Source Text',
      composition: '_control',
      fieldType: 'text',
      maxLength: 30,
      scriptVariable: 'Attribution 2',
    },
    icon: {
      type: 'image',
      fieldType: 'image',
      scriptVariable: 'Location Icon',
      id: '220',
    },
  },
}
