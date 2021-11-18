import React from 'react';

/* Templates */
import templateBlockquote from './blockquote/blockquote.twig';
import templateCaption from './caption/caption.twig';
import templateDek from './dek/dek.twig';
import templateDropcap from './dropcap/dropcap.twig';
import templateEyebrow from './eyebrow/eyebrow.twig';
import templateHeading from './heading/heading.twig';
import templateIntro from './intro/intro.twig';
import templateKicker from './kicker/kicker.twig';
import templateMeta from './meta/meta.twig';
import templateRichText from './rich-text/rich-text.twig';
import templateSmall from './small/small.twig';

/* Data */
import dataBlockquote from './blockquote/blockquote.json';
import dataCaption from './caption/caption.json';
import dataDek from './dek/dek.json';
import dataDekLarge from './dek/dek-large.json';
import dataDropcap from './dropcap/dropcap.json';
import dataEyebrow from './eyebrow/eyebrow.json';
import dataHeading from './heading/heading.json';
import dataIntro from './intro/intro.json';
import dataKicker from './kicker/kicker.json';
import dataMeta from './meta/meta.json';
import dataMetaWithImage from './meta/meta-with-image.json';
import dataRichText from './rich-text/rich-text.json';
import dataSmall from './small/small.json';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Text' };
export const Blockquote = () => (
  <div dangerouslySetInnerHTML={{ __html: templateBlockquote(dataBlockquote) }} />
);
export const Caption = () => (
  <div dangerouslySetInnerHTML={{ __html: templateCaption(dataCaption) }} />
);
export const Dek = () => (
  <div dangerouslySetInnerHTML={{ __html: templateDek(dataDek) }} />
);
export const DekLarge = () => (
  <div dangerouslySetInnerHTML={{ __html: templateDek(dataDekLarge) }} />
);
export const Dropcap = () => (
  <div dangerouslySetInnerHTML={{ __html: templateDropcap(dataDropcap) }} />
);
export const Eyebrow = () => (
  <div dangerouslySetInnerHTML={{ __html: templateEyebrow(dataEyebrow) }} />
);
export const Heading = () => (
  <div dangerouslySetInnerHTML={{ __html: templateHeading(dataHeading) }} />
);
export const Intro = () => (
  <div dangerouslySetInnerHTML={{ __html: templateIntro(dataIntro) }} />
);
export const Kicker = () => (
  <div dangerouslySetInnerHTML={{ __html: templateKicker(dataKicker) }} />
);
export const Meta = () => (
  <div dangerouslySetInnerHTML={{ __html: templateMeta(dataMeta) }} />
);
export const MetaWithImage = () => (
  <div dangerouslySetInnerHTML={{ __html: templateMeta(dataMetaWithImage) }} />
);
export const RichText = () => (
  <div dangerouslySetInnerHTML={{ __html: templateRichText(dataRichText) }} />
);
export const Small = () => (
  <div dangerouslySetInnerHTML={{ __html: templateSmall(dataSmall) }} />
);
