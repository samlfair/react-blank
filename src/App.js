import './App.css'
import { useFirstPrismicDocument, SliceZone } from '@prismicio/react'
import RichTextSlice from './slices/RichTextSlice'

function App() {
  const [document] = useFirstPrismicDocument()

  return (
    <>
      {document && (
        <>
          <SliceZone
            slices={document.data.body}
            components={{
              rich_text_slice: RichTextSlice,
              richtext: RichTextSlice,
            }}
          />
        </>
      )}
    </>
  )
}

export default App
