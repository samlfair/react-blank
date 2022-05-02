import React from 'react'
import { PrismicRichText } from '@prismicio/react'

export default function RichTextSlice({ slice }) {
  return <PrismicRichText field={slice.primary.rich_text_field} />
}
