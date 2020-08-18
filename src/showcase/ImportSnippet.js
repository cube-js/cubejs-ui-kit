import React from 'react';

export default function ImportSnippet({ name }) {
  return <nu-code
    dangerouslySetInnerHTML={{
      __html: `<textarea>
import { ${name} } from 'cubejs-uikit';</textarea>`,
    }}>
  </nu-code>
}
